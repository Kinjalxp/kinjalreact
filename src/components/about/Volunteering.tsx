import React from "react";
import { VOLUNTEERING_DATA } from "../../constants";

export const Volunteering: React.FC = () => {
  return (
    <div className="rounded-2xl p-8 border border-gray-200 mb-8">
      <h3 className="text-2xl font-bold mb-4 text-black">Volunteering</h3>
      <div className="space-y-5">
        {VOLUNTEERING_DATA.map((item, index) => (
          <div key={item.id} className="relative flex gap-2">
            <div
              className={`flex-1 ${
                index % 2 === 0 ? "bg-stone-50" : "bg-gray-100"
              } rounded-2xl p-8 border border-gray-100 shadow-lg -mt-2`}
            >
              <h3 className="text-xl font-semibold mb-1 text-black">
                {item.name}
              </h3>
              <h4 className="text-md mb-1 text-black">{item.description}</h4>
              <p className="text-sm text-black">
                <span>{item.period} </span>
                <span className="text-sm mb-1 text-gray-500">
                  • {item.duration}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
