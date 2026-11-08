// ─── Multi-app configuration — add or edit entries in APPS_DATA ───

import bubbleLevelLogo from '../assets/bubble-level.png';
import pdfConverterLogo from '../assets/pdf-converter-logo.png';
import plannerIcon from '../assets/planner-icon.png';
import portraitPhoto from '../assets/portrait.jpg';
import portfolioLogo from '../assets/portfolio-logo.svg';

export const PORTFOLIO = {
  name: 'Turan Hürkan Ergünsu',
  shortName: 'THE',
  role: 'Technical Computer Science Student | Web & Mobile App Developer',
  tagline:
    'Technical Computer Science student at Leibniz University Hannover, building software and shipping my own apps. I focus on mobile and cross-platform development with clean architecture. I’m driven by user-centered, performant, and scalable products.',
  logo: portfolioLogo,
  logoAlt: 'Turan Hürkan Ergünsu',
  portrait: portraitPhoto,
  portraitAlt: 'Portrait of Turan Hürkan Ergünsu',
  cvUrl: '/cv/turan-hurkan-ergunsu-cv.pdf',
  location: 'Hannover, Germany',
  email: 'hurkan.ergunsu@gmail.com',
  phone: '+49 176 21822471',
  links: {
    linkedin: 'https://de.linkedin.com/in/turan-h%C3%BCrkan-erg%C3%BCnsu-8b293a252',
    github: 'https://github.com/HurkanErgunsu',
    instagram: 'https://www.instagram.com/hurkanergunsu/',
    tiktok: null,
    facebook: null,
  },
  experience: [
    {
      id: 'dunkin',
      role: 'Team Member — Barista / Sales',
      company: "Dunkin' Donuts",
      period: '01/2025 — Present',
      city: 'Oberhausen',
      country: 'Germany',
      employmentType: 'Part-time',
      description:
        'Side job focused on drinks, customer service, sales, and store operations.',
      details: [
        'Prepare coffee and other drinks, and support guests at the counter.',
        'Help with sales and keep the warehouse and stock areas organized.',
        'Work in a fast-paced team environment with a focus on reliable service.',
      ],
    },
    {
      id: 'drdfleet-toloka',
      role: 'Student Trainee — Software Development',
      company: 'DRDFleet & Toloka AI',
      period: '10/2023 — 07/2024',
      city: 'Istanbul',
      country: 'Turkey',
      employmentType: 'Part-time',
      description:
        'Werkstudent role focused on software development, data quality, and reporting solutions.',
      details: [
        'Worked on in-depth data analysis with a strong focus on data quality.',
        'Contributed to the design of analysis and reporting solutions.',
        'DRD Fleet Leasing — Built and modernized responsive pages, handled API/database data flows, and helped deploy the project live (HTML, CSS, Bootstrap, JavaScript, jQuery, Vue, PHP, SQL, MySQL).',
        'Toloka AI — Contributed with Python to prompt development and improving AI responses to user inputs.',
      ],
    },
  ],
  education: [
    {
      id: 'luh-ti',
      title: 'B.Sc. Technical Computer Science',
      place: 'Leibniz University Hannover',
      period: 'Present',
      detail:
        'Currently studying Technische Informatik at LUH. Focusing on the foundations of computer science alongside practical software development.',
    },
    {
      id: 'atasehir',
      title: 'Anadolu High School Diploma',
      place: 'Ataşehir Anadolu Lisesi',
      period: '08/2017 — 07/2021',
      detail:
        'Completed Anadolu high school with a general university entrance qualification. Graduated with a diploma grade of 80.65 / 100.',
    },
  ],
  furtherEducation: [
    {
      id: 'telc-c1',
      title: 'telc Deutsch C1 Hochschule',
      place: 'Official language certificate',
      period: '01/2026',
      detail:
        'Earned the telc Deutsch C1 Hochschule certificate for academic German. Passed with the grade Sufficient (Ausreichend).',
    },
    {
      id: 'american-culture',
      title: 'English courses (B1 — C1)',
      place: 'American Culture Language School',
      period: '2017 — 2018',
      detail:
        'Completed structured English courses from B1 to C1. Built a strong base for later academic and technical communication.',
    },
  ],
  skills: {
    languages: [
      { name: 'Turkish', level: 'Native' },
      { name: 'English', level: 'B1/B2' },
      { name: 'German', level: 'C1' },
    ],
    groups: [
      {
        title: 'Frontend',
        items: ['JavaScript (ES6+)', 'React', 'React Native', 'HTML5', 'CSS3'],
      },
      {
        title: 'Backend & DB',
        items: ['Node.js', 'Python', 'PHP', 'SQL (MySQL, PostgreSQL)'],
      },
      {
        title: 'Cloud & BaaS',
        items: ['AWS (EC2, S3, CDN)', 'Supabase', 'Firebase'],
      },
      {
        title: 'Tools',
        items: ['Docker', 'Git', 'MS Office'],
      },
    ],
  },
}

/** Home navbar bookmarks — add { id, label } when a new category section goes live */
export const HOME_NAV_SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const HOME_THEMES = {
  dark: {
    background: '#0b0f14',
    surface: 'rgba(255,255,255,0.06)',
    text: '#f4f7fb',
    textMuted: '#9aa4b2',
    border: 'rgba(255,255,255,0.12)',
    footerBg: '#070a0e',
    footerText: '#8b95a5',
    accent: '#3b82f6',
    accentHover: '#60a5fa',
    navBg: 'rgba(11, 15, 20, 0.42)',
    navBorder: 'rgba(255,255,255,0.12)',
    chipBg: 'rgba(255,255,255,0.05)',
    chipBorder: 'rgba(255,255,255,0.15)',
  },
  light: {
    background: '#f4f6f9',
    surface: 'rgba(255,255,255,0.72)',
    text: '#0f172a',
    textMuted: '#64748b',
    border: 'rgba(15,23,42,0.1)',
    footerBg: '#e8edf4',
    footerText: '#64748b',
    accent: '#2563eb',
    accentHover: '#1d4ed8',
    navBg: 'rgba(255, 255, 255, 0.48)',
    navBorder: 'rgba(15,23,42,0.1)',
    chipBg: 'rgba(15,23,42,0.04)',
    chipBorder: 'rgba(15,23,42,0.1)',
  },
}

/** @deprecated Prefer HOME_THEMES via usePortfolioTheme() */
export const HOME_THEME = HOME_THEMES.dark

export const DEFAULT_APP_ID = 'bubble-level'

export const APPS_DATA = {
  'bubble-level': {
    id: 'bubble-level',
    name: 'Precise Bubble Level',
    shortName: 'Bubble Level',
    slogan: '4 leveling modes, real-time precision & haptic feedback — 100% offline.',
    hero: {
      badge: 'Precise Bubble Level is now on iOS & Android!',
      headline: [
        [
          { text: 'Real-time ', accent: true },
          { text: 'precision', accent: true }
        ],
        [
          { text: ' on any surface.', accent: false }
        ],
      ],
      description:
        'Four smart leveling modes, calibration, and haptic feedback when you hit level. Accelerometer and gyroscope fusion — no account, no internet, just accurate results anywhere.',
    },
    trustLine: '★ 4.8 Rating on App Store • Now on Google Play • 100% Secure & Offline',
    visualsDescription:
      'Swipe through real app screens — precision leveling, calibration, and every mode in a polished, offline-first experience.',
    stores: { ios: true, android: true },
    footerDescription:
      'Four smart leveling modes with real-time precision and haptic feedback — fully offline, no account required.',
    logo: bubbleLevelLogo,
    logoAlt: 'Precise Bubble Level app icon',
    theme: {
      primary: '#4ADE80',
      primaryLight: '#86EFAC',
      primaryDark: '#22C55E',
      background: '#F2F2F7',
      surface: '#FFFFFF',
      text: '#1A1D26',
      textMuted: '#6B7280',
      footerBg: '#0F1218',
      footerText: '#9CA3AF',
    },
    links: {
      appStore: 'https://apps.apple.com/de/app/bubble-level-angle-finder/id6762563537',
      playStore: 'https://play.google.com/store/apps/details?id=com.ergunsu.bubblelevel',
      privacyPolicy: '/apps/bubble-level/privacy/index.html',
      termsOfService: '/apps/bubble-level/terms/index.html',
      tiktok: null,
      instagram: null,
      facebook: null,
    },
    screenshots: [
      { id: 1, label: 'Main Page', src: '/apps/bubble-level/screenshots/1.png', color: 'from-slate-700 to-slate-900' },
      { id: 2, label: 'Settings Page', src: '/apps/bubble-level/screenshots/2.png', color: 'from-emerald-600 to-green-800' }
    ],
    tldrCards: [
      {
        icon: '📐',
        title: '4 Leveling Modes',
        description: 'XY square, horizontal tube, vertical tube, and all-in-one cockpit — built for every angle and surface.',
      },
      {
        icon: '🎯',
        title: 'Real-Time Precision',
        description: 'Accelerometer + gyroscope fusion with calibration, axis lock, and ±0.35° haptic feedback when level.',
      },
      {
        icon: '📴',
        title: '100% Offline',
        description: 'No account required. All sensor processing happens on your device — works anywhere, anytime.',
      },
      {
        icon: '✨',
        title: 'Ads-Free Option',
        description: 'Core leveling is free. Upgrade once to remove ads and support indie development.',
      },
    ],
    faq: [
      {
        question: 'How do I calibrate the level?',
        answer:
          'Place your phone on a trusted flat surface, then press and hold the Calibrate button until the ring completes. The app stores that baseline for all future readings.',
      },
      {
        question: 'Which leveling modes are available?',
        answer:
          'Precise Bubble Level includes XY square, horizontal tube, vertical tube, and an all-in-one cockpit view. Switch modes from the toolbar to match your project.',
      },
      {
        question: 'Does the app need internet access?',
        answer:
          'No. Level measurement works fully offline. Internet is only used for optional ads and in-app purchases.',
      },
      {
        question: 'How do I remove ads?',
        answer:
          'Tap the upgrade option in Settings to purchase the ads-free entitlement via the App Store or Google Play. Restore purchases anytime from the same screen.',
      },
      {
        question: 'How can I contact support?',
        answer:
          'Email us at ergunsu.apps@gmail.com with your device model and a description of the issue. We typically respond within 48 hours.',
      },
    ],
    contact: {
      submitEndpoint: '',
      successMessage: "Thanks! We'll get back to you soon.",
    },
  },

  'pdf-converter': {
    id: 'pdf-converter',
    name: 'File2PDF: PDF Converter',
    shortName: 'File2PDF',
    slogan:
      'Turn photos and documents into PDFs — camera, gallery, Word, Excel & more. Processed on your device.',
    hero: {
      badge: 'File2PDF is now on the App Store!',
      headline: [
        [
          { text: 'Professional ', accent: true },
          { text: 'PDFs', accent: true },
        ],
        [
          { text: ' from your photos.', accent: false },
        ],
      ],
      description:
        'Capture receipts, pick images from your gallery, or import Word and Excel files. Merge pages, choose format, and export — all processed locally on your device. Your files never leave your phone.',
    },
    trustLine: '100% On-Device Processing • Your files never leave your phone',
    visualsDescription:
      'Swipe through real app screens — document import, page editing, and export in a fast, on-device workflow.',
    stores: { ios: true, android: false },
    footerDescription:
      'Turn photos and office documents into PDFs on your phone — merged, formatted, and exported locally on your device.',
    logo: pdfConverterLogo,
    logoAlt: 'File2PDF: PDF Converter app icon',
    theme: {
      primary: '#e90000',
      primaryLight: '#ED2224',
      primaryDark: '#911517',
      background: '#F2F2F7',
      surface: '#FFFFFF',
      text: '#1A1C1E',
      textMuted: '#6C727A',
      footerBg: '#0F1218',
      footerText: '#9CA3AF',
    },
    links: {
      appStore: 'https://apps.apple.com/de/app/pdf-converter-docs-images/id6761284464',
      playStore: 'https://play.google.com/store/apps/details?id=com.ergunsu.pdfconverter',
      privacyPolicy: '/apps/pdf-converter/privacy/index.html',
      termsOfService: '/apps/pdf-converter/terms/index.html',
      tiktok: null,
      instagram: null,
      facebook: null,
    },
    screenshots: [
      { id: 1, label: 'Documents', src: '/apps/pdf-converter/screenshots/1.png', color: 'from-red-500 to-red-800' },
      { id: 2, label: 'Edit Pages', src: '/apps/pdf-converter/screenshots/2.png', color: 'from-red-600 to-rose-900' },
      { id: 3, label: 'Format', src: '/apps/pdf-converter/screenshots/3.png', color: 'from-rose-600 to-red-900' },
      { id: 4, label: 'Export', src: '/apps/pdf-converter/screenshots/4.png', color: 'from-red-500 to-red-700' },
      { id: 5, label: 'Share & Save', src: '/apps/pdf-converter/screenshots/5.png', color: 'from-red-600 to-red-800' },
      { id: 6, label: 'Export Quality', src: '/apps/pdf-converter/screenshots/6.png', color: 'from-rose-500 to-red-800' },
    ],
    tldrCards: [
      {
        icon: '📷',
        title: 'Camera, Gallery & Documents',
        description:
          'Capture receipts and notes, pick photos from your library, or import Word, Excel, PowerPoint, text, and image files.',
      },
      {
        icon: '📄',
        title: 'Merge & Reorder Pages',
        description:
          'Combine multiple sources into one PDF. Long-press to drag and reorder pages before you export.',
      },
      {
        icon: '⚙️',
        title: 'Format Your PDF',
        description:
          'Choose page size (Original, A4, US Letter), orientation, margins, and export quality up to 300 DPI.',
      },
      {
        icon: '🔒',
        title: '100% On-Device',
        description:
          'All conversion happens on your phone. Your documents are never uploaded to any server.',
      },
    ],
    faq: [
      {
        question: 'Are my files uploaded to a server?',
        answer:
          'No. PDF Converter processes everything locally on your device. Your photos and documents never leave your phone.',
      },
      {
        question: 'What file types can I convert?',
        answer:
          'Images (JPEG, PNG, GIF, WebP, AVIF, HEIC, Live Photos) plus .txt, .html, .csv, .docx, .xlsx, and .pptx files.',
      },
      {
        question: 'What is the difference between free and Plus?',
        answer:
          'Free users can include up to 3 pages per PDF, export at low quality (~150 DPI), and may see a small watermark. Plus unlocks unlimited pages, medium and high quality (up to ~300 DPI), and an ad-free experience.',
      },
      {
        question: 'Can I reorder or remove pages?',
        answer:
          'Yes. In the editor, long-press any page to drag and reorder. Tap the × on a thumbnail to remove a page before exporting.',
      },
      {
        question: 'How do I restore my Plus purchase?',
        answer:
          'Open Settings and tap Restore Purchases. Your subscription is managed through the App Store or Google Play.',
      },
      {
        question: 'How can I contact support?',
        answer:
          'Email us at ergunsu.apps@gmail.com with your device model and a description of the issue. You can also use Get help in Settings.',
      },
    ],
    contact: {
      submitEndpoint: '',
      successMessage: "Thanks! We'll get back to you soon.",
    },
  },

  planner: {
    id: 'planner',
    name: 'Planly: Smart Planner',
    shortName: 'Planly',
    slogan:
      'Organize your day with style — daily tasks, calendar scheduling, smart reminders, and home-screen widgets in one beautiful planner.',
    hero: {
      badge: 'Planly is now on the App Store!',
      headline: [
        [
          { text: 'Organize your day', accent: false },
        ],
        [
          { text: 'professionally', accent: true },
          { text: ' with Planly.', accent: false },
        ],
      ],
      description:
        'Daily tasks, calendar scheduling, smart reminders, and home-screen widgets in one beautiful planner. Your data is encrypted and stored on your device — with optional iCloud backup and cloud sync.',
    },
    trustLine: 'Encrypted on your device • Morning overview & daily recap reminders',
    visualsDescription:
      'Swipe through real app screens — daily planning, calendar scheduling, and smart reminders in a polished planner experience.',
    stores: { ios: true, android: false },
    footerDescription:
      'Organize your day with tasks, calendar scheduling, smart reminders, and widgets — encrypted and stored on your device.',
    logo: plannerIcon,
    logoAlt: 'Planly: Smart Planner app icon',
    theme: {
      primary: '#4FACFE',
      primaryLight: '#7B8CFF',
      primaryDark: '#6366f1',
      background: '#F2F2F7',
      surface: '#FFFFFF',
      text: '#111827',
      textMuted: '#6B7280',
      footerBg: '#0B0D12',
      footerText: '#9CA3AF',
    },
    links: {
      appStore: 'https://apps.apple.com/app/planly-planner-shared-lists/id6761867070',
      playStore: 'https://play.google.com/store/apps/details?id=com.ergunsu.planner',
      privacyPolicy: '/apps/planner/privacy/index.html',
      termsOfService: '/apps/planner/terms/index.html',
      tiktok: null,
      instagram: null,
      facebook: null,
    },
    screenshots: [
      { id: 1, label: 'Today Planner', src: '/apps/planner/screenshots/1.png', color: 'from-sky-400 to-indigo-500' },
      { id: 2, label: 'Calendar', src: '/apps/planner/screenshots/2.png', color: 'from-blue-400 to-violet-500' },
      { id: 3, label: 'Settings', src: '/apps/planner/screenshots/3.png', color: 'from-indigo-400 to-purple-500' },
    ],
    tldrCards: [
      {
        icon: '☀️',
        title: 'Today at a Glance',
        description:
          'Progress ring, motivational greetings, and category filters — see what’s open, overdue, and done at a glance.',
      },
      {
        icon: '📅',
        title: 'Calendar & Categories',
        description:
          'Plan tasks across days with the full calendar. Organize with Personal, Wellness, Birthday, Focus, and Work labels.',
      },
      {
        icon: '🔔',
        title: 'Smart Reminders',
        description:
          'Timed task nudges, a morning overview at 9:00, daily recap at 20:30, and 35 customizable notification tones.',
      },
      {
        icon: '📱',
        title: 'Widgets & Backup',
        description:
          'Home-screen widgets on iOS and Android, optional iCloud backup, and cloud sync to keep your planner with you.',
      },
    ],
    faq: [
      {
        question: 'What is Planly?',
        answer:
          'Planly is a daily planner for tasks and events — with progress tracking, category filters, smart reminders, calendar scheduling, and home-screen widgets.',
      },
      {
        question: 'What is the difference between free and Plus?',
        answer:
          'Free includes up to 8 tasks per day and planning about 11 days ahead with basic categories. Plus unlocks unlimited tasks, unlimited future planning, the full Calendar tab, Focus & Work categories, and richer task details like duration and importance.',
      },
      {
        question: 'Where is my data stored?',
        answer:
          'Your planner data is encrypted and stored on your device. Optional iCloud Drive backup and cloud sync are available from Settings.',
      },
      {
        question: 'How do notifications work?',
        answer:
          'Planly can remind you before timed tasks, send a morning overview at 9:00, and a daily recap at 20:30. Pick from 35 notification tones in Settings.',
      },
      {
        question: 'Are there home-screen widgets?',
        answer:
          'Yes. iOS includes Today Progress, Next Task, Next Tasks, and Upcoming Tasks widgets. Android includes an Event Hub widget.',
      },
      {
        question: 'How do I restore my Plus purchase?',
        answer:
          'Open Settings and tap Restore Purchase. Your subscription is managed through the App Store or Google Play.',
      },
      {
        question: 'How can I contact support?',
        answer:
          'Email us at ergunsu.apps@gmail.com with your device model and a description of the issue. You can also use Get Help in Settings.',
      },
    ],
    contact: {
      submitEndpoint: '',
      successMessage: "Thanks! We'll get back to you soon.",
    },
  },
}
