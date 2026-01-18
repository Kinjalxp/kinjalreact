import React from "react";
import logo from "../../assets/AIpractitionerLogo.png";

export const Achievements: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
      <h3 className="text-2xl font-bold mb-4 text-black">Key Achievements</h3>
      <div className="flex flex-row items-center gap-1">
        <div className="w-[120px] h-[120px] flex items-center justify-center">
          <img
            src={logo}
            alt="AWS AI Practitioner Logo"
            className="w-[120px] h-[120px] object-contain"
          />
        </div>
        <div>
          <h2 className="mb-4">AWS AI Practitioner Certification</h2>
          <h3 className="text-sm mb-4 text-gray-500">Jul 2025</h3>
        </div>
      </div>
    </div>
  );
};
