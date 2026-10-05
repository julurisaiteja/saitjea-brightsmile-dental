import type { Product } from "./types";
export type { Product } from "./types";
export const COUPON = "SMILE10";
export const COUPON_OFF = 10;
export const BRAND = "BrightSmile Dental";
export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}
export const products: Product[] = [
  {
    "id": "bs-1",
    "name": "Mint Glow Paste",
    "price": 14,
    "image": "https://images.unsplash.com/photo-1607613006830-ca82e068293b?w=800",
    "tag": "Paste",
    "category": "Daily",
    "specs": [
      "Fluoride",
      "Low abrasion"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Twin pack",
        "priceDelta": 6
      }
    ],
    "faq": [
      {
        "q": "Kids?",
        "a": "Use kids rinse instead."
      }
    ],
    "rating": 4.8,
    "reviewCount": 1203
  },
  {
    "id": "bs-2",
    "name": "Soft Bristle Cloud",
    "price": 9,
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b51?w=800",
    "tag": "Brush",
    "category": "Daily",
    "specs": [
      "Rounded tips",
      "Recyclable handle"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "4-pack",
        "priceDelta": 10
      }
    ],
    "faq": [
      {
        "q": "Electric?",
        "a": "See electric pulse brush."
      }
    ],
    "rating": 4.7,
    "reviewCount": 892
  },
  {
    "id": "bs-3",
    "name": "Floss Ribbon Roll",
    "price": 7,
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddceeee3?w=800",
    "tag": "Floss",
    "category": "Daily",
    "specs": [
      "Waxed",
      "Mint light"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "3 rolls",
        "priceDelta": 8
      }
    ],
    "faq": [
      {
        "q": "Braces?",
        "a": "Use threader tip."
      }
    ],
    "rating": 4.6,
    "reviewCount": 654
  },
  {
    "id": "bs-4",
    "name": "Whitening Gentle Strips",
    "price": 39,
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800",
    "tag": "White",
    "category": "Cosmetic",
    "specs": [
      "14-day kit",
      "Enamel safe"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Sensitive",
        "priceDelta": 5
      }
    ],
    "faq": [
      {
        "q": "Crowns?",
        "a": "Whitens natural enamel only."
      }
    ],
    "rating": 4.5,
    "reviewCount": 421
  },
  {
    "id": "bs-5",
    "name": "Kids Bubble Rinse",
    "price": 11,
    "image": "https://images.unsplash.com/photo-1609840114035-3c981b7822a2?w=800",
    "tag": "Kids",
    "category": "Kids",
    "specs": [
      "Alcohol free",
      "Fun cap"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Family bundle",
        "priceDelta": 9
      }
    ],
    "faq": [
      {
        "q": "Age?",
        "a": "6+ with supervision."
      }
    ],
    "rating": 4.9,
    "reviewCount": 312
  },
  {
    "id": "bs-6",
    "name": "Night Guard Comfort",
    "price": 89,
    "image": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800",
    "tag": "Guard",
    "category": "Protect",
    "specs": [
      "Custom fit kit",
      "BPA free"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Dual layer",
        "priceDelta": 40
      }
    ],
    "faq": [
      {
        "q": "Grinding?",
        "a": "Designed for mild bruxism."
      }
    ],
    "rating": 4.8,
    "reviewCount": 178
  },
  {
    "id": "bs-7",
    "name": "Travel Smile Kit",
    "price": 22,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ff?w=800",
    "tag": "Travel",
    "category": "Travel",
    "specs": [
      "TSA size",
      "Case included"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Family",
        "priceDelta": 18
      }
    ],
    "faq": [
      {
        "q": "Refills?",
        "a": "Subscribe in account."
      }
    ],
    "rating": 4.7,
    "reviewCount": 256
  },
  {
    "id": "bs-8",
    "name": "Electric Pulse Brush",
    "price": 79,
    "image": "https://images.unsplash.com/photo-1598256989320-8c428a834392?w=800",
    "tag": "Electric",
    "category": "Daily",
    "specs": [
      "2 modes",
      "USB-C"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Kids head",
        "priceDelta": 12
      }
    ],
    "faq": [
      {
        "q": "Warranty?",
        "a": "1-year demo warranty."
      }
    ],
    "rating": 4.9,
    "reviewCount": 567
  },
  {
    "id": "bs-9",
    "name": "Sensitivity Relief Gel",
    "price": 16,
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800",
    "tag": "Relief",
    "category": "Care",
    "specs": [
      "Potassium nitrate",
      "Fast calm"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Professional size",
        "priceDelta": 22
      }
    ],
    "faq": [
      {
        "q": "How often?",
        "a": "Twice daily max."
      }
    ],
    "rating": 4.6,
    "reviewCount": 389
  },
  {
    "id": "bs-10",
    "name": "Clear Aligner Care Box",
    "price": 29,
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddceeee3?w=800",
    "tag": "Aligner",
    "category": "Orthodontic",
    "specs": [
      "UV case",
      "Tablet cleaner"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Tablet refill",
        "priceDelta": 8
      }
    ],
    "faq": [
      {
        "q": "Invisalign?",
        "a": "Compatible with most trays."
      }
    ],
    "rating": 4.8,
    "reviewCount": 144
  }
];
export const categories = Array.from(new Set(products.map((p) => p.category)));
