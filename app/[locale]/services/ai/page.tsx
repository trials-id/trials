"use client";
import HeroWebSection from "@/components/hero-service";
import ServicesAccordion from "@/components/service-accordion";
import { useTranslations } from "next-intl";
import React from "react";

function AiServicePage() {
  const t = useTranslations("Services");

  const sections = [
    {
      id: "automation",
      title: t("ai.automation.title"),
      description: t("ai.automation.description"),
      tags: [
        "Process Automation",
        "Chatbots & Virtual Assistants",
        "Predictive Workflows",
      ],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "analytics",
      title: t("ai.analytics.title"),
      description: t("ai.analytics.description"),
      tags: [
        "Predictive Analytics",
        "Customer Behavior Analysis",
        "Data Visualization",
      ],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "integration",
      title: t("ai.integration.title"),
      description: t("ai.integration.description"),
      tags: [
        "API Integration",
        "Recommendation Engines",
        "Natural Language Processing",
      ],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "innovation",
      title: t("ai.innovation.title"),
      description: t("ai.innovation.description"),
      tags: ["Machine Learning Models", "Deep Learning", "Computer Vision"],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <HeroWebSection
        img={
          "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={t("ai.title")}
        description={t("ai.description")}
        cta={t("cta")}
      />
      <ServicesAccordion sections={sections} />
    </div>
  );
}

export default AiServicePage;
