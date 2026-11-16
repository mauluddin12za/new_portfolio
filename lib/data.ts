import html from "@/assets/skills/html.svg";
import css from "@/assets/skills/css.svg";
import js from "@/assets/skills/js.svg";
import nextjs from "@/assets/skills/nextjs.svg";
import expressjs from "@/assets/skills/expressjs.svg";
import mysql from "@/assets/skills/mysql.svg";
import firebase from "@/assets/skills/firebase.svg";
import aws from "@/assets/skills/aws.svg";
import tensorflow from "@/assets/skills/tensorflow.svg";
import python from "@/assets/skills/python.svg";
import docker from "@/assets/skills/docker.svg";
import { Github, Linkedin, Mail } from "lucide-react";

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { k: "±3 Yrs", v: "Web dev experience" },
  { k: "9+", v: "Shipped projects" },
  { k: "4", v: "Freelance clients" },
  { k: "M.Kom", v: "Sriwijaya University" },
];

export const projects = [
  {
    title: "AI Esports Training Companion",
    tag: "AI Product",
    year: "2026",
    blurb:
      "An advanced AI-powered coaching engine that analyzes gameplay telemetry to deliver hyper-personalized feedback, helping players improve decision-making, mechanics, and competitive consistency through structured esports training simulations.",
    stack: ["Next.js", "Gemini AI"],
    image: "/images/projects/ai_esport_training_companion.png",
    liveDemo: "https://esports-training-companion.hidayatmauluddin.my.id/",
    links: [
      {
        label: "Github",
        url: "https://github.com/mauluddin12za/ai-esports-training-companion",
      },
    ],
    accent: "from-cyan-400/30 to-blue-500/10",
  },

  {
    title: "AI Sales Page Builder",
    tag: "AI SaaS Tool",
    year: "2026",
    blurb:
      "A full-stack AI SaaS platform that automates persuasive copywriting and responsive page generation, transforming structured product data into production-ready sales pages with exportable HTML output and multiple conversion-focused layouts.",
    stack: ["Next.js", "Gemini AI", "Laravel", "MySQL"],
    image: "/images/projects/sales_page_builder.png",
    liveDemo: "https://sales-page-builder.hidayatmauluddin.my.id/",
    links: [],
    accent: "from-violet-400/30 to-fuchsia-500/10",
  },

  {
    title: "Attendance PWA - FKIP Universitas Sriwijaya",
    tag: "Enterprise PWA",
    year: "2025",
    blurb:
      "An enterprise-grade attendance management platform with geolocation validation, role-based access control, and centralized monitoring to secure academic attendance records and reduce fraudulent check-ins across campus environments.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/attendance_pwa.png",
    liveDemo: "https://attendance-pwa.hidayatmauluddin.my.id",
    links: [],
    accent: "from-emerald-400/30 to-teal-500/10",
  },

  {
    title: "Point of Sale - Warung 19",
    tag: "POS System",
    year: "2025",
    blurb:
      "A restaurant operating system designed to streamline ordering, cashier operations, and inventory synchronization through a centralized dashboard. Processed 2,601 transactions across 10,176 items sold, eliminating manual tally and saving hours of end-of-day reconciliation.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/pos_warung19.png",
    liveDemo: "https://pos-resto.hidayatmauluddin.my.id",
    links: [],
    accent: "from-amber-400/30 to-orange-500/10",
  },

  {
    title: "Hambali Furniture",
    tag: "Company Profile Website",
    year: "2023",
    blurb:
      "Corporate furniture catalog platform featuring a custom admin dashboard for managing product listings, showroom content, and company information through a centralized content management workflow.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/hambali_furniture.png",
    liveDemo: "https://hambali-furniture.hidayatmauluddin.my.id",
    links: [],
    accent: "from-pink-400/30 to-rose-500/10",
  },

  {
    title: "Score Tracker",
    tag: "Education System",
    year: "2024",
    blurb:
      "Academic analytics platform for managing, tracking, and visualizing student performance through interactive dashboards, score reporting systems, and centralized educational data management.",
    stack: ["Vite React", "Express.js", "MySQL"],
    image: "/images/projects/score_tracker.png",
    liveDemo: "https://score-tracker.hidayatmauluddin.my.id",
    links: [],
    accent: "from-sky-400/30 to-indigo-500/10",
  },
  {
    title: "Store Finder",
    tag: "Frontend Project",
    year: "2024",
    blurb:
      "Responsive location-based storefront exploration interface designed to improve product discovery and nearby store navigation through category filtering, modern layouts, and optimized user experience flows.",
    stack: ["Vite React"],
    image: "/images/projects/storefindercover.png",
    liveDemo: "https://store-finder.hidayatmauluddin.my.id",
    links: [
      {
        label: "Case Study",
        url: "https://uxdesigner-portfolio-hidayat-mauluddin.vercel.app/casestudy/store-finder-web-responsive-design",
      },
    ],
    accent: "from-lime-400/30 to-green-500/10",
  },
  {
    title: "Isuzu Salesperson Website",
    tag: "Company Website",
    year: "2022",
    blurb:
      "Automotive product showcase and inquiry management platform built to help sales representatives organize vehicle catalogs, manage customer leads, and improve sales communication workflows.",
    stack: ["CodeIgniter", "MySQL"],
    image: "/images/projects/isuzu_sumsel.png",
    liveDemo: "https://isuzu-sumsel.hidayatmauluddin.my.id",
    links: [
      {
        label: "Fullstack",
        url: "https://github.com/mauluddin12za/isuzu-sumsel",
      },
    ],
    accent: "from-stone-400/30 to-zinc-500/10",
  },
];

export const experience = [
  {
    role: "Freelance Fullstack Developer — Attendance Progressive Web Application",
    company: "Sriwijaya University",
    period: "Oct — Dec 2025",
    bullets: [
      "Engineered a high-performance, location-aware PWA that eliminated attendance fraud through precise radius-based geolocation validation.",
      "Designed and deployed secure, optimized MySQL database schemas handling relational academic records without latency.",
      "Architected secure RESTful APIs and robust role-based authentication (RBAC) separating administrative, staff, and user privileges.",
      "Optimized frontend bundle size in Next.js, ensuring seamless mobile accessibility even under low-bandwidth campus networks.",
    ],
  },
  {
    role: "Freelance Fullstack Developer — POS Web Application",
    company: "Pempek 19 Cafe",
    period: "Aug 2025",
    bullets: [
      "Developed a custom, zero-lag Point of Sale platform tailored to streamline peak-hour ordering and real-time inventory management.",
      "Processed 2,601 transactions across 10,176 items sold, eliminating manual tally and saving hours of end-of-day reconciliation.",
      "Created an automated CRUD workflow for live stock updates, preventing inventory discrepancies between kitchen staff and cashiers.",
      "Implemented ironclad backend authorization to secure daily sales data and financial audit trails from unauthorized access.",
    ],
  },
  {
    role: "Master's Researcher — Facial Image Restoration (CNN + U-Net)",
    company: "Universitas Sriwijaya",
    period: "2023 — 2026",
    bullets: [
      "Completed M.Kom (Master of Computer Science) while conducting full-time thesis research on adaptive image restoration.",
      'Authored thesis: "Enhancing Facial Image Restoration Using CNN for Blur Severity Classification and U-Net for Deblurring".',
      "Achieved PSNR 40.001 dB / SSIM 0.990 (very-low blur) on the FFHQ dataset, consistently outperforming fixed and multi-kernel baselines across all five severity levels.",
      "Applied CNN for blur severity classification (5 classes) feeding the most suitable U-Net deblurring model per image, optimizing restoration quality.",
    ],
  },
  {
    role: "Freelance Fullstack Developer — Company Website & Admin Dashboard",
    company: "Hambali Furniture",
    period: "Jun — Jul 2023",
    bullets: [
      "Developed a responsive company website using Next.js.",
      "Built an admin dashboard for dynamic content and product management.",
      "Created and integrated REST APIs between frontend and backend services.",
      "Optimized database queries and application performance for smoother operations.",
    ],
  },
  {
    role: "Freelance Web Developer — Automotive Sales Platform",
    company: "Isuzu Sales (South Sumatra)",
    period: "Mar 10, 2022 — Mar 17, 2022",
    bullets: [
      "Built a complete automotive sales website using CodeIgniter 3 and MySQL.",
      "Developed an admin panel for managing product listings and customer inquiries.",
      "Implemented backend logic for content and operational data management.",
      "Delivered the project within a short development timeline while maintaining functionality and usability.",
    ],
  },
];

export const stack = [
  { name: "HTML", icon: html, group: "Languages" },
  { name: "CSS", icon: css, group: "Languages" },
  { name: "JavaScript", icon: js, group: "Languages" },

  { name: "Next.js", icon: nextjs, group: "Framework" },
  { name: "Express.js", icon: expressjs, group: "Framework" },

  { name: "MySQL", icon: mysql, group: "Database" },

  { name: "Firebase", icon: firebase, group: "Cloud" },
  { name: "AWS", icon: aws, group: "Cloud" },

  { name: "TensorFlow", icon: tensorflow, group: "AI/ML" },

  { name: "Python", icon: python, group: "Languages" },
  { name: "Docker", icon: docker, group: "DevOps" },
];

export const certs = [
  {
    title: "Fundamentals of JavaScript Programming",
    org: "Dicoding",
    year: "2023",
    link: "https://drive.google.com/file/d/1wZK59Prb6-ZNsDpdGU9ozoGtONVTBv3W/view?usp=drive_link",
  },
  {
    title: "Building Back-End Applications for Beginners",
    org: "Dicoding",
    year: "2023",
    link: "https://drive.google.com/file/d/1MntTMNm1JmWyJxQw1l049WzcMzjVvMk_/view?usp=drive_link",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    org: "Dicoding",
    year: "2024",
    link: "https://drive.google.com/file/d/1IM80B6zZBeSfg_CpMvMwwTsBbHfb3lTM/view?usp=drive_link",
  },
  {
    title: "Data Analysis Using Python",
    org: "IBM",
    year: "2022",
    link: "https://drive.google.com/file/d/1cXzsBjnVvzNuSFt_mc3AFpZhObzfEGEU/view?usp=drive_link",
  },
  {
    title: "Data Visualization Using Python",
    org: "IBM",
    year: "2022",
    link: "https://drive.google.com/file/d/14a0B2SRHdxANivKTf5wqEpxCUfadwjEW/view?usp=drive_link",
  },
  {
    title: "Machine Learning Developer",
    org: "Independent",
    year: "2022",
    link: "https://drive.google.com/file/d/16Cg8r98-VJlyPgD6aOHAZK0Czm5V0XK2/view?usp=drive_link",
  },
  {
    title: "Applied Machine Learning",
    org: "Dicoding",
    year: "2023",
    link: "https://drive.google.com/file/d/1Fs_Jv9_uM1xlmiPXOUXSKhBXLUyeyLZH/view?usp=drive_link",
  },
  {
    title: "UX Design",
    org: "Google x Kominfo",
    year: "2022",
    link: "https://drive.google.com/file/d/1x-D-3wSLVykRpXEtg6YZX5CB8pooctTD/view?usp=drive_link",
  },
];

export const contacts = {
  github: {
    icon: Github,
    username: "mauluddin12z",
    url: "https://github.com/mauluddin12za",
    label: "GitHub",
  },

  linkedin: {
    icon: Linkedin,
    username: "hidayatmauluddin",
    url: "https://linkedin.com/in/hidayatmauluddin",
    label: "LinkedIn",
  },

  mail: {
    icon: Mail,
    email: "mauludindayat@gmail.com",
    url: "mailto:mauludindayat@gmail.com",
    label: "Email",
  },
};
