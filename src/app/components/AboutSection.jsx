"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Supply Chain",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>RFx</li>
        <li>Contract Negotiation</li>
        <li>Procure-to-Pay (P2P)</li>
        <li>Supplier and Product Segmentation</li>
        <li>Key Performance Indicators</li>
        <li>Management</li>
        <li>End-to-End Supply Chain Operations</li>
        <li>Supply Chain Analytics and Ad-hoc Analyses</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>3PL Carrier Selection</li>
        <li>Transportation Container Optimization</li>
        <li>Inbound Logistics (3PL)</li>
        <li>Distribution Network</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Six Sigma</li>
        <li>JIT</li>
        <li>Value Stream Mapping</li>
        <li>5S</li>
        <li>Kanban</li>
        <li>Kaizen</li>
        <li>DMAIC</li>
        <li>SIPOC</li>
        <li>RCCA</li>
        <li>FMEA</li>
      </ul>
    ),
  },
  {
    title: "Technical Skills",
    id: "technical_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Tableau</li>
        <li>Power BI</li>
        <li>Python</li>
        <li>R</li>
        <li>Advanced Excel</li>
        <li>SQL</li>
        <li>SAP</li>
        <li>Bigquery</li>
        <li>SolidWorks</li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m Deep Bhattacharjee, an ambitious Engineering Management Master&apos;s 
          candidate at Northeastern University, with a strong foundation in 
          Electronics and Telecommunication Engineering from the University 
          of Mumbai. Leveraging my technical prowess in software such as Tableau, 
          Power BI, Python, R, and SQL, I have adeptly improved supply chain efficiencies, 
          evident from my impactful tenure at Capgemini and Delphi Steel. My academic and 
          professional journey reflects a relentless pursuit of process optimization, cost 
          reduction, and efficiency enhancement, guided by data-driven decision-making and strategic planning.
            
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Supply Chain{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Logistics{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Process Improvement{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("technical_skills")}
              active={tab === "technical_skills"}
            >
              {" "}
              Technical Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
