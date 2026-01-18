import React from "react";
import { getSocialLinks } from "../../constants";
import pic from "../../assets/kinjalcropped.png";

export const HeroSection: React.FC = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className="bg-stone-50 rounded-2xl p-8 md:p-12 mb-8 border border-gray-200 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
          <img
            src={pic}
            alt="Kinjal Maurya"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Hi, I'm <span className="text-black">Kinjal Maurya</span>
          </h2>
          <p className="text-xl text-black mb-6">
            CS Undergraduate • AI Enthusiast • Tech Writer
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
