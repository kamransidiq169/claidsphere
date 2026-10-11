"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/buttons/Button";
import { contact } from "@/data/company";
import { validateContact, type ContactErrors, type ContactInput } from "@/lib/utils/contact-validation";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const mountedAt = useRef(0);
  useEffect(() => { mountedAt.current = Date.now(); }, []);
  const statusRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const input: ContactInput = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };
    const errs = validateContact(input);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      requestAnimationFrame(() => document.getElementById(`c-${first}`)?.focus());
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, website: String(fd.get("website") ?? ""), elapsed: Date.now() - mountedAt.current }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fieldErrors?: ContactErrors };
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage("Thank you. Your message has been sent and we'll respond as soon as we can.");
        (e.target as HTMLFormElement).reset();
      } else {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setStatus("error");
        setMessage(data.error ?? `Something went wrong. Please email ${contact.email} directly.`);
      }
    } catch {
      setStatus("error");
      setMessage(`We couldn't reach the server. Please email ${contact.email} directly.`);
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const err = (k: keyof ContactErrors) => errors[k];
  const field = (k: keyof ContactErrors, label: string, props: React.InputHTMLAttributes<HTMLInputElement>, required = true) => (
    <div className="field">
      <label htmlFor={`c-${k}`}>{label}{required ? " *" : ""}</label>
      <input id={`c-${k}`} name={k} required={required} aria-required={required} aria-invalid={!!err(k)} aria-describedby={err(k) ? `c-${k}-e` : undefined} {...props} />
      {err(k) && <p className="field__err" id={`c-${k}-e`}>{err(k)}</p>}
    </div>
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-describedby="form-status">
      <div className="form__row form__row--2">
        {field("name", "Your name", { type: "text", autoComplete: "name" })}
        {field("email", "Email address", { type: "email", autoComplete: "email", inputMode: "email" })}
      </div>
      <div className="form__row form__row--2">
        {field("phone", "Phone number", { type: "tel", autoComplete: "tel", inputMode: "tel" }, false)}
        {field("subject", "Subject", { type: "text" })}
      </div>
      <div className="field">
        <label htmlFor="c-message">Message *</label>
        <textarea id="c-message" name="message" required aria-required="true" aria-invalid={!!err("message")} aria-describedby={err("message") ? "c-message-e" : undefined} />
        {err("message") && <p className="field__err" id="c-message-e">{err("message")}</p>}
      </div>
      {/* Honeypot: hidden from people and assistive tech */}
      <div className="hp" aria-hidden="true"><label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div>
        <label className="consent">
          <input id="c-consent" type="checkbox" name="consent" aria-invalid={!!err("consent")} aria-describedby={err("consent") ? "c-consent-e" : undefined} />
          <span>I agree that my data is collected and stored so Claidsphere can respond to my enquiry.</span>
        </label>
        {err("consent") && <p className="field__err" id="c-consent-e">{err("consent")}</p>}
      </div>
      <div id="form-status" ref={statusRef} tabIndex={-1} role={status === "error" ? "alert" : "status"} aria-live="polite">
        {(status === "success" || status === "error") && (
          <p className={`form__status ${status === "success" ? "form__status--ok" : ""}`}>{message}</p>
        )}
      </div>
      <div>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? <><span className="spinner" aria-hidden="true" /> Sending…</> : "Send message"}
        </Button>
      </div>
    </form>
  );
}
