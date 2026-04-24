import {
  Code, Shield, Film, Palette, Globe, Server,
  Wrench, Layout, Monitor, Database, Lock, Cpu,
  Pen, PenTool, Video, Layers, Terminal, Cloud,
  Smartphone, Zap, Eye, Send, Link2, ExternalLink,
  Mail, MapPin, ChevronRight, Menu, X, ArrowUp, Star, Award, Briefcase
} from 'lucide-react';

// Custom SVG icon components for brands not in lucide-react
export function GithubIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export function LinkedinIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function InstagramIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export const iconMap = {
  Code, Shield, Film, Palette, Globe, Server,
  Wrench, Layout, Monitor, Database, Lock, Cpu,
  Pen, PenTool, Video, Layers, Terminal, Cloud,
  Smartphone, Zap, Eye, Send, Link2, ExternalLink,
  Mail, MapPin, ChevronRight,
  Menu, X, ArrowUp, Star, Award, Briefcase
};

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'tech', label: 'Tech' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const skills = [
  {
    category: 'Web Development',
    icon: 'Code',
    color: '#00d4ff',
    items: [
      { name: 'HTML / CSS', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 78 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Cybersecurity',
    icon: 'Shield',
    color: '#a855f7',
    items: [
      { name: 'Networking', level: 80 },
      { name: 'Ethical Hacking', level: 72 },
      { name: 'Linux Security', level: 75 },
      { name: 'OWASP Top 10', level: 78 },
      { name: 'Wireshark / Nmap', level: 70 },
    ],
  },
  {
    category: 'Video Editing',
    icon: 'Film',
    color: '#06ffd2',
    items: [
      { name: 'Premiere Pro', level: 88 },
      { name: 'After Effects', level: 82 },
      { name: 'DaVinci Resolve', level: 75 },
      { name: 'Motion Graphics', level: 70 },
      { name: 'Color Grading', level: 78 },
    ],
  },
  {
    category: 'Design',
    icon: 'Palette',
    color: '#f472b6',
    items: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Figma', level: 90 },
      { name: 'Photoshop', level: 82 },
      { name: 'Illustrator', level: 72 },
      { name: 'Brand Identity', level: 78 },
    ],
  },
];

export const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Tailwind', icon: '🎨' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Three.js', icon: '🧊' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Express', icon: '🚂' },
      { name: 'Python', icon: '🐍' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    category: 'Cybersecurity',
    items: [
      { name: 'Kali Linux', icon: '🐉' },
      { name: 'Burp Suite', icon: '🔍' },
      { name: 'Wireshark', icon: '🦈' },
      { name: 'Nmap', icon: '🗺️' },
      { name: 'Metasploit', icon: '💀' },
      { name: 'Hashcat', icon: '🔓' },
    ],
  },
  {
    category: 'Design Tools',
    items: [
      { name: 'Figma', icon: '🎯' },
      { name: 'Photoshop', icon: '🖼️' },
      { name: 'Illustrator', icon: '✏️' },
      { name: 'Premiere', icon: '🎬' },
      { name: 'After Effects', icon: '✨' },
      { name: 'Blender', icon: '🧱' },
    ],
  },
];

export const projects = [
  {
    title: 'DaxterAI — Network IDS',
    description: 'ML-powered Intrusion Detection System using IsolationForest for real-time anomaly detection in network traffic.',
    tech: ['Python', 'Scapy', 'Flask', 'ML'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#a855f7',
  },
  {
    title: 'CryptoVault Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with interactive charts, portfolio management, and alert systems.',
    tech: ['React', 'Chart.js', 'Node.js', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#00d4ff',
  },
  {
    title: 'PixelForge Editor',
    description: 'Browser-based image editor with layer support, filters, and AI-powered auto-enhancement features.',
    tech: ['Canvas API', 'React', 'TensorFlow.js'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#06ffd2',
  },
  {
    title: 'SecureChat E2E',
    description: 'End-to-end encrypted messaging app with AES-256 encryption, self-destructing messages, and zero-knowledge proof auth.',
    tech: ['React Native', 'Node.js', 'WebCrypto'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#f472b6',
  },
  {
    title: 'AutoPin — Pinterest Bot',
    description: 'Fully automated Pinterest content pipeline with AI-generated pins, Playwright uploads, and scheduled posting.',
    tech: ['Python', 'Playwright', 'Docker', 'LLM'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#fbbf24',
  },
  {
    title: 'DevFolio CMS',
    description: 'Headless CMS and portfolio builder with drag-and-drop UI, markdown support, and one-click deployment.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#34d399',
  },
];

export const galleryItems = [
  { id: 1, title: 'Neon Dashboard UI', category: 'UI Design' },
  { id: 2, title: 'Cyber Security Poster', category: 'Poster' },
  { id: 3, title: 'Gaming Thumbnail', category: 'Thumbnail' },
  { id: 4, title: 'Mobile App Concept', category: 'UI Design' },
  { id: 5, title: 'Brand Identity — Flux', category: 'Branding' },
  { id: 6, title: 'YouTube Banner Design', category: 'Banner' },
];

export const services = [
  {
    icon: 'Code',
    title: 'Web Development',
    description: 'Custom, responsive web apps built with modern frameworks. From landing pages to complex SaaS — clean code, fast performance.',
    color: '#00d4ff',
  },
  {
    icon: 'Shield',
    title: 'Security Consulting',
    description: 'Vulnerability assessments, secure code review, and best-practice hardening for web apps and infrastructure.',
    color: '#a855f7',
  },
  {
    icon: 'Film',
    title: 'Video Editing',
    description: 'Professional video editing, motion graphics, color grading, and post-production for YouTube, ads, and social media.',
    color: '#06ffd2',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'User-centered interface design — from wireframes to high-fidelity prototypes in Figma, with pixel-perfect attention.',
    color: '#f472b6',
  },
];
