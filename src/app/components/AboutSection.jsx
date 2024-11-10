"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import CertificationModal from "./CertificationModal"; // Importa el nuevo componente

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <div className="flex flex-wrap justify-center">
        {/* <div className="skill-card">
          <Image src="/images/skills/nodejs.png" alt="Node.js" width={50} height={50} />
          <span>Node.js</span>
        </div> */}
        {/* <div className="skill-card">
          <Image src="/images/skills/express.png" alt="Express" width={50} height={50} />
          <span>Express</span>
        </div> */}
        <div className="skill-card">
          <Image src="/images/skills/postgres.png" alt="PostgreSQL" width={50} height={50} />
          <span>PostgreSQL</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/streamlit.png" alt="Streamlit" width={50} height={50} />
          <span>Streamlit</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/javascript.png" alt="JavaScript" width={50} height={50} />
          <span>JavaScript</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/react.png" alt="React" width={50} height={50} />
          <span>React</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/powerbi.jpg" alt="PowerBI" width={50} height={50} />
          <span>PowerBI</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/excel.png" alt="Excel" width={50} height={50} />
          <span>Excel</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/python.png" alt="Python" width={50} height={50} />
          <span>Python</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/pandas.png" alt="Pandas" width={50} height={50} />
          <span>Pandas</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/matplotlib.png" alt="Matplotlib" width={50} height={50} />
          <span>Matplotlib</span>
        </div>
        
        <div className="skill-card">
          <Image src="/images/skills/jupyter.png" alt="Jupyter Notebook" width={50} height={50} />
          <span>Jupyter</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/google_colab.png" alt="Google Colab" width={50} height={50} />
          <span>G.colab</span>
        </div>
        <div className="skill-card">
          <Image src="/images/skills/php.png" alt="Google Colab" width={50} height={50} />
          <span>php</span>
        </div>
      </div>
    ),
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <div className="flex flex-col space-y-4">
    <h3 className="text-xl font-bold">Grado en Ingeniería de Sistemas</h3>
    <div className="flex items-center">
    <Image src="./images/skills/unilogo.png" alt="Logo UNI" width={50} height={50} className="h-10 mr-2" />
        <p className="text-lg">Universidad Nacional de Ingeniería (UNI)</p>
    </div>
    <p className="text-gray-600">
        Actualmente cursando el décimo ciclo, con enfoque en innovación tecnológica y desarrollo de soluciones eficientes.
    </p>
</div>
    ),
  },
  {
    title: "Certificaciones",
    id: "certifications",
    content: (
      // Button to open certifications modal
      <button onClick={() => setModalOpen(true)} className="text-blue-500 underline">
         
      </button>
    ),
  },
];

const certificationsData = [
  {
    title: "Buenas Prácticas de Manipulación de Alimentos",
    filePath: "/certificates/CertificadoBPM.pdf", // Ruta al archivo PDF
  },
  {
    title: "Curador de datos",
    filePath: "/certificates/CertificadoCuradorBD.pdf", // Ruta al archivo PDF
  },
  {
    title: "Python Intermediate",
    filePath: "/certificates/CertificadoPython.pdf", // Ruta al archivo PDF
  },
  {
    title: "Gestión de proyectos con Microsoft 365",
    filePath: "/certificates/CertificadoGestion de proyectos con Microsoft 365.pdf", // Ruta al archivo PDF
  },
  {
    title: "SQL Intermediate",
    filePath: "/certificates/CertificadoSQL.pdf", // Ruta al archivo PDF
  },
  {
    title: "Scrum Fundamentals Certified",
    filePath: "/certificates/CertificadoScrum.pdf", // Ruta al archivo PDF
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      if (id === "certifications") {
        setModalOpen(true); // Abre el modal al seleccionar la pestaña de certificaciones
      }
    });
  };

  return (
    <section className="text-white" id="about">
      {/* Main container */}
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        {/* Image Section */}
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        
        {/* Content Section */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          
          {/* Title */}
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          {/* Description */}
          <p className="text-base lg:text-lg">
            Estudiante de Ingenieria de Sistemas en la UNI proximo a graduarse,con proyectos en el ambito de desarrollo web ,analisis de datos,inteligencia de negocios,soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar valores como los del compañerismo
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>

          {/* Modal para Certificaciones */}
          {isModalOpen && (
            <CertificationModal 
              isOpen={isModalOpen} 
              onClose={() => setModalOpen(false)} 
              certifications={certificationsData} 
            />
          )}
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;