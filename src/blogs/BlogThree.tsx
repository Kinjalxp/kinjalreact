import { Link } from "react-router-dom";
import placeholder from "../assets/Blog_3_title.png";
import { RoughNotation } from "react-rough-notation";

const BlogThree = () => (
  // Mobile → px-4 (tight, readable)
  // Small tablets → sm:px-6
  // Large screens → lg:px-20 (lots of breathing room)

  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <div className="top-16 bg-white py-2">
      <Link to="/blog">← Back to Blog</Link>
    </div>
    <h1 className="text-3xl font-bold mb-4">
      How the Right Prompt Can Change Everything
    </h1>
    <p className="text-gray-600 mb-6">August 6, 2026</p>
    <img
      src={placeholder}
      alt="CSS"
      className="w-full h-full object-cover rounded-lg mb-6"
    />
    <p className="mb-4 relative">
      Every day, millions of people use AI to answer questions, brainstorm
      ideas, write code, summarize documents, or simply satisfy their curiosity.
      Yet, despite using the same tool, people often have very different
      experiences. Some receive thoughtful, detailed responses that are exactly
      what they need, while others walk away disappointed with answers that feel
      generic or incomplete.
    </p>
    <p className="mb-4 relative">
      It's easy to assume that the difference lies in the AI itself.
    </p>
    <p className="mb-4 relative">More often than not, it lies in the prompt.</p>
    <p className="mb-4 relative">
      A prompt is more than just a question. Depending on what you're trying to
      accomplish, it can be the start of a conversation, a request for advice,
      or a detailed set of instructions. Regardless of its purpose,
      <RoughNotation
        type="highlight"
        show={true}
        color="#C8B4E3"
        multiline={true}
      >
        every prompt has one job: to communicate your intent as clearly as
        possible.
      </RoughNotation>{" "}
    </p>
    <p className="mb-4 relative">
      That idea isn't unique to AI. In fact, it's something many of us have been
      practicing long before conversational AI became part of our daily lives.
    </p>
    <h1 className="text-2xl font-bold mb-4">Before AI, There Were Keywords</h1>
    <p className="mb-4 relative">
      When I was in high school, I took a writing class where one lesson was
      emphasized repeatedly:{" "}
      <RoughNotation
        type="underline"
        show={true}
        color="#C8B4E3"
        multiline={true}
        strokeWidth={2}
      >
        use the right keywords.
      </RoughNotation>
    </p>
    <p className="mb-4 relative">
      Instead of typing long, vague sentences into a search engine, we were
      taught to remove unnecessary filler words and focus on the terms that best
      described what we were looking for.{" "}
      <RoughNotation
        type="highlight"
        show={true}
        color="#C8B4E3"
        multiline={true}
      >
        The more specific our keywords became, the more relevant our search
        results were.
      </RoughNotation>
    </p>
    <p className="mb-4 relative">
      Later, I encountered the same lesson in college while writing another
      research paper. At first, I struggled to find sources that matched my
      topic. My searches were often too broad, leading to articles that weren't
      particularly useful. Once I refined my keywords and became more
      intentional with my searches, finding relevant sources became much easier.
    </p>
    <p className="mb-4 relative">
      At the time, I thought this was simply a research skill.
    </p>
    <p className="mb-4 relative">
      Looking back, I realize it was also preparing me for something else.
    </p>
    <h1 className="text-2xl font-bold mb-4">
      Prompting Is a Form of Communication
    </h1>
    <p className="mb-4 relative">
      The technology has changed, but the underlying principle hasn't.
    </p>
    <p className="mb-4 relative">
      Whether you're searching an academic database or interacting with AI,
      you're trying to communicate what you're looking for.{" "}
      <RoughNotation
        type="underline"
        show={true}
        color="#C8B4E3"
        multiline={true}
        strokeWidth={2}
      >
        The clearer you The clearer you communicate, the more likely you are to
        receive a useful result.
      </RoughNotation>
    </p>
    <p className="mb-4 relative">
      Many people assume that AI automatically understands what they mean
      because their request makes sense in their own mind. But AI doesn't have
      access to your thoughts, your assumptions, or the context that exists
      outside of your prompt.
    </p>
    <p className="mb-4 relative">
      {" "}
      <RoughNotation
        type="highlight"
        show={true}
        color="#C8B4E3"
        multiline={true}
      >
        It only knows what you tell it.
      </RoughNotation>
    </p>
    <p className="mb-4 relative">
      That's why even small changes can have a surprisingly large impact.
    </p>
    <p className="mb-4 relative">
      Instead of asking AI to "explain computer architecture," imagine asking it
      to explain the topic to a first-year computer science student using
      analogies, diagrams, and step-by-step examples. The topic hasn't changed,
      but the response often becomes much more useful because you've provided
      context, identified your audience, and described the type of explanation
      you're looking for.
    </p>
    <p className="mb-4 relative">
      Sometimes, the difference between a mediocre answer and an incredible one
      is just a{" "}
      <RoughNotation
        type="underline"
        show={true}
        color="#C8B4E3"
        multiline={true}
        strokeWidth={2}
      >
        few carefully chosen words.
      </RoughNotation>
    </p>
    <h1 className="text-2xl font-bold mb-4">AI Still Needs Direction</h1>
    <p className="mb-4 relative">
      One of the biggest misconceptions about AI is that it's supposed to
      "figure out" exactly what we mean.
    </p>
    <p className="mb-4 relative">
      In reality, AI is incredibly knowledgeable, but it{" "}
      <RoughNotation
        type="underline"
        show={true}
        color="#C8B4E3"
        multiline={true}
        strokeWidth={2}
      >
        still depends on still depends on direction.
      </RoughNotation>
    </p>
    <p className="mb-4 relative">
      Unlike another person, it can't always infer the missing context from
      facial expressions, tone of voice, or previous shared experiences. It
      doesn't automatically know your level of expertise, your goals, or the
      format you have in mind unless you tell it.
    </p>
    <p className="mb-4 relative">
      That doesn't make AI unintelligent—it simply means it's a{" "}
      <RoughNotation
        type="highlight"
        show={true}
        color="#C8B4E3"
        multiline={true}
      >
        tool built around language.
      </RoughNotation>
    </p>{" "}
    <p className="mb-4 relative">
      The quality of its response is often influenced by the quality of the
      information it receives.
    </p>
    <h1 className="text-2xl font-bold mb-4">
      A Better Prompt Starts with Better Thinking
    </h1>
    <p className="mb-4 relative">
      One thing I've noticed is that writing a better prompt often requires
      understanding my own objective first.
    </p>
    <p className="mb-4 relative">
      Before typing a question, I now find myself asking:
    </p>
    <p className="mb-4 relative">What am I actually trying to accomplish?</p>
    <p className="mb-4 relative">
      <RoughNotation
        type="bracket"
        show={true}
        color="#C8B4E3"
        brackets={["left"]}
        strokeWidth={2}
      >
        Am I looking for a simple explanation? A technical deep dive? Feedback
        on an idea? A creative brainstorm? Advice tailored to a specific
        audience?
      </RoughNotation>
    </p>
    <p className="mb-4 relative">
      Answering those questions before writing the prompt usually leads to a
      much better response.
    </p>
    <p className="mb-4 relative">
      In that sense, prompting isn't just about communicating with AI.
    </p>
    <p className="mb-4 relative">
      It's also about organizing your own thoughts.
    </p>
    <h1 className="text-2xl font-bold mb-4">The Bigger Picture</h1>
    <p className="mb-4 relative">
      As AI becomes more integrated into education, research, software
      development, and everyday life, knowing how to communicate effectively
      will become an increasingly valuable skill.
    </p>
    <p className="mb-4 relative">
      The lesson I learned while writing research papers years ago still applies
      today. Choosing the right keywords helped me find better sources. Choosing
      the right prompt helps me get better responses from AI.
    </p>
    <p className="mb-4 relative">
      The technology has evolved, but the principle remains the same.
    </p>
    <p className="mb-4 relative">
      <RoughNotation type="highlight" show={true} color="#C8B4E3">
        Clear questions lead to clearer answers.
      </RoughNotation>
    </p>
    <p className="mb-4 relative">
      And sometimes, changing just a few carefully chosen words can change
      everything.
    </p>
  </div>
);

export default BlogThree;
