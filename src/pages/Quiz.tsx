import { useNavigate } from "react-router-dom";
import { Flame, Zap } from "lucide-react";
import { categoryInfo, type Category } from "../data/quiz";

const categoryStyles: Record<Category, { iconBg: string; accentBorder: string; button: string }> = {
  technology: {
    iconBg: "bg-blue-100",
    accentBorder: "hover:border-blue-300",
    button: "from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400",
  },
  science: {
    iconBg: "bg-emerald-100",
    accentBorder: "hover:border-emerald-300",
    button: "from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500",
  },
  education: {
    iconBg: "bg-orange-100",
    accentBorder: "hover:border-orange-300",
    button: "from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400",
  },
  "ai-algorithms": {
    iconBg: "bg-purple-100",
    accentBorder: "hover:border-purple-300",
    button: "from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400",
  },
};

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-8">

      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-5">
          <Zap size={13} className="text-yellow-500" />
          <span className="text-sm text-gray-600 font-medium">Interactive Quiz</span>
        </div>
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-orange-100 rounded-xl p-3">
            <Flame size={32} className="text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-black">Test Your Knowledge</h1>
        </div>
        <p className="text-gray-500 text-lg max-w-lg">
          Pick a category and challenge yourself with 10 carefully crafted questions.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {(Object.keys(categoryInfo) as Category[]).map((cat) => {
          const info = categoryInfo[cat];
          const style = categoryStyles[cat];
          return (
            <button
              key={cat}
              onClick={() => navigate(`/quiz/${cat}`)}
              className={`text-left bg-white border border-gray-200 ${style.accentBorder} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full cursor-pointer`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 ${style.iconBg} rounded-2xl mb-5 text-2xl`}>
                {info.emoji}
              </div>
              <h2 className="text-xl font-bold text-black mb-2">{info.label}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{info.description}</p>
              <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 mb-6">
                <span className="text-xs text-gray-500 font-medium">10 Questions</span>
              </div>
              <div className={`w-full bg-gradient-to-r ${style.button} text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-sm`}>
                Start Quiz
                <span className="text-base">→</span>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-gray-400 text-sm">
        10 questions per category · Instant feedback · No time limit
      </p>
    </div>
  );
};

export default Quiz;
