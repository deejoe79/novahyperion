# Services page imagery

Free stock photos from the web (Unsplash — https://unsplash.com/license, no API key),
downloaded by `scripts/gen-images.mjs`. Drop your own JPG/PNG with the same names to replace.

| File | Used as | Source |
|------|---------|--------|
| `studio.jpg` | Full-bleed duotone showcase band | Unsplash photo `1522071820081-009f0129c71c` (team collaborating) |
| `build.jpg` | Framed inset in the "How we build" section | Unsplash photo `1517694712202-14dd9538aa97` (laptop with code) |

If a file is missing, the page falls back to an on-brand gradient, so the layout never breaks.

Re-download (or change the photos) with:

```bash
node scripts/gen-images.mjs
```
