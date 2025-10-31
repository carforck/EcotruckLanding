import { motion } from "framer-motion";
import { useInViewAnimate } from "../../hooks/useInViewAnimate";
import { ChevronDown } from "lucide-react";
import Lottie from "lottie-react";
import findingRoute from "../../assets/lottie/Finding-Route.json";

export default function PulseOfTheCity() {
  const { ref, inView, animation, motion: m } = useInViewAnimate(0.3);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#014D40] to-[#1A1A1A] text-white px-6"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/images/map-bg.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#014D40]/60 via-transparent to-[#1A1A1A]/50" />
      <div className="absolute -z-0 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(166,226,46,0.15)_0%,_transparent_70%)] animate-pulse-slow" />

      {/* Contenido dividido */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* Columna izquierda: texto */}
        <div className="space-y-6 text-center md:text-left">
          <m.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl font-extrabold leading-tight flex flex-wrap gap-2"
          >
            {["Cartagena", "late", "con"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="inline-block bg-[#A6E22E] text-[#014D40] px-2 rounded-md"
            >
              tecnología sostenible
            </motion.span>
          </m.h2>

          <m.p
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90"
          >
            EcoTruck conecta rutas inteligentes, datos en tiempo real y
            ciudadanos comprometidos con una ciudad más limpia y moderna.
          </m.p>

          <m.p
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="italic text-white/80 text-lg"
          >
            Porque una ciudad que respira tecnología, respira futuro.
          </m.p>

          <div className="text-sm text-white/70 flex flex-col md:flex-row md:gap-6 items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: 12000 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => (
                  <span>
                    +{Math.floor(count).toLocaleString()} kg de residuos
                    optimizados
                  </span>
                )}
              </motion.span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: 8 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {({ count }) => (
                  <span>• {Math.floor(count)} rutas inteligentes activas</span>
                )}
              </motion.span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: 3500 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => (
                  <span>
                    • {Math.floor(count).toLocaleString()} ciudadanos conectados
                  </span>
                )}
              </motion.span>
            </motion.span>
          </div>

          <m.blockquote
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="text-white/80 italic border-l-4 border-[#A6E22E] pl-4"
          >
            “Ahora sé cuándo pasa el camión y cómo separar mis residuos.
            EcoTruck me hizo parte del cambio.”
          </m.blockquote>

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

        {/* Columna derecha: animación Lottie */}
        <div className="flex justify-center">
          <Lottie
            animationData={findingRoute}
            loop={true}
            className="w-full max-w-lg md:max-w-xl lg:max-w-7xl"
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
