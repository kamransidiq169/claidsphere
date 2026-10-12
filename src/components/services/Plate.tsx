/** Drawn plates for services without photographic art: hairline blueprints in the Pillars wireframe vocabulary. Decorative. */
const motifs: Record<string, React.ReactNode> = {
  "data-analytics": (
    <>
      <path d="M50 250H350M50 250V50" />
      <path d="M50 200H350M50 150H350M50 100H350" className="sv-plate__faint" />
      <rect x="82" y="170" width="28" height="80" /><rect x="132" y="130" width="28" height="120" /><rect x="182" y="150" width="28" height="100" />
      <rect x="232" y="90" width="28" height="160" className="sv-plate__hot" /><rect x="282" y="110" width="28" height="140" />
      <path d="M96 150L146 108L196 130L246 70L296 92" className="sv-plate__line" />
      <circle cx="246" cy="70" r="3.5" className="sv-plate__node" />
    </>
  ),
  "web-design-development": (
    <>
      <rect x="45" y="45" width="310" height="210" />
      <path d="M45 78H355M70 61.5h.01M86 61.5h.01M102 61.5h.01" />
      <path d="M75 108H215V190H75Z" className="sv-plate__hot" />
      <path d="M240 108H325M240 130H325M240 152H300M75 214H325" className="sv-plate__faint" />
      <path d="M75 108L215 190M215 108L75 190" className="sv-plate__faint" />
    </>
  ),
  "mobile-app-development": (
    <>
      <rect x="95" y="40" width="96" height="220" rx="10" />
      <rect x="215" y="70" width="96" height="190" rx="10" className="sv-plate__faint" />
      <path d="M95 74H191M95 226H191M127 52h32" />
      <path d="M111 96H175V150H111Z" className="sv-plate__hot" />
      <path d="M111 168H175M111 184H159M111 200H167" className="sv-plate__faint" />
      <path d="M215 100H311M215 232H311" className="sv-plate__faint" />
    </>
  ),
  "quality-assurance": (
    <>
      <path d="M60 70H340M60 120H340M60 170H340M60 220H340" className="sv-plate__faint" />
      <path d="M68 70l8 8 14-16M68 120l8 8 14-16M68 170l8 8 14-16" className="sv-plate__line" />
      <rect x="68" y="208" width="22" height="22" className="sv-plate__hot" />
      <path d="M120 70H250M120 120H300M120 170H220M120 220H280" />
      <circle cx="322" cy="70" r="3.5" className="sv-plate__node" /><circle cx="322" cy="120" r="3.5" className="sv-plate__node" /><circle cx="322" cy="170" r="3.5" className="sv-plate__node" />
    </>
  ),
  "maintenance-support": (
    <>
      <circle cx="200" cy="150" r="104" /><circle cx="200" cy="150" r="72" className="sv-plate__faint" /><circle cx="200" cy="150" r="38" className="sv-plate__faint" />
      <path d="M200 46A104 104 0 0 1 304 150" className="sv-plate__line" />
      <circle cx="304" cy="150" r="3.5" className="sv-plate__node" />
      <path d="M60 150H96M304 150H340M200 20V46M200 254V280" className="sv-plate__faint" />
    </>
  ),
  "consulting": (
    <>
      <path d="M70 150H170C210 150 210 80 250 80H330M170 150C210 150 210 220 250 220H330M170 150H330" />
      <circle cx="70" cy="150" r="9" className="sv-plate__hot" />
      <circle cx="330" cy="80" r="5" className="sv-plate__node" /><circle cx="330" cy="150" r="5" className="sv-plate__node" /><circle cx="330" cy="220" r="5" className="sv-plate__node" />
      <path d="M70 50V250" className="sv-plate__faint" />
    </>
  ),
  "digital-marketing": (
    <>
      <path d="M50 60L350 120M50 100L350 130M50 140L350 140M50 180L350 150M50 220L350 160" className="sv-plate__faint" />
      <path d="M50 100L350 130" className="sv-plate__line" />
      <path d="M350 112V168" />
      <circle cx="350" cy="140" r="4" className="sv-plate__node" />
      <path d="M50 40V250" className="sv-plate__faint" />
    </>
  ),
  "brand-strategy-identity": (
    <>
      <circle cx="200" cy="150" r="82" /><circle cx="200" cy="150" r="41" className="sv-plate__hot" />
      <rect x="118" y="68" width="164" height="164" className="sv-plate__faint" />
      <path d="M200 40V260M90 150H310M118 68L282 232M282 68L118 232" className="sv-plate__faint" />
    </>
  ),
};

export function Plate({ slug }: { slug: string }) {
  return (
    <svg className="sv-plate" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true" focusable="false">
      {motifs[slug]}
    </svg>
  );
}
