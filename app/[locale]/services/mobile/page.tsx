"use client";
import HeroWebSection from "@/components/hero-service";
import ServicesAccordion from "@/components/service-accordion";
import { useTranslations } from "next-intl";
import React from "react";

function MobileServicePage() {
  const t = useTranslations("Services");

  const sections = [
    {
      id: "design",
      title: t("mobile.design.title"),
      description: t("mobile.design.description"),
      tags: [
        "Custom Mobile UI",
        "User-Centric Experience",
        "Cross-Platform Consistency",
      ],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "development",
      title: t("mobile.development.title"),
      description: t("mobile.development.description"),
      tags: [
        "Native Android Development",
        "Native iOS Development",
        "Cross-Platform Solutions",
      ],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "integration",
      title: t("mobile.integration.title"),
      description: t("mobile.integration.description"),
      tags: ["API Integration", "Payment Gateways", "Cloud Connectivity"],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "maintenance",
      title: t("mobile.maintenance.title"),
      description: t("mobile.maintenance.description"),
      tags: [
        "Bug Fixes & Patches",
        "Performance Optimization",
        "Feature Enhancements",
      ],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <HeroWebSection
        img={
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={t("mobile.title")}
        description={t("mobile.description")}
        cta={t("cta")}
      />
      <ServicesAccordion sections={sections} />
    </div>
  );
}

export default MobileServicePage;
