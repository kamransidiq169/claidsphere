import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/utils/contact-validation";

/**
 * Delivery is intentionally pluggable: set CONTACT_WEBHOOK_URL to a service that
 * accepts a JSON POST (Formspree, Resend relay, Power Automate, etc).
 * Until it is set, the route responds 503 — it never pretends a message was sent.
 */
export async function POST(req: Request) {
  let body: Partial<ContactInput> & { website?: string; elapsed?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Spam: honeypot filled, or submitted implausibly fast. Silent success for bots.
  if (body.website || (typeof body.elapsed === "number" && body.elapsed < 1500)) {
    return NextResponse.json({ ok: true });
  }

  const input: ContactInput = {
    name: String(body.name ?? ""), email: String(body.email ?? ""), phone: String(body.phone ?? ""),
    subject: String(body.subject ?? ""), message: String(body.message ?? ""), consent: body.consent === true,
  };
  const fieldErrors = validateContact(input);
  if (Object.keys(fieldErrors).length) {
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", fieldErrors }, { status: 422 });
  }

  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (!hook) {
    return NextResponse.json(
      { ok: false, error: "Our contact form isn't connected yet. Please email info@claids.com or call +91 8899819161." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...input, source: "claidsphere-website", receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "We couldn't deliver your message. Please email info@claids.com." }, { status: 502 });
  }
}
