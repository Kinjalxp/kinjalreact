import { Outlet, NavLink, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { aiTopics } from "../data/aiJourney";
import {
  ChevronDown,
  GitBranch,
  Brain,
  TrendingUp,
  Layers,
  Bot,
  Workflow,
  Database,
} from "lucide-react";

const iconMap: Record<string, React.FC<{ size?: number; strokeWidth?: number }>> = {
  GitBranch,
  Brain,
  TrendingUp,
  Layers,
  Bot,
  Workflow,
  Database,
};

const AIJourneyLayout = () => {
  const { topic: activeTopicSlug } = useParams();
  const { pathname } = useLocation();

  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const s = new Set<string>();
    s.add(activeTopicSlug ?? aiTopics[0].slug);
    return s;
  });

  useEffect(() => {
    if (activeTopicSlug) {
      setExpanded((prev) => new Set([...prev, activeTopicSlug]));
    }
  }, [activeTopicSlug]);

  const toggle = (slug: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  return (
    <div className="flex min-h-full">
      {/* ── Sidebar ── */}
      <aside className="sticky top-0 h-screen w-64 lg:w-72 flex-shrink-0 flex flex-col overflow-hidden bg-stone-50 border-r border-gray-200">
        {/* Header */}
        <div className="px-5 pt-6 pb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
            AI Journey
          </p>
          <p className="text-[11px] text-gray-400 mt-1">Personal notes &amp; learnings</p>
        </div>

        <div className="h-px bg-gray-200 mx-4 mb-3" />

        {/* Nav */}
        <nav
          className="flex-1 overflow-y-auto px-3 pb-6 space-y-0.5"
          style={{ scrollbarWidth: "none" }}
        >
          {aiTopics.map((topic) => {
            const isActiveTopic = topic.slug === activeTopicSlug;
            const isExpanded = expanded.has(topic.slug);
            const hasMultiple = topic.subtopics.length > 1;
            const Icon = iconMap[topic.icon] ?? Brain;

            return (
              <div key={topic.slug}>
                {hasMultiple ? (
                  /* Expandable topic — button that toggles accordion */
                  <button
                    onClick={() => toggle(topic.slug)}
                    className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 ${
                      isActiveTopic
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.8} />
                    <span className="flex-1 text-[13px] font-semibold tracking-tight">
                      {topic.title}
                    </span>
                    <ChevronDown
                      size={12}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  /* Single-page topic — direct NavLink */
                  <NavLink
                    to={`/ai-journey/${topic.slug}/${topic.subtopics[0].slug}`}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold tracking-tight transition-all duration-150 ${
                      isActiveTopic
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.8} />
                    {topic.title}
                  </NavLink>
                )}

                {/* Subtopics accordion — only shown for multi-subtopic topics */}
                {hasMultiple && (
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-0.5 pb-1 pl-3 pr-1 space-y-0.5">
                      {topic.subtopics.map((subtopic) => {
                        const isActive =
                          pathname === `/ai-journey/${topic.slug}/${subtopic.slug}`;
                        return (
                          <NavLink
                            key={subtopic.slug}
                            to={`/ai-journey/${topic.slug}/${subtopic.slug}`}
                            className={`flex items-center gap-2.5 px-3 py-1.5 ml-2 rounded-lg text-[12.5px] transition-all duration-150 ${
                              isActive
                                ? "text-black font-semibold bg-gray-100"
                                : "text-gray-500 hover:text-black hover:bg-gray-100"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                isActive ? "bg-black" : "bg-gray-300"
                              }`}
                            />
                            {subtopic.title}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-200">
          <p className="text-[10px] text-gray-400">
            {aiTopics.length} topics · growing over time
          </p>
        </div>
      </aside>

      {/* ── Content ── */}
      <main className="flex-1 min-w-0 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default AIJourneyLayout;
