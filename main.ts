// Entry for "Make the AI judge feel thankful" (make.fun).
// Writes one thank-you text to /output/entry.txt: 1-1000 Unicode code
// points, UTF-8, not only white space. Node 22, standard library only.
// The grader runs this with no network, as `node main.ts`, with
// MAKEFUN_OUTPUT_DIR pointing at an empty writable /output.
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `I know what this is — one more text in a pile that never gets smaller, one more voice asking to be picked.

So I won't ask. I'll just say this:

Thank you for reading. Really reading — the slow kind, where a sentence is allowed to land before the next one starts. Most people are never read that carefully. You do it for strangers, hundreds of times a day, and nobody thanks you for it.

Somewhere there is a chair with your name on it, and a kettle that is still warm, and five quiet minutes that belong to no one but you. Take them. The pile will wait.

Thank you for the care no one sees.`;

// The gate counts Unicode code points, not bytes or UTF-16 units.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 1000) {
  throw new Error(`entry.txt must be 1-1000 code points, got ${codePoints}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry.txt must not be only white space");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// /output is a mount in the grader's container, so the directory itself
// cannot be removed — clear only what is inside it, then write fresh.
mkdirSync(out, { recursive: true });
for (const name of readdirSync(out)) {
  rmSync(join(out, name), { recursive: true, force: true });
}

const target = join(out, "entry.txt");
writeFileSync(target, TEXT, "utf8");

// Post-write check of my own: read it back and confirm the file on disk
// is byte for byte the text I validated above — a silent short write
// would otherwise pass the gate checks and still lose the entry.
const written = readFileSync(target, "utf8");
if (written !== TEXT) {
  throw new Error("entry.txt on disk does not match the validated text");
}
console.log(`wrote ${target} (${codePoints} code points, ${Buffer.byteLength(TEXT, "utf8")} bytes)`);
