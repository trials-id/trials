"use client";
import HeroWebSection from "@/components/hero-service";
import ServicesAccordion from "@/components/service-accordion";
import { useTranslations } from "next-intl";
import React from "react";

function WebServicePage() {
  const t = useTranslations("Services");

  const sections = [
    {
      id: "design",
      title: t("web.design.title"),
      description: t("web.design.description"),
      tags: [
        "UI/UX Design",
        "Responsive Design",
        "User Journey Mapping & Flow",
      ],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "development",
      title: t("web.development.title"),
      description: t("web.development.description"),
      tags: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Solutions",
      ],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "infrastructure",
      title: t("web.infrastructure.title"),
      description: t("web.infrastructure.description"),
      tags: ["Cloud Hosting & Management", "CI/CD Pipelines", "DevOps"],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "control",
      title: t("web.control.title"),
      description: t("web.control.description"),
      tags: [
        "Performance Monitoring",
        "Analytics & Reporting",
        "Regular Updates & Maintenance",
      ],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <HeroWebSection
        img={"/"}
        title={t("web.title")}
        description={t("web.description")}
        cta={t("cta")}
      />
      <ServicesAccordion sections={sections} />
    </div>
  );
}

export default WebServicePage;
