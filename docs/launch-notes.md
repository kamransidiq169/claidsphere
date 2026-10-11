# Launch notes — items that need the client

## Required before launch
1. **Contact delivery** — set `CONTACT_WEBHOOK_URL`. Until then the form shows an honest "not connected" message (HTTP 503 from `/api/contact`).
2. **Legal pages** — Privacy Policy and Terms & Conditions are NOT built. claids.com links to them but their text was not available, and legal copy must not be invented. Provide the text, then add `/privacy` and `/terms` routes and footer links. The contact form's consent line should link to the Privacy Policy once it exists.
3. **Production domain** — set `NEXT_PUBLIC_SITE_URL` (defaults to `https://www.claids.com`).

## Facts the client must confirm (source site contradicts itself)
| Topic | Conflict | Current handling |
|---|---|---|
| Office address | Contact page: Qureshi Estate, Maidanpora, Karan Nagar, Srinagar 190010. Site metadata: 005 Veracity House, Rajbagh, Srinagar 190008 | Both shown on /contact ("Office", "Additional address"); footer uses the first; JSON-LD uses the second. Pick one and delete the other. |
| Founding year | Metadata: 2024. Page copy: "Since 2025" | Site says 2025 only; JSON-LD omits `foundingDate`. |
| Google rating | 4.6 stars vs "5-star average" | Trust strip shows 4.6 only. |
| Open positions | 2, 3 and 4 jobs quoted | Four roles listed as on the career page; no count displayed. |
| Role departments | e.g. "General office manager — Software development", "Machine learning specialist — Design" look mismatched | Reproduced as published. |
| Zaid Beigh | Appears as team member (Data Scientist) and as a "testimonial" | Shown as testimonial with his Claidsphere role. |

## Content gaps (design handles them without invention)
- Case studies have one line each — no challenge/solution/results. Provide copy and imagery to extend `src/data/work` and add `/work/[slug]`.
- Team: no portraits or bios (only one photo existed on the old site). Add to `src/data/team`.
- Methodology stage descriptions are derived from existing claims; stage names come from the design brief. Confirm with the client.
- Client logos, Microsoft partner tier/credentials: none exist on the source site; none shown.
- Blog / Insights, pricing, success stories: "coming soon" on the source; no routes created.

## Removed on purpose
"0+ employees", "0+ awards" (placeholder values), "10+ happy clients" (unverified).
