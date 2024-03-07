"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Global Supply Chain Strategy Development and Execution",
    description: "This project repository contains the strategies and implementation details of a robust global supply chain management system designed to enhance bottom-line performance by 15%. My approach leverages innovative data analysis techniques and cross-functional collaboration to streamline operations.",
    image: "/images/projects/1.png",
    tag: ["All"],
    gitUrl: "https://github.com/Deep-1997-08/Global-Supply-Chain-Strategy-Development-and-Execution",
    previewUrl: "https://github.com/Deep-1997-08/Global-Supply-Chain-Strategy-Development-and-Execution",
  },
  {
    id: 2,
    title: "eCommerce Website Traffic Analysis and Optimization",
    description: "This repository documents the comprehensive analysis and subsequent optimization strategies for an eCommerce start-up's website. The focus was on evaluating website traffic sources, enhancing the customer purchase journey, and improving overall site performance and customer satisfaction.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/Deep-1997-08/eCommerce-Website-Traffic-Analysis-and-Optimization-",
    previewUrl: "https://github.com/Deep-1997-08/eCommerce-Website-Traffic-Analysis-and-Optimization-",
  },
  {
    id: 3,
    title: "Supply Chain Optimization for Deliverr Logistics",
    description: "This repository is dedicated to the supply chain optimization strategies implemented for Deliverr Logistics, which significantly improved lead time reduction, on-time delivery rates, order fulfillment rates, and established a proficient Inventory Management System.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/Deep-1997-08/Supply-Chain-Optimization-for-Deliverr-Logist-ics",
    previewUrl: "https://github.com/Deep-1997-08/Supply-Chain-Optimization-for-Deliverr-Logist-ics",
  },
  {
    id: 4,
    title: "Cognitive Computing and Natural Language Processing for Intelligent Assistants in Supply Chain Management",
    description: "This research paper explores the integration of Cognitive Computing and Natural Language Processing (NLP) technologies in enhancing intelligent assistants within the supply chain management domain. By leveraging AI, machine learning, signal processing, and analytics, cognitive computing mimics human-like problem-solving and decision-making capabilities. NLP further allows these systems to understand, interpret, and generate human language, facilitating seamless human-computer interactions.",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "https://github.com/Deep-1997-08/Cognitive-Computing-and-Natural-Language-Processing-for-Intelligent-Assistants-in-Supply-Chain",
    previewUrl: "https://github.com/Deep-1997-08/Cognitive-Computing-and-Natural-Language-Processing-for-Intelligent-Assistants-in-Supply-Chain",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "All"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
