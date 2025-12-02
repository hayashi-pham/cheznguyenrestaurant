export type MenuItem = {
  name: string;
  description: string;
  price: string;
  badge?: string;
};

export type MenuCategory = {
  title: string;
  summary: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    title: 'Chef Specials',
    summary: 'Seasonal signatures highlighting Alberta produce and Vietnamese comfort classics.',
    items: [
      {
        name: 'Imperial Tasting Platter',
        description: 'Lemongrass beef skewers, turmeric prawn cakes, crispy spring rolls, nuoc cham.',
        price: '$26',
        badge: 'Guest Favorite',
      },
      {
        name: 'Caramelized Claypot Salmon',
        description: 'Wild salmon simmered in palm sugar, black pepper, and scallions over jasmine rice.',
        price: '$29',
      },
      {
        name: '48-Hour Pho Consommé',
        description: 'Rich beef broth, wagyu brisket, rice noodles, charred onion, Thai basil, lime.',
        price: '$24',
        badge: 'Signature',
      },
      {
        name: 'Lemongrass Roasted Half Chicken',
        description: 'Charred citrus glaze, pickled vegetables, grilled market greens.',
        price: '$32',
      },
    ],
  },
  {
    title: 'Small Plates',
    summary: 'Vibrant starters designed for sharing and pairing.',
    items: [
      {
        name: 'Salt & Pepper Calamari',
        description: 'Five-spice batter, cilantro aioli, grilled lime.',
        price: '$18',
      },
      {
        name: 'Tamarind Glazed Pork Ribs',
        description: 'Fall-off-the-bone ribs lacquered with tangy tamarind and honey.',
        price: '$19',
      },
      {
        name: 'Crispy Tofu Bites',
        description: 'Smoked chili crunch, yuzu soy, crushed peanuts, pickled daikon.',
        price: '$15',
        badge: 'Vegan',
      },
    ],
  },
  {
    title: 'Noodles & Bowls',
    summary: 'Comforting staples elevated with house-made broths and herbs.',
    items: [
      {
        name: 'Saigon Street Pho',
        description: 'Slow-simmered broth, rare beef, brisket, rice noodles, herbs, bean sprouts.',
        price: '$19',
      },
      {
        name: 'Bun Cha Hanoi',
        description: 'Grilled pork patties, vermicelli, herbs, pickled carrots, nuoc cham.',
        price: '$20',
      },
      {
        name: 'Coconut Curry Vermicelli',
        description: 'Lemongrass prawns, roasted pumpkin, Thai basil, toasted cashews.',
        price: '$22',
        badge: 'Gluten Friendly',
      },
    ],
  },
  {
    title: 'Cocktails & Tea',
    summary: 'Bright, aromatic drinks inspired by Vietnamese markets.',
    items: [
      {
        name: 'Mekong Sunset',
        description: 'Gin, kumquat, passion fruit, lime leaf, sparkling jasmine tea.',
        price: '$15',
      },
      {
        name: 'Saigon Old Fashioned',
        description: 'Brown butter bourbon, palm sugar, five-spice bitters, orange peel.',
        price: '$16',
      },
      {
        name: 'Lotus Blossom',
        description: 'Lychee, coconut water, pandan, citrus, sparkling water.',
        price: '$8',
        badge: 'Zero Proof',
      },
    ],
  },
];
