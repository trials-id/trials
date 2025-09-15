import React from "react";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";
import { PointerHighlight } from "./ui/pointer-highlight";

interface HeroServiceSectionProps {
  img: string;
  title: string;
  description: string;
  cta: string;
}

function HeroServiceSection({
  img,
  title,
  description,
  cta,
}: HeroServiceSectionProps) {
  const pointerText = title.split(" ").slice(0, 2).join(" ");
  const text = title.split(" ").slice(2).join(" ");
  return (
    <section>
      <div className='py-24 px-4 mx-auto'>
        <div className='relative h-[500px] flex-1'>
          <div className='absolute inset-0 flex size-full items-center justify-center overflow-hidden rounded-xl object-cover'>
            <img
              src={img}
              alt='video'
              className='inline-block size-full max-w-full object-cover align-middle'
            />
            <span className='absolute inset-0 z-10 bg-black/50'></span>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-12 pt-12'>
          <div className='mb-8 max-w-6xl text-4xl font-semibold tracking-tight  md:text-6xl'>
            <PointerHighlight
              rectangleClassName='bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose'
              pointerClassName='text-blue-500 h-6 w-6'
              containerClassName='inline-block mx-1'
            >
              <span className='relative z-10'>{pointerText}</span>
            </PointerHighlight>
            {text}
          </div>
          <div>
            <p className='text-lg leading-normal text-gray-500'>
              {description}
            </p>
            <div className='mt-8 flex justify-start gap-4'>
              <Button size='lg'>
                {cta} <MoveUpRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroServiceSection;
