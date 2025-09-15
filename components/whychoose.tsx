import React from "react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("ChooseUs");
  const features = [
    {
      id: "#1",
      title: t("expertise.title"),
      description: t("expertise.description"),
    },
    {
      id: "#2",
      title: t("customSolutions.title"),
      description: t("customSolutions.description"),
    },
    {
      id: "#3",
      title: t("customerFocus.title"),
      description: t("customerFocus.description"),
    },
    {
      id: "#4",
      title: t("innovation.title"),
      description: t("innovation.description"),
    },
  ];

  return (
    <div className='py-16 px-4'>
      {/* Header */}
      <div className='text-center mb-12 max-w-2xl mx-auto'>
        <h2 className='text-3xl md:text-4xl mb-4'>
          {t("title")}
          <PointerHighlight
            rectangleClassName='bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose'
            pointerClassName='text-blue-500 h-6 w-6'
            containerClassName='inline-block mx-1'
          >
            <span className='relative z-10'>Trials Indonesia?</span>
          </PointerHighlight>
        </h2>
        <h4 className='text-gray-600 leading-relaxed'>{t("description")}</h4>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='text-left rounded-xl border bg-white p-12 transition duration-200 hover:shadow-xl '
          >
            {/* Number Badge */}
            <div className='inline-flex items-center justify-center w-20 h-20 bg-gray-900 text-white font-bold text-lg rounded-xl mb-6'>
              {feature.id}
            </div>

            {/* Title */}
            <h3 className='text-2xl  text-gray-900 mb-4 leading-tight'>
              {feature.title}
            </h3>

            {/* Description */}
            <p className='text-gray-600 leading-relaxed'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
