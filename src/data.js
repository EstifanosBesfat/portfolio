import { Layout, Smartphone, BarChart3 } from "lucide-react";

export const profile = {
  name: "Estifanos Besfat",
  role: "Full Stack Engineer & Data Scientist",
  image: "/estifanosbesfat.jpg",
  bio: "I build scalable backend systems, real-time mobile applications, and machine learning models. I don't just write code; I design architectures that handle concurrency, spatial data, and complex business logic.",
  socials: {
    linkedin: "https://www.linkedin.com/in/estifanos-besfat-797427338/",
    github: "https://github.com/EstifanosBesfat",
    email: "mailto:estifanosbesfat@gmail.com" // Add your real email if you want
  }
};

export const skills = [
  "Node.js & Express", "PostgreSQL (PostGIS)", "Redis & Caching", 
  "Docker & CI/CD", "React & Tailwind", "Flutter (Mobile)", 
  "Python (Scikit-Learn)", "System Design"
];

export const projects = [
  {
    id: 1,
    title: "Real-Time Geospatial Delivery Engine",
    category: "System Design",
    tech: ["Node.js", "PostGIS", "Redis", "Socket.io", "Flutter", "Docker"],
    description: "An Uber-like delivery system handling real-time driver tracking and atomic ordering transactions.",
    features: [
      "Implemented Pessimistic Locking (FOR UPDATE SKIP LOCKED) to prevent double-booking drivers.",
      "Used PostGIS for high-performance geospatial queries (finding nearest driver within 5km).",
      "Built a Redis caching layer for sub-millisecond location reads.",
      "Developed a Flutter mobile app with live WebSocket updates on OpenStreetMap."
    ],
    links: {
      backend: "https://github.com/EstifanosBesfat/delivery-api",
      frontend: "https://github.com/EstifanosBesfat/delivery_app",
      demo: "https://www.loom.com/share/dbd32eb3728c464b9ce7706d05f7738b"
    },
    linkLabels: {
      demo: "Video Demo"
    },
    icon: Smartphone,
    iconClassName: "text-blue-400"
  },
  {
    id: 2,
    title: "Production-Grade Blog Platform",
    category: "Full Stack",
    tech: ["React", "Node.js", "PostgreSQL", "JWT", "Github Actions"],
    description: "A secure, decoupled blogging architecture designed for scalability and maintainability.",
    features: [
      "Engineered a Layered Architecture (Controller-Service-Repository) for clean separation of concerns.",
      "Implemented RBAC (Role-Based Access Control) and JWT stateless authentication.",
      "Set up automated CI/CD pipelines with Jest integration testing.",
      "Deployed distributed system: API on Render, Frontend on Vercel."
    ],
    links: {
      backend: "https://github.com/EstifanosBesfat/blog-api",
      frontend: "https://github.com/EstifanosBesfat/blog-frontend",
      demo: "https://blog-frontend-nine-woad.vercel.app"
    },
    icon: Layout,
    iconClassName: "text-green-400"
  },
  {
    id: 3,
    title: "Customer Intelligence & Sales AI",
    category: "Data Science",
    tech: ["Python", "KMeans Clustering", "Scikit-Learn", "Pandas", "Matplotlib"],
    description: "Machine Learning solutions to derive actionable business insights from raw data.",
    features: [
      "Customer Segmentation: Used Unsupervised Learning (KMeans) to group customers based on purchasing behavior.",
      "Sales Prediction: Built regression models to forecast Big Mart sales trends.",
      "Performed extensive EDA (Exploratory Data Analysis) and data preprocessing pipelines."
    ],
    links: {
      backend: "https://github.com/EstifanosBesfat/customer-segmentation-ml", // Rename key to 'repo' in code logic if needed
      frontend: "https://github.com/EstifanosBesfat/big-mart-sales-prediction",
      demo: ""
    },
    linkLabels: {
      backend: "Customer Segmentation Code",
      frontend: "Sales Prediction Code"
    },
    icon: BarChart3,
    iconClassName: "text-purple-400"
  }
];
