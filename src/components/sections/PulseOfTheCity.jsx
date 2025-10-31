// src/components/sections/PulseOfTheCity.jsx
import { motion } from "framer-motion";
import { useInViewAnimate } from "../../hooks/useInViewAnimate";
import { ChevronDown } from "lucide-react";

export default function PulseOfTheCity() {
  const { ref, inView, animation, motion: m } = useInViewAnimate(0.3);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-[#014D40] to-[#1A1A1A] text-white"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/images/map-bg.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#014D40]/60 via-transparent to-[#1A1A1A]/50" />

      {/* Ondas luminosas sutiles */}
      <div className="absolute -z-0 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(166,226,46,0.15)_0%,_transparent_70%)] animate-pulse-slow" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl px-6">
        <m.h2
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Cartagena late con <span className="text-[#A6E22E]">tecnología sostenible</span>
        </m.h2>

        <m.p
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10"
        >
          Una plataforma que conecta rutas inteligentes, datos en tiempo real y ciudadanos
          comprometidos con una ciudad más limpia y moderna.
        </m.p>

        <m.a
          href="#solucion"
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
          className="inline-block bg-[#A6E22E] text-[#014D40] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#FFC300] hover:shadow-[0_0_20px_#A6E22E99] transition-all duration-300"
        >
          Solicita tu demo
        </m.a>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-10 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
