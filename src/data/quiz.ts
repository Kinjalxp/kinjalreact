export type Category = "technology" | "science" | "education";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

export const categoryInfo: Record<Category, { label: string; emoji: string; description: string }> = {
  technology: {
    label: "Technology",
    emoji: "💻",
    description: "Computers, programming languages, the internet & the digital world.",
  },
  science: {
    label: "Science",
    emoji: "🔬",
    description: "Physics, chemistry, biology & the wonders of the natural world.",
  },
  education: {
    label: "K-12 Education",
    emoji: "📚",
    description: "History, geography & core school subjects.",
  },
};
