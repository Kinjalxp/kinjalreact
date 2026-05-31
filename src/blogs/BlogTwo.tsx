// src/blogs/BlogTwo.tsx
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder_image.png";

const BlogTwo = () => (
  // Mobile → px-4 (tight, readable)
  // Small tablets → sm:px-6
  // Large screens → lg:px-20 (lots of breathing room)

  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <div className="top-16 bg-white py-2">
      <Link to="/blog">← Back to Blog</Link>
    </div>
    <h1 className="text-3xl font-bold mb-4">
      Forget the hype—here’s how to actually get started in AI in 2026
    </h1>
    <p className="text-gray-600 mb-6">May 31, 2026</p>
    <div className="px-4 sm:px-6">
      <p className="mb-4">
        If I’m being honest, I didn’t start learning AI because I had some grand
        career plan figured out. It started more out of curiosity than anything
        else. I wanted to understand what was actually behind all the things
        people kept calling “AI” — models, chatbots, recommendations,
        automation.
      </p>
      <p className="mb-4">
        And once I started, I realized something pretty quickly: AI isn’t as
        closed off or “elite” as it sometimes looks from the outside.
      </p>
      <p className="mb-4">
        You don’t need to be an expert. You don’t need a perfect academic
        background. You don’t even need to have everything figured out before
        you start. You just need curiosity and a willingness to build
        understanding step by step.
      </p>
      <p className="mb-4">
        That’s really what this post is about—how to actually get started in AI
        in 2026 without overcomplicating it.
      </p>
      <h1 className="text-2xl font-bold mb-4">
        Start with understanding, not complexity
      </h1>
      <p className="mb-4">
        One of the biggest mistakes I see is people jumping straight into
        advanced topics like deep learning, neural networks, or large language
        models without understanding the basics of what AI is doing underneath.
      </p>
      <p className="mb-4">
        For me, the starting point wasn’t code. It was the concepts.
      </p>
      <p className="mb-4">Things like:</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>What is a model actually learning?</li>
        <li>What does training data do?</li>
        <li>Why does data quality matter so much?</li>
        <li>How do simple algorithms “learn” patterns?</li>
      </ul>
      <p className="mb-4">
        Once these ideas clicked, everything else felt way less intimidating.
      </p>
      <p className="mb-4">
        AI becomes a lot more approachable when you treat it as a system of
        ideas rather than a collection of intimidating tools.
      </p>
      <h1 className="text-2xl font-bold mb-4">My own starting point</h1>
      <p className="mb-4">
        A big part of my early learning came from structured beginner resources
        rather than random videos or scattered tutorials.
      </p>
      <p className="mb-4">
        One of the first things I did was take the AWS AI Practitioner course on
        Udemy (taught by Stéphane Maarek). It’s designed for beginners, and what
        I liked most is that it didn’t just explain theory—it actually included
        hands-on exercises that helped connect concepts to real use cases
      </p>
      <p className="mb-4">
        That combination of explanation + practice made a huge difference for
        me.
      </p>
      <p className="mb-4">
        Alongside that, I also started watching CodeBasics, a YouTuber who
        breaks down AI and data science concepts really clearly. Their videos
        often include small labs and examples, which makes it easier to actually
        understand what’s happening instead of just memorizing terms.
      </p>
      <p className="mb-4">
        Those two things alone were enough to give me a solid foundation.
      </p>
      <h1 className="text-2xl font-bold mb-4">
        A simple way to start AI in 2026
      </h1>
      <p className="mb-4">
        If I had to break down a beginner-friendly path, it would look something
        like this:
      </p>
      <h1 className="text-1xl font-bold mb-4">1. Learn the core ideas first</h1>
      <p className="mb-4">Don’t rush this step. Focus on understanding:</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>What AI systems actually do</li>
        <li>How models learn from data</li>
        <li>What training and prediction mean in simple terms</li>
      </ul>
      <h1 className="text-1xl font-bold mb-4">
        2. Follow a structured beginner course
      </h1>
      <p className="mb-4">
        Something like an introductory AI course (like AWS AI Practitioner)
        helps you avoid feeling lost. The goal here isn’t mastery—it’s exposure.
      </p>
      <h1 className="text-1xl font-bold mb-4">
        3. Watch concept-based explanations
      </h1>
      <p className="mb-4">
        YouTube channels like CodeBasics help reinforce what you’re learning by
        showing it visually and practically.
      </p>
      <h1 className="text-1xl font-bold mb-4">4. Start experimenting early</h1>
      <p className="mb-4">Even small things matter:</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Try simple datasets</li>
        <li>Play with beginner-friendly tools</li>
        <li>Observe how changing data changes results</li>
      </ul>
      <p className="mb-4">
        You don’t need big projects at the beginning. You just need familiarity.
      </p>
      <h1 className="text-2xl font-bold mb-4">What I’m currently learning</h1>
      <p className="mb-4">
        Right now, I’m going a bit deeper into the core building blocks behind
        AI.
      </p>
      <p className="mb-4">I’ve started learning more about:</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Different AI algorithms and how they actually make decisions</li>
        <li>Machine learning fundamentals and how models improve with data</li>
        <li>
          Deep learning, especially neural networks and how layers learn
          patterns
        </li>
        <li>
          AI agents and how they can take actions beyond just generating
          responses
        </li>
      </ul>
      <p className="mb-4">
        I’m still at the early stages with all of this, but the goal isn’t to
        rush through everything—it’s to really understand how each piece
        connects. The more I learn, the more I realize how interconnected these
        ideas are, and how much they build on the basics.
      </p>
      <p className="mb-4">
        This part of the journey feels less like “studying AI” and more like
        slowly uncovering how these systems actually think and operate under the
        hood.
      </p>
      <h1 className="text-2xl font-bold mb-4">Final thought</h1>
      <p className="mb-4">
        2026 isn’t a “perfect” time to start learning AI—there probably isn’t
        one.
      </p>
      <p className="mb-4">
        But it is one of the most accessible times we’ve ever had.
      </p>
      <p className="mb-4">
        The barrier to entry is lower than it looks from the outside. You don’t
        need to wait until you feel ready, or until you’ve “caught up” with
        everyone else. Most people who understand AI today started by simply
        being curious and sticking with that curiosity long enough to build
        momentum.
      </p>
      <p className="mb-4">
        If AI interests you even a little, that’s already enough to begin.
        Everything else—skills, confidence, direction—comes from actually
        spending time with it.
      </p>
    </div>
  </div>
);

export default BlogTwo;
