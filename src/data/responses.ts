import { SkateShopResponse } from '@/types';

export const skateShopResponses: SkateShopResponse[] = [
  {
    id: '1',
    keywords: ['hours', 'open', 'close', 'time', 'when'],
    response: "We're open Monday-Friday 10AM-8PM, Saturday 9AM-9PM, and Sunday 11AM-6PM. Come visit us anytime!",
    category: 'hours'
  },
  {
    id: '2',
    keywords: ['board', 'skateboard', 'deck', 'complete', 'setup'],
    response: "We have a huge selection of skateboards! From beginner completes starting at $89 to pro decks from top brands like Element, Baker, and Santa Cruz. Need help choosing? Our staff can help you find the perfect setup!",
    category: 'products'
  },
  {
    id: '3',
    keywords: ['shoes', 'vans', 'nike', 'adidas', 'footwear', 'skate shoes'],
    response: "Our shoe wall is stocked with the latest skate shoes from Vans, Nike SB, Adidas, Converse, and more! We carry sizes 6-13 and offer both classic and limited edition colorways.",
    category: 'products'
  },
  {
    id: '4',
    keywords: ['location', 'address', 'where', 'directions', 'find'],
    response: "We're located at 123 Skate Street, Downtown. Easy parking available and we're right next to the skate park! Take the metro to Central Station - we're just a 2-minute walk.",
    category: 'location'
  },
  {
    id: '5',
    keywords: ['return', 'exchange', 'warranty', 'policy', 'refund'],
    response: "We offer 30-day returns on unworn items with receipt. Skateboards can be exchanged within 14 days if unused. We also provide manufacturer warranties on all our products!",
    category: 'policy'
  },
  {
    id: '6',
    keywords: ['lesson', 'learn', 'beginner', 'teach', 'class'],
    response: "We offer skateboard lessons every Saturday at 10AM for beginners! $25 for a 1-hour session includes board rental. Our experienced instructors will have you riding in no time!",
    category: 'lessons'
  },
  {
    id: '7',
    keywords: ['repair', 'fix', 'broken', 'maintenance', 'service'],
    response: "Our tech team can fix almost anything! We offer grip tape replacement, bearing service, truck adjustments, and more. Most repairs are done same-day for just $15-25.",
    category: 'services'
  },
  {
    id: '8',
    keywords: ['brands', 'what', 'carry', 'stock', 'have'],
    response: "We carry all the top brands: Element, Baker, Santa Cruz, Independent, Bones, Spitfire, Vans, Nike SB, Thrasher, and many more! Over 50 brands in stock.",
    category: 'products'
  }
];