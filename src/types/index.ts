export type TabType = "about" | "blog";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export interface EducationItem {
  id: number;
  level: string;
  institution: string;
  degree: string;
  period: string;
  status: "completed" | "in-progress";
  description: string;
}

export interface VolunteeringItem {
  id: number;
  name: string;
  description: string;
  period: string;
  duration: string;
}
