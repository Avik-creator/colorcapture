"use client";
import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { TbCopyCheckFilled } from "react-icons/tb";

interface GradientProps {
  gradientColors: string;
}

const GradientColors: React.FC<GradientProps> = ({ gradientColors }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradientColors);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <li className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-gray-900 p-1.5 md:p-2 rounded-lg relative hover:cursor-pointer hover:-translate-y-1 transition-all">
      <div
        style={{ background: gradientColors }}
        className={`bg-${gradientColors} h-32 w-24 md:h-40 md:w-32 rounded-lg relative`}
      >
        <span className="absolute px-1 py-1.5 right-2 bottom-2 md:right-4 md:bottom-4 rounded">
          {copied ? (
            <TbCopyCheckFilled size={16} className="text-gray-100" />
          ) : (
            <FaRegClipboard size={16} color="black" onClick={copyToClipboard} />
          )}
        </span>
      </div>
    </li>
  );
};
