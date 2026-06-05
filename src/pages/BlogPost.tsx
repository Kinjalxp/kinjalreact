import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scroller = document.querySelector(".overflow-y-auto");
    if (!scroller) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scroller;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, [slug]);

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return <div className="p-6">Blog not found</div>;

  const BlogComponent = blogComponents[blog.component];
  const otherBlogs = blogs.filter((b) => b.slug !== slug);

  return (
    <>
      <div className="sticky top-0 z-10 h-1 bg-gray-100">
        <div
          className="h-full bg-black transition-[width] duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    <div className="flex gap-6 p-6">
      {/* Left panel */}
      <aside className="hidden lg:block w-52 shrink-0">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
          More Articles
        </p>
        <ul className="space-y-3">
          {otherBlogs.map((b) => (
            <li key={b.slug}>
              <Link
                to={`/blog/${b.slug}`}
                className="block text-sm font-medium tracking-wide text-gray-400 hover:text-black transition-colors leading-snug pl-2 border-l-2 border-gray-200 hover:border-gray-500"
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
        <div className="flex justify-center mt-6 mb-4">
          <button
            onClick={() => {
              const scroller = document.querySelector(".overflow-y-auto");
              if (scroller) scroller.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-sm text-gray-400 hover:text-black transition-colors tracking-wide border-b border-gray-200 hover:border-gray-500 pb-0.5"
          >
            ↑ back to top
          </button>
        </div>
      </main>

      {/* Right panel (empty for now) */}
      <aside className="hidden lg:block w-52 shrink-0" />
    </div>
    </>
  );
};

export default BlogPost;
