import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Claidsphere Solutions — home">
      <span className="logo__mark" aria-hidden="true" />
      <span className="logo__word">CLAIDSPHERE</span>
    </Link>
  );
}
