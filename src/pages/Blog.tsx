import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>

      <ul className="space-y-3">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              to={`/blog/${blog.slug}`}
              className="text-blue-500 hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
