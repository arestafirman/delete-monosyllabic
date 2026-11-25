// delete-monosyllabic
// Entry for "The Word You'd Delete From the Dictionary"
// (make.fun, slug u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
//
// The word: monosyllabic — "having one syllable".
// The joke: the word itself has FIVE syllables (mo-no-syl-la-bic).
// A word that means "one syllable" but takes five syllables to say
// is a walking contradiction — deleting it makes the dictionary
// slightly more honest.
//
// Deterministic, no network, no dependencies, no randomness:
// writes the single word (no trailing newline) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "monosyllabic";

if (!/^[A-Za-z]{1,30}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
