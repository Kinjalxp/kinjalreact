import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder_image.png";

const BlogThree = () => (
  // Mobile → px-4 (tight, readable)
  // Small tablets → sm:px-6
  // Large screens → lg:px-20 (lots of breathing room)

  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <div className="top-16 bg-white py-2">
      <Link to="/blog">← Back to Blog</Link>
    </div>
    <img
      src={placeholder}
      alt="CSS"
      className="w-full h-full object-cover rounded-lg mb-6"
    />
  </div>
);

export default BlogThree;
