import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServicesAccordionProps {
  sections: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
  }[];
}

const ServicesAccordion: React.FC<ServicesAccordionProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("design");

  const toggleSection = (sectionId: any) => {
    setActiveSection(activeSection === sectionId ? "" : sectionId);
  };

  const getCurrentImage = () => {
    const currentSection = sections.find(
      (section) => section.id === activeSection
    );
    return currentSection ? currentSection.image : sections[0].image;
  };

  return (
    <div className='px-6'>
      <div className='grid lg:grid-cols-2 gap-8 items-start'>
        {/* Accordion Section */}
        <div className='space-y-4'>
          {sections.map((section) => (
            <div
              key={section.id}
              className='border border-gray-200 rounded-lg overflow-hidden'
            >
              <button
                onClick={() => toggleSection(section.id)}
                className='w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center'
              >
                <h3 className='text-lg font-semibold text-gray-900'>
                  {section.title}
                </h3>
                {activeSection === section.id ? (
                  <ChevronUp className='w-5 h-5 text-gray-600' />
                ) : (
                  <ChevronDown className='w-5 h-5 text-gray-600' />
                )}
              </button>

              {activeSection === section.id && (
                <div className='px-6 py-4 bg-white border-t border-gray-200'>
                  <p className='text-gray-700 mb-4 leading-relaxed'>
                    {section.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {section.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className='lg:sticky lg:top-6'>
          <div className='aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
            <img
              src={getCurrentImage()}
              alt='Service illustration'
              className='w-full h-full object-cover transition-all duration-500 ease-in-out'
            />
          </div>

          {/* Optional: Add some decorative elements */}
          <div className='mt-4 text-center'>
            <div className='inline-flex space-x-2'>
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeSection === section.id ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAccordion;
