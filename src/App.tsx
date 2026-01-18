import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="flex gap-6 p-4 border-b">
        <Link to="/" className="hover:text-blue-500">
          About
        </Link>
        <Link to="/blog" className="hover:text-blue-500">
          Blog
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
