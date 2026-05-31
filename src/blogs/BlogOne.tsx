import { Link } from "react-router-dom";
import img1 from "../assets/DataQualityDiagram.png";
import img2 from "../assets/Behind_the_AI.png";

// src/blogs/BlogOne.tsx
const BlogOne = () => (
  // Mobile → px-4 (tight, readable)
  // Small tablets → sm:px-6
  // Large screens → lg:px-20 (lots of breathing room)

  <div className="px-1 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <div className=" top-16 bg-white py-2">
      <Link to="/blog">← Back to Blog</Link>
    </div>
    <h1 className="text-3xl font-bold mb-4">
      Why does data matter more than algorithms?
    </h1>
    <p className="text-gray-600 mb-6">January 16, 2026</p>
    <img
      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
      alt="React"
      className="w-full h-64 object-cover rounded-lg mb-6"
    />
    <div className="px-4 sm:px-6">
      <p className="mb-4">
        When people talk about building better AI, they almost always talk about
        better algorithms. New model architectures, breakthrough research
        papers, and increasingly powerful neural networks tend to attract the
        most attention. However, in practice, algorithms are rarely the factor
        holding AI systems back. More often, the real limitation is the data
        itself.
      </p>
      <p className="mb-4">
        Teaching an AI with poor data is similar to teaching a student using an
        inaccurate textbook. No matter how intelligent the student is or how
        effective the teaching method may be, the student will still learn
        incorrect information. The same principle applies to machine learning.
        Even the most sophisticated algorithm cannot consistently produce
        reliable results if it is trained on flawed data.
      </p>
      <p className="mb-4">
        AI models do not truly understand the world the way humans do. Instead,
        they learn statistical patterns from the examples they are shown during
        training. Every prediction, recommendation, or generated response is
        influenced by the data used to build the model. If the training data is
        incomplete, noisy, outdated, or biased, the model will learn those
        imperfections and reproduce them in its outputs.
      </p>
      <div className="flex justify-center my-6">
        <div className="w-80 h-120 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
          <img
            src={img1}
            alt="Image"
            className="w-full h-full object-cover rounded-lg mb-6"
          />
        </div>
      </div>

      <p className="mb-4">
        Consider a facial recognition system trained primarily on images of a
        single demographic group. Even if the underlying algorithm is highly
        advanced, the system may struggle to recognize individuals from
        underrepresented groups because it simply has not seen enough examples
        during training. In this case, the limitation is not the algorithm. The
        limitation is the data.
      </p>
      <p className="mb-4">
        This idea extends far beyond facial recognition. A spam detection model
        trained on outdated email data may fail to identify modern spam
        techniques. A medical diagnostic model trained on data from one
        geographic region may perform poorly when applied elsewhere. A
        self-driving car trained mostly in clear weather conditions may struggle
        when operating in heavy snow or rain. In each situation,{" "}
        <mark className="highlight">
          the quality and diversity of the data directly influence the model's
          performance.
        </mark>
      </p>
      <p className="mb-4">So what does it mean to have good data?</p>
      <p className="mb-4">
        Good data is more than just a large collection of examples. First, it
        should be accurate and correctly labeled. If images of cats are
        mistakenly labeled as dogs, the model will learn incorrect patterns.
        Second, the data should be relevant to the task being performed.
        Training a model on unrelated information rarely improves performance.
        Third, the dataset should represent the real-world environments in which
        the model will operate. If important groups, situations, or edge cases
        are missing, the model may fail when encountering them.
      </p>
      <p className="mb-4">
        Another critical factor is data coverage. Many people assume that bigger
        datasets automatically lead to better models, but quantity alone is not
        enough. A smaller, carefully curated dataset can often outperform a
        massive dataset filled with redundant, low-quality, or misleading
        information.{" "}
        <mark className="highlight">
          What matters most is whether the data captures the diversity and
          complexity of the real world.
        </mark>
      </p>
      <p className="mb-4">
        Data quality also changes over time. The world is constantly evolving,
        and datasets can become outdated. Consumer preferences shift, language
        evolves, technology changes, and new trends emerge. Models trained on
        old data may gradually become less effective because the patterns they
        learned no longer reflect reality. This is why many production AI
        systems require continuous data collection and retraining.
      </p>
      <p className="mb-4">
        None of this means that algorithms are unimportant. Better algorithms
        can improve efficiency, learn more complex patterns, and achieve higher
        performance from the same dataset. Advances in model architecture have
        driven many of the breakthroughs seen in AI over the past decade.
        However, algorithmic improvements often provide diminishing returns when
        the underlying data remains poor. A better algorithm can extract more
        value from good data, but it cannot invent information that was never
        present in the dataset.
      </p>

      <div className="flex justify-center my-6">
        <div className="w-80 h-120 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
          <img
            src={img2}
            alt="Image"
            className="w-full h-full object-cover rounded-lg mb-6"
          />
        </div>
      </div>
      <p className="mb-4">
        This reality is reflected throughout the AI industry. Many organizations
        spend far more time collecting, cleaning, labeling, and maintaining data
        than they do designing new algorithms. Data engineering, data
        governance, and data quality assurance are often the hidden foundations
        of successful AI systems. While cutting-edge models receive most of the
        attention, the work that happens behind the scenes with data is
        frequently what determines whether a project succeeds or fails.
      </p>
      <p className="mb-4">
        In machine learning, algorithms matter, but they are rarely the limiting
        factor.{" "}
        <mark className="highlight">
          A model is only as good as the data it learns from.{" "}
        </mark>
        Focusing on how data is collected, labeled, maintained, and updated is
        often what separates useful AI systems from unreliable ones. As AI
        continues to advance, the organizations that invest in high-quality data
        will often gain a greater advantage than those that focus solely on
        developing better algorithms.
      </p>
    </div>
  </div>
);

export default BlogOne;
