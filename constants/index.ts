import { Boxes, Component, Shapes, Spline, Waves } from "lucide-react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "about",
    title: "About",
    href: "/about",
  },
  {
    id: "work",
    title: "Work",
    href: "/portfolio",
  },
  {
    id: "journal",
    title: "Journal",
    href: "/blog",
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
];

export const servicesList = [
  {
    id: "ui-design",
    title: "UI Design",
    logo: Shapes,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quia doloremque ullam illo qui velit temporibus voluptatem laborum libero laboriosam officia quibusdam veniam quos accusantium ad aperiam maxime sequi cumque.",
    rotate: "720deg",
  },
  {
    id: "development",
    title: "Development",
    logo: Waves,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quia doloremque ullam illo qui velit temporibus voluptatem laborum libero laboriosam officia quibusdam veniam quos accusantium ad aperiam maxime sequi cumque.",
    rotate: "360deg",
  },
  {
    id: "branding",
    title: "Branding",
    logo: Component,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quia doloremque ullam illo qui velit temporibus voluptatem laborum libero laboriosam officia quibusdam veniam quos accusantium ad aperiam maxime sequi cumque.",
    rotate: "720deg",
  },
  {
    id: "animation",
    title: "Animation",
    logo: Boxes,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quia doloremque ullam illo qui velit temporibus voluptatem laborum libero laboriosam officia quibusdam veniam quos accusantium ad aperiam maxime sequi cumque.",
    rotate: "720deg",
  },
  {
    id: "motion",
    title: "Motion",
    logo: Spline,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quia doloremque ullam illo qui velit temporibus voluptatem laborum libero laboriosam officia quibusdam veniam quos accusantium ad aperiam maxime sequi cumque.",
    rotate: "360deg",
  },
];

export const caseStudiesList = [
  {
    id: "zenith",
    title: "Zenith",
    tags: ["UI/UX", "Technology", "Innovation"],
    bannerUrl: "/images/cs-1.avif",
  },
  {
    id: "nimbus",
    title: "Nimbus",
    tags: ["Branding", "Marketing", "Strategy"],
    bannerUrl: "/images/cs-2.avif",
  },
  {
    id: "pulse",
    title: "Pulse",
    tags: ["Design", "UI/UX", "Creativity"],
    bannerUrl: "/images/cs-3.png",
  },
  {
    id: "vortex",
    title: "Vortex",
    tags: ["Motion", "Animation", "Dynamic"],
    bannerUrl: "/images/cs-4.avif",
  },
  {
    id: "lumen",
    title: "Lumen",
    tags: ["Branding", "Culture", "Identity"],
    bannerUrl: "/images/cs-5.avif",
  },
  {
    id: "spectrum",
    title: "Spectrum",
    tags: ["UI/UX", "Design", "Intuitive"],
    bannerUrl: "/images/cs-6.avif",
  },
  {
    id: "quantum",
    title: "Quantum",
    tags: ["Innovation", "Futuristic", "Tech"],
    bannerUrl: "/images/cs-7.avif",
  },
  {
    id: "echo",
    title: "Echo",
    tags: ["Motion", "Visual", "Engagement"],
    bannerUrl: "/images/cs-8.avif",
  },
];

export const blogPostsList = [
  {
    id: "tech-trends-2024",
    title: "Top Technology Trends to Watch Out for in 2024",
    bannerUrl: "/images/blog-1.jpg",
    introduction:
      "Stay updated with the latest technology trends that are set to dominate in 2024. From AI advancements to 5G expansion, discover what the future holds.",
    content: [
      {
        headline: "What are the major AI advancements expected?",
        paragraph:
          "In 2024, AI is expected to advance significantly in areas such as natural language processing, machine learning, and autonomous systems. These improvements will enhance everything from virtual assistants to predictive analytics.",
      },
      {
        headline: "How will 5G impact our everyday lives?",
        paragraph:
          "The expansion of 5G networks will provide faster and more reliable internet connections, enabling a host of new applications including smart cities, advanced healthcare systems, and more immersive entertainment experiences.",
      },
      {
        headline: "Will blockchain technology become more mainstream?",
        paragraph:
          "Blockchain is set to extend beyond cryptocurrencies and see increased adoption in sectors like supply chain management, banking, and more, thanks to its security and transparency features.",
      },
    ],
  },
  {
    id: "sustainable-fashion",
    title: "Sustainable Fashion: How the Industry is Changing for the Better",
    bannerUrl: "/images/blog-2.jpg",
    introduction:
      "Explore how the fashion industry is embracing sustainability, with brands adopting eco-friendly practices and consumers becoming more conscious about their choices.",
    content: [
      {
        headline: "What is sustainable fashion?",
        paragraph:
          "Sustainable fashion focuses on reducing the environmental impact of clothing production. This includes using sustainable materials, reducing waste, and ensuring fair labor practices.",
      },
      {
        headline: "How are brands embracing sustainability?",
        paragraph:
          "Many brands are now using organic cotton, recycled materials, and eco-friendly dyes. They are also implementing new technologies to reduce water and energy consumption during production.",
      },
      {
        headline: "What can consumers do to support sustainable fashion?",
        paragraph:
          "Consumers can support sustainable fashion by choosing brands that prioritize eco-friendly practices, buying second-hand clothing, and reducing their overall consumption by opting for quality over quantity.",
      },
    ],
  },
  {
    id: "remote-work-tips",
    title: "Essential Tips for Thriving in a Remote Work Environment",
    bannerUrl: "/images/blog-3.jpg",
    introduction:
      "Remote work is here to stay. Discover essential tips and strategies for staying productive, maintaining work-life balance, and thriving in a remote work environment.",
    content: [
      {
        headline: "How to set up an effective home office?",
        paragraph:
          "A dedicated workspace is crucial for productivity. Invest in a comfortable chair, good lighting, and necessary tech tools to create an environment conducive to focused work.",
      },
      {
        headline: "What are some time management techniques?",
        paragraph:
          "Techniques such as the Pomodoro method, time-blocking, and using productivity apps can help you manage your time effectively and stay on top of your tasks.",
      },
      {
        headline: "How to maintain work-life balance?",
        paragraph:
          "Set clear boundaries between work and personal time. Take regular breaks, set a consistent schedule, and make time for activities you enjoy outside of work.",
      },
    ],
  },
  {
    id: "healthy-lifestyle-habits",
    title: "10 Healthy Lifestyle Habits for a Happier, Healthier You",
    bannerUrl: "/images/blog-4.jpg",
    introduction:
      "Adopting healthy lifestyle habits can greatly improve your well-being. Here are ten habits that can help you lead a happier, healthier life.",
    content: [
      {
        headline: "Why is regular exercise important?",
        paragraph:
          "Regular exercise helps boost your mood, improve your physical health, and increase your energy levels. Aim for at least 30 minutes of moderate exercise most days of the week.",
      },
      {
        headline: "How does a balanced diet contribute to health?",
        paragraph:
          "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins provides essential nutrients that support overall health and prevent chronic diseases.",
      },
      {
        headline: "The importance of getting enough sleep",
        paragraph:
          "Quality sleep is essential for physical and mental health. Aim for 7-9 hours of sleep per night to ensure your body has time to repair and rejuvenate.",
      },
      {
        headline: "How does staying hydrated benefit you?",
        paragraph:
          "Staying hydrated supports various bodily functions, including digestion, circulation, and temperature regulation. Aim to drink at least 8 glasses of water a day.",
      },
      {
        headline: "Practicing mindfulness and stress management",
        paragraph:
          "Incorporate mindfulness practices such as meditation and deep breathing to manage stress, improve mental clarity, and enhance overall well-being.",
      },
    ],
  },
  {
    id: "financial-freedom",
    title: "A Step-by-Step Guide to Achieving Financial Freedom",
    bannerUrl: "/images/blog-5.jpg",
    introduction:
      "Achieving financial freedom is a dream for many. Learn the steps you can take to manage your money effectively and work towards financial independence.",
    content: [
      {
        headline: "Why is budgeting crucial?",
        paragraph:
          "Creating a budget helps you track your income and expenses, ensuring you live within your means and can allocate funds towards savings and investments.",
      },
      {
        headline: "The importance of an emergency fund",
        paragraph:
          "An emergency fund acts as a financial safety net, allowing you to handle unexpected expenses without derailing your long-term financial goals.",
      },
      {
        headline: "How to start investing?",
        paragraph:
          "Investing in stocks, bonds, or mutual funds can help your money grow over time. Start by identifying your risk tolerance and investment goals, and consider consulting with a financial advisor.",
      },
      {
        headline: "Managing debt effectively",
        paragraph:
          "Paying off high-interest debt as soon as possible can save you money in the long run. Consider strategies such as the debt snowball or debt avalanche method to tackle your debts systematically.",
      },
      {
        headline: "Building multiple income streams",
        paragraph:
          "Diversifying your income sources can provide financial stability and additional opportunities for wealth growth. Consider side hustles, freelancing, or passive income sources like rental properties.",
      },
    ],
  },
  {
    id: "climate-change-action",
    title: "How to Take Action Against Climate Change in Your Daily Life",
    bannerUrl: "/images/blog-6.jpg",
    introduction:
      "Climate change is a pressing issue that requires urgent action. Discover practical steps you can take in your daily life to reduce your carbon footprint and contribute to a healthier planet.",
    content: [
      {
        headline: "What small changes can make a big impact?",
        paragraph:
          "Simple actions like reducing energy consumption, minimizing waste, and choosing sustainable products can collectively make a significant impact on the environment.",
      },
      {
        headline: "The importance of reducing energy use",
        paragraph:
          "Using energy-efficient appliances, switching to LED bulbs, and unplugging devices when not in use can reduce your energy consumption and lower greenhouse gas emissions.",
      },
      {
        headline: "How can transportation choices matter?",
        paragraph:
          "Opting for public transport, carpooling, biking, or walking can significantly reduce your carbon footprint compared to driving alone.",
      },
      {
        headline: "Why support renewable energy sources?",
        paragraph:
          "Supporting renewable energy sources, such as solar and wind power, helps reduce reliance on fossil fuels and decreases overall carbon emissions.",
      },
      {
        headline: "How does sustainable eating help?",
        paragraph:
          "Eating a plant-based diet or reducing meat consumption can lower your environmental impact, as livestock farming contributes significantly to greenhouse gas emissions.",
      },
    ],
  },
  {
    id: "travel-on-budget",
    title: "Top Tips for Traveling the World on a Budget",
    bannerUrl: "/images/blog-7.jpg",
    introduction:
      "Traveling the world doesn't have to break the bank. Learn how to see amazing destinations, experience new cultures, and create unforgettable memories without overspending.",
    content: [
      {
        headline: "How to find affordable flights?",
        paragraph:
          "Use flight comparison websites, set fare alerts, and book in advance to find the best deals on flights. Being flexible with travel dates can also help you save money.",
      },
      {
        headline: "Where to find budget accommodations?",
        paragraph:
          "Consider alternatives to expensive hotels, such as hostels, Airbnb, house-sitting, or couchsurfing. These options can provide unique experiences and save you money.",
      },
      {
        headline: "How to eat well on a budget?",
        paragraph:
          "Opt for local street food, shop at local markets, and cook your meals when possible. Dining at local eateries instead of tourist hotspots can also help you save.",
      },
      {
        headline: "Saving on transportation costs",
        paragraph:
          "Use public transportation, bike rentals, or walk to explore your destination. Consider purchasing travel passes for additional savings on local transport.",
      },
      {
        headline: "Tips for finding free or inexpensive activities",
        paragraph:
          "Research free events, visit museums on free admission days, and explore natural attractions such as parks and beaches. Many cities also offer free walking tours.",
      },
    ],
  },
  {
    id: "home-decor-trends",
    title: "Home Decor Trends for 2024: Stylish and Sustainable Ideas",
    bannerUrl: "/images/blog-8.jpg",
    introduction:
      "Transform your living spaces with the latest home decor trends for 2024. Discover stylish and sustainable ideas to refresh your home and create a comfortable, eco-friendly environment.",
    content: [
      {
        headline: "What are the top color trends for 2024?",
        paragraph:
          "Earthy tones, calming neutrals, and vibrant accent colors dominate this year's palette, creating a balanced and inviting atmosphere in any room.",
      },
      {
        headline: "How to incorporate sustainable materials?",
        paragraph:
          "Opt for furniture made from reclaimed wood, bamboo, or recycled materials. Choose organic textiles such as cotton, linen, and wool for a more eco-friendly home.",
      },
      {
        headline: "The rise of multifunctional spaces",
        paragraph:
          "With the increasing popularity of remote work and compact living, multifunctional spaces that serve various purposes, such as home offices or guest rooms, are becoming essential.",
      },
      {
        headline: "Biophilic design principles",
        paragraph:
          "Connecting with nature through biophilic design can enhance well-being. Incorporate natural elements like plants, water features, and natural light to create a calming, rejuvenating space.",
      },
      {
        headline: "Personalized and unique decor",
        paragraph:
          "Embrace individuality by incorporating unique, personalized decor items. Mix and match vintage finds with contemporary pieces to create a one-of-a-kind space that reflects your personality.",
      },
    ],
  },
  {
    id: "the-rise-of-EVs",
    title: "The Rise of Electric Vehicles: Future of Automotive Industry",
    bannerUrl: "/images/blog-10.jpg",
    introduction:
      "Electric vehicles (EVs) are shaping the future of the automotive industry. Learn about the latest advancements, benefits, and challenges as the world shifts towards cleaner, sustainable transportation.",
    content: [
      {
        headline: "What are the benefits of electric vehicles?",
        paragraph:
          "EVs offer numerous advantages including lower emissions, reduced fuel costs, and quieter operation. They also contribute to improved air quality and help combat climate change.",
      },
      {
        headline: "Current advancements in EV technology",
        paragraph:
          "Recent advancements include improvements in battery technology, increased driving ranges, and faster charging times. These developments make EVs more practical and appealing to consumers.",
      },
      {
        headline: "Challenges facing the adoption of EVs",
        paragraph:
          "Despite their benefits, EVs face challenges such as high initial costs, limited charging infrastructure, and concerns about battery disposal. Addressing these issues is crucial for widespread adoption.",
      },
      {
        headline: "The role of government policies and incentives",
        paragraph:
          "Government policies and incentives play a key role in promoting EV adoption. Subsidies, tax credits, and investments in charging infrastructure can accelerate the shift towards electric transportation.",
      },
      {
        headline: "How can consumers contribute to the EV revolution?",
        paragraph:
          "Consumers can support the transition to EVs by choosing electric vehicles for their next purchase, advocating for better charging infrastructure, and staying informed about the benefits and advancements in EV technology.",
      },
    ],
  },
];
