"use client"; // Asegúrate de que esto esté presente

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono correspondiente

const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Mi bandeja de entrada está siempre abierta. Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible para responderte!
        </p>
        <div className="socials flex flex-row gap-4">
        <Link href="https://fcamposano25@gmail.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon 
    icon={faEnvelope} 
    size="lg" 
    color="white" 
    style={{ marginTop: '6px' }} // Ajusta el valor según sea necesario
  />
</Link>
          <Link href="https://github.com/frankcamposano" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/github-icon.svg" 
              alt="Github Icon" 
              width={32} 
              height={32} 
            />
          </Link>
          {/* <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkedin-icon.svg" 
              alt="Linkedin Icon" 
              width={32} 
              height={32} 
            />
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;