import { MoveUpRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { BackgroundBeams } from "./ui/background-beam";

function CtaSection() {
  const t = useTranslations("HomePage");
  return (
    <section className='py-32 max-w-7xl mx-auto'>
      <div className='h-[20rem] relative flex flex-col items-center justify-center antialiased bg-white gap-10 rounded-lg border p-6 shadow-sm lg:px-20 lg:py-16 transition duration-200 hover:shadow-xl'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h4 className='max-w-xl mb-2 text-2xl font-bold lg:text-5xl capitalize'>
            {t("ctas.title")}
          </h4>
          <p className='text-zinc-600'>{t("ctas.description")}</p>
          <div className='mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row'>
            <Button size={"lg"}>
              {t("cta")}
              <MoveUpRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
