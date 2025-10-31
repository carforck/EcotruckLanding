// src/components/layout/Footer.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#014D40] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Marca y derechos */}
        <div className="text-center md:text-left" data-aos="fade-up">
          <h3 className="text-xl font-bold tracking-tight mb-1">EcoTruck</h3>
          <p className="text-sm opacity-80">
            © 2025 EcoTruck. Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces sociales */}
        <div
          className="flex gap-6 items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A6E22E] transition-colors text-xl"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A6E22E] transition-colors text-xl"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#contacto"
            className="hover:text-[#A6E22E] transition-colors text-xl"
            title="Contacto"
            aria-label="Contacto"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Frase emocional final */}
      <div
        className="mt-8 text-center text-sm text-[#D1D5DB] italic"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        EcoTruck es más que tecnología, es comunidad.
      </div>
    </footer>
  );
}
