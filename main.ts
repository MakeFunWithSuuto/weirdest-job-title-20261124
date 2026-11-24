// Weirdest Job Title entry: writes one job title, the same bytes on every run.
// The twist: every Bigfoot photo is blurry because someone is paid to blur them.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Official Bigfoot Photo Blurrer";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE);
