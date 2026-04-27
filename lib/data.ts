export const brand = {
  name: "Ahara",
  label: "Modern Indian kitchen",
  tagline: "Crisp dosa, layered biryani, and bowls built around you.",
  heroCopy:
    "Ahara brings bright Indian flavors into a calm, design-led ordering experience. Start with signature favorites or build a bowl that lands exactly the way you like it.",
  location: "24 Mercer Street, New York, NY",
  hours: "Mon-Sun · 11 AM - 10 PM"
} as const;

export type Dish = {
  name: string;
  description: string;
  price: number;
  tag?: string;
  badge?: string;
  href?: string;
  accent: "saffron" | "moss" | "clay";
};

export const signatureFavorites: Dish[] = [
  {
    name: "Masala Dosa",
    description:
      "A shatter-crisp rice-lentil crepe folded around turmeric potatoes with coconut chutney and warm sambar.",
    price: 13.5,
    tag: "Best Seller",
    badge: "Vegetarian",
    href: "/menu",
    accent: "saffron"
  },
  {
    name: "Royal Chicken Biryani",
    description:
      "Fragrant basmati layered with saffron, mint, caramelized onions, and chicken finished low and slow.",
    price: 16.75,
    tag: "Signature",
    badge: "Slow-cooked",
    href: "/menu",
    accent: "clay"
  },
  {
    name: "Cardamom House Chai",
    description:
      "Assam tea steeped with ginger, cardamom, and a silky finish that lingers in the best way.",
    price: 4.75,
    tag: "Customer Favorite",
    badge: "Daily Brewed",
    href: "/menu",
    accent: "moss"
  }
];

export const popularItems: Dish[] = [
  signatureFavorites[0],
  signatureFavorites[1],
  signatureFavorites[2],
  {
    name: "Market Paneer Bowl",
    description:
      "Brown rice, charred paneer, cucumber, onion, herb chutney, and citrus yogurt in one balanced bowl.",
    price: 15.25,
    tag: "Build Preview",
    badge: "Customizable",
    href: "/build-your-bowl",
    accent: "moss"
  }
];

export const trustPoints = [
  {
    title: "Made to order",
    description: "Every dosa is fired fresh, every bowl is assembled as you choose."
  },
  {
    title: "Layered flavors",
    description: "Slow aromatics, bright chutneys, and precise seasoning in every category."
  },
  {
    title: "Fast-casual pace",
    description: "Designed for lunch runs, dinner pickup, and repeatable favorites."
  },
  {
    title: "Comfort, refined",
    description: "Warm, approachable Indian food with a modern, polished point of view."
  }
] as const;

export const menuSections = [
  {
    id: "signature-plates",
    title: "Signature Plates",
    description: "The dishes people come back for first.",
    items: [
      {
        name: "Masala Dosa",
        description:
          "Golden, crackling dosa wrapped around cumin potatoes with coconut chutney and sambar.",
        price: 13.5,
        tags: ["Vegetarian", "Signature"]
      },
      {
        name: "Ghee Roast Dosa",
        description:
          "Crisp dosa brushed with fragrant ghee, finished with chili podi and roasted tomato chutney.",
        price: 14.5,
        tags: ["House Favorite", "Bold"]
      },
      {
        name: "Royal Chicken Biryani",
        description:
          "Saffron basmati, chicken, mint, crisp onions, and spiced yogurt on the side.",
        price: 16.75,
        tags: ["Slow-cooked", "Bestseller"]
      },
      {
        name: "Lamb Biryani",
        description:
          "Deeply aromatic rice layered with tender lamb, browned onions, and cooling raita.",
        price: 18.5,
        tags: ["Rich", "Weekend Pick"]
      }
    ]
  },
  {
    id: "bowls-and-favorites",
    title: "Bowls and Favorites",
    description: "Quick, balanced meals with the same depth of flavor.",
    items: [
      {
        name: "Market Paneer Bowl",
        description:
          "Brown rice, paneer, cucumber, onion, herb chutney, and charred corn with citrus yogurt.",
        price: 15.25,
        tags: ["Customizable", "Vegetarian"]
      },
      {
        name: "Tandoori Chicken Bowl",
        description:
          "Basmati rice, roasted chicken, onions, cucumber, corn, and cooling mint yogurt.",
        price: 16,
        tags: ["Protein-forward", "Fresh"]
      }
    ]
  },
  {
    id: "chai-and-sips",
    title: "Chai and Sips",
    description: "A warm finish or an easy reset in the middle of the day.",
    items: [
      {
        name: "Cardamom House Chai",
        description: "Assam tea simmered with ginger, green cardamom, and milk.",
        price: 4.75,
        tags: ["Daily Brewed", "Comfort"]
      },
      {
        name: "Saffron Iced Chai",
        description: "Cold chai with saffron, rose, and a clean creamy finish.",
        price: 5.5,
        tags: ["Seasonal", "Refreshing"]
      },
      {
        name: "Mint Lime Soda",
        description: "Fresh lime, sparkling water, mint, and a savory pinch of black salt.",
        price: 4.5,
        tags: ["Zero Proof", "Bright"]
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
