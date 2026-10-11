import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
  src: string | StaticImageData;
  alt: string;
  /** Intrinsic size of the source file; the frame's aspect ratio is set by CSS. */
  width: number;
  height: number;
  sizes: string;
  /** Preload (LCP image). Everything else lazy-loads. */
  preload?: boolean;
  /** Slow scroll-linked drift handled by HomeMotion. */
  parallax?: boolean;
  /** Mask-reveal when scrolled into view. */
  reveal?: boolean;
  className?: string;
  /** Overlay content (technical labels). */
  children?: ReactNode;
  position?: string;
};

/** Art-directed frame: deep-blue grade, grain, 1px border. Hover scale lives on the parent via .hx-hover. */
export function EditorialImage({ src, alt, width, height, sizes, preload, parallax, reveal = true, className, children, position }: Props) {
  return (
    <figure className={cn("hx-img", className)} {...(reveal ? { "data-reveal": "clip" } : {})}>
      <div className="hx-img__plane" {...(parallax ? { "data-parallax": "" } : {})}>
        <Image className="hx-img__el" src={src} alt={alt} width={width} height={height} sizes={sizes} quality={75} preload={preload} loading={preload ? undefined : "lazy"} style={position ? { objectPosition: position } : undefined} />
      </div>
      <span className="hx-img__grade" aria-hidden="true" />
      {children}
    </figure>
  );
}
