import type { CSSProperties } from "react";
import { Lines } from "@/components/typography/Lines";
import { Band } from "../primitives/Band";
import { Geo } from "../primitives/Geo";
import { SectionLabel } from "../primitives/SectionLabel";
import { methodology } from "@/data/methodology";
import "./method.css";

const pad = (n: number) => String(n).padStart(2, "0");
const N = methodology.length;

/**
 * The operating framework as one architectural line.
 * Desktop: the stage pins while scroll draws a stepped path through every stage; copy moves with --f (0..N-1).
 * Tablet / mobile / reduced motion: a vertical rail with the same stages, revealed in place. No scroll hijacking there.
 * Server-rendered; HomeMotion only writes --f and data-a. Without JS every stage is readable in the list layout.
 */
export function Methodology() {
  return (
    <Band tone="flow" id="methodology" labelledBy="method-title" className="hx-method" bare style={{ "--n": N, "--f": 0 } as CSSProperties} backdrop={<Geo cx={1500} cy={250} r={640} from={180} to={203} />}>
      <div className="hx-m-track">
        <div className="hx-m-pin">
          <div className="hx-m-grid" aria-hidden="true" />
          <div className="hx-wrap hx-m-frame">
            <header className="hx-m-head">
              <SectionLabel index="06" meta={<>{pad(N)} stages</>}>How we work</SectionLabel>
              <Lines id="method-title" className="hx-h2 hx-m-title" lines={["Six stages.", "One continuous line."]} />
            </header>

            <ol className="hx-m-stages">
              {methodology.map((s, i) => (
                <li key={s.title} className="hx-m-panel" data-stage={i} style={{ "--i": i } as CSSProperties} data-reveal="sys">
                  <p className="hx-label hx-m-panel__meta"><span>{pad(i + 1)}</span><i>/</i><span>{pad(N)}</span></p>
                  <h3 className="hx-m-panel__t"><span>{s.title}</span></h3>
                  <p className="hx-m-panel__b">{s.body}</p>
                </li>
              ))}
            </ol>

            <div className="hx-m-path" aria-hidden="true">
              {methodology.map((s, i) => (
                <div key={s.title} className="hx-m-step" data-stage={i} style={{ "--k": i } as CSSProperties}>
                  <span className="hx-m-step__h"><i /></span>
                  {i < N - 1 && <span className="hx-m-step__v"><i /></span>}
                  <span className="hx-m-step__node" />
                  <span className="hx-label hx-m-step__name"><b>{pad(i + 1)}</b>{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Band>
  );
}
