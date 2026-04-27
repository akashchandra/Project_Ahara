export const brand = {
  name: "Ahara",
  label: "Modern Indian kitchen",
  tagline: "Modern Indian favorites, made fast and fresh.",
  heroCopy:
    "From crisp dosas and layered biryani to warm chai and custom bowls, Ahara brings Indian comfort food into a clean, easy ordering experience.",
  location: "Food truck locations and pickup details coming soon.",
  hours: "Sample hours: Mon-Sun · 11 AM - 10 PM"
} as const;

export type DishVisual = "dosa" | "biryani" | "chai" | "bowl";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  tag?: string;
  badge?: string;
  category: string;
  href?: string;
  visual: DishVisual;
  accent: "saffron" | "moss" | "clay";
};

export const signatureFavorites: Dish[] = [
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    description:
      "A shatter-crisp rice-lentil crepe folded around turmeric potatoes, coconut chutney, and warm sambar.",
    price: 13.5,
    tag: "Best Seller",
    badge: "Vegetarian",
    category: "Signature",
    href: "/menu",
    visual: "dosa",
    accent: "saffron"
  },
  {
    id: "royal-chicken-biryani",
    name: "Royal Chicken Biryani",
    description:
      "Fragrant basmati layered with saffron, mint, caramelized onions, and chicken finished low and slow.",
    price: 16.75,
    tag: "Signature",
    badge: "Slow-cooked",
    category: "Signature",
    href: "/menu",
    visual: "biryani",
    accent: "clay"
  },
  {
    id: "cardamom-house-chai",
    name: "Cardamom House Chai",
    description:
      "Assam tea steeped with ginger, cardamom, and a silky finish that lingers in the best way.",
    price: 4.75,
    tag: "Customer Favorite",
    badge: "Daily Brewed",
    category: "Drinks",
    href: "/menu",
    visual: "chai",
    accent: "moss"
  }
];

export const cravingCards: Dish[] = [
  {
    ...signatureFavorites[0],
    tag: "Crispy & Light",
    description: "Paper-crisp edges, soft spiced potatoes, cooling chutney, and sambar for dipping."
  },
  {
    ...signatureFavorites[1],
    tag: "Rich & Filling",
    description: "Layered basmati, slow aromatics, tender chicken, and a cooling spoon of raita."
  },
  {
    ...signatureFavorites[2],
    tag: "Warm & Comforting",
    description: "Steeped tea, ginger, cardamom, and a cozy finish for the ride home."
  },
  {
    id: "custom-bowl-preview",
    name: "Market Paneer Bowl",
    description:
      "Choose your base, protein, and crisp vegetables for a fresh bowl built around your craving.",
    price: 15.25,
    tag: "Fresh & Custom",
    badge: "Customizable",
    category: "Bowls",
    href: "/build-your-bowl",
    visual: "bowl",
    accent: "moss"
  }
];

export const menuSections = [
  {
    id: "signature-plates",
    title: "Signature Plates",
    description: "The dishes people come back for first.",
    items: [
      {
        id: "masala-dosa",
        name: "Masala Dosa",
        description:
          "Golden, crackling dosa wrapped around cumin potatoes with coconut chutney and sambar.",
        price: 13.5,
        tags: ["Vegetarian", "Signature"],
        category: "Signature Plates",
        visual: "dosa",
        accent: "saffron"
      },
      {
        id: "ghee-roast-dosa",
        name: "Ghee Roast Dosa",
        description:
          "Crisp dosa brushed with fragrant ghee, finished with chili podi and roasted tomato chutney.",
        price: 14.5,
        tags: ["House Favorite", "Bold"],
        category: "Signature Plates",
        visual: "dosa",
        accent: "saffron"
      },
      {
        id: "royal-chicken-biryani",
        name: "Royal Chicken Biryani",
        description:
          "Saffron basmati, chicken, mint, crisp onions, and spiced yogurt on the side.",
        price: 16.75,
        tags: ["Slow-cooked", "Bestseller"],
        category: "Signature Plates",
        visual: "biryani",
        accent: "clay"
      },
      {
        id: "lamb-biryani",
        name: "Lamb Biryani",
        description:
          "Deeply aromatic rice layered with tender lamb, browned onions, and cooling raita.",
        price: 18.5,
        tags: ["Rich", "Weekend Pick"],
        category: "Signature Plates",
        visual: "biryani",
        accent: "clay"
      }
    ]
  },
  {
    id: "bowls-and-favorites",
    title: "Bowls and Favorites",
    description: "Quick, balanced meals with the same depth of flavor.",
    items: [
      {
        id: "market-paneer-bowl",
        name: "Market Paneer Bowl",
        description:
          "Brown rice, paneer, cucumber, onion, herb chutney, and charred corn with citrus yogurt.",
        price: 15.25,
        tags: ["Customizable", "Vegetarian"],
        category: "Bowls and Favorites",
        visual: "bowl",
        accent: "moss"
      },
      {
        id: "tandoori-chicken-bowl",
        name: "Tandoori Chicken Bowl",
        description:
          "Basmati rice, roasted chicken, onions, cucumber, corn, and cooling mint yogurt.",
        price: 16,
        tags: ["Protein-forward", "Fresh"],
        category: "Bowls and Favorites",
        visual: "bowl",
        accent: "moss"
      }
    ]
  },
  {
    id: "chai-and-sips",
    title: "Chai and Sips",
    description: "A warm finish or an easy reset in the middle of the day.",
    items: [
      {
        id: "cardamom-house-chai",
        name: "Cardamom House Chai",
        description: "Assam tea simmered with ginger, green cardamom, and milk.",
        price: 4.75,
        tags: ["Daily Brewed", "Comfort"],
        category: "Chai and Sips",
        visual: "chai",
        accent: "moss"
      },
      {
        id: "saffron-iced-chai",
        name: "Saffron Iced Chai",
        description: "Cold chai with saffron, rose, and a clean creamy finish.",
        price: 5.5,
        tags: ["Seasonal", "Refreshing"],
        category: "Chai and Sips",
        visual: "chai",
        accent: "saffron"
      },
      {
        id: "mint-lime-soda",
        name: "Mint Lime Soda",
        description: "Fresh lime, sparkling water, mint, and a savory pinch of black salt.",
        price: 4.5,
        tags: ["Zero Proof", "Bright"],
        category: "Chai and Sips",
        visual: "chai",
        accent: "moss"
      }
    ]
  }
] as const;

export type BowlOption = {
  id: string;
  name: string;
  description: string;
  price: number;
  tone: "saffron" | "moss" | "clay";
};

export const bowlBases: BowlOption[] = [
  {
    id: "rice",
    name: "Rice",
    description: "Fluffy basmati rice with a clean, fragrant finish.",
    price: 9.5,
    tone: "saffron"
  },
  {
    id: "brown-rice",
    name: "Brown Rice",
    description: "Nutty whole-grain rice for a heartier bowl.",
    price: 10.25,
    tone: "moss"
  }
];

export const bowlProteins: BowlOption[] = [
  {
    id: "chicken",
    name: "Chicken",
    description: "Roasted chicken finished with tandoori spices and lemon.",
    price: 4.25,
    tone: "clay"
  },
  {
    id: "paneer",
    name: "Paneer",
    description: "Seared paneer cubes with a gentle char and warm spice.",
    price: 3.75,
    tone: "saffron"
  },
  {
    id: "lamb",
    name: "Lamb",
    description: "Slow-braised lamb with deeper aromatics and rich finish.",
    price: 5.5,
    tone: "moss"
  }
];

export const bowlVeggies: BowlOption[] = [
  {
    id: "corn",
    name: "Corn",
    description: "Sweet charred kernels for a little pop.",
    price: 0.75,
    tone: "saffron"
  },
  {
    id: "cucumber",
    name: "Cucumber",
    description: "Cool crunch to keep the bowl bright.",
    price: 0.75,
    tone: "moss"
  },
  {
    id: "onions",
    name: "Onions",
    description: "Pickled red onions for lift and contrast.",
    price: 0.75,
    tone: "clay"
  }
];

export const bowlSteps = ["Choose Base", "Choose Protein", "Choose Veggies", "Review"] as const;
