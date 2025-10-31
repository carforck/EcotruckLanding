// src/components/sections/TheMachineBehind.jsx
import { useEffect } from "react";
import { techIcons } from "../../data/techIcons";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TheMachineBehind() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Lista de animaciones infinitas
  const infiniteAnimations = [
    { y: [0, -10, 0] }, // flotante
    { rotate: [0, 10, -10, 0] }, // giro suave
    { scale: [1, 1.1, 1] }, // pulso
    { x: [0, 5, -5, 0] }, // vibración horizontal
    { y: [0, 5, -5, 0] }, // vibración vertical
    { rotate: [0, 360] }, // rotación completa
  ];

  return (
    <section
      id="tecnologias"
      className="bg-[#014D40] text-white py-16 md:py-24 text-center px-4 overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
        Lo que hace posible el cambio
      </h2>

      <p className="text-base md:text-xl max-w-3xl mx-auto text-gray-300 mb-10 md:mb-12">
        EcoTruck está impulsado por tecnologías modernas que trabajan juntas
        para transformar la logística urbana.
      </p>

      {/* Explosión de íconos con Motion */}
      <div className="relative flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {techIcons.map((tech, index) => {
          const animation =
            infiniteAnimations[index % infiniteAnimations.length];
          return (
            <motion.a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.3, y: 100 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 transition-transform"
            >
              <motion.img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
                loading="lazy"
                animate={animation}
                transition={{
                  duration: 2 + (index % 3),
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          );
        })}
      </div>

      <p className="text-sm text-gray-400 mt-12 max-w-xl mx-auto">
        Cada tecnología aquí representa una pieza del motor que impulsa el
        cambio hacia una movilidad más limpia, eficiente y humana.
      </p>
    </section>
  );
}
