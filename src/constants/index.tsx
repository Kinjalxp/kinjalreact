import { Github, Linkedin, Mail } from "lucide-react";
import type {
  EducationItem,
  VolunteeringItem,
  BlogPost,
  SocialLink,
} from "../types";

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    level: "High School",
    institution: "John P. Stevens High School",
    degree: "High School Diploma",
    period: "Sep 2021 - Jun 2025",
    status: "completed",
    description: "Graduated with honors. Focused on Science and Mathematics.",
  },
  {
    id: 2,
    level: "Undergraduate",
    institution: "Rutgers State University",
    degree: "Bachelor of Science in Computer Science",
    period: "Sep 2025 - May 2029",
    status: "in-progress",
    description:
      "Currently pursuing a degree in Computer Science. GPA: 3.7/4.0",
  },
];

export const VOLUNTEERING_DATA: VolunteeringItem[] = [
  {
    id: 1,
    name: "Greenhouse Internship Program",
    description:
      "Learned about growing vegetables and how to properly take care of them at John P. Stevens High School.",
    period: "Aug 2021",
    duration: "6 hours",
  },
  {
    id: 2,
    name: "Kumon Math and Reading Center",
    description:
      "Facilitated students in their learning at the South Plainfield, NJ, branch.",
    period: "Oct 2022 - Dec 2023",
    duration: "88.75 hours",
  },
  {
    id: 3,
    name: "Ideal Beach Cleanup",
    description: "Helped clean up the Ideal Beach in Middletown Township, NJ",
    period: "Aug 2024",
    duration: "30 hours",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    excerpt:
      "Exploring the latest patterns and best practices in React development...",
    date: "Jan 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of AI in Web Development",
    excerpt:
      "How artificial intelligence is transforming the way we build websites...",
    date: "Dec 28, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Mastering Responsive Design in 2026",
    excerpt:
      "Advanced techniques for creating fluid, mobile-first experiences...",
    date: "Dec 15, 2025",
    readTime: "6 min read",
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AI/ML",
  "Tailwind CSS",
  "Jupyter",
];

export const getSocialLinks = (): SocialLink[] => [
  {
    href: "https://github.com/Kinjalxp?tab=repositories",
    icon: <Github size={24} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/kinjalmxp/",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:kinjalmxp@gmail.com",
    icon: <Mail size={24} />,
    label: "Email",
  },
];
