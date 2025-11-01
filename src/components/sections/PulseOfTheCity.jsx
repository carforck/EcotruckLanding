import { motion } from "framer-motion";
import { useInViewAnimate } from "../../hooks/useInViewAnimate";
import { ChevronDown } from "lucide-react";
import Lottie from "lottie-react";

export default function PulseOfTheCity() {
  const { ref, inView, animation, motion: m } = useInViewAnimate(0.3);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen py-20 md:py-0 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#014D40] to-[#1A1A1A] text-white px-4 sm:px-6"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/map-bg.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#014D40]/60 via-transparent to-[#1A1A1A]/50" />
      <div className="absolute z-0 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(166,226,46,0.15)_0%,transparent_70%)] animate-pulse-slow" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full py-20">
        {/* Texto */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <m.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {["Cartagena", "late", "con"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block bg-[#A6E22E] text-[#014D40] px-2 rounded-md whitespace-nowrap"
            >
              tecnología sostenible
            </motion.span>
          </m.h2>

          <m.p
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-white/90 max-w-lg md:max-w-none mx-auto"
          >
            EcoTruck conecta rutas inteligentes, datos en tiempo real y
            ciudadanos comprometidos con una ciudad más limpia y moderna.
          </m.p>

          <m.p
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="italic text-white/80 text-sm md:text-lg"
          >
            Porque una ciudad que respira tecnología, respira futuro.
          </m.p>

          {/* Estadísticas */}
          <div className="text-sm text-white/70 flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center md:justify-start pt-4">
            <span>+12,000 kg de residuos optimizados</span>
            <span className="hidden md:inline-block">•</span>
            <span>8 rutas inteligentes activas</span>
            <span className="hidden md:inline-block">•</span>
            <span>3,500 ciudadanos conectados</span>
          </div>

          <m.blockquote
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.7 }}
            className="text-white/80 italic border-l-4 border-[#A6E22E] pl-4 pt-4 text-sm md:text-base"
          >
            “Ahora sé cuándo pasa el camión y cómo separar mis residuos.
            EcoTruck me hizo parte del cambio.”
          </m.blockquote>

          <m.a
            href="/login"
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.9 }}
            className="inline-block bg-[#A6E22E] text-[#014D40] font-bold px-10 py-4 rounded-full shadow-lg hover:bg-[#FFC300] hover:shadow-[0_0_20px_#A6E22E99] transition-all duration-300 mt-6 text-lg"
          >
            Solicita tu demo
          </m.a>
        </div>

        {/* Animación Lottie */}
        <div className="flex justify-center mt-10 md:mt-0">
          <Lottie
            animationData={null}
            path="/lottie/Street-View-Map-Loader.json"
            loop
            autoplay
            className="w-full max-w-sm sm:max-w-md lg:max-w-xl"
          />
        </div>
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
