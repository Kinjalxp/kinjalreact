import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

import BlogOne from "../blogs/BlogOne";
import BlogTwo from "../blogs/BlogTwo";
import BlogThree from "../blogs/BlogThree";

const blogComponents: Record<string, React.FC> = {
  BlogOne,
  BlogTwo,
  BlogThree,
};

const BlogPost = () => {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return <div className="p-6">Blog not found</div>;

  const BlogComponent = blogComponents[blog.component];
  const otherBlogs = blogs.filter((b) => b.slug !== slug);

  return (
    <div className="flex gap-6 p-6">
      {/* Left panel */}
      <aside className="hidden lg:block w-52 shrink-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          More Articles
        </p>
        <ul className="space-y-3">
          {otherBlogs.map((b) => (
            <li key={b.slug}>
              <Link
                to={`/blog/${b.slug}`}
                className="block text-xs font-medium tracking-wide text-gray-400 hover:text-black transition-colors leading-snug pl-2 border-l-2 border-gray-200 hover:border-gray-500"
              >
                {b.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <BlogComponent />
      </main>

      {/* Right panel (empty for now) */}
      <aside className="hidden lg:block w-52 shrink-0" />
    </div>
  );
};

export default BlogPost;
