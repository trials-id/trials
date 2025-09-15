"use client";
import HeroWebSection from "@/components/hero-service";
import ServicesAccordion from "@/components/service-accordion";
import { useTranslations } from "next-intl";
import React from "react";

function WebServicePage() {
  const t = useTranslations("Services");

  const sections = [
    {
      id: "dataCollection",
      title: t("analytic.dataCollection.title"),
      description: t("analytic.dataCollection.description"),
      tags: ["ETL Pipelines", "Data Warehousing", "Big Data Processing"],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "realTime",
      title: t("analytic.realTime.title"),
      description: t("analytic.realTime.description"),
      tags: ["Custom Dashboards", "KPI Tracking", "Visualization Tools"],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "insights",
      title: t("analytic.insights.title"),
      description: t("analytic.insights.description"),
      tags: [
        "Predictive Analytics",
        "Behavioral Insights",
        "Performance Forecasting",
      ],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "integration",
      title: t("analytic.integration.title"),
      description: t("analytic.integration.description"),
      tags: ["API Integration", "Embedded Analytics", "Cross-Platform Access"],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <HeroWebSection
        img={"/"}
        title={t("analytic.title")}
        description={t("analytic.description")}
        cta={t("cta")}
      />
      <ServicesAccordion sections={sections} />
    </div>
  );
}

export default WebServicePage;
