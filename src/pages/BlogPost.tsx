import { useParams } from "react-router-dom";
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

  return (
    <div className="p-6">
      <BlogComponent />
    </div>
  );
};

export default BlogPost;
