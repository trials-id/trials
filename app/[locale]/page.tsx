import CtaSection from "@/components/cta";
import Hero from "@/components/hero-section";
import ProjectSection from "@/components/project-section";
import ServiceSection from "@/components/service-section";
import { setRequestLocale } from "next-intl/server";
import React, { use } from "react";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <div>
      <Hero />
      <ServiceSection />
      <ProjectSection />
      <CtaSection />
    </div>
  );
}
