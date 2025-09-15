import React from "react";
import { useTranslations } from "next-intl";
import { PointerHighlight } from "./ui/pointer-highlight";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Clipboard } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

function ServiceSection() {
  const tHome = useTranslations("HomePage");
  const t = useTranslations("Navigation");

  const items = [
    {
      title: t("servicesMenu.web.title"),
      description: t("servicesMenu.web.description"),
      header: (
        <HeaderImage
          src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ratio={4 / 3}
        />
      ),
      icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
      href: "/services/web",
    },
    {
      title: t("servicesMenu.mobile.title"),
      description: t("servicesMenu.mobile.description"),
      header: (
        <HeaderImage
          src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ratio={4 / 3}
        />
      ),
      icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
      href: "/services/mobile",
    },
    {
      title: t("servicesMenu.cloud.title"),
      description: t("servicesMenu.cloud.description"),
      header: (
        <HeaderImage
          src='https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ratio={4 / 3}
        />
      ),
      icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
      href: "/services/cloud",
    },
    {
      title: t("servicesMenu.ai.title"),
      description: t("servicesMenu.ai.description"),
      header: (
        <HeaderImage
          src='https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ratio={9 / 3}
        />
      ),
      icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
      href: "/services/ai",
    },
    {
      title: t("servicesMenu.analytic.title"),
      description: t("servicesMenu.analytic.description"),
      header: (
        <HeaderImage
          src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ratio={4 / 3}
        />
      ),
      icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
      href: "/services/analytic",
    },
  ];

  return (
    <div className='relative flex  w-full items-center justify-center '>
      <div className='relative z-20 w-full space-y-8'>
        <div>
          <div className='text-center text-2xl'>
            <PointerHighlight
              rectangleClassName='bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose'
              pointerClassName='text-blue-500 h-6 w-6'
              containerClassName='inline-block mx-1'
            >
              <span className='relative z-10'>{tHome("services.title")}</span>
            </PointerHighlight>
          </div>
          <div className='mx-auto max-w-2xl text-xl tracking-tight md:text-4xl text-center capitalize'>
            {tHome("services.description")}
          </div>
        </div>
        <div className='w-full'>
          <BentoGrid className='w-full mx-auto '>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                href={item.href}
                className={i === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}

interface HeaderImageProps {
  src: string;
  ratio?: number;
  className?: string;
}

export const HeaderImage = ({
  src,
  ratio = 1 / 1,
  className,
}: HeaderImageProps) => {
  return (
    <AspectRatio ratio={ratio} className={cn("bg-muted", className)}>
      <Image src={src} alt='Project Image' fill className=' object-cover' />
    </AspectRatio>
  );
};

export default ServiceSection;
