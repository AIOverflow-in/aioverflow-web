import {
  FaBook as BookIcon,
  FaLaptopCode as LaptopCodeIcon,
  FaTrophy as TrophyIcon,
  FaMoneyBillWave as MoneyBillWaveIcon,
  FaCheck as CheckIcon,
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaLinkedinIn as LinkedinIcon,
  FaInstagram as InstagramIcon,
  FaLock as LockIcon,
  FaRegChartBar as ChartIcon,
  FaServer as ServerIcon,
  FaUsersCog as CogIcon,
  FaRobot as RobotIcon,
  FaGraduationCap as AcademicCapIcon,
} from "react-icons/fa";

const services = [
  {
    title: "Websites",
    description:
      "Get full stack websites, of any form and complexity, built from scratch. We offer a range of services, including landing pages, blogs, e-commerce sites, and more.",
    icon: BookIcon,
  },
];

const projects = [
  {
    name: "DataSense - Leverages Generative AI (GPT-4) for advanced data analysis",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FDataSenseCrop.png?alt=media&token=dae3a99e-ac5d-45d1-b9d5-79b5c8a2c4bc",
    description:
      "Datasense is a cutting-edge data analysis tool harnessing the power of Generative AI (GPT-4), Large Language Models, Natural Language Processing (NLP), and advanced Data Visualization Techniques. This intuitive platform allows users to effortlessly upload CSV or Excel files and obtain analytical insights through plain English queries. It aims to democratize data analysis, making it accessible to users of all data literacy levels. By merging sophisticated AI capabilities with a user-friendly interface, Datasense enables seamless data exploration and insightful discoveries, without the need for specialized technical expertise.",
    features: [
      "Leverages Generative AI (GPT-4) for advanced data analysis",
      "Utilizes Large Language Models for enhanced understanding of user queries",
      "Employs Natural Language Processing (NLP) for interpreting plain English questions",
      "Supports data upload in CSV or Excel format for convenience",
      "Provides analytical and graphical insights based on user queries",
      "Simplifies data analysis for users with varying levels of data literacy",
      "Facilitates exploration of data without the need for specialized technical skills",
    ],
  },
  {
    name: "Physio+ MER Dashboard for Hospitals and Clinics",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FPhysioTech%2B.png?alt=media&token=8a3853dc-8740-4343-8f32-10c6336f96a0",
    description:
      "Physio Tech Plus is an intelligent hospital management system tailored for physiotherapy practices. It efficiently manages multiple user roles including receptionists, senior doctors, junior doctors, and trainers. This robust system encompasses over 312 patient attributes, offers comprehensive exercise and treatment tracking, provides insights into current patient conditions, features a review system, tracks patient prescription status, offers fuzzy search functionality for swift patient retrieval from extensive databases, and boasts a range of additional capabilities.",
    features: [
      "Multifaceted user roles: receptionist, senior doctor, junior doctor, trainer",
      "Comprehensive handling of 312+ patient attributes",
      "Exercise and treatment trackers for patients",
      "Real-time insights into current patient conditions",
      "Review system for enhanced feedback mechanisms",
      "Patient prescription status tracking",
      "Fuzzy search functionality for rapid patient retrieval from extensive databases",
      "Various other advanced functionalities",
    ],
  },
  // {
  //   name: "RoboGems",
  //   imgUrl:
  //     "https://drive.google.com/uc?export=view&id=1NwiF1bKmyu3mLb9SHWYnzB5SNq_NJQDl",
  //   description:
  //     "RoboGems is a comprehensive platform designed to streamline user class bookings and offer a range of features tailored to user needs. Whether it's Robotics or Coding, our platform provides live 1:1 sessions with expert instructors, ensuring that children gain crucial 21st Century Skills.",
  //   features: [
  //     "Live 1:1 Robotics and Coding Classes with Master Teachers",
  //     "Diverse Coding Courses, including Python Programming and Artificial Intelligence",
  //     "Extensive Robotics Courses, covering foundational, intermediate, and advanced levels",
  //     "Testimonials from satisfied parents and students",
  //     "Expert Instructors with specialized skills in STEM education",
  //     "Affordable pricing with discounts for full payments and referrals",
  //     "Customizable curriculum to cater to students' age and interests",
  //     "Certification upon course completion for resume enhancement",
  //     "Access to recorded videos, study materials, and regular assignments for comprehensive learning",
  //   ],
  // },
  {
    name: "Supper (Supplier Performance) - find best supplier using AI",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FSuperCrop.png?alt=media&token=579670e7-c953-4f8b-8c0b-2caa2c44ac62",
    description:
      "Supper (Supplier Performance) offers a comprehensive 4-step solution for supplier evaluation and cost calculation. It leverages advanced techniques like NER with BERT LLM for data extraction and employs statistical analysis for precise insights. Predictive analysis and user engagement features further enhance decision-making.",
    features: [
      "Dataset Creation with NER and BERT LLM",
      "Statistical Analysis for Cost Calculation",
      "Predictive Analysis with Optimization Techniques",
      "Real-time Insights and Recommendations with PaLM LLM",
      "User Engagement through Interactive Chat",
      "Seamless Integration with Existing Solutions",
    ],
  },
  {
    name: "SkillEase - Easy job, course, and mentor search using AI",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FSkillEase.png?alt=media&token=6cc570ab-5943-4633-99e3-7948fdde29d5",
    description:
      "The web platform offers a streamlined approach to job hunting, course selection, and mentorship acquisition. Its intuitive design prioritizes user-friendliness, ensuring a hassle-free experience.",
    features: [
      "Web platform for easy job, course, and mentor search",
      "AI-powered enhancements for:",
      "  - Voice command recognition",
      "  - Multi-language content translation",
      "  - Personalized recommendations",
      "Conversational UI for quick queries and responses",
      "Voice command interaction for search and navigation",
      "Multi-language support for global accessibility",
      "Intuitive interface for hassle-free post creation and session scheduling",
    ],
  },
  // {
  //   name: "Fitrofy",
  //   imgUrl:
  //     "https://drive.google.com/uc?export=view&id=1Zp6gko4KpOZrDfXq3qd7mkHaEXkwqsSR",
  //   description:
  //     "The Fitrofy landing page serves as a gateway for users to seamlessly register, explore the wide array of features offered by Fitrofy, an AI-driven company specializing in personalized diet recommendations. These recommendations are tailored based on individual food habits, medical data, and specific health conditions. Additionally, users can easily reach out to the Fitrofy team and access comprehensive reviews about the company's services.",
  //   features: [
  //     "User-friendly registration process",
  //     "In-depth showcase of Fitrofy's AI-based diet recommendation system",
  //     "Personalized dietary suggestions based on individual food habits and medical data",
  //     "Customized diet plans for specific health conditions",
  //     "Direct communication with the Fitrofy team for inquiries or assistance",
  //     "Access to a repository of comprehensive reviews highlighting the company's services and effectiveness",
  //   ],
  // },

  {
    name: "StoreHelp -  order management for local shops and online businesses ",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FStoreHelpCrop.png?alt=media&token=56300720-e6cb-4c36-ba15-1b4f903bd875",
    description:
      "StoreHelp revolutionizes order management for local shops and online businesses. It eliminates the need for cumbersome excel sheets and notepads, offering a custom-built store manager. Say goodbye to manual tracking and hello to seamless sales management.",
    features: [
      "Dashboard for an at-a-glance overview of operations",
      "Customer Stats for understanding consumer behavior",
      "Product Inventory for efficient stock management",
      "Custom Margin settings for flexible pricing strategies",
    ],
  },
  {
    name: "Vokal - Google Translate for the Mute",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FVokal.png?alt=media&token=8be44235-79fb-47d4-88d6-ecfbf379a416",
    description:
      "Vokal aims to bridge the communication gap for speech-disabled individuals. While technologies like Google Translator excel in written translation, the mute community lacks a service that translates sign language. This project was motivated by the need to provide a platform that understands sign language and converts it into a user-friendly format, thereby giving voice to the muted.",
    features: [
      "Hand Pose Detection using Machine Learning",
      "Enables speech for mute individuals using sign language",
      "Responds with corresponding text based on hand gestures",
      "Provides spoken representation of sign language for seamless communication",
    ],
  },

  {
    name: "hAIr - AI for our HRs",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FhairCrop.png?alt=media&token=c8ad8aaf-a2a8-48ff-a6df-bc996d8e1ab1",
    description:
      "The Hello Doc Project was born out of a real-life incident where a friend experienced a severe health issue due to a misunderstanding of her prescription. This inspired us to create a tech solution, HelloDoc, a web application designed to prevent such occurrences. It serves as a prescription guide for doctors, allowing them to digitally prescribe medicines with authenticated, error-free prescriptions.",
    features: [
      "Web application for doctors to digitally prescribe medicines",
      "Integrated with hellosign for authorized digital signatures",
      "Ensures accurate prescriptions with no spelling mistakes or incorrect doses",
      "Front-end built with React JS, JavaScript, HTML, and CSS",
      "Back-end created with Python, utilizing Fast API for efficient handling of requests",
      "MongoDB database integration for data management",
      "Accomplished system design for user-friendly login and dashboard",
      "Successfully solved the core problem, providing a reliable solution for prescription accuracy",
    ],
  },

  {
    name: "Landing Page for an Astrolger",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FRitu.png?alt=media&token=466ca488-908d-474b-b1ab-21ac21bcd627",
    description: "",
    features: [
      "Autocorrects search queries for accurate results",
      "Auto-recommends relevant insurance keywords",
      "Auto-suggests options to streamline the search process",
      "Utilizes fuzzy-wuzzy search and linear support vector for precision",
    ],
  },
  // {
  //   name: "CaricatureAI",
  //   imgUrl:
  //     "https://drive.google.com/uc?export=view&id=1oMG_l9wzT9rYz-XwiXwyJ76kErSqjBG9",
  //   description:
  //     "CaricatureAI is a landing page project that serves as a gateway to a powerful tool. It utilizes advanced deep learning algorithms to transform regular images into AI-generated caricatures. This platform empowers users to create their own unique caricatures, suitable for both male and female faces.",
  //   features: [
  //     "Generate caricatures using advanced AI technology",
  //     "Works seamlessly for both male and female faces",
  //     "Sample caricatures provided for reference",
  //     "Share on social media to receive 3 FREE caricatures (after creating caricatures once)",
  //     "Privacy Policy and Contact information provided for user assurance",
  //   ],
  // },
];

const servicesSection = {
  title: "Services We Offer",
  description:
    "It's a low cost effective solution which can be completely designed as per the company's requirements.",
  services: [
    {
      title: "AI and Machine Learning-Powered Solutions",
      description:
        "Leverage the power of Artificial Intelligence and Machine Learning to create websites, landing pages, and applications that think, learn, and adapt.",
      icon: LaptopCodeIcon,
    },
    {
      title: "Data Science Projects",
      description:
        "Transform raw data into actionable insights with our expert Data Science services, driving informed decision-making and business growth.",
      icon: ChartIcon,
    },
    {
      title: "Backend Heavy Projects",
      description:
        "We specialize in building robust, scalable backend systems that form the backbone of your applications.",
      icon: ServerIcon,
    },
    {
      title: "Management Software",
      description:
        "Streamline your operations with customized management software solutions designed to fit your business like a glove.",
      icon: CogIcon,
    },
    {
      title: "Deep Learning Projects",
      description:
        "Unleash the potential of Deep Learning for tasks that require complex pattern recognition and decision-making.",
      icon: RobotIcon,
    },
    // {
    //   title: "Hackathon Strategies",
    //   description:
    //     "Leverage our experience in over 14+ National Level Hackathons, including 4+ National and International level victories, to craft winning strategies for your own competitive endeavors.",
    //   icon: TrophyIcon,
    // },
    {
      title: "Mentoring in Different Tech Stacks",
      description:
        "Benefit from our extensive experience in mentoring students across various technology stacks, with over 2000+ hours dedicated to empowering the next generation of innovators and developers.",
      icon: AcademicCapIcon,
    },
  ],
};

const metricsContent = {
  facts: [
    {
      number: "20+",
      text: "National and International Finales",
    },
    {
      number: "10",
      text: "Top 3 Finishes in Finales",
    },
    {
      number: "15+",
      text: "Freelance Projects Developed",
    },
  ],
};

const testimonialsContent = {
  title: "What our clients/mentors have said",
  testimonials: [
    {
      name: "Shobha Yadav",
      designation: "CEO, Robogems",
      image:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/Testimonials%20Profile%20Pics%2FShobha.png?alt=media&token=b076d941-d9fe-4f71-8cde-4625d090b83d",
      description:
        "Chethan and Subhanu dedicated over 400 hours mentoring us at Robogems. Their expertise in ML, web dev, LLMs, and backend elevated our capabilities.",
    },

    {
      name: "Dr. D Elangovan",
      designation: "Director, TIFAC",
      image:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/Testimonials%20Profile%20Pics%2FElangovan.png?alt=media&token=5a4acd11-373a-4943-a2dc-cd9d57ad6351",
      description:
        "Chethan and Subhanu worked wonders for us. They spearheaded two pivotal projects - the PhysioPlus CMR and an autonomous drone inventory system.",
    },
    {
      name: "Sarthak",
      designation: "CEO, SmartDiet",
      image:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/Testimonials%20Profile%20Pics%2FSarthak.png?alt=media&token=344cca53-a26f-4941-97e4-b57e6e60b45c",
      description:
        "Chethan and Subhanu automated PDF generation and developed an AI-powered diet chatbot for us. Their innovation exceeded our expectations",
    },
  ],
};

const clientsContent = {
  title: "8+ companies we have worked for",
  listOfClients: [
    // {
    //   logoURL:
    //     "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2FDanfoss-removebg-preview.png?alt=media&token=f42d3cbe-5f1b-4f9b-9edf-1a3624feec67",
    //   name: "Danfoss",
    // },
    {
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2FDropbox-removebg-preview.png?alt=media&token=29aee21e-f41d-4b3f-be06-4c2c69b72ca5",
      name: "Dropbox",
    },
    {
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2FHoneywell-removebg-preview.png?alt=media&token=e4a60120-2bdb-495e-b907-1deb72661368",
      name: "Honeywell",
    },
    {
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2Famadeus-removebg-preview.png?alt=media&token=e4bae56e-9e74-4b0b-a47d-ed530bd374f0",
      name: "Amadeus",
    },
    {
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2Faxisbank-removebg-preview.png?alt=media&token=88db3579-6e92-45a0-afc9-ae31d237eb1b",
      name: "Axis Bank",
    },
    {
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2Fbajajfinserv.png?alt=media&token=fc6f418d-0a77-4905-8908-1ce3375cf549",
      name: "Bajaj Finserv",
    },
    {
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2Fsamsung_-removebg-preview.png?alt=media&token=b4aeb8f3-a8f6-47e1-b491-69b7b2e0d630",
      name: "Samsung",
    },
    // {
    //   logoURL:
    //     "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2Fsirionlabs-removebg-preview.png?alt=media&token=29c1455a-cff1-4e76-ad64-96d23a6bf893",
    //   name: "Sirion Labs",
    // },
    {
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2Ftekie-removebg-preview.png?alt=media&token=19e8af3c-32fb-4a0a-a80b-b76889bd4536",
      name: "Tekie",
    },
    {
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/company_logos%2Fwalmart-removebg-preview.png?alt=media&token=8c58255c-812f-4467-b117-ba6ee1ac0cfa",
      name: "Walmart",
    },
    
  ],
};

const footerContent = {
  name: "Appneurons Technologies Pvt. Ltd.",
  description: "We are a team of 10+ people working on this product.",
  socialLinks: [
    {
      name: "facebook",
      href: "https://www.facebook.com/fitrofy",
      icon: FacebookIcon,
    },
    {
      name: "hrefedin",
      href: "https://www.linkedin.com/company/77886256/admin/feed/posts/",
      icon: LinkedinIcon,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/fitrofy/",
      icon: InstagramIcon,
    },
  ],
  copyrightText:
    "Copyright 2023 © All rights reserved by “Appneurons Technologies Private Limited”",
  navLinkTitle: "Quick Links",
  navLinks: [
    { name: "About Us", href: "https://fitrofy.com/about-us/" },
    { name: "How it works?", href: "https://fitrofy.com/how-it-work/" },
    { name: "Blog", href: "https://fitrofy.com/blog/" },
    {
      name: "Terms & Conditions",
      href: "https://fitrofy.com/terms-conditions/",
    },
    { name: "Privacy Policy", href: "https://fitrofy.com/privacy-policy/" },
  ],
};

export {
  services,
  projects,
  servicesSection,
  metricsContent,
  clientsContent,
  testimonialsContent,
};
