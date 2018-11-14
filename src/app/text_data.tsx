import { FeatureType } from "./Components";

// ************************ Home ************************

export const whyYouShouldData = [
  {
    imgSrc: require("../assets/images/optimised.svg"),
    imgAlt: "zdjecie",
    title: "GRAPHQL SUPER EASY",
    description: `There is no graphql knowledge required to start using this editor. Just click and experiment to learn this technology of future.`
  },
  {
    imgSrc: require("../assets/images/powerfull.svg"),
    imgAlt: "zdjecie",
    title: "THINK VISUALLY",
    description: `All backend systems should be drawn first. It is much easier to get the desired solution if you see your system and its structure.`
  },
  {
    imgSrc: require("../assets/images/website.svg"),
    imgAlt: "zdjecie",
    title: "NO CODE SOLUTION",
    description: `You can create graphql server without modifying generated code. Code generated by editor is ready to use in production.`
  }
];

export const trustedList = [
  {
    address: "https://facebook.com",
    imgSrc: require("../assets/images/Facebook.png"),
    altImg: "facebook"
  },
  {
    address: "https://instagram.com",
    imgSrc: require("../assets/images/instagram.png"),
    altImg: "instagram"
  },
  {
    address: "https://twitter.com",
    imgSrc: require("../assets/images/twitter.png"),
    altImg: "twitter"
  },
  {
    address: "https://asana.com/",
    imgSrc: require("../assets/images/asana.png"),
    altImg: "asana"
  },
  {
    address: "https://www.producthunt.com/",
    imgSrc: require("../assets/images/product_hunt.png"),
    altImg: "product hunt"
  },
  {
    address: "https://www.pinterest.com/",
    imgSrc: require("../assets/images/pinterest.png"),
    altImg: "pinterest"
  },
  {
    address: "https://www.github.com/",
    imgSrc: require("../assets/images/github.png"),
    altImg: "github"
  },
  {
    address: "https://www.paypal.com/",
    imgSrc: require("../assets/images/paypal.png"),
    altImg: "paypal"
  }
];

// ************************ PRICING LIST ************************

export const roadmapData: FeatureType[] = [
  {
    imgSrc: require("../assets/images/vps.svg"),
    imgAlt: "hosting",
    title: "ACCOUNTS & PROJECTS",
    description: "Create projects and save them on your account",
    date: "24 XI 2018"
  },
  {
    imgSrc: require("../assets/images/optimised.svg"),
    imgAlt: "hosting",
    title: "FIX VISUAL DIAGRAM ISSUES",
    description:
      "Diagram should have nice visual effects and options. First phase should be finished by then.",
    date: "1 XII 2018"
  },
  {
    imgSrc: require("../assets/images/powerfull.svg"),
    imgAlt: "hosting",
    title: "READY TO USE FAKE BACKEND",
    description:
      " If your backend is complicated and you need some backend dev to write resolvers. Don’t wait! Start your job without it.",
    date: "1 XII 2018"
  },
  {
    imgSrc: require("../assets/images/hosting2.svg"),
    imgAlt: "hosting",
    title: "COLLABORATION FEATURE",
    description: "Collaborate on projects in graphql editor. Merry Christmas!",
    date: "21 XII 2018"
  },
  {
    imgSrc: require("../assets/images/server.svg"),
    imgAlt: "server",
    title: "GENERATE QUERIES FOR FRONTEND",
    description:
      "Generate frontend typesafe libs for javascript/typescript. So you can have autocomplete for avaialble queries to speed up development",
    q: 1,
    year: 2019
  },
  {
    imgSrc: require("../assets/images/hosting.svg"),
    imgAlt: "hosting",
    title: "GRAPHQL TO BACKEND",
    description:
      "Deploy mongo database with automagically generated resolvers in cloud for your GraphQL schema. So you don’t have to code backend.",
    q: 1,
    year: 2019
  },
  {
    imgSrc: require("../assets/images/website.svg"),
    imgAlt: "vps",
    title: "BACKEND IN ONE PLACE",
    description:
      "GraphQL schema is a mirror of your backend system. Keep it in cloud and collaborate on it. Together you can do more.",
    q: 1,
    year: 2019
  },
  {
    imgSrc: require("../assets/images/address-light.svg"),
    imgAlt: "vps",
    title: "INTELLIGENT QUERY RESOLVERS",
    description:
      "Resolvers created only from diagram recognising popular backend functions ( filter, order etc.) ",
    q: 2,
    year: 2019
  }
];

// ************************ Recommendations Slider ************************

export const recommendationsData = [
  {
    imgSrc: require("../assets/images/brand.png"),
    imgAlt: "logo-tesla",
    title: "Totaly Optimised 3",
    description: `It is a long established fact that a reader will be
    distracted by the readable content of a page when looking at
    its layout. The point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters.`,
    address: "https://www.mcdonalds.com",
    person: "Lorem Ipsum 1",
    personImg: "",
    position: "Master of Philosophy at McDonald's"
  },
  {
    imgSrc: require("../assets/images/brand.png"),
    imgAlt: "logo-tesla",
    title: "Totaly Optimised 3",
    description: `It is a long established fact that a reader will be
    distracted by the readable content of a page when looking at
    its layout. The point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters.`,
    address: "https://www.mcdonalds.com",
    person: "Lorem Ipsum 2",
    personImg: "../assets/images/user.png",
    position: "Master of Philosophy at McDonald's"
  }
];

// ************************ Footer ************************

export const footerData = [
  {
    title: "Product",
    links: ["Main Page", "Demo"],
    linksTo: ["/", "https://demo.graphqleditor.com/"]
  },
  // {
  //   title: "Company",
  //   links: ["About Us", "Career", "Blog", "Contact"],
  //   linksTo: ["bla", "bla", "bla", "bla"]
  // },
  {
    title: "Contact Us",
    links: ["hello@slothking.online"],
    linksTo: ["mailto:hello@slothking.online"]
  }
];

// ************************ ABOUT ************************

export const ourTeam = [
  {
    imgSrc: require("../assets/images/team-img.png"),
    name: "John Ipsum",
    position: "developer"
  },
  {
    imgSrc: require("../assets/images/team-img.png"),
    name: "John Ipsum",
    position: "developer"
  },
  {
    imgSrc: require("../assets/images/team-img.png"),
    name: "John Ipsum",
    position: "developer"
  },
  {
    imgSrc: require("../assets/images/team-img.png"),
    name: "John Ipsum",
    position: "developer"
  },
  {
    imgSrc: require("../assets/images/team-img.png"),
    name: "John Ipsum",
    position: "developer"
  },
  {
    imgSrc: require("../assets/images/team-img.png"),
    name: "John Ipsum",
    position: "developer"
  },
  {
    imgSrc: require("../assets/images/team-img.png"),
    name: "John Ipsum",
    position: "developer"
  },
  {
    imgSrc: require("../assets/images/team-img.png"),
    name: "John Ipsum",
    position: "developer"
  }
];

// ************************ SERVICE ************************

export const monthPlans = [
  {
    imgSrc: require("../assets/images/basic-plan.svg"),
    title: "Basic",
    list: [
      "for individuals",
      "Unlimited File Storage",
      "3 Projects",
      "2 Members",
      "30d Version history"
    ],
    price: 0
  },
  {
    imgSrc: require("../assets/images/star-plan.png"),
    title: "Professional",
    list: [
      "Everything in Basic plus",
      "Unlimited free viewers",
      "Unlimited projects",
      "Unlimited files",
      " Unlimited version history",
      "Team library",
      "Private projects"
    ],
    price: 12
  },
  {
    imgSrc: require("../assets/images/hosting.svg"),
    title: "Organization",
    list: [
      "Everything in Professional plus",
      "Unlimited teams",
      "Organization-wide design systems",
      "Advanced access controls & Privacy settings",
      "Enforced SSO",
      "Enforced 2FA",
      "SAML-based SSO",
      "Audit Reports"
    ],
    price: "45"
  }
];

// ************************ USER INTERFACE ************************

export const userNav = [
  {
    title: "MY PLANS",
    icon: "fas fa-server",
    componentTitle: "SelectedPlan",
    logout: false
  },
  {
    title: "PERSONAL INFORMATION",
    icon: "far fa-user",
    componentTitle: "PersonalInfo",
    logout: false
  },
  {
    title: "PAYMENTS",
    icon: "fas fa-credit-card",
    componentTitle: "PaymentsInfo",
    logout: false
  },
  {
    title: "LOG OUT",
    icon: "fas fa-sign-out-alt",
    logout: true
  }
];

export const userAddress = {
  Name: "Holly K Douglas",
  Address: "4124 Wines Lane",
  City: "LITTLE ROCK",
  State: "Arkansas",
  ZIP: "72214",
  Country: "USA"
};
