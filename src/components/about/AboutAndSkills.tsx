import React from "react";
import { SKILLS } from "../../constants";

export const AboutAndSkills: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-black">About Me</h3>
        <p className="text-black leading-relaxed mb-4">
          I am an undergraduate Computer Science student at Rutgers State
          University with a strong interest in technology, problem-solving, and
          continuous learning. My interest in computing began at a young age and
          has developed through both academic study and hands-on exploration. I
          am currently pursuing the AWS Cloud Practitioner certification to
          strengthen my understanding of cloud technologies and scalable
          systems. Outside of technology, I enjoy reading in my free time, which
          helps me maintain perspective and encourages thoughtful thinking.
        </p>
      </div>

      <div className="bg-stone-50 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-black">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-black hover:text-white transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
