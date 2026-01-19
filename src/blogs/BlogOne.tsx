// src/blogs/BlogOne.tsx
const BlogOne = () => (
  <div>
    <h1 className="text-3xl font-bold mb-4">
      Why does data matter more than algorithms?
    </h1>
    <p className="text-gray-600 mb-6">January 16, 2026</p>
    <img
      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
      alt="React"
      className="w-full h-64 object-cover rounded-lg mb-6"
    />
    <p className="mb-4">
      When people talk about building better AI, they almost always talk about
      better algorithms. But in practice, algorithms are rarely the thing
      holding AI systems back. More often, the real limitation is the data
      itself. Teaching an AI with bad data is like teaching a student using the
      wrong textbook. No matter how smart the student is, the outcome won’t be
      great.
    </p>
    <p className="mb-4">
      AI models don’t just understand the world, they learn patterns from data.
      If the data is incomplete, noisy, or biased, the model will train on
      flawed data resulting in an unreliable and biased AI model. Algorithms can
      optimize the model’s ability to grasp patterns in the data, but they
      cannot fill in missing information or correct issues in the dataset.
    </p>
    <p className="mb-4">
      So what does it mean to have good data? Good data has clear and consistent
      labels, it is relevant to that task, and accurately reflects the
      real-world population across important groups and scenarios. It also needs
      to be sufficient for the model's purpose, not necessarily large, but
      sufficient and representative. Outdated data can also limit the quality of
      the model’s training and biased data will almost always produce biased
      results.
    </p>
    <p className="mb-4">
      In machine learning, algorithms matter, but they are rarely the limiting
      factor. A model is only as good as the data it learns from. Focusing on
      data quality, how it is collected, labeled, and maintained, is often what
      separates useful AI systems from unreliable ones.
    </p>
  </div>
);

export default BlogOne;
