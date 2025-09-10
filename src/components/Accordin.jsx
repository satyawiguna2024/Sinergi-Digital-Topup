import { useState } from "react";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-500 rounded-lg mb-2">
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-5 font-medium text-white gap-3"
      >
        <span>{title}</span>
        <svg
          className={`w-3 h-3 shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>

      {/* Body */}
      {isOpen && (
        <div className="p-5 border-t border-gray-200 bg-slate-300 rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );
};
