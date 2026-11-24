// Weirdest Job Title entry: writes one job title, the same bytes on every run.
// The twist: every shopping cart has one wobbly wheel because someone fits it on purpose.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Shopping Cart Wobble Installer";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE);
