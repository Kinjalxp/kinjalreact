import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Quiz from "./pages/Quiz";
import QuizGame from "./pages/QuizGame";
import { User, BookOpen, Flame } from "lucide-react";

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
];

const App = () => {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 border-b">
        <div className="ml-auto flex gap-4">
          {navItems.map(({ label, path, icon: Icon, end }) => (
            <NavLink key={path} to={path} end={end} className={navItemClass}>
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:category" element={<QuizGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
