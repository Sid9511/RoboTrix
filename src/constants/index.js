import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  react,
  tailwind,
  acertinity,
  perplexity,
  gemini,
  sentry,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "Collaborations",
    url: "#collaborations",
  },
  {
    id: "3",
    title: "Services",
    url: "#services",
  },
  {
    id: "4",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "5",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "6",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "7",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [react, tailwind, acertinity, perplexity, gemini, sentry,];

export const robotrixServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const robotrixServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Enhanced Code Editor",
    text: "Integrate a sophisticated code editor with features like syntax highlighting and auto-completion to streamline the development process.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Advanced Analytics Dashboard",
    text: "Implement an analytics dashboard to track user interactions and app performance, providing insights for further optimization.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Customizable UI Components",
    text: "Enable users to personalize UI components and themes, enhancing the customization options for a tailored development experience.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API Integrations",
    text: "Facilitate integration with various APIs to enhance the functionality of web applications, including data sources and third-party services.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  }
  
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI-powered, personalized recommendations",
    price: "0",
    features: [
      "AI-driven tools that streamline your web development process",
      "Tailored development solutions based on your project needs",
      "Explore advanced web development features and capabilities at no cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI-Powered Development, Expert Support, and Insights Dashboard",
    price: "9.99",
    features: [
    "A cutting-edge AI tool that streamlines complex web development tasks",
    "An analytics dashboard for monitoring and optimizing your web projects",
    "Priority support for swift resolution of development issues",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:  "Custom AI-driven web development solutions, advanced analytics and dedicated support",
    price: null,
    features: [
    "AI tools that streamline your web development process",
    "Personalized design and development recommendations based on your project needs",
    "Explore web development features and tools at no cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Instant Code Generation",
    text: "Generates code snippets on the fly, reducing development time and enhancing productivity.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Seamless Integration",
    text: "Easily integrates with your existing development tools and workflows for a smooth experience.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Real-time Debugging",
    text: "Provides immediate feedback and suggestions, helping you debug and refine your code efficiently.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Smart Recommendations",
    text: "Offers intelligent suggestions for code improvements, ensuring best practices and optimized performance.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Collaborative Coding",
    text: "Enables team collaboration by sharing code and insights in real-time, fostering a more cohesive development process.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Advanced Security",
    text: "Implements robust security measures, ensuring your code and data are protected at all stages of development.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
