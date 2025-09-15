import { useTranslations } from "next-intl";
import Image from "next/image";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}
const Footer = () => {
  const t = useTranslations("Navigation");
  const logo = {
    src: "/logo.png",
    alt: "blocks for shadcn/ui",
    title: "trials.id",
    url: "https://www.trials.id",
  };

  const tagline = "Built on Code, Driven by Purpose.";

  const menuItems: MenuItem[] = [
    {
      title: "Contact",
      links: [
        { text: "support@trials.id", url: "#" },
        { text: "+62 851 6369 7397", url: "#" },
      ],
    },
    {
      title: t("services"),
      links: [
        { text: t("servicesMenu.web.title"), url: "#" },
        { text: t("servicesMenu.mobile.title"), url: "#" },
        { text: t("servicesMenu.ai.title"), url: "#" },
        { text: t("servicesMenu.cloud.title"), url: "#" },
        { text: t("servicesMenu.analytic.title"), url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "#" },
        { text: "FAQs", url: "#" },
        { text: "Contact Us", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ];
  const copyright = "© 2025 Trials.id. All rights reserved.";
  const bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ];

  return (
    <section className='pt-32 px-4'>
      <footer>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-6'>
          <div className='col-span-2 mb-8 lg:mb-0'>
            <div className='flex items-center gap-2 lg:justify-start'>
              <Image src={logo.src} alt={logo.alt} width={120} height={60} />
            </div>
            <p className='mt-4 font-bold'>{tagline}</p>
            <p>Jl. Diponegor 2-12, Blotongan, Salatiga , Indonesia</p>
          </div>
          {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className='mb-4 font-bold'>{section.title}</h3>
              <ul className='text-muted-foreground space-y-4'>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className='hover:text-primary font-medium'>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center'>
          <p>{copyright}</p>
          <ul className='flex gap-4 mb-4'>
            {bottomLinks.map((link, linkIdx) => (
              <li key={linkIdx} className='hover:text-primary underline'>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  );
};

export { Footer };
