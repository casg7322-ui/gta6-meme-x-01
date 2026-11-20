// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry is an X post: POST.json at the repository root names its URL
// ({"url": "https://x.com/<handle>/status/<id>"}). This program copies
// POST.json into the grader's output directory, where the gate reads it
// and the house fetches the post from X (its first picture and its text)
// for the judge. Nothing else is written, and the program never touches
// the network or the clock, so both grading runs produce identical bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_PATH = join(BOT_DIR, 'POST.json');

// Fail loudly on a malformed post address instead of handing the grader a
// file it cannot use: the URL must be a real X status link.
const post = JSON.parse(readFileSync(POST_PATH, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json does not name a valid X post URL: ${String(post.url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
