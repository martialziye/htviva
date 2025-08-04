import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  isExpanded,
  onToggle,
  children,
  isActive = false
}) => {
  const [height, setHeight] = useState<string>('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isExpanded]);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-2 text-left hover:bg-gray-50 transition-colors"
      >
        <span className={`text-lg font-semibold transition-colors ml-2 ${
          isActive ? 'text-brand-red' : 'text-gray-600'
        }`}>
          {title}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 mr-2 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div 
        style={{ height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div ref={contentRef} className="pb-4 px-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection; 