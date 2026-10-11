export type ContactInput = { name: string; email: string; phone: string; subject: string; message: string; consent: boolean };
export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s-]{7,20}$/;

/** Shared by the client form and the API route so rules never drift. */
export function validateContact(v: ContactInput): ContactErrors {
  const e: ContactErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !PHONE.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.subject.trim().length < 2) e.subject = "Please add a subject.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little more (at least 10 characters).";
  if (v.message.length > 5000) e.message = "Message is too long (5000 characters max).";
  if (!v.consent) e.consent = "Please agree so we can store your details and reply.";
  return e;
}
