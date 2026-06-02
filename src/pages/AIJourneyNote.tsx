import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { aiTopics } from "../data/aiJourney";
import { ChevronRight } from "lucide-react";

const AIJourneyNote = () => {
  const { topic, subtopic } = useParams();
  const topicData = aiTopics.find((t) => t.slug === topic);
  const subtopicData = topicData?.subtopics.find((s) => s.slug === subtopic);

  if (!topicData || !subtopicData) {
    return (
      <div className="flex items-center justify-center h-full min-h-[60vh] text-gray-400">
        Note not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* ── Header ── */}
      <div className="border-b border-gray-200 bg-stone-50 px-8 lg:px-14 pt-8 pb-7">
        <nav className="flex items-center gap-1.5 text-[11.5px] text-gray-400 mb-4">
          <Link to="/ai-journey" className="hover:text-black transition-colors">
            AI Journey
          </Link>
          <ChevronRight size={11} className="text-gray-300" />
          <span className={topicData.subtopics.length > 1 ? "text-gray-600" : "font-semibold text-gray-700"}>
            {topicData.title}
          </span>
          {topicData.subtopics.length > 1 && (
            <>
              <ChevronRight size={11} className="text-gray-300" />
              <span className="font-semibold text-gray-700">{subtopicData.title}</span>
            </>
          )}
        </nav>

        <h1 className="text-[26px] font-bold text-black leading-tight tracking-tight">
          {topicData.subtopics.length > 1 ? subtopicData.title : topicData.title}
        </h1>
        <p className="text-gray-500 text-[14px] mt-1.5 max-w-xl leading-relaxed">
          {subtopicData.description}
        </p>
      </div>

      {/* ── Content ── */}
      <article className="px-8 lg:px-14 py-10 max-w-3xl">
        {subtopicData.component ? (
          <subtopicData.component />
        ) : (
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold text-black mb-4 mt-0 leading-tight">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-[18px] font-bold text-black mt-10 mb-3 pb-2.5 border-b border-gray-200">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-[15px] font-semibold text-black mt-7 mb-2">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="mb-5 space-y-1.5 pl-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-outside ml-5 mb-5 space-y-1.5 text-[15px] text-gray-700">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="flex gap-2.5 text-[15px] text-gray-700 leading-[1.75]">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                <span>{children}</span>
              </li>
            ),
            code: ({ children, className }) => {
              const isBlock = className?.startsWith("language-");
              if (isBlock) {
                return (
                  <code className="block bg-gray-950 text-gray-100 rounded-xl px-5 py-4 text-[13px] font-mono overflow-x-auto mb-5 whitespace-pre leading-relaxed">
                    {children}
                  </code>
                );
              }
              return (
                <code className="bg-gray-100 text-gray-800 rounded-md px-[5px] py-[2px] text-[13px] font-mono">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => <div className="mb-5">{children}</div>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-[3px] border-gray-300 pl-4 my-6 text-[14.5px] italic text-gray-500 leading-relaxed">
                {children}
              </blockquote>
            ),
            hr: () => <hr className="border-gray-200 my-10" />,
            strong: ({ children }) => (
              <strong className="font-semibold text-black">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-gray-500">{children}</em>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-black underline underline-offset-2 hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto mb-6 rounded-xl border border-gray-200">
                <table className="w-full text-[13.5px] border-collapse">{children}</table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-50 border-b border-gray-200">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="px-4 py-2.5 text-left font-semibold text-black">{children}</th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2.5 text-gray-700 border-t border-gray-100">{children}</td>
            ),
          }}
        >
          {subtopicData.content ?? ""}
        </ReactMarkdown>
        )}
      </article>
    </div>
  );
};

export default AIJourneyNote;
