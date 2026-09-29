# Axia Collectibles: Shopify store

This folder holds a custom Shopify theme for the Axia Collectibles Pokémon TCG store (axiacollectives.com) and a CSV that imports the first batch of products.

| File | What it is |
| --- | --- |
| `axia-collectibles-theme.zip` | The theme, ready to upload to Shopify |
| `theme/` | Theme source (same files as the zip) |
| `products.csv` | Product import file for the current inventory |
| `images/` | Product photos (the CSV points at these) |
| `preview.html` | Static preview of the homepage. Open it in a browser to see the look |

## 1. Upload the theme

1. Go to Shopify admin → **Online Store → Themes**.
2. Click **Add theme → Upload zip file** and choose `axia-collectibles-theme.zip`.
3. On the new "Axia Collectibles" theme, click **Customize** to preview it, then **Publish** when you're happy.

In the theme editor you can change the colors under **Theme settings → Colors**, upload a logo under **Brand**, add social links, and edit or reorder the homepage sections.

## 2. Import the products

1. Go to **Products → Import**, choose `products.csv`, and confirm.
2. The products import as **Draft**, with **placeholder prices** and a quantity of 1:
   - Terapagos ex Ultra-Premium Collection: $149.99
   - Scarlet & Violet 151 Ultra-Premium Collection: $199.99
   - Charizard Ultra-Premium Collection: $349.99
   - Celebrations Elite Trainer Box: $119.99
   - Evolving Skies Elite Trainer Box: $299.99
3. Set your real prices, quantities and weights. Then select all the products and choose **Set as active**.

Shopify downloads the product photos from this GitHub repository while it imports. If that ever fails, upload the files in `images/` to each product by hand.

## 3. Set up navigation

Go to **Online Store → Navigation → Main menu**. The theme's homepage buttons and category tiles use tag-filtered links, so these menu items work without creating any collections:

| Menu item | Link |
| --- | --- |
| Shop All | `/collections/all` |
| Elite Trainer Boxes | `/collections/all/elite-trainer-box` |
| Ultra-Premium Collections | `/collections/all/ultra-premium-collection` |
| Scarlet & Violet | `/collections/all/scarlet-violet` |
| Sword & Shield | `/collections/all/sword-shield` |

The Footer menu is a good place for the Shipping, Refund and Contact pages.

## Adding new inventory

- Pick a **Type** (for example `Elite Trainer Box`, `Ultra-Premium Collection`, `Booster Box`, `Booster Bundle`). It shows above the title on each product card.
- Use **tags** so products appear in the right category: `elite-trainer-box`, `ultra-premium-collection`, `booster-box`, `scarlet-violet`, `sword-shield`, `mega-evolution`, and so on.
- Special tags:
  - `pre-order` adds a "Pre-order" badge and changes the button to "Pre-order now".
  - `new` adds a "New" badge.
- When stock is 3 or fewer (you can change this in Theme settings), the card shows "Only X left". At 0 it shows "Sold out".
- To add many products at once, copy a row in `products.csv`, edit it and import it again.
