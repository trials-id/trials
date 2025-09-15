import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./ui/language-switcher";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

const Navigation = () => {
  const t = useTranslations("Navigation");

  const logo = {
    src: "/logo.png",
    alt: "trials.id",
    url: "/",
  };

  const menu: MenuItem[] = [
    { title: t("home"), url: "/" },
    {
      title: t("projects"),
      url: "#",
      items: [
        {
          title: t("projectsMenu.blog.title"),
          description: t("projectsMenu.blog.description"),
          icon: <Book className='size-5 shrink-0' />,
          url: "#",
        },
        {
          title: t("projectsMenu.company.title"),
          description: t("projectsMenu.company.description"),
          icon: <Trees className='size-5 shrink-0' />,
          url: "#",
        },
      ],
    },
    {
      title: t("services"),
      url: "#",
      items: [
        {
          title: t("servicesMenu.web.title"),
          description: t("servicesMenu.web.description"),
          icon: <Zap className='size-5 shrink-0' />,
          url: "/services/web",
        },
        {
          title: t("servicesMenu.mobile.title"),
          description: t("servicesMenu.mobile.description"),
          icon: <Sunset className='size-5 shrink-0' />,
          url: "/services/mobile",
        },
        {
          title: t("servicesMenu.ai.title"),
          description: t("servicesMenu.ai.description"),
          icon: <Trees className='size-5 shrink-0' />,
          url: "/services/ai",
        },
        {
          title: t("servicesMenu.cloud.title"),
          description: t("servicesMenu.cloud.description"),
          icon: <Book className='size-5 shrink-0' />,
          url: "/services/cloud",
        },
        {
          title: t("servicesMenu.analytic.title"),
          description: t("servicesMenu.analytic.description"),
          icon: <Book className='size-5 shrink-0' />,
          url: "/services/analytic",
        },
      ],
    },
    { title: t("blog"), url: "#" },
    { title: t("about"), url: "#" },
  ];
  return (
    <section className='p-4'>
      {/* Desktop Menu */}
      <nav className='hidden justify-between lg:flex'>
        <div className='flex items-center gap-6'>
          {/* Logo */}
          <a href={logo.url} className='flex items-center gap-2'>
            <Image
              width={64}
              height={32}
              src={logo.src}
              className='max-h-8 dark:invert'
              alt={logo.alt}
            />
          </a>
          <div className='flex items-center'>
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className='flex gap-2'>
          <Button asChild size='sm'>
            <a href={"/contact"}>{t("contact")}</a>
          </Button>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className='block lg:hidden'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href={logo.url} className='flex items-center gap-2'>
            <Image
              width={64}
              height={32}
              src={logo.src}
              className='max-h-8 dark:invert'
              alt={logo.alt}
            />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon'>
                <Menu className='size-4' />
              </Button>
            </SheetTrigger>
            <SheetContent className='overflow-y-auto'>
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className='flex items-center gap-2'>
                    <Image
                      width={64}
                      height={32}
                      src={logo.src}
                      className='max-h-8 dark:invert'
                      alt={logo.alt}
                    />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className='flex flex-col gap-6 p-4'>
                <Accordion
                  type='single'
                  collapsible
                  className='flex w-full flex-col gap-4'
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>

                <div className='flex flex-col gap-3'>
                  <Button asChild>
                    <a href={"/contact"}>{t("contact")}</a>
                  </Button>
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className='bg-popover text-popover-foreground'>
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className='w-80'>
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className='bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors'
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className='border-b-0'>
        <AccordionTrigger className='text-md py-0 font-semibold hover:no-underline'>
          {item.title}
        </AccordionTrigger>
        <AccordionContent className='mt-2'>
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className='text-md font-semibold'>
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className='hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors'
      href={item.url}
    >
      <div className='text-foreground'>{item.icon}</div>
      <div>
        <div className='text-sm font-semibold'>{item.title}</div>
        {item.description && (
          <p className='text-muted-foreground text-sm leading-snug'>
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navigation };
