import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const repoDir = dirname(fileURLToPath(import.meta.url));
// Finisher pass: keep the message exactly one line so the joke stays punchy at 4AM.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const text = "refactor: renamed the variables until the bug got confused and left; it has not written back";
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log("wrote entry.txt (" + text.length + " chars) to " + outDir);
