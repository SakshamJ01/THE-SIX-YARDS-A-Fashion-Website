# The Six Yards Image Inventory

## Current local assets

| Asset | Current role | Reuse | Decision |
| --- | --- | ---: | --- |
| `collection-everyday.jpg` | Everyday saree product / collection support | 1 | Keep temporarily; dedicated product asset needed |
| `collection-heritage.jpg` | Heritage product, store demo, hero detail fragment | 3 | Keep for heritage story only; replace store use |
| `collection-mens.jpg` | Men's collection, all men's products, Delhi demo store | 5+ | Keep collection use; dedicated men's product/store assets needed |
| `collection-sarees.jpg` | Women's collection, product, collection hero | 3 | Keep women's collection use; dedicated product asset needed |
| `collection-wedding.jpg` | Wedding collection, product, Mumbai demo store | 4 | Keep wedding use; dedicated product/store assets needed |
| `six-yards-campaign.jpg` | Hero media, campaign, signature product, stores hero | 4 | Keep campaign use; dedicated hero and signature assets needed |

## Media

- `videos/reel-01.mp4`, `reel-02.mp4`, and `reel-03.mp4` are distinct existing reel assets.

## Planned architecture

```text
images/
  hero/
  campaign/
  story/
  reels/
  collections/
  products/
    women/
    men/
    special/
  stores/
```

The directories are prepared for dedicated assets. Existing root-level files remain in place during this phase so current routes and data do not break.

## Missing production assets

- Dedicated horizontal hero campaign image with desktop/mobile crops.
- Dedicated campaign image distinct from the hero.
- Three unique women's product images.
- Three unique men's product images.
- Three unique special-collection product images.
- Dedicated Jaipur, Delhi, and Mumbai store photography.
- Optional story craft-detail image.

No external image URLs are used for site imagery.
