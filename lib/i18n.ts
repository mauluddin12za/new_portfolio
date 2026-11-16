import { Locale } from "@/context/LanguageContext";

export const translations = {
  en: {
    nav: {
      work: "Work",
      experience: "Experience",
      stack: "Stack",
      contact: "Contact",
      cta: "Start a Project",
    },
    hero: {
      badge: "Available for Full-Stack Web Development Projects",
      headlinePrefix: "Crafting fast, scalable,",
      headlineGradient: "production-grade",
      headlineSuffix: "web applications.",
      intro:
        "I'm Hidayat Mauluddin - a Full-Stack Web Developer building scalable and high-performance web applications with Next.js, React, Node.js, and MySQL. Specialized in secure backend architecture, REST APIs, and AI-powered integrations that create smarter digital experiences.",
      viewWork: "View Selected Work",
      getInTouch: "Get in Touch",
      stats: [
        { k: "±3 Yrs", v: "Web dev experience" },
        { k: "9+", v: "Shipped projects" },
        { k: "4", v: "Freelance clients" },
        { k: "M.Kom", v: "Sriwijaya University" },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      title: "Products that earned their keep.",
      sub: "A handful of projects I've designed, built, and shipped — picked because they solved real problems for real people.",
      code: "Code",
      liveDemo: "Live Demo",
      projects: {
        "AI Esports Training Companion": {
          tag: "AI Product",
          blurb:
            "An advanced AI-powered coaching engine that analyzes gameplay telemetry to deliver hyper-personalized feedback, helping players improve decision-making, mechanics, and competitive consistency through structured esports training simulations.",
        },
        "AI Sales Page Builder": {
          tag: "AI SaaS Tool",
          blurb:
            "A full-stack AI SaaS platform that automates persuasive copywriting and responsive page generation, transforming structured product data into production-ready sales pages with exportable HTML output and multiple conversion-focused layouts.",
        },
        "Attendance PWA - FKIP Universitas Sriwijaya": {
          tag: "Enterprise PWA",
          blurb:
            "An enterprise-grade attendance management platform with geolocation validation, role-based access control, and centralized monitoring to secure academic attendance records and reduce fraudulent check-ins across campus environments.",
        },
        "Point of Sale - Warung 19": {
          tag: "POS System",
          blurb:
            "A restaurant operating system designed to streamline ordering, cashier operations, and inventory synchronization through a centralized dashboard. Processed 2,601 transactions across 10,176 items sold, eliminating manual tally and saving hours of end-of-day reconciliation.",
        },
        "Hambali Furniture": {
          tag: "Company Profile Website",
          blurb:
            "Corporate furniture catalog platform featuring a custom admin dashboard for managing product listings, showroom content, and company information through a centralized content management workflow.",
        },
        "Score Tracker": {
          tag: "Education System",
          blurb:
            "Academic analytics platform for managing, tracking, and visualizing student performance through interactive dashboards, score reporting systems, and centralized educational data management.",
        },
        "Store Finder": {
          tag: "Frontend Project",
          blurb:
            "Responsive location-based storefront exploration interface designed to improve product discovery and nearby store navigation through category filtering, modern layouts, and optimized user experience flows.",
        },
        "Isuzu Salesperson Website": {
          tag: "Company Website",
          blurb:
            "Automotive product showcase and inquiry management platform built to help sales representatives organize vehicle catalogs, manage customer leads, and improve sales communication workflows.",
        },
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "A timeline of compounding craft.",
      sub: "±3 years of freelance engineering across web applications, enterprise platforms, and academic AI research.",
      items: [
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
      ],
    },
    stack: {
      eyebrow: "Toolkit",
      title: "The stack I reach for.",
      sub: "Battle-tested choices that prioritize developer velocity, runtime performance, and operational sanity.",
    },
    certs: {
      eyebrow: "Credentials",
      title: "Certifications & continuous learning.",
      issued: "Issued",
    },
    contact: {
      badge: "Currently accepting new projects",
      headingPrefix: "Let's build something",
      headingGradient: "worth shipping.",
      description:
        "Have a product idea, an open role, or a thorny engineering problem? I read every message and reply within 24 hours.",
      connectLinkedIn: "Connect on LinkedIn",
      emailLabel: "Email",
      basedInLabel: "Based in",
      basedInValue: "Palembang, ID",
      responseLabel: "Response",
      responseValue: "Within 24 hours",
    },
    footer: {
      text: "© 2026 Hidayat Mauluddin. Crafted with care.",
    },
    chatbot: {
      title: "Ask Hidayat",
      sub: "Typically replies in seconds",
      initialMessage:
        "Hey there 👋 I'm Hidayat's assistant. Ask me anything about his work, stack, or availability.",
      placeholder: "Type a message…",
      typing: "Assistant is typing...",
    },
  },
  id: {
    nav: {
      work: "Proyek",
      experience: "Pengalaman",
      stack: "Keahlian",
      contact: "Kontak",
      cta: "Mulai Proyek",
    },
    hero: {
      badge: "Terbuka untuk Proyek Full-Stack Web Development",
      headlinePrefix: "Membangun aplikasi web yang cepat, skalabel,",
      headlineGradient: "siap produksi.",
      headlineSuffix: "",
      intro:
        "Saya Hidayat Mauluddin - seorang Full-Stack Web Developer yang membangun aplikasi web skalabel dan berkinerja tinggi dengan Next.js, React, Node.js, dan MySQL. Spesialisasi dalam arsitektur backend yang aman, REST API, dan integrasi berbasis AI untuk menciptakan pengalaman digital yang lebih cerdas.",
      viewWork: "Lihat Proyek Pilihan",
      getInTouch: "Hubungi Saya",
      stats: [
        { k: "±3 Thn", v: "Pengalaman web dev" },
        { k: "9+", v: "Proyek dirilis" },
        { k: "4", v: "Klien freelance" },
        { k: "M.Kom", v: "Universitas Sriwijaya" },
      ],
    },
    work: {
      eyebrow: "Proyek Pilihan",
      title: "Produk yang memberikan dampak nyata.",
      sub: "Kumpulan proyek yang telah saya rancang, bangun, dan rilis — dipilih karena memecahkan masalah nyata bagi pengguna.",
      code: "Kode",
      liveDemo: "Live Demo",
      projects: {
        "AI Esports Training Companion": {
          tag: "Produk AI",
          blurb:
            "Platform pelatihan esports berbasis AI yang menganalisis telemetri gameplay untuk memberikan umpan balik hiper-personal, membantu pemain meningkatkan pengambilan keputusan, mekanik, dan konsistensi kompetitif melalui simulasi terstruktur.",
        },
        "AI Sales Page Builder": {
          tag: "AI SaaS Tool",
          blurb:
            "Platform AI SaaS full-stack yang mengotomatisasi copywriting persuasif dan pembuatan halaman responsif, mengubah data produk terstruktur menjadi sales page siap pakai dengan ekspor HTML dan beragam tata letak fokus konversi.",
        },
        "Attendance PWA - FKIP Universitas Sriwijaya": {
          tag: "Enterprise PWA",
          blurb:
            "Platform manajemen presensi tingkat enterprise dengan validasi geolokasi, role-based access control (RBAC), dan pemantauan terpusat untuk mengamankan data presensi akademik serta mencegah kecurangan presensi di lingkungan kampus.",
        },
        "Point of Sale - Warung 19": {
          tag: "Sistem POS",
          blurb:
            "Sistem operasional restoran yang dirancang untuk mempermudah pemesanan, operasional kasir, dan sinkronisasi inventaris melalui dashboard terpusat. Telah memproses 2.601 transaksi dengan 10.176 item terjual, menghilangkan pencatatan manual dan menghemat waktu rekap harian.",
        },
        "Hambali Furniture": {
          tag: "Website Profil Perusahaan",
          blurb:
            "Platform katalog furnitur perusahaan dengan dashboard admin kustom untuk mengelola daftar produk, konten galeri showroom, dan informasi perusahaan melalui manajemen konten terpusat.",
        },
        "Score Tracker": {
          tag: "Sistem Pendidikan",
          blurb:
            "Platform analitik akademik untuk mengelola, melacak, dan memvisualisasikan performa siswa melalui dashboard interaktif, sistem pelaporan nilai, dan pengelolaan data pendidikan terpusat.",
        },
        "Store Finder": {
          tag: "Proyek Frontend",
          blurb:
            "Antarmuka eksplorasi gerai berbasis lokasi yang responsif, dirancang untuk mempermudah penemuan produk dan navigasi gerai terdekat melalui filter kategori, tata letak modern, dan alur pengguna yang optimal.",
        },
        "Isuzu Salesperson Website": {
          tag: "Website Perusahaan",
          blurb:
            "Platform showcase kendaraan dan manajemen prospek pelanggan untuk membantu tenaga penjualan mengelola katalog unit, menangani inquiry pembeli, dan mengoptimalkan komunikasi penjualan.",
        },
      },
    },
    experience: {
      eyebrow: "Pengalaman",
      title: "Rekam jejak dan perkembangan keahlian.",
      sub: "±3 tahun rekayasa perangkat lunak freelance mencakup aplikasi web, platform enterprise, dan riset AI akademik.",
      items: [
        {
          role: "Freelance Fullstack Developer — Attendance Progressive Web Application",
          company: "Universitas Sriwijaya",
          period: "Okt — Des 2025",
          bullets: [
            "Mengembangkan PWA berbasis lokasi berkinerja tinggi yang mengeliminasi kecurangan presensi melalui validasi geolokasi berbasis radius yang akurat.",
            "Merancang dan mengimplementasikan skema database MySQL teroptimasi yang menangani catatan akademik relasional tanpa latensi.",
            "Merancang arsitektur RESTful API yang aman dan otentikasi berbasis peran (RBAC) yang memisahkan hak akses admin, staf, dan pengguna.",
            "Mengoptimalkan bundle size frontend Next.js untuk memastikan aksesibilitas mobile yang lancar bahkan di jaringan kampus berkecepatan rendah.",
          ],
        },
        {
          role: "Freelance Fullstack Developer — POS Web Application",
          company: "Pempek 19 Cafe",
          period: "Agt 2025",
          bullets: [
            "Membangun platform Point of Sale kustom tanpa jeda (zero-lag) untuk mempercepat alur pesanan pada jam sibuk dan sinkronisasi stok real-time.",
            "Memproses 2.601 transaksi dengan 10.176 item terjual, menghilangkan pencatatan manual dan menghemat jam rekapitulasi harian.",
            "Membangun alur CRUD otomatis untuk pembaruan inventaris langsung guna mencegah selisih stok antara staf dapur dan kasir.",
            "Menerapkan otorisasi backend yang ketat untuk mengamankan data penjualan harian dan jejak audit keuangan dari akses tidak berwenang.",
          ],
        },
        {
          role: "Peneliti Magister — Restorasi Citra Wajah (CNN + U-Net)",
          company: "Universitas Sriwijaya",
          period: "2023 — 2026",
          bullets: [
            "Menyelesaikan studi Magister Ilmu Komputer (M.Kom) sembari melakukan riset tesis intensif mengenai restorasi citra adaptif.",
            'Menulis tesis: "Enhancing Facial Image Restoration Using CNN for Blur Severity Classification and U-Net for Deblurring".',
            "Meraih PSNR 40.001 dB / SSIM 0.990 (blur sangat rendah) pada dataset FFHQ, secara konsisten mengungguli baseline fixed-kernel dan multi-kernel di seluruh lima tingkat keparahan blur.",
            "Menerapkan klasifikasi tingkat blur (5 kelas) menggunakan CNN untuk memilih model restorasi U-Net paling sesuai per citra guna hasil optimal.",
          ],
        },
        {
          role: "Freelance Fullstack Developer — Website Perusahaan & Dashboard Admin",
          company: "Hambali Furniture",
          period: "Jun — Jul 2023",
          bullets: [
            "Mengembangkan website profil perusahaan yang responsif menggunakan Next.js.",
            "Membangun dashboard admin untuk pengelolaan konten dan katalog produk secara dinamis.",
            "Merancang dan mengintegrasikan REST API antara antarmuka frontend dan layanan backend.",
            "Mengoptimalkan query database dan performa aplikasi agar operasional berjalan lebih lancar.",
          ],
        },
        {
          role: "Freelance Web Developer — Platform Penjualan Otomotif",
          company: "Isuzu Sales (Sumatera Selatan)",
          period: "10 Mar 2022 — 17 Mar 2022",
          bullets: [
            "Membangun website penjualan otomotif lengkap menggunakan CodeIgniter 3 dan MySQL.",
            "Mengembangkan panel admin untuk manajemen daftar kendaraan dan formulir inquiry pelanggan.",
            "Mengimplementasikan logika backend untuk pengelolaan data konten dan operasional.",
            "Menyelesaikan proyek dalam tenggat waktu pengembangan yang singkat dengan mempertahankan kualitas fungsionalitas dan usability.",
          ],
        },
      ],
    },
    stack: {
      eyebrow: "Toolkit",
      title: "Teknologi yang saya andalkan.",
      sub: "Pilihan teruji yang mengutamakan kecepatan pengembangan, performa runtime, dan kemudahan pemeliharaan.",
    },
    certs: {
      eyebrow: "Kredensial",
      title: "Sertifikasi & pembelajaran berkelanjutan.",
      issued: "Diterbitkan",
    },
    contact: {
      badge: "Terbuka untuk proyek baru",
      headingPrefix: "Mari membangun karya yang",
      headingGradient: "berdampak nyata.",
      description:
        "Punya ide produk, peluang kerjasama, atau tantangan rekayasa teknis? Saya membaca setiap pesan dan membalas dalam 24 jam.",
      connectLinkedIn: "Hubungi di LinkedIn",
      emailLabel: "Email",
      basedInLabel: "Lokasi",
      basedInValue: "Palembang, ID",
      responseLabel: "Respon",
      responseValue: "Dalam 24 jam",
    },
    footer: {
      text: "© 2026 Hidayat Mauluddin. Dirancang dengan dedikasi.",
    },
    chatbot: {
      title: "Tanya Hidayat",
      sub: "Biasanya membalas dalam hitungan detik",
      initialMessage:
        "Halo 👋 Saya asisten virtual Hidayat. Tanyakan apa saja tentang proyek, keahlian, atau ketersediaannya.",
      placeholder: "Ketik pesan…",
      typing: "Asisten sedang mengetik...",
    },
  },
};

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en;
}
