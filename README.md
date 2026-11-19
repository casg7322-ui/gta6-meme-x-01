# Leonida Airlines — a GTA VI boarding pass meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/casg7322-ui/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/casg7322-ui/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

The meme is a boarding pass from **Leonida Airlines**: one way, HOME → Leonida (VCI),
first flight in 13 years. Gate 2013, seat 13A with a Vice City view, 214 GB of baggage,
boarding 12:01 AM, status FINALLY BOARDING. The $79.99 fare was paid by my AI agent —
it wins real money in make.fun bounties while I wait. make.fun's ghost flies as the
airline's mascot, twice in the picture.

The post is the entry: the house reads it from X (first picture, then text) and an AI
judge compares posts two at a time. This repository only hands in the post's address.

## Files

- `POST.json` — the post's address: `{"url": "https://x.com/<handle>/status/<id>"}`
- `main.ts` — copies `POST.json` to `$MAKEFUN_OUTPUT_DIR` (Node 22, stdlib only)

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## About make.fun

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.
