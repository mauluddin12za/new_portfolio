export const knowledge = [
  /**
   * PROFILE
   */
  {
    id: "profile-1",
    type: "profile",
    text: "Muhammad Hidayat Mauluddin is a Full-Stack Web Developer based in Palembang, Indonesia. He specializes in Next.js, Node.js, Express.js, and MySQL, with ±3 years of experience building scalable web applications, REST APIs, and AI-powered systems. He is also a machine learning researcher completing a Master of Computer Science (M.Kom) at Sriwijaya University.",
    keywords: [
      "fullstack",
      "web developer",
      "nextjs",
      "nodejs",
      "express",
      "backend",
      "frontend",
      "api",
      "developer",
      "portfolio",
      "ml",
      "researcher",
    ],
  },

  {
    id: "profile-2",
    type: "education",
    text: "He holds a Master of Computer Science (M.Kom) from Sriwijaya University (2023–2025, GPA 3.92) and a Bachelor's degree in Information Systems with a GPA of 3.66.",
    keywords: [
      "education",
      "university",
      "gpa",
      "master",
      "bachelor",
      "computer science",
      "degree",
      "informatics",
      "sriwijaya",
      "mkom",
    ],
  },

  /**
   * THESIS / RESEARCH
   */
  {
    id: "thesis-1",
    type: "research",
    text: "His M.Kom thesis is titled 'Enhancing Facial Image Restoration Using CNN for Blur Severity Classification and U-Net for Deblurring'. The proposed method classifies blur severity into five levels (very low, low, medium, high, very high) using a CNN, then routes each image to the most suitable U-Net deblurring model. Dataset: Flickr-Faces-HQ (FFHQ) with Gaussian blur applied. Results: PSNR 40.001 dB / SSIM 0.990 (very low); PSNR 31.104 dB / SSIM 0.946 (low); PSNR 27.995 dB / SSIM 0.874 (medium); PSNR 28.896 dB / SSIM 0.855 (high); PSNR 26.566 dB / SSIM 0.812 (very high). The method consistently outperforms fixed-kernel and multi-kernel baselines across all severity levels.",
    keywords: [
      "thesis",
      "research",
      "cnn",
      "unet",
      "image restoration",
      "deblurring",
      "psnr",
      "ssim",
      "ffhq",
      "gaussian blur",
      "blur severity",
      "facial image",
      "deep learning",
      "machine learning",
      "mkom",
    ],
  },

  /**
   * EXPERIENCE
   */
  {
    id: "exp-1",
    type: "experience",
    text: "Freelance Fullstack Developer (Oct–Dec 2025) at Sriwijaya University: Built a location-based attendance PWA using Next.js and Node.js with REST APIs, authentication, role-based access control (RBAC), geolocation validation, and MySQL optimization.",
    keywords: [
      "pwa",
      "attendance",
      "nextjs",
      "nodejs",
      "api",
      "auth",
      "mysql",
      "geolocation",
      "2025",
      "rbac",
    ],
  },
  {
    id: "exp-2",
    type: "experience",
    text: "Freelance Fullstack Developer (Aug 2025) for Pempek 19 Cafe: Built a POS system using Next.js and Node.js with authentication, product management, and transaction handling. Processed 2,601 transactions across 10,176 items sold, eliminating manual tally and saving hours of end-of-day reconciliation.",
    keywords: [
      "pos",
      "point of sale",
      "nextjs",
      "nodejs",
      "crud",
      "inventory",
      "authentication",
      "freelance",
      "sales",
      "transaction",
      "2025",
      "restaurant",
    ],
  },
  {
    id: "exp-3",
    type: "experience",
    text: "Master's Researcher (2023–2026) at Universitas Sriwijaya: Completed M.Kom while conducting thesis research on adaptive facial image restoration using CNN and U-Net. Research gap from client freelance work during this period.",
    keywords: [
      "master",
      "mkom",
      "thesis",
      "researcher",
      "cnn",
      "unet",
      "sriwijaya",
      "2023",
      "2024",
      "2025",
      "2026",
    ],
  },
  {
    id: "exp-4",
    type: "experience",
    text: "Freelance Developer (Jun–Jul 2023) for Hambali Furniture: Built a responsive company website and admin dashboard using Next.js, integrated REST APIs, and optimized database queries for performance.",
    keywords: [
      "website",
      "admin dashboard",
      "nextjs",
      "api",
      "database",
      "optimization",
      "freelance",
      "cms",
      "2023",
    ],
  },
  {
    id: "exp-5",
    type: "experience",
    text: "Freelance Web Developer (Mar 2022) for Isuzu Sales South Sumatra: Developed a full sales website using CodeIgniter 3 and MySQL with admin panel for managing listings and customer inquiries. Delivered within a one-week timeline.",
    keywords: [
      "codeigniter",
      "php",
      "mysql",
      "website",
      "admin panel",
      "freelance",
      "sales",
      "crm",
      "2022",
    ],
  },

  /**
   * PROJECTS
   */
  {
    id: "project-1",
    type: "project",
    text: "AI Esports Training Companion (2025) is an AI-powered esports coaching platform that simulates structured training sessions to improve player decision-making, gameplay habits, and mindset using Next.js and Gemini AI.",
    keywords: [
      "ai",
      "esports",
      "nextjs",
      "gemini",
      "training",
      "coaching",
      "simulation",
      "gameplay",
      "2026",
    ],
  },
  {
    id: "project-2",
    type: "project",
    text: "AI Sales Page Builder (2026) is a full-stack AI SaaS tool that converts structured product inputs into high-converting sales pages with multiple templates and exportable HTML output using Next.js, Gemini AI, Laravel, and MySQL. This is a private client project.",
    keywords: [
      "ai",
      "saas",
      "nextjs",
      "laravel",
      "mysql",
      "sales page",
      "generator",
      "automation",
      "gemini",
      "2026",
    ],
  },
  {
    id: "project-3",
    type: "project",
    text: "Attendance PWA (2025) is a location-based attendance system for FKIP Sriwijaya University with role-based access control, geolocation validation, and full CRUD management built using Next.js, Express.js, and MySQL. This is a private client project.",
    keywords: [
      "pwa",
      "attendance",
      "nextjs",
      "express",
      "mysql",
      "geolocation",
      "crud",
      "authentication",
      "2025",
      "unsri",
    ],
  },
  {
    id: "project-4",
    type: "project",
    text: "Point of Sale - Warung 19 (2025) is a web-based POS system to manage restaurant orders, transactions, and admin operations. Processed 2,601 transactions across 10,176 items sold. Built using Next.js, Express.js, and MySQL. This is a private client project.",
    keywords: [
      "pos",
      "restaurant",
      "nextjs",
      "express",
      "mysql",
      "admin",
      "transactions",
      "2025",
      "warung19",
    ],
  },
  {
    id: "project-5",
    type: "project",
    text: "Hambali Furniture (2023) is a company profile platform with admin dashboard for product and content management to improve online visibility and store operations. Built using Next.js, Express.js, and MySQL. This is a private client project.",
    keywords: [
      "ecommerce",
      "nextjs",
      "express",
      "mysql",
      "admin dashboard",
      "shop",
      "cms",
      "2023",
    ],
  },
  {
    id: "project-6",
    type: "project",
    text: "Score Tracker (2024) is an academic performance system for tracking, analyzing, and visualizing student scores using dashboards and reports. Built using Vite React, Express.js, and MySQL. This is a private client project.",
    keywords: [
      "education",
      "dashboard",
      "react",
      "express",
      "mysql",
      "analytics",
      "students",
      "2024",
    ],
  },
  {
    id: "project-7",
    type: "project",
    text: "Store Finder (2024) is a location-based discovery platform that helps users find stores and products based on proximity and category. Built using Vite React. UI/UX case study available.",
    keywords: ["react", "ui", "ux", "location", "store", "frontend", "2024"],
  },
  {
    id: "project-8",
    type: "project",
    text: "Isuzu Sales Website (2022) is a company website and product catalog system with admin panel for managing listings and customer inquiries. Built using CodeIgniter 3 and MySQL.",
    keywords: ["codeigniter", "php", "mysql", "sales", "admin panel", "crm", "website", "2022"],
  },

  /**
   * SKILLS
   */
  {
    id: "skill-1",
    type: "skills",
    text: "Frontend: HTML, CSS, JavaScript, Next.js, React. Backend: Node.js, Express.js. Database: MySQL. Cloud: AWS, Firebase. DevOps: Docker. AI/ML: TensorFlow, Python, Keras, CNN, U-Net.",
    keywords: [
      "html",
      "css",
      "javascript",
      "nextjs",
      "nodejs",
      "express",
      "mysql",
      "aws",
      "firebase",
      "docker",
      "tensorflow",
      "python",
      "ai",
      "ml",
      "react",
      "keras",
    ],
  },

  /**
   * MACHINE LEARNING / RESEARCH
   */
  {
    id: "ml-1",
    type: "machine-learning",
    text: "Machine learning experience includes: (1) Facial image restoration using CNN for blur severity classification and U-Net for deblurring — thesis research, achieving PSNR 40.001 dB / SSIM 0.990 on FFHQ dataset. (2) Heart attack prediction using ANN optimized with Genetic Algorithm (GA) and Particle Swarm Optimization (PSO).",
    keywords: [
      "machine learning",
      "ml",
      "cnn",
      "unet",
      "ann",
      "deep learning",
      "ai",
      "ga",
      "pso",
      "tensorflow",
      "image restoration",
      "deblurring",
    ],
  },

  /**
   * CERTIFICATIONS
   */
  {
    id: "cert-1",
    type: "certification",
    text: "Certified in JavaScript Programming (Dicoding, 2023), Back-End Development (Dicoding, 2023), AWS Cloud Practitioner Essentials (Dicoding, 2024), Data Analysis with Python (IBM, 2022), Data Visualization with Python (IBM, 2022), Machine Learning Developer (2022), Applied Machine Learning (Dicoding, 2023), and UX Design (Google x Kominfo, 2022).",
    keywords: [
      "certificate",
      "certification",
      "aws",
      "dicoding",
      "ibm",
      "ux",
      "javascript",
      "python",
      "machine learning",
      "google",
    ],
  },

  /**
   * CONTACT
   */
  {
    id: "contact-1",
    type: "contact",
    text: "Contact: GitHub (github.com/mauluddin12z), LinkedIn (linkedin.com/in/hidayatmauluddin), Email (mauludindayat@gmail.com), Telegram (@mauluddin12z).",
    keywords: ["github", "linkedin", "email", "contact", "reach", "telegram"],
  },
];
