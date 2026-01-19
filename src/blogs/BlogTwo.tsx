// src/blogs/BlogTwo.tsx
import placeholder from "../assets/placeholder_image.png";

const BlogTwo = () => (
  // Mobile → px-4 (tight, readable)
  // Small tablets → sm:px-6
  // Large screens → lg:px-20 (lots of breathing room)

  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-2xl font-bold">Learning React</h1>
    <img
      src={placeholder}
      alt="CSS"
      className="w-full h-full object-cover rounded-lg mb-6"
    />
  </div>
);

export default BlogTwo;
