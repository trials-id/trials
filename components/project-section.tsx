import React from "react";
import { useTranslations } from "next-intl";
import { PointerHighlight } from "./ui/pointer-highlight";
import { Card, Carousel } from "./ui/apple-cards-carousel";

function ProjectSection() {
  const tHome = useTranslations("HomePage");
  const t = useTranslations("Navigation");

  const items = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const cards = items.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className='relative flex w-full items-center justify-center mt-36'>
      <div className='relative z-20 w-full space-y-8'>
        <div>
          <div className='text-center text-2xl'>
            <PointerHighlight
              rectangleClassName='bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose'
              pointerClassName='text-blue-500 h-6 w-6'
              containerClassName='inline-block mx-1'
            >
              <span className='relative z-10'>{tHome("projects.title")}</span>
            </PointerHighlight>
          </div>
          <div className='mx-auto max-w-2xl text-xl tracking-tight md:text-4xl text-center capitalize'>
            {tHome("projects.description")}
          </div>
        </div>
        <div className='w-full'>
          <Carousel items={cards} />
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
