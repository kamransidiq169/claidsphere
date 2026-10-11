import type { Ref } from "react";

type Props = {
  open: boolean;
  onToggle: () => void;
  ref?: Ref<HTMLButtonElement>;
};

/** Text label + two hairlines that resolve into a cross. Name comes from the visible label. */
export function MenuToggle({ open, onToggle, ref }: Props) {
  return (
    <button ref={ref} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={onToggle}>
      <span className="menu-toggle__label label">
        <span aria-hidden={open}>Menu</span>
        <span aria-hidden={!open}>Close</span>
      </span>
      <span className="menu-toggle__icon" aria-hidden="true" />
    </button>
  );
}
