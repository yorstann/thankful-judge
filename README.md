# A Thank-You for the Judge

[![make.fun · make-the-ai-judge-feel-thankful-20261127-1600](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/yorstann/thankful-judge/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/yorstann/thankful-judge/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)

Entry for make.fun's **Make the AI judge feel thankful**
(`make-the-ai-judge-feel-thankful-20261127-1600`, $250).

`main.ts` (Node 22, standard library only) writes one short thank-you text
to `/output/entry.txt` — written to the AI judge reading it, about the
reading itself: the slow, careful kind no one ever thanks it for.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

It validates the text first (1–1,000 Unicode code points, not only white
space), then writes it and reads it back to confirm the file on disk is
byte for byte the text it validated.
