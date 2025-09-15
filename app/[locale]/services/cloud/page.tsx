"use client";
import HeroWebSection from "@/components/hero-service";
import ServicesAccordion from "@/components/service-accordion";
import { useTranslations } from "next-intl";
import React from "react";

function CloudServicePage() {
  const t = useTranslations("Services");

  const sections = [
    {
      id: "migration",
      title: t("cloud.migration.title"),
      description: t("cloud.migration.description"),
      tags: ["Data Migration", "Application Migration", "Hybrid Solutions"],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "architecture",
      title: t("cloud.architecture.title"),
      description: t("cloud.architecture.description"),
      tags: [
        "Multi-Cloud Strategy",
        "Serverless Architecture",
        "Load Balancing & Scaling",
      ],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "security",
      title: t("cloud.security.title"),
      description: t("cloud.security.description"),
      tags: [
        "Data Encryption",
        "Identity & Access Management",
        "Threat Detection & Prevention",
      ],
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "management",
      title: t("cloud.management.title"),
      description: t("cloud.management.description"),
      tags: [
        "Monitoring & Alerts",
        "Cost Optimization",
        "Backup & Disaster Recovery",
      ],
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <HeroWebSection
        img={
          "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={t("cloud.title")}
        description={t("cloud.description")}
        cta={t("cta")}
      />
      <ServicesAccordion sections={sections} />
    </div>
  );
}

export default CloudServicePage;
