// Generates the Claidsphere art-directed image set into public/images.
// Original, procedural artwork (no stock, no hotlinks). Run: node scripts/generate-images.mjs
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require(resolve(dirname(fileURLToPath(import.meta.url)), "../node_modules/.pnpm/sharp@0.35.5_@types+node@20.19.43/node_modules/sharp"));
const out = resolve(dirname(fileURLToPath(import.meta.url)), "../public/images");
mkdirSync(out, { recursive: true });

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
const f2 = (n) => n.toFixed(1);

/** One-point-perspective data hall. Racks line both walls; light strips run overhead. */
function hall({ w, h, vx, vy, seed, aisle = 1.7, f = 1500, height = 2.3, floor = 1.25, ledDensity = 1 }) {
  const r = rng(seed);
  const P = (X, Y, Z) => [vx + (X / Z) * f, vy + (Y / Z) * f];
  const parts = [];
  const rackDepth = 0.62;
  for (const side of [-1, 1]) {
    for (let z = 1.15, i = 0; z < 46; z += rackDepth, i++) {
      const z1 = z + rackDepth - 0.04;
      const X = side * aisle;
      const [xa, ya] = P(X, -height, z), [xb, yb] = P(X, -height, z1);
      const [xc, yc] = P(X, floor, z1), [xd, yd] = P(X, floor, z);
      const shade = 0.07 + 0.09 * r() + Math.max(0, 0.16 - z * 0.005);
      parts.push(`<polygon points="${f2(xa)},${f2(ya)} ${f2(xb)},${f2(yb)} ${f2(xc)},${f2(yc)} ${f2(xd)},${f2(yd)}" fill="rgb(${14 + shade * 90 | 0},${20 + shade * 110 | 0},${34 + shade * 150 | 0})" stroke="rgba(120,160,255,${Math.max(0.03, 0.2 - z * 0.006).toFixed(3)})" stroke-width="${Math.max(0.5, 2.2 - z * 0.05).toFixed(2)}"/>`);
      // rack shelf rules
      for (let k = 1; k < 9; k++) {
        const Y = -height + (k * (height + floor)) / 9;
        const [x1, y1] = P(X, Y, z), [x2, y2] = P(X, Y, z1);
        parts.push(`<line x1="${f2(x1)}" y1="${f2(y1)}" x2="${f2(x2)}" y2="${f2(y2)}" stroke="rgba(150,185,255,${Math.max(0.02, 0.1 - z * 0.003).toFixed(3)})" stroke-width="${Math.max(0.4, 1.2 - z * 0.03).toFixed(2)}"/>`);
      }
      // status LEDs
      const n = Math.round((26 + r() * 30) * ledDensity);
      for (let k = 0; k < n; k++) {
        const zz = z + 0.06 + r() * (rackDepth - 0.16);
        const Y = -height + 0.15 + r() * (height + floor - 0.3);
        const [x, y] = P(X, Y, zz);
        const rr = Math.max(0.8, 6.5 / zz ** 0.85);
        const hot = r() < 0.2;
        const col = hot ? "#4AA8FF" : r() < 0.5 ? "#0078D4" : "#8B9CFF";
        const o = (hot ? 0.95 : 0.55) * Math.min(1, 1.2 / Math.sqrt(zz));
        parts.push(`<circle cx="${f2(x)}" cy="${f2(y)}" r="${rr.toFixed(2)}" fill="${col}" opacity="${o.toFixed(2)}"/>`);
        if (hot && zz < 22) parts.push(`<circle cx="${f2(x)}" cy="${f2(y)}" r="${(rr * 4.5).toFixed(2)}" fill="${col}" opacity="0.14"/>`);
      }
    }
  }
  // floor guide lines + ceiling light strips
  for (const X of [-0.9, -0.3, 0.3, 0.9]) {
    const [a, b] = P(X, floor, 1.05), [c, d] = P(X, floor, 60);
    parts.push(`<line x1="${f2(a)}" y1="${f2(b)}" x2="${f2(c)}" y2="${f2(d)}" stroke="rgba(120,170,255,0.10)" stroke-width="1.2"/>`);
  }
  for (const X of [-0.55, 0.55]) {
    const [a, b] = P(X, -height - 0.05, 1.05), [c, d] = P(X, -height - 0.05, 60);
    parts.push(`<line x1="${f2(a)}" y1="${f2(b)}" x2="${f2(c)}" y2="${f2(d)}" stroke="#bcd7ff" stroke-width="7" opacity="0.5" stroke-linecap="round"/>`);
    parts.push(`<line x1="${f2(a)}" y1="${f2(b)}" x2="${f2(c)}" y2="${f2(d)}" stroke="#4AA8FF" stroke-width="34" opacity="0.10" stroke-linecap="round"/>`);
  }
  for (let z = 2; z < 50; z += 3.2) {
    const [x1, y1] = P(-0.55, -height - 0.05, z), [x2, y2] = P(0.55, -height - 0.05, z);
    parts.push(`<line x1="${f2(x1)}" y1="${f2(y1)}" x2="${f2(x2)}" y2="${f2(y2)}" stroke="rgba(180,210,255,0.14)" stroke-width="${Math.max(0.5, 4 / z).toFixed(2)}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <radialGradient id="g" cx="${vx}" cy="${vy}" r="${w * 0.7}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1b3f86"/><stop offset=".35" stop-color="#0c1830"/><stop offset="1" stop-color="#05070b"/></radialGradient>
    <radialGradient id="core" cx="${vx}" cy="${vy}" r="${w * 0.12}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9cc8ff" stop-opacity=".85"/><stop offset=".4" stop-color="#2f78d6" stop-opacity=".25"/><stop offset="1" stop-color="#0078D4" stop-opacity="0"/></radialGradient>
    <linearGradient id="floor" x1="0" y1="${vy}" x2="0" y2="${h}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4AA8FF" stop-opacity=".10"/><stop offset="1" stop-color="#05070b" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect y="${vy}" width="${w}" height="${h - vy}" fill="url(#floor)"/>
  ${parts.join("\n")}
  <rect width="${w}" height="${h}" fill="url(#core)"/>
</svg>`;
}

/** Contour field: fine ridge-lines displaced by layered sines. Reads as computation / signal. */
function contour({ w, h, seed, lines = 70, amp = 90, hue = "#4AA8FF", cx = 0.7 }) {
  const r = rng(seed);
  const waves = Array.from({ length: 4 }, () => ({ k: 0.0015 + r() * 0.004, p: r() * 6.28, a: 0.3 + r() * 0.7, s: 0.4 + r() }));
  const paths = [];
  for (let i = 0; i < lines; i++) {
    const t = i / (lines - 1);
    const y0 = h * (0.12 + t * 0.8);
    let d = "";
    for (let x = 0; x <= w; x += 10) {
      const env = Math.exp(-(((x / w) - cx) ** 2) / 0.07);
      let dy = 0;
      for (const wv of waves) dy += Math.sin(x * wv.k + wv.p + t * 3.2 * wv.s) * wv.a;
      d += `${x === 0 ? "M" : "L"}${x},${f2(y0 + dy * amp * (0.25 + env))} `;
    }
    const o = 0.12 + 0.5 * Math.sin(t * Math.PI) ** 1.5;
    paths.push(`<path d="${d}" fill="none" stroke="${i % 9 === 0 ? "#bcd7ff" : hue}" stroke-opacity="${o.toFixed(2)}" stroke-width="${i % 9 === 0 ? 1.6 : 1}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs><radialGradient id="g" cx="${w * cx}" cy="${h * 0.5}" r="${w * 0.75}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#16346e"/><stop offset=".5" stop-color="#0b1426"/><stop offset="1" stop-color="#05070b"/></radialGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>${paths.join("")}</svg>`;
}

/** Strata: stacked horizon planes receding into haze. Reads as cloud regions / layers. */
function strata({ w, h, seed }) {
  const r = rng(seed);
  const parts = [];
  const n = 16;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const y = h * (0.40 + t * 0.52);
    let d = `M0,${h} L0,${f2(y)} `;
    const ph = r() * 6, k = 0.0008 + r() * 0.0018, a = 10 + t * 70;
    for (let x = 0; x <= w; x += 12) d += `L${x},${f2(y + Math.sin(x * k + ph) * a + Math.sin(x * k * 3.1 + ph * 2) * a * 0.25)} `;
    d += `L${w},${h} Z`;
    const lum = 14 + t * 20;
    parts.push(`<path d="${d}" fill="rgb(${lum * 0.7 | 0},${lum * 1.3 | 0},${lum * 2.6 + 14 | 0})" stroke="rgba(160,200,255,${(0.14 + t * 0.4).toFixed(2)})" stroke-width="${(0.7 + t * 1.4).toFixed(2)}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05070b"/><stop offset=".55" stop-color="#173a7a"/><stop offset=".72" stop-color="#4AA8FF" stop-opacity=".9"/><stop offset="1" stop-color="#0b1426"/></linearGradient>
    <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4AA8FF" stop-opacity="0"/><stop offset=".5" stop-color="#8cb8ff" stop-opacity=".22"/><stop offset="1" stop-color="#4AA8FF" stop-opacity="0"/></linearGradient>
    <radialGradient id="sun" cx="${w * 0.72}" cy="${h * 0.3}" r="${w * 0.35}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cfe3ff" stop-opacity=".7"/><stop offset=".3" stop-color="#4AA8FF" stop-opacity=".22"/><stop offset="1" stop-color="#4AA8FF" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#sky)"/><rect width="${w}" height="${h}" fill="url(#sun)"/>${parts.join("")}<rect y="${h * 0.3}" width="${w}" height="${h * 0.3}" fill="url(#haze)"/></svg>`;
}

const grainTile = async (w, h, amount) => {
  const buf = Buffer.alloc(w * h * 4);
  const r = rng(7);
  for (let i = 0; i < w * h; i++) {
    const v = 128 + ((r() - 0.5) * 255 * amount) | 0;
    buf[i * 4] = buf[i * 4 + 1] = buf[i * 4 + 2] = v;
    buf[i * 4 + 3] = 255;
  }
  return sharp(buf, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
};

async function render(name, svg, { w, h, blur = 0.6, grain = 0.22 }) {
  let img = sharp(Buffer.from(svg)).resize(w, h).blur(blur);
  const g = await grainTile(w, h, grain);
  img = img.composite([{ input: g, blend: "soft-light", opacity: 0.55 }]).modulate({ saturation: 0.92 });
  await img.webp({ quality: 80, effort: 5 }).toFile(`${out}/${name}.webp`);
  console.log("wrote", name);
}

const jobs = [
  ["hero-infrastructure", hall({ w: 2400, h: 1500, vx: 1560, vy: 700, seed: 11, aisle: 1.6 }), { w: 2400, h: 1500 }],
  ["intro-hall", hall({ w: 2400, h: 1200, vx: 760, vy: 560, seed: 29, aisle: 2.1, f: 1250, ledDensity: 1.2 }), { w: 2400, h: 1200 }],
  ["pillar-cloud", strata({ w: 1800, h: 1350, seed: 5 }), { w: 1800, h: 1350 }],
  ["pillar-ai", contour({ w: 1800, h: 1350, seed: 21, lines: 64, amp: 120 }), { w: 1800, h: 1350 }],
  ["why-hall", hall({ w: 2200, h: 1500, vx: 1100, vy: 640, seed: 61, aisle: 1.4, f: 1700, height: 2.6 }), { w: 2200, h: 1500, blur: 1.2 }],
  ["cta-contour", contour({ w: 2400, h: 1300, seed: 77, lines: 80, amp: 150, cx: 0.55 }), { w: 2400, h: 1300 }],
];
for (const [name, svg, opt] of jobs) await render(name, svg, opt);
writeFileSync(`${out}/.generated`, "see scripts/generate-images.mjs\n");
