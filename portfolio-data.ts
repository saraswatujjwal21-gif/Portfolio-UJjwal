export const profile = {
  name: "Ujjwal Saraswat",
  role: "Full-Stack Developer & CS Student",
  location: "Gurgaon, India",
  email: "saraswatujjwal21@gmail.com",
  phone: "+91-8882233335",
  github: "https://github.com/saraswatujjwal21",
  linkedin: "https://www.linkedin.com/in/saraswatujjwal21",
  resumeUrl: "/Ujjwal_Saraswat_Resume.pdf",
  headline: "I design and build\nthings that feel effortless.",
  subtitle:
    "Third-year Computer Science engineer crafting full-stack web experiences with Django, JavaScript & modern frontend — obsessed with typography, motion and the small details recruiters remember.",
};

export const stats = [
  { k: "03", v: "Years studying CS" },
  { k: "06+", v: "Shipped projects" },
  { k: "03mo", v: "Internship @ Void" },
  { k: "∞", v: "Cups of chai" },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "Python", "Java", "C++", "C", "TypeScript"] },
  { group: "Frontend", items: ["HTML5", "CSS3", "React", "Tailwind", "Bootstrap", "Responsive"] },
  { group: "Backend", items: ["Django", "Node.js", "REST APIs", "Auth"] },
  { group: "Craft", items: ["DSA", "OOP", "Git & GitHub", "VS Code", "DBMS", "Networks"] },
];

export const orbitTech = [
  "JS", "TS", "Py", "Django", "React", "Java", "C++", "Git", "SQL", "HTML", "CSS", "Node",
];

export const projects = [
  {
    id: "job-portal",
    n: "01",
    title: "Job Portal",
    tag: "Full-stack platform",
    year: "2025",
    problem:
      "Job seekers waste hours filtering irrelevant listings across a dozen tabs, and small recruiters lack a lightweight place to post roles.",
    solution:
      "A Django-powered portal with granular search, applicant tracking and a mobile-first interface that turns hours of hunting into minutes of applying.",
    stack: ["Django", "Python", "JavaScript", "HTML", "CSS"],
    features: [
      "Advanced role & location filters",
      "Recruiter dashboards with applicant funnels",
      "Mobile-first responsive UI",
      "Session-based auth & role permissions",
    ],
    live: "#",
    repo: "https://github.com/saraswatujjwal21",
    accent: "oklch(0.62 0.18 42)",
  },
  {
    id: "karunna",
    n: "02",
    title: "Karunna",
    tag: "Green events & rewards",
    year: "2025",
    problem:
      "Local sustainability efforts are scattered — people who care about the planet can't easily find, join or be rewarded for showing up.",
    solution:
      "A gamified platform that maps eco-events nearby, verifies attendance and converts participation into points redeemable in an integrated green marketplace.",
    stack: ["Django", "JavaScript", "E-Commerce", "Geo-mapping"],
    features: [
      "Nearby event discovery on interactive map",
      "Verified attendance → points system",
      "Integrated sustainable marketplace",
      "Community leaderboards",
    ],
    live: "#",
    repo: "https://github.com/saraswatujjwal21",
    accent: "oklch(0.65 0.14 155)",
  },
];

export const experience = [
  {
    period: "Feb – May 2025",
    role: "Web Development Intern",
    org: "Void Service",
    location: "Remote",
    body: "Three months inside a structured web development program — shipped features across the full stack, sharpened problem-solving under real deadlines, and left with a founder-signed certificate and stronger engineering instincts.",
    tags: ["Full-stack", "Team workflow", "Shipped in prod"],
  },
  {
    period: "2024 – Present",
    role: "Independent Builder",
    org: "Personal Projects",
    location: "Gurgaon",
    body: "Building side-projects that solve real problems — from a Django job portal to a gamified sustainability app — while going deep on DSA and modern frontend.",
    tags: ["Django", "JavaScript", "Product thinking"],
  },
];

export const education = [
  {
    school: "DPG College of Technology & Management",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2024 – 2028",
    detail: "MDU Rohtak · Currently 3rd year, 5th semester · Gurgaon, HR",
  },
  {
    school: "Modern International School",
    degree: "Senior Secondary — Class XII (Science)",
    period: "2022 – 2023",
    detail: "New Delhi, DL",
  },
  {
    school: "Modern International School",
    degree: "Secondary — Class X",
    period: "2020 – 2021",
    detail: "New Delhi, DL",
  },
];

export const achievements = [
  "Web Development Internship Certificate — Void Service (2025)",
  "Web Development Certificate — Django & Full-Stack (2024)",
  "Hackverse 2.0 Participant — IILM University, Gurugram",
];

export const nav = [
  { id: "hero", label: "Index" },
  { id: "about", label: "About" },
  { id: "skills", label: "Craft" },
  { id: "experience", label: "Path" },
  { id: "contact", label: "Contact" },
];
