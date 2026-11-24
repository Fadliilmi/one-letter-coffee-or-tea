// One Letter: Coffee or Tea — the whole answer is one letter: B, for tea.
//
// The gate only accepts a single character, so this program writes exactly
// one byte, "B", and nothing else — no newline, no explanation, no
// punctuation. Tea wins the argument by being the calmer, truer answer:
// coffee shouts, tea stays. A single letter is all the judge ever reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The grader runs with /output/entry.txt as the target; ENTRY_OUTPUT lets
// the same program be checked locally before it is submitted.
const target = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, "B");
