// src/blogs/BlogTwo.tsx
import placeholder from "../assets/placeholder_image.png";

const BlogTwo = () => (
  <div>
    <h1 className="text-2xl font-bold">Learning React</h1>
    <img
      src={placeholder}
      alt="CSS"
      className="w-full h-full object-cover rounded-lg mb-6"
    />
  </div>
);

export default BlogTwo;
