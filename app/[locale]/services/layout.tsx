import { routing } from "@/i18n/routing";
import CtaSection from "@/components/cta";
import WhyChooseUs from "@/components/whychoose";

type Props = {
  children: React.ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  return (
    <div>
      {children}
      <WhyChooseUs />
      <CtaSection />
    </div>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
