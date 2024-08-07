import {
  mobile,
  backend,
  creator,
  web,
  bottle,
  brush,
  jutebag,
  recipe,
  straw,
  tree
} from "../assets";

export const navLinks = [
  {
    id: "calculator",
    title: "Calculator",
  },
  {
    id: "dashboard",
    title: "Dashboard",
  }, {
    id: "faq",
    title: 'FAQ'
  }, {
    id: "quiz",
    title: 'Quiz'
  }, {
    id: "reward",
    title: 'Reward'
  }, {
    id: "aboutus",
    title: 'About Us'
  }, {
    id: "logout",
    title: 'Logout'
  }
];
export const navLinkslogout = [
  {
    id: "aboutcf",
    title: "About",
  },
  {
    id: "faqs",
    title: 'FAQ'
  },{
    id: "aboutteam",
    title: 'About Us'
  }, {
    id: "signup",
    title: 'SignUp/Login'
  }
];

const services = [
  {
    title: "Climate Change",
    icon: web,
    val: 750
  },
  {
    title: "Personal Responsibility",
    icon: mobile,
    val: 1450
  },
  {
    title: "Consumer Awareness",
    icon: backend,
    val: 2500
  },
  {
    title: "Policy & Regulation",
    icon: creator,
    val: 3050
  },
];

const experiences = [
  {
    title: "What is carbon footprint?",
    company_name: "Starbucks",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Carbon footprint is the total amount of greenhouse gases, primarily carbon dioxide, that are emitted directly or indirectly by ​human activities. This includes emissions from activities such as driving a car, using electricity, and consuming food and goods."
    ],
  },
  {
    title: "Why should I calculate my carbon footprint?",
    company_name: "Tesla",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Calculating your carbon footprint helps you understand the impact of your lifestyle on the environment. By identifying the main ​sources of your emissions, you can take steps to reduce them, contributing to the fight against climate change."
    ],
  },
  {
    title: "How does the carbon footprint calculator work?",
    company_name: "Shopify",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Our calculator uses data you provide about your daily activities, such as energy use, transportation, and consumption habits, to​estimate your carbon emissions. The calculation is based on standardized emission factors from reliable sources."
    ],
  },
  {
    title: "How often should I calculate my carbon footprint?",
    company_name: "Meta",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "We recommend checking your carbon footprint atleast every month."
    ],
  },
];

const projects = [
  {
    name: "Eco - Friendly Jute Tote Bag 🛍",
    description:
      "50",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jutebag,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tree Planting Certificate 🌳",
    description:
      "30",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tree,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stainless Steel Water Bottle 💧",
    description:
      "75",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bottle,
    source_code_link: "https://github.com/",
  },
  {
    name: "Reusable Metal Straw Set 🥤",
    description:
      "80",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: straw,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bamboo Toothbrush Set 🦷",
    description:
      "100",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brush,
    source_code_link: "https://github.com/",
  },
  {
    name: "Plant-Based Meal Recipe Book 📖",
    description:
      "120",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/",
  }
];

export { services, experiences, projects };