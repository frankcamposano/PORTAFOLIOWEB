"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/frankcamposano/PORTAFOLIOWEB",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Aplicacion Clima",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/frankcamposano/aplicacion-clima",
    previewUrl: "https://aplicacion-clima-frank.netlify.app/",
  },
  {
    id: 3,
    title: "Graficos Interactivos",
    description: "Project 3 ventanas para insertar visualizar datos",
    image: "/images/projects/3.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/frankcamposano/Graficos-interactivos",
    previewUrl: "https://graficos-interactivos2024.streamlit.app/",
  },
  {
    id: 4,
    title: "Sorteo Streamlit",
    description: "Project Sorteo ",
    image: "/images/projects/4.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/frankcamposano/SorteoStreamlit",
    previewUrl: "https://sorteo-stream-lit2024.streamlit.app/",
  },
  {
    id: 5,
    title: "Generador Fake",
    description: "Generacion de datos falsos varias columnas en excel",
    image: "/images/projects/5.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/frankcamposano/GENERADORFAKE",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Dashboard Powerbi",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Data"],
    gitUrl: "/",
    previewUrl: "/",
    additionalImages: ["/images/projects/additional1.png", "/images/projects/additional2.png"] // Add your image paths here
  }
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectsData.map(project => (
        <div key={project.id} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <div className="tags">
            {project.tag.map((t, index) => (
              <span key={index}>{t}</span>
            ))}
          </div>
          {project.gitUrl && (
            <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          )}
          <a href={project.previewUrl} target="_self">Vista previa</a>
        </div>
      ))}
    </div>
  );
};

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
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
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
  title={project.title}
  description={project.description}
  imgUrl={project.image}
  gitUrl={project.gitUrl}
  previewUrl={project.previewUrl}
  additionalImages={project.additionalImages} // Pass additional images here
/>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;