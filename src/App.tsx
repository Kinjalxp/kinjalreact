import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Quiz from "./pages/Quiz";
import QuizGame from "./pages/QuizGame";
import AIJourneyLayout from "./pages/AIJourneyLayout";
import AIJourneyNote from "./pages/AIJourneyNote";
import ScrollToTop from "./components/ScrollToTop";
import { aiTopics } from "./data/aiJourney";
import {
  User, BookOpen, Flame, Sparkles,
  GitBranch, Brain, TrendingUp, Layers, Bot, Workflow, Database,
} from "lucide-react";

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  ` flex items-center gap-2
   px-8 py-3
   rounded-md transition-colors
  ${
    isActive
      ? "bg-black text-white px-4 py-2 rounded"
      : "bg-white text-black px-4 py-2 rounded border"
  }`;

const navItems = [
  { label: "About", path: "/", icon: User, end: true },
  { label: "Blog", path: "/blog", icon: BookOpen },
  { label: "Quiz", path: "/quiz", icon: Flame },
  { label: "AI Journey", path: "/ai-journey", icon: Sparkles },
];

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="h-screen flex flex-col overflow-hidden">
        {/* Desktop nav */}
        <nav className="flex-shrink-0 hidden md:flex gap-4 p-4 border-b bg-white">
          <div className="ml-auto flex gap-4">
            {navItems.map(({ label, path, icon: Icon, end }) => (
              <NavLink key={path} to={path} end={end} className={navItemClass}>
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="flex-1 overflow-y-auto pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:category" element={<QuizGame />} />
            <Route path="/ai-journey" element={<AIJourneyLayout />}>
              <Route index element={<AIJourneyWelcome />} />
              <Route path=":topic/:subtopic" element={<AIJourneyNote />} />
            </Route>
          </Routes>
        </div>

        {/* Mobile bottom tab bar */}
        <nav className="fixed bottom-0 left-0 right-0 flex md:hidden border-t bg-white z-50">
          {navItems.map(({ label, path, icon: Icon, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={({ isActive }) =>
                `flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors ${
                  isActive ? "text-black" : "text-gray-400"
                }`
              }
            >
              <Icon size={20} />
              <span className="text-xs">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </BrowserRouter>
  );
};

const topicIconMap: Record<string, React.FC<{ size?: number; strokeWidth?: number }>> = {
  GitBranch, Brain, TrendingUp, Layers, Bot, Workflow, Database,
};

const AIJourneyWelcome = () => (
  <div className="px-4 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <div className="mb-8">
      <h2 className="text-4xl font-bold mb-4 text-black">AI Journey</h2>
      <p className="text-black text-lg">Personal notes on AI &amp; ML concepts</p>
    </div>

    <ul className="space-y-3">
      {aiTopics.map((topic) => {
        const Icon = topicIconMap[topic.icon] ?? Brain;
        return (
          <li
            key={topic.slug}
            className="bg-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-black transition-all cursor-pointer group"
          >
            <Link to={`/ai-journey/${topic.slug}/${topic.subtopics[0].slug}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white rounded-xl border border-gray-200 group-hover:border-gray-300 transition-colors">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold text-black">{topic.title}</h3>
              </div>
              <p className="text-black">{topic.description}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default App;
