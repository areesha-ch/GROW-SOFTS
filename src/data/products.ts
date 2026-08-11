import type { Product, CompanyInfo } from '@/types';

export const companyInfo: CompanyInfo = {
  name: "GROW SOFTS LLC",
  address: "8600 Norris Fwy",
  city: "Knoxville",
  state: "TN",
  zip: "37938",
  ein: "41-3887167",
  website: "growsofts.online",
  email: "info@growsofts.online",
  phone: "+1 (423) 969-2720"
};

export const products: Product[] = [
  {
    id: 1,
    name: "Growth Accelerator Pro",
    description: "All-in-one digital marketing toolkit packed with proven strategies, templates, and automation workflows to fast-track your business growth.",
    price: 29.99,
    image: "/product1.jpg",
    category: "Marketing",
    deliveryMethod: "Instant download via email",
    rating: 187
  },
  {
    id: 2,
    name: "Social Boost Mastery",
    description: "Elevate your social media presence with data-driven content strategies, analytics dashboards, and engagement optimization tools.",
    price: 24.99,
    image: "/product2.jpg",
    category: "Social Media",
    deliveryMethod: "Instant download via email",
    rating: 142
  },
  {
    id: 3,
    name: "Creator Launchpad",
    description: "Everything content creators need — video templates, thumbnail builders, script frameworks, and publishing schedules in one powerful bundle.",
    price: 34.99,
    image: "/product3.jpg",
    category: "Content Creation",
    deliveryMethod: "Instant download via email",
    rating: 215
  },
  {
    id: 4,
    name: "Network Pro Suite",
    description: "Build powerful professional connections with lead generation templates, outreach scripts, and relationship management tools.",
    price: 39.99,
    image: "/product4.jpg",
    category: "Networking",
    deliveryMethod: "PDF download via email",
    rating: 98
  },
  {
    id: 5,
    name: "Stream Studio Deluxe",
    description: "Professional streaming setup toolkit with overlay templates, transition packs, audience engagement tools, and monetization guides.",
    price: 49.99,
    image: "/product5.jpg",
    category: "Streaming",
    deliveryMethod: "Instant download via email",
    rating: 176
  },
  {
    id: 6,
    name: "Engagement Maximizer",
    description: "Smart automation tools and engagement boosters designed to grow your audience organically across all major platforms.",
    price: 19.99,
    image: "/product6.jpg",
    category: "Social Media",
    deliveryMethod: "Instant download via email",
    rating: 134
  },
  {
    id: 7,
    name: "Vision Planner Pro",
    description: "Visual content planning system with drag-and-drop mood boards, color palette generators, and trend forecasting tools.",
    price: 22.99,
    image: "/product7.jpg",
    category: "Planning",
    deliveryMethod: "Instant download via email",
    rating: 87
  },
  {
    id: 8,
    name: "Content Calendar 365",
    description: "Full-year content calendar with 500+ post ideas, holiday themes, hashtag collections, and platform-specific strategies.",
    price: 14.99,
    image: "/product8.jpg",
    category: "Planning",
    deliveryMethod: "Excel/Sheets download via email",
    rating: 203
  },
  {
    id: 9,
    name: "SEO Rank Dominator",
    description: "Complete SEO arsenal with keyword research templates, on-page optimization checklists, and link building strategies that work.",
    price: 27.99,
    image: "/product9.jpg",
    category: "Marketing",
    deliveryMethod: "PDF download via email",
    rating: 165
  },
  {
    id: 10,
    name: "Little Learners Pack",
    description: "Fun-filled educational activity pack for kids ages 3-8. Includes printable worksheets, games, puzzles, and learning adventures.",
    price: 15.99,
    image: "/product10.jpg",
    category: "Education",
    deliveryMethod: "PDF download via email",
    rating: 289
  },
  {
    id: 11,
    name: "Email Funnel Master",
    description: "High-converting email template collection with automation sequences, subject line formulas, and list growth strategies.",
    price: 32.99,
    image: "/product11.jpg",
    category: "Marketing",
    deliveryMethod: "Instant download via email",
    rating: 112
  },
  {
    id: 12,
    name: "Read & Grow Phonics",
    description: "Interactive phonics learning system that makes reading fun for children ages 4-7 with stories, exercises, and rewards.",
    price: 13.99,
    image: "/product12.jpg",
    category: "Education",
    deliveryMethod: "PDF download via email",
    rating: 198
  },
  {
    id: 13,
    name: "Brand Identity Builder",
    description: "Complete branding toolkit with logo templates, brand voice guides, color schemes, and marketing asset collections.",
    price: 44.99,
    image: "/product13.jpg",
    category: "Branding",
    deliveryMethod: "Instant download via email",
    rating: 76
  },
  {
    id: 14,
    name: "Creative Coloring World",
    description: "150+ beautifully illustrated coloring pages featuring animals, fantasy worlds, and nature scenes for endless creativity.",
    price: 8.99,
    image: "/product14.jpg",
    category: "Education",
    deliveryMethod: "PDF download via email",
    rating: 342
  },
  {
    id: 15,
    name: "Analytics Power Dashboard",
    description: "Ready-to-use analytics dashboard templates for tracking KPIs, conversions, revenue metrics, and business growth indicators.",
    price: 26.99,
    image: "/product15.jpg",
    category: "Analytics",
    deliveryMethod: "Excel/Sheets download via email",
    rating: 89
  },
  {
    id: 16,
    name: "Design Template Vault",
    description: "300+ premium Canva-compatible design templates for social media, presentations, flyers, and marketing materials.",
    price: 80.80,
    image: "/product16.jpg",
    category: "Design",
    deliveryMethod: "Canva link via email",
    rating: 267
  },
  {
    id: 17,
    name: "Storytime Audio Collection",
    description: "Enchanting collection of 25+ classic children's stories professionally narrated. Perfect for bedtime and road trips.",
    price: 16.99,
    image: "/product17.jpg",
    category: "Education",
    deliveryMethod: "Audio files via email",
    rating: 156
  },
  {
    id: 18,
    name: "Dev Starter Pro Kit",
    description: "Comprehensive web development starter pack with responsive templates, UI component libraries, and deployment guides.",
    price: 54.99,
    image: "/product18.jpg",
    category: "Development",
    deliveryMethod: "Instant download via email",
    rating: 64
  },
  {
    id: 19,
    name: "Reward Chart System",
    description: "Adorable printable reward charts, chore trackers, and achievement badges to motivate kids and build positive habits.",
    price: 6.99,
    image: "/product19.jpg",
    category: "Education",
    deliveryMethod: "PDF download via email",
    rating: 278
  },
  {
    id: 20,
    name: "Complete Growth Bundle",
    description: "The ultimate digital toolkit combining marketing, design, and productivity tools. Everything you need to scale your business.",
    price: 99.99,
    image: "/product20.jpg",
    category: "Bundle",
    deliveryMethod: "Instant download via email",
    rating: 134
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Growth Labs Co",
    text: "The Growth Accelerator Pro completely transformed our marketing approach. Within weeks we saw a 3x increase in engagement. Absolutely worth every penny!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "StartupHub Inc",
    text: "As a startup founder, these tools saved me hundreds of hours. The quality is outstanding and the instant delivery means I can start using them right away.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Creative Studio",
    text: "The Creator Launchpad helped me streamline my entire content workflow. I'm now producing twice as much content in half the time. Game changer!",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    company: "Digital Ventures",
    text: "Professional quality products that deliver real results. The Complete Growth Bundle is an incredible value - I've paid 5x more for less elsewhere.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "Happy Kids Academy",
    text: "The educational products from Grow Softs are exceptional. My students absolutely love the activities and the parents keep asking where I got them!",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    company: "Wilson Marketing",
    text: "I've tried dozens of marketing toolkits and this is hands down the best. The Email Funnel Master alone paid for itself within the first month.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "How are products delivered after purchase?",
    answer: "All our products are digital and delivered instantly via email after purchase. You'll receive a secure download link that stays active for 30 days."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards including Visa, MasterCard, and American Express, as well as PayPal. All transactions are processed securely."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes! We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, simply contact us for a full refund - no questions asked."
  },
  {
    question: "Can I use these products for commercial projects?",
    answer: "Most of our products include commercial use rights. Please check the specific product description for detailed licensing information."
  },
  {
    question: "Do I need special software to use these products?",
    answer: "Our products work with common software like Canva, Microsoft Office, Google Suite, and standard PDF readers. Specific requirements are listed on each product page."
  },
  {
    question: "How do I contact customer support?",
    answer: `You can reach our friendly support team at ${companyInfo.email} or call us at ${companyInfo.phone}. We typically respond within 24 hours.`
  }
];
