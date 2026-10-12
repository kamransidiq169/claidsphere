"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { contact } from "@/data/company";
import { contactTopics } from "@/data/contact";
import { validateContact, type ContactErrors, type ContactInput } from "@/lib/utils/contact-validation";

type Status = "idle" | "loading" | "success" | "error";

const read = (form: HTMLFormElement): ContactInput => {
  const fd = new FormData(form);
  const s = (k: string) => String(fd.get(k) ?? "");
  return { name: s("name"), email: s("email"), phone: s("phone"), subject: s("subject"), message: s("message"), consent: fd.get("consent") === "on" };
};

/** Where focus lands for a field error: the first radio for the topic group. */
const focusTarget = (k: keyof ContactErrors) => (k === "subject" ? document.querySelector<HTMLElement>('input[name="subject"]') : document.getElementById(`c-${k}`));

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [attempted, setAttempted] = useState(false);
  const mountedAt = useRef(0);
  const busy = useRef(false);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => { mountedAt.current = Date.now(); }, []);
  useEffect(() => { if (status === "success") doneRef.current?.focus(); }, [status]);

  /** Re-check one field once the visitor has left it (or after a failed submit), so feedback is immediate but never premature. */
  function recheck(form: HTMLFormElement, k: keyof ContactErrors) {
    const next = validateContact(read(form))[k];
    setErrors((prev) => {
      if (prev[k] === next) return prev;
      const copy = { ...prev };
      if (next) copy[k] = next; else delete copy[k];
      return copy;
    });
  }
  const onBlur = (k: keyof ContactErrors) => (e: React.FocusEvent<HTMLElement>) => {
    const form = e.currentTarget.closest("form");
    const touched = (e.currentTarget as HTMLInputElement).value !== "";
    if (form && (touched || attempted || errors[k])) recheck(form, k);
  };
  const onChange = (k: keyof ContactErrors) => (e: React.ChangeEvent<HTMLElement>) => {
    const form = e.currentTarget.closest("form");
    if (form && (attempted || errors[k])) recheck(form, k);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return;
    const form = e.currentTarget;
    const input = read(form);
    const errs = validateContact(input);
    setAttempted(true);
    setErrors(errs);
    const first = (Object.keys(errs) as (keyof ContactErrors)[])[0];
    if (first) {
      setStatus("error");
      setMessage(`Please check ${Object.keys(errs).length === 1 ? "the highlighted field" : "the highlighted fields"} and send again.`);
      requestAnimationFrame(() => focusTarget(first)?.focus());
      return;
    }
    busy.current = true;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, website: String(new FormData(form).get("website") ?? ""), elapsed: Date.now() - mountedAt.current }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fieldErrors?: ContactErrors };
      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      if (data.fieldErrors) setErrors(data.fieldErrors);
      setStatus("error");
      setMessage(data.error ?? `Something went wrong. Please email ${contact.email} directly.`);
    } catch {
      setStatus("error");
      setMessage(`We couldn’t reach the server. Please email ${contact.email} directly.`);
    } finally {
      busy.current = false;
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div className="ct-done" role="status">
        <p className="ct-label">Message received</p>
        <h3 className="ct-done__title" ref={doneRef} tabIndex={-1}>Thank you.</h3>
        <p className="ct-done__text">Your enquiry has been received. We’ll be in touch using the details you provided.</p>
        <Link className="ct-link" href="/">Back to Claidsphere <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /></Link>
      </div>
    );
  }

  const err = (k: keyof ContactErrors) => errors[k];
  const text = (k: "name" | "email" | "phone", label: string, hint: string, props: React.InputHTMLAttributes<HTMLInputElement>, required = true) => (
    <div className="ct-field">
      <label htmlFor={`c-${k}`}>{label}{required ? <span className="ct-req"> Required</span> : <span className="ct-opt"> Optional</span>}</label>
      <div className="ct-input">
        <input id={`c-${k}`} name={k} required={required} aria-required={required} aria-invalid={!!err(k)} aria-describedby={`c-${k}-h${err(k) ? ` c-${k}-e` : ""}`} onBlur={onBlur(k)} onChange={onChange(k)} {...props} />
      </div>
      <p className="ct-hint" id={`c-${k}-h`}>{hint}</p>
      {err(k) && <p className="ct-err" id={`c-${k}-e`}>{err(k)}</p>}
    </div>
  );

  const loading = status === "loading";
  return (
    <form className="ct-form" onSubmit={onSubmit} noValidate>
      <div className="ct-step" role="group" aria-labelledby="ct-s1">
        <p className="ct-step__h" id="ct-s1"><span className="ct-label">01</span> Your details</p>
        <div className="ct-step__body">
          {text("name", "Name", "The name you’d like us to use.", { type: "text", autoComplete: "name" })}
        </div>
      </div>

      <div className="ct-step" role="radiogroup" aria-labelledby="ct-s2" aria-required="true" aria-describedby={err("subject") ? "c-subject-e" : undefined}>
        <p className="ct-step__h" id="ct-s2"><span className="ct-label">02</span> What can we help with?</p>
        <div className="ct-step__body">
          <div className="ct-topics" data-invalid={err("subject") ? "" : undefined}>
            {contactTopics.map((t, i) => (
              <label className="ct-topic" key={t.value}>
                <input type="radio" name="subject" id={i === 0 ? "c-subject" : undefined} value={t.value} required onChange={onChange("subject")} />
                <span className="ct-topic__mark" aria-hidden="true" />
                <span className="ct-topic__t">{t.value}</span>
                <span className="ct-topic__h">{t.hint}</span>
              </label>
            ))}
          </div>
          {err("subject") && <p className="ct-err" id="c-subject-e">{err("subject")}</p>}
        </div>
      </div>

      <div className="ct-step" role="group" aria-labelledby="ct-s3">
        <p className="ct-step__h" id="ct-s3"><span className="ct-label">03</span> Tell us more</p>
        <div className="ct-step__body">
          <div className="ct-field">
            <label htmlFor="c-message">Message<span className="ct-req"> Required</span></label>
            <div className="ct-input">
              <textarea id="c-message" name="message" rows={5} required aria-required="true" aria-invalid={!!err("message")} aria-describedby={`c-message-h${err("message") ? " c-message-e" : ""}`} onBlur={onBlur("message")} onChange={onChange("message")} />
            </div>
            <p className="ct-hint" id="c-message-h">What are you trying to achieve, and what’s getting in the way?</p>
            {err("message") && <p className="ct-err" id="c-message-e">{err("message")}</p>}
          </div>
        </div>
      </div>

      <div className="ct-step" role="group" aria-labelledby="ct-s4">
        <p className="ct-step__h" id="ct-s4"><span className="ct-label">04</span> How should we reach you?</p>
        <div className="ct-step__body ct-step__body--2">
          {text("email", "Email address", "We’ll reply here.", { type: "email", autoComplete: "email", inputMode: "email" })}
          {text("phone", "Phone number", "Only if you’d prefer a call.", { type: "tel", autoComplete: "tel", inputMode: "tel" }, false)}
        </div>
      </div>

      {/* Honeypot: hidden from people and assistive tech */}
      <div className="hp" aria-hidden="true"><label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>

      <div className="ct-foot">
        <div className="ct-consent">
          <label>
            <input id="c-consent" type="checkbox" name="consent" required aria-required="true" aria-invalid={!!err("consent")} aria-describedby={err("consent") ? "c-consent-e" : undefined} onChange={onChange("consent")} />
            <span>I agree that my details are stored so Claidsphere can respond to my enquiry.</span>
          </label>
          {err("consent") && <p className="ct-err" id="c-consent-e">{err("consent")}</p>}
        </div>
        <div className="ct-send-row">
          <button type="submit" className="ct-send" aria-disabled={loading} data-loading={loading || undefined}>
            <span>{loading ? "Sending…" : "Send enquiry"}</span>
            {loading ? <span className="ct-spin" aria-hidden="true" /> : <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />}
          </button>
          <p className={`ct-status ${status === "error" ? "is-on" : ""}`} ref={statusRef} tabIndex={-1} role="alert">{status === "error" ? message : ""}</p>
        </div>
      </div>
    </form>
  );
}
