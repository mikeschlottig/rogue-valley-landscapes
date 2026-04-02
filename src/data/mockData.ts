import { Leaf, Scissors, Sprout, Shovel, Trees, CloudSun } from "lucide-react";
export const SERVICES = [
  {
    id: "design",
    title: "Landscape Design",
    description: "Whimsical garden layouts paired with high-end structural planning to create your personal oasis.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "maintenance",
    title: "Premium Maintenance",
    description: "Detailed yard care including seasonal pruning, fertilizing, and expert lawn management.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hardscaping",
    title: "Artistic Hardscaping",
    description: "Stone paths, retaining walls, and patios crafted with local materials and timeless style.",
    icon: Shovel,
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800",
  },
];
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Rogue River Estate",
    category: "Full Renovation",
    date: "Spring 2023",
    excerpt: "A complete overhaul of a riverfront property, focusing on native plantings and terraced hardscaping to prevent erosion while maximizing views.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Mountain View Terrace",
    category: "Hardscaping",
    date: "Summer 2022",
    excerpt: "Extensive flagstone patio and custom fire pit installation, designed to extend the outdoor living season with breathtaking valley vistas.",
    image: "https://images.unsplash.com/photo-1591857172899-bc5527f6f47b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Grants Pass Cottage Garden",
    category: "Garden Design",
    date: "Fall 2023",
    excerpt: "A whimsical, English-inspired cottage garden featuring winding pathways, drought-tolerant perennials, and custom artisan trellises.",
    image: "https://images.unsplash.com/photo-1599427303058-f173243f0583?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Sunset Ridge Patio",
    category: "Entertainment Space",
    date: "Spring 2024",
    excerpt: "A sophisticated outdoor entertainment zone featuring a fully equipped outdoor kitchen, ambient lighting, and elegant dining areas.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
  }
];
export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Rogue Valley Landscapes transformed our messy backyard into a slice of heaven. Their eye for detail is unmatched.",
  },
  {
    name: "David Miller",
    role: "Estate Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Reliable, professional, and genuinely creative. They handle our maintenance with incredible care every week.",
  },
  {
    name: "Emily Chen",
    role: "Local Business Owner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    content: "The new entryway garden they designed for my clinic has received so many compliments. It's welcoming and low maintenance.",
  },
  {
    name: "Michael Thompson",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    content: "From the initial consultation to the final planting, the team was a joy to work with. Highly recommend their hardscaping services.",
  },
  {
    name: "Jessica Roberts",
    role: "Property Investor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    content: "They completely revitalized the curb appeal of my rental property. Fast, efficient, and beautifully executed design.",
  }
];
export const BLOG_POSTS = [
  {
    id: "1",
    title: "Preparing Your Garden for the Pacific Northwest Winter",
    date: "October 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Winter in the Rogue Valley can be unpredictable. Learn how to protect your delicate plants and prepare your soil for the cold months ahead.",
    content: [
      { type: "paragraph", text: "As the vibrant colors of autumn begin to fade, it's crucial to start preparing your garden for the colder months. In the Rogue Valley, our winters can bring a mix of heavy rain, frost, and occasional snow, making proper preparation essential for the survival of your delicate plants." },
      { type: "heading", text: "Protecting Delicate Shrubs" },
      { type: "paragraph", text: "Consider wrapping vulnerable plants in burlap or using frost blankets. This provides a crucial layer of insulation against freezing temperatures and harsh winds." },
      { type: "list", items: ["Mulch heavily around the base of plants", "Prune dead or diseased branches", "Water deeply before the first hard freeze"] },
      { type: "image", url: "https://images.unsplash.com/photo-1444044205806-38f3ed106c10?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    id: "2",
    title: "The Art of Native Landscaping in Southern Oregon",
    date: "September 28, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Discover the beauty and ecological benefits of incorporating native Oregon plants into your landscape design. Drought-tolerant and stunning.",
    content: [
      { type: "paragraph", text: "Native landscaping is more than just a trend; it's a sustainable approach to gardening that celebrates the natural beauty of our region while conserving water and supporting local wildlife." },
      { type: "heading", text: "Why Choose Native Plants?" },
      { type: "paragraph", text: "Plants native to Southern Oregon are naturally adapted to our climate, meaning they require less water, fertilizer, and maintenance once established. They also provide vital habitat for native pollinators and birds." },
      { type: "list", items: ["Oregon Grape (Mahonia aquifolium)", "Red-flowering Currant (Ribes sanguineum)", "Vine Maple (Acer circinatum)"] }
    ]
  },
  {
    id: "3",
    title: "Designing the Perfect Outdoor Entertainment Space",
    date: "August 10, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Transform your backyard into the ultimate gathering spot with our expert tips on hardscaping, lighting, and flow.",
    content: [
      { type: "paragraph", text: "An outdoor entertainment space seamlessly extends your living area into the beauty of your garden. Whether you're hosting large summer barbecues or intimate evening gatherings, a well-designed patio is key." },
      { type: "heading", text: "Key Elements of Outdoor Design" },
      { type: "paragraph", text: "Start with a solid foundation. High-quality pavers or natural stone create a durable and elegant surface. Next, consider the flow of traffic and create distinct zones for dining, lounging, and cooking." },
      { type: "list", items: ["Incorporate layered lighting for ambiance", "Add a fire pit or outdoor fireplace for year-round use", "Choose comfortable, weather-resistant furniture"] },
      { type: "image", url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    id: "4",
    title: "Spring Pruning Guide for Fruit Trees",
    date: "March 5, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Maximize your fruit yield and ensure tree health with our comprehensive guide to late winter and early spring pruning.",
    content: [
      { type: "paragraph", text: "Proper pruning is essential for the health and productivity of fruit trees. In the Rogue Valley, late winter to early spring, just before the buds break, is the ideal time to prune most varieties." },
      { type: "heading", text: "The Goals of Pruning" },
      { type: "paragraph", text: "Pruning helps establish a strong structure, removes diseased or damaged wood, and opens up the canopy to allow sunlight and air circulation, which are critical for fruit development." },
      { type: "list", items: ["Use sharp, clean bypass pruners", "Remove dead, diseased, and crossing branches first", "Make cuts just above an outward-facing bud"] }
    ]
  },
  {
    id: "5",
    title: "Water-Wise Gardening: Thriving in the Summer Heat",
    date: "June 20, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1416879598553-33758b211822?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Keep your garden lush and beautiful during the hot, dry summers of Southern Oregon without breaking the water bank.",
    content: [
      { type: "paragraph", text: "Summer in Southern Oregon can be harsh on gardens. However, with the right techniques, you can maintain a beautiful landscape while conserving our precious water resources." },
      { type: "heading", text: "Efficient Irrigation Strategies" },
      { type: "paragraph", text: "Drip irrigation is the most efficient way to water your plants, delivering moisture directly to the roots where it's needed most, minimizing evaporation." },
      { type: "list", items: ["Water deeply and infrequently to encourage deep root growth", "Apply a thick layer of mulch to retain soil moisture", "Group plants with similar water needs together (hydrozoning)"] }
    ]
  }
];