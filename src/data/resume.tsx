import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Arturo Avalos",
  initials: "AA",
  url: "https://aavalose.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Machine Learning Engineer & Data Scientist with Economics Background",
  summary:
    "Machine Learning Engineer and Data Scientist with a strong foundation in Economics. I specialize in developing AI solutions that bridge business challenges with cutting-edge technology. Currently pursuing my Master's in Data Science at USF, I've successfully deployed production-ready AI applications that have demonstrably improved operational efficiency and user experience. My unique combination of economic analysis and technical expertise allows me to deliver solutions that are both technically sophisticated and business-focused.",
  avatarUrl: "/portfolio/me.png",
  skills: [
    "Python",
    "PyTorch",
    "Hugging Face",
    "LangChain",
    "Scikit-Learn",
    "Apache Spark",
    "SQL (MySQL/Postgres)",
    "R Studio",
    "ChromaDB",
    "Streamlit",
    "Next.js",
    "TypeScript",
    "Git",
    "Docker"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "arturo.avalos4@gmail.com",
    tel: "+16282767921",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aavalose",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aavalose/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Contact Me",
        url: "mailto:arturo.avalos4@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ArsLab.AI",
      href: "https://arslab.ai/",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer",
      logoUrl: "/portfolio/arslab.png",
      start: "January 2025",
      end: "Current",
      description:
        "Developed AI-powered chatbots using Hugging Face models, PyTorch, and RAG, boosting inquiry response rates by 35% for a migration law firm. Built a chatbot for the University of San Francisco's MSDS program using Hugging Face models, Gemini's API, and ChromaDB, reducing faculty response needs by 60%. Optimized chatbot inference speed with GPU acceleration, cutting response time by 30% for improved real-time interactions.",
    },
    {
      company: "Numeraxial LLC",
      href: "https://www.numeraxial.com/",
      badges: [],
      location: "Remote",
      title: "Data Scientist",
      logoUrl: "/portfolio/numeraxial.jpeg",
      start: "October 2024",
      end: "January 2025",
      description:
        "Developed portfolio-balancing strategies using reinforcement learning to enhance financial decision-making. Optimized financial instrument selection for effective portfolio composition and collaborated with senior data scientists and portfolio managers to identify key investment insights and refine strategies.",
    },
    {
      company: "ClubFeast",
      badges: [],
      href: "https://app.clubfeast.com/",
      location: "Remote",
      title: "Data Analyst for City Operations ",
      logoUrl: "/portfolio/cf.png",
      start: "November 2023",
      end: "April 2024",
      description:
        "Optimized delivery operations by leveraging geospatial analysis, time-series forecasting, and clustering algorithms in Python, achieving a 20% reduction in delivery time and contributing to $250,000+ in revenue. Automated data cleaning pipelines using Python and SQL, streamlining reporting processes and improving efficiency across 400+ events.",
    },
    {
      company: "Invex Financial Group",
      href: "https://www.invex.us/",
      badges: [],
      location: "Mexico City, Mexico",
      title: "Economic Analyst",
      logoUrl: "/portfolio/invex.png",
      start: "January 2022",
      end: "December 2022",
      description:
        "Developed ARIMA-based time series forecasting models to predict Mexican inflation rates and the peso's exchange rate against the U.S. dollar, enhancing financial strategy and risk assessment. Conducted in-depth statistical analysis of macroeconomic indicators to identify trends and investment opportunities. Produced 50+ economic reports with data-driven insights on financial markets. Led the Economic Analysis department as interim Chief Economist, overseeing research, forecasting, and strategic reporting.",
    },
    {
      company: "Kurtz Ersa",
      href: "https://www.kurtzersa.com/",
      badges: [],
      location: "Wertheim, Germany",
      title: "Technical Specialist",
      logoUrl: "/portfolio/ke.jpeg",
      start: "August 2016",
      end: "June 2017",
      description:
        "Optimized user interfaces for soldering machines during an internship. Assembled and maintained soldering and molding machines.",
    },
  ],
  education: [
    {
      school: "University of San Francisco",
      href: "https://www.usfca.edu/arts-sciences/programs/graduate/data-science",
      degree: "Master's Degree in Data Science",
      logoUrl: "/portfolio/usf.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "University of St.Gallen",
      href: "https://www.unisg.ch/en/",
      degree: "Exchange Semester, Concentration in Business ",
      logoUrl: "/portfolio/hsg.jpeg",
      start: "2021",
      end: "2022",
    },
    {
      school: "Instituto Tecnológico de México",
      href: "https://www.itam.mx/en",
      degree: "Bachelor's Degree in Economics",
      logoUrl: "/portfolio/itam.png",
      start: "2018",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "USF MSDS Program Chatbot",
      href: "https://msds-chat-demo.streamlit.app/",
      dates: "January 2025 - Present",
      active: true,
      description:
        "Engineered an advanced AI-powered ChatBot for the USF MSDS program utilizing state-of-the-art LLM technologies. Implemented RAG architecture with Hugging Face models and Gemini API for accurate, context-aware responses. Leveraged ChromaDB for efficient vector storage and retrieval, resulting in a 60% reduction in faculty response load and significantly improved student experience. Deployed on Streamlit with a modern, user-friendly interface.",
      technologies: [
        "Python",
        "Hugging Face",
        "Gemini API",
        "ChromaDB",
        "RAG",
        "Streamlit",
        "Docker"
      ],
      links: [
        {
          type: "Website",
          href: "https://msds-chat-demo.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aavalose/msds_chat_demo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio/chabot.png",
      video: "",
    },
    {
      title: "Minutes Chat",
      href: "https://minuteschat.streamlit.app/",
      dates: "Oct 2024 - Jan 2025",
      active: true,
      description:
        "Developed an innovative NLP-powered analysis tool for Federal Open Market Committee (FOMC) meeting minutes. Implemented advanced text processing pipelines using BeautifulSoup and OpenAI's API to extract, analyze, and present key monetary policy insights. Built an intuitive question-answering interface that enables users to quickly access specific policy decisions and economic discussions, streamlining the research process for financial professionals.",
      technologies: [
        "Python",
        "OpenAI API",
        "NLP",
        "BeautifulSoup",
        "Streamlit",
        "Docker",
        "Git"
      ],
      links: [
        {
          type: "Website",
          href: "https://minuteschat.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aavalose/minutes_chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio/fomc.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Lo-fi Hackathon",
      dates: "February 17th - 18th, 2025",
      location: "San Francisco, CA",
      description:
        "Built an innovative web application that leverages machine learning to generate custom lo-fi beats and AI-generated artwork. Created a seamless user experience that allows users to customize their musical preferences and receive matching visual aesthetics. Implemented the solution using Python for backend processing, React for the frontend interface, and Stable Diffusion for image generation.",
      image: "/portfolio/lofi-hack.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
