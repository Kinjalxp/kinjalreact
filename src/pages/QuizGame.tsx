import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Trophy, RotateCcw, ArrowLeft, ChevronRight, Loader2, WifiOff } from "lucide-react";
import { categoryInfo, aiAlgorithmsQuestions, type Category, type Question } from "../data/quiz";

const OPTION_LABELS = ["A", "B", "C", "D"];

const progressGradient: Record<Category, string> = {
  technology: "from-blue-500 to-cyan-500",
  science: "from-emerald-500 to-teal-500",
  education: "from-orange-500 to-amber-500",
  "ai-algorithms": "from-purple-500 to-indigo-500",
};

const getResultMessage = (score: number) => {
  if (score === 10) return { text: "Perfect Score!", emoji: "🏆", color: "text-yellow-500" };
  if (score >= 7)  return { text: "Great Job!",     emoji: "🌟", color: "text-green-600" };
  if (score >= 4)  return { text: "Good Effort!",   emoji: "👍", color: "text-blue-600" };
  return              { text: "Keep Practicing!", emoji: "📖", color: "text-gray-500" };
};

interface OpenTDBItem {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// OpenTDB category IDs — "ai-algorithms" is served locally instead, see fetchQuestions
const OPENTDB_CATEGORY: Partial<Record<Category, number | number[]>> = {
  technology: 18,  // Science: Computers
  science: 17,     // Science & Nature (no math)
  education: [22, 23], // Geography + History (5 each)
};

const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const fetchFromOpenTDB = async (categoryId: number, amount: number, signal: AbortSignal): Promise<OpenTDBItem[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&type=multiple`,
    { signal }
  );
  if (!res.ok) throw new Error("Network error");
  const data = await res.json();
  if (data.response_code !== 0) throw new Error(`OpenTDB error: ${data.response_code}`);
  return data.results;
};

const toQuestion = (item: OpenTDBItem, index: number): Question => {
  const correct = decodeHtml(item.correct_answer);
  const allOptions = shuffle([correct, ...item.incorrect_answers.map(decodeHtml)]);
  return { id: index + 1, question: decodeHtml(item.question), options: allOptions, correct: allOptions.indexOf(correct) };
};

const fetchQuestions = async (category: Category, signal: AbortSignal): Promise<Question[]> => {
  if (category === "ai-algorithms") {
    return shuffle(aiAlgorithmsQuestions);
  }
  const config = OPENTDB_CATEGORY[category];
  if (config === undefined) throw new Error(`No OpenTDB mapping for category: ${category}`);
  if (Array.isArray(config)) {
    // K-12: fetch Geography + History in parallel, combine and shuffle
    const [a, b] = await Promise.all([
      fetchFromOpenTDB(config[0], 5, signal),
      fetchFromOpenTDB(config[1], 5, signal),
    ]);
    return shuffle([...a, ...b]).map(toQuestion);
  }
  const results = await fetchFromOpenTDB(config, 10, signal);
  return results.map(toQuestion);
};

const QuizGame = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const validCategory = category as Category;
  const info = categoryInfo[validCategory];

  useEffect(() => {
    if (!info) return;
    const controller = new AbortController();
    setLoading(true);
    setError(false);
    fetchQuestions(validCategory, controller.signal)
      .then(setQuizQuestions)
      .catch((e: Error) => { if (e.name !== "AbortError") setError(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [validCategory, retryKey]);

  if (!info) {
    return (
      <div className="px-4 sm:px-6 lg:px-20 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-gray-700 text-xl mb-4">Category not found.</p>
          <button onClick={() => navigate("/quiz")} className="text-blue-600 hover:text-blue-500 transition-colors">
            ← Back to Quiz
          </button>
        </div>
      </div>
    );
  }

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-20 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 size={40} className="text-gray-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Loading questions…</p>
          <p className="text-gray-400 text-sm mt-1">{info.emoji} {info.label}</p>
        </div>
      </div>
    );
  }

  /* ── Error ── */
  if (error) {
    return (
      <div className="px-4 sm:px-6 lg:px-20 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <WifiOff size={40} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-700 font-medium mb-1">Couldn't load questions</p>
          <p className="text-gray-400 text-sm mb-6">Check your connection and try again.</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setRetryKey((k) => k + 1)}
              className="bg-black text-white font-semibold py-2 px-5 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Retry
            </button>
            <button
              onClick={() => navigate("/quiz")}
              className="border border-gray-200 text-gray-700 font-semibold py-2 px-5 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = quizQuestions[current];
  const bar = progressGradient[validCategory];

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === q.correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current === 9) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setRetryKey((k) => k + 1);
  };

  const getOptionClass = (index: number): string => {
    const base =
      "w-full text-left p-4 rounded-xl border transition-all duration-200 font-medium flex items-center gap-4";
    if (selected === null)
      return `${base} bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 cursor-pointer`;
    if (index === q.correct)
      return `${base} bg-green-50 border-green-400 text-green-700`;
    if (selected === index)
      return `${base} bg-red-50 border-red-400 text-red-700`;
    return `${base} bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed`;
  };

  /* ── Results screen ── */
  if (finished) {
    const msg = getResultMessage(score);
    const pct = score * 10;
    return (
      <div className="px-4 sm:px-6 lg:px-20 py-8 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 rounded-full p-5">
              <Trophy size={44} className="text-yellow-500" />
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-3">{info.emoji} {info.label}</p>

          <div className="text-7xl font-bold text-black mb-1">
            {score}<span className="text-3xl text-gray-400">/10</span>
          </div>

          <p className={`text-xl font-semibold mb-8 ${msg.color}`}>
            {msg.emoji} {msg.text}
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Your score</span>
              <span>{pct}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${bar} rounded-full transition-all duration-1000`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleRetry}
              className="w-full flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <RotateCcw size={16} />
              New Quiz
            </button>
            <button
              onClick={() => navigate("/quiz")}
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Choose Another Category
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Quiz screen ── */
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-8">
      <div className="max-w-2xl">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/quiz")}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Categories
          </button>
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5">
            <span>{info.emoji}</span>
            <span className="text-sm text-gray-700 font-medium">{info.label}</span>
          </div>
          <div className="bg-gray-100 rounded-full px-4 py-1.5">
            <span className="text-sm text-gray-700">
              Score: <span className="font-bold text-green-600">{score}</span>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {current + 1} of 10</span>
            <span>{(current + 1) * 10}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${bar} rounded-full transition-all duration-500`}
              style={{ width: `${(current + 1) * 10}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-7">
            <span className="bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 mt-0.5">
              Q{current + 1}
            </span>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">{q.question}</p>
          </div>

          <div className="flex flex-col gap-3">
            {q.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selected !== null}
                className={getOptionClass(index)}
              >
                <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold shrink-0 text-gray-600">
                  {OPTION_LABELS[index]}
                </span>
                <span className="flex-1 text-left">{option}</span>
                {selected !== null && index === q.correct && (
                  <span className="text-green-500 font-bold">✓</span>
                )}
                {selected === index && index !== q.correct && (
                  <span className="text-red-500 font-bold">✗</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Next button */}
        {selected !== null && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-black text-white font-semibold py-3 px-7 rounded-xl hover:bg-gray-800 transition-colors"
            >
              {current === 9 ? "See Results" : "Next Question"}
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
