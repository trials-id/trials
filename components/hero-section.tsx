import React from "react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";
import TechMarquee from "./tech-marquee";

function Hero() {
  const t = useTranslations("HomePage");
  const pointerText = t("title").split(" ").slice(0, 2).join(" ");
  const title = t("title").split(" ").slice(2).join(" ");

  return (
    <div className='relative flex h-[50rem] w-full items-center justify-center'>
      {/* <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div> */}
      <div className='relative z-20 w-full'>
        <div className='mx-auto max-w-5xl pt-20 text-2xl tracking-tight md:text-7xl text-center'>
          <PointerHighlight
            rectangleClassName='bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose'
            pointerClassName='text-blue-500 h-6 w-6'
            containerClassName='inline-block mx-1'
          >
            <span className='relative z-10'>{pointerText}</span>
          </PointerHighlight>
          {title}
        </div>
        <div className='mt-4 text-center text-sm max-w-xl mx-auto md:text-xl px-4'>
          <p>{t("description")}</p>
        </div>
        <div className='mt-8 flex justify-center items-center '>
          <Button size={"lg"}>
            {t("cta")} <MoveUpRight />
          </Button>
        </div>
        <div className='mt-20 overflow-hidden space-y-4'>
          <p className='text-sm md:text-base text-center items-center flex justify-center gap-2'>
            {t("tools")}
          </p>
          <TechMarquee />
        </div>
      </div>
    </div>
  );
}

export default Hero;
