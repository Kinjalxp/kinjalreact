import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { EDUCATION_DATA } from "../../constants";

export const EducationTimeline: React.FC = () => {
  return (
    <div className="rounded-2xl p-8 border border-gray-200 mb-8">
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-black">Education</h3>
        <p className="text-lg text-black">
          My academic journey and achievements
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

        <div className="space-y-8">
          {EDUCATION_DATA.map((item, index) => (
            <div key={item.id} className="relative flex gap-8">
              <div className="relative flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center z-10 ${
                    item.status === "completed"
                      ? "bg-black"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {item.status === "completed" ? (
                    <GraduationCap className="text-white" size={24} />
                  ) : (
                    <BookOpen className="text-gray-400" size={24} />
                  )}
                </div>
              </div>

              <div
                className={`flex-1 ${
                  index === 0 ? "bg-stone-50" : "bg-gray-100"
                } rounded-2xl p-8 border border-gray-200 shadow-lg -mt-2`}
              >
                <div className="mb-4">
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                      item.status === "completed"
                        ? "bg-black text-white"
                        : "bg-white border border-gray-300 text-black"
                    }`}
                  >
                    {item.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-black">
                  {item.level}
                </h3>
                <h4 className="text-xl font-semibold mb-2 text-black">
                  {item.institution}
                </h4>
                <p className="text-lg mb-2 text-black">{item.degree}</p>
                <p className="text-sm mb-4 text-gray-600">{item.period}</p>
                <p className="text-black leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
