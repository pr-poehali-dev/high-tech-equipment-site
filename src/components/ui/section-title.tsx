
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  center = true,
  dark = false
}) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl font-bold mb-4 ${dark ? 'text-white' : ''}`}>{title}</h2>
      <div className="w-20 h-1 bg-[#9b87f5] mx-auto"></div>
      {subtitle && (
        <p className={`mt-4 text-lg ${dark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
