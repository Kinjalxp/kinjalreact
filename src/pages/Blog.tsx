import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    // Mobile → px-4 (tight, readable)
    // Small tablets → sm:px-6
    // Large screens → lg:px-20 (lots of breathing room)
    <div className="px-4 sm:px-6 lg:px-20 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>

      <ul className="space-y-3">
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            className="bg-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-black transition-all cursor-pointer group"
          >
            <Link
              to={`/blog/${blog.slug}`}
              // className="text-blue-500 hover:underline"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-black">
                      {blog.title}
                    </h3>
                    <p className="text-black mb-4">{blog.excerpt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-black">
                  <span>{blog.date}</span>
                  <span>•</span>
                  {/* <span>{post.readTime}</span> */}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
