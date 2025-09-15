import React from "react";
import { PointerHighlight } from "./ui/pointer-highlight";

const WhyChooseUs = () => {
  const features = [
    {
      id: "#1",
      title: "Tailored Solutions for Your Business",
      description:
        "We don't offer one-size-fits-all apps. Every solution is customized to meet your unique business workflows and users' needs.",
    },
    {
      id: "#2",
      title: "End-to-End Service",
      description:
        "From UI/UX design to backend development, deployment, and maintenance — we handle every aspect of your project with care and expertise.",
    },
    {
      id: "#3",
      title: "Scalable & Future-Ready Architecture",
      description:
        "Our applications are built with modern architecture and clean code, so they grow seamlessly as your business expands.",
    },
    {
      id: "#4",
      title: "Fast, Secure, and Reliable",
      description:
        "We use the latest frameworks and best practices to ensure your app performs efficiently while your data stays protected.",
    },
  ];

  return (
    <div className='py-16 px-4'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          Why{" "}
          <PointerHighlight
            rectangleClassName='bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose'
            pointerClassName='text-blue-500 h-6 w-6'
            containerClassName='inline-block mx-1'
          >
            <span className='relative z-10'>Choose Us?</span>
          </PointerHighlight>
        </h2>
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
            <h3 className='text-xl font-bold text-gray-900 mb-4 leading-tight'>
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
