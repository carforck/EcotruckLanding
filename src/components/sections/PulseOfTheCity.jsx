import { motion } from "framer-motion";
import { useInViewAnimate } from "../../hooks/useInViewAnimate";
import { ChevronDown } from "lucide-react";
import Lottie from "lottie-react";
// Importación del archivo Lottie
import streetViewMapLoader from "../../assets/lottie/Street-View-Map-Loader.json"; 

export default function PulseOfTheCity() {
  // Configuración del hook de animación
  const { ref, inView, animation, motion: m } = useInViewAnimate(0.3);

  return (
    <section
      id="inicio"
      ref={ref}
      // PADDING Y MIN-HEIGHT RESPONSIVE: Aseguramos espacio en móviles
      className="relative min-h-screen py-20 md:py-0 flex items-center justify-center overflow-hidden bg-linear-to-b from-[#014D40] to-[#1A1A1A] text-white px-4 sm:px-6"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/images/map-bg.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-linear-to-t from-[#014D40]/60 via-transparent to-[#1A1A1A]/50" />
      <div className="absolute z-0 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(166,226,46,0.15) 0%,transparent 70%)] animate-pulse-slow" />
      
      {/* Contenido dividido */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full py-20">
        
        {/* Columna izquierda: texto */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <m.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            // TAMAÑO RESPONSIVE: Escala de 3xl a 6xl
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {["Cartagena", "late", "con"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="inline-block"
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

          {/* Párrafo Principal */}
          <m.p
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            // TAMAÑO RESPONSIVE: Ajuste para desktop
            className="text-base md:text-xl text-white/90 max-w-lg md:max-w-none mx-auto"
          >
            EcoTruck conecta rutas inteligentes, datos en tiempo real y
            ciudadanos comprometidos con una ciudad más limpia y moderna.
          </m.p>

          {/* Cita/Lema */}
          <m.p
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="italic text-white/80 text-sm md:text-lg"
          >
            Porque una ciudad que respira tecnología, respira futuro.
          </m.p>

          {/* Bloque de Contadores / Stats */}
          <div className="text-sm text-white/70 flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center md:justify-start pt-4">
            
            {/* Stat 1 */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                initial={{ count: 0 }}
                animate={inView ? { count: 12000 } : {}} 
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => (
                  <span className="block md:inline-block">
                    +{Math.floor(count).toLocaleString()} kg de residuos
                    optimizados
                  </span>
                )}
              </motion.span>
            </motion.span>

            {/* Separador invisible en móvil, visible como punto en desktop */}
            <span className="hidden md:inline-block">•</span> 
            
            {/* Stat 2 */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <motion.span
                initial={{ count: 0 }}
                animate={inView ? { count: 8 } : {}} 
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {({ count }) => (
                  <span className="block md:inline-block">
                    {Math.floor(count)} rutas inteligentes activas
                  </span>
                )}
              </motion.span>
            </motion.span>

            {/* Separador invisible en móvil, visible como punto en desktop */}
            <span className="hidden md:inline-block">•</span>

            {/* Stat 3 */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.span
                initial={{ count: 0 }}
                animate={inView ? { count: 3500 } : {}} 
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => (
                  <span className="block md:inline-block">
                    {Math.floor(count).toLocaleString()} ciudadanos conectados
                  </span>
                )}
              </motion.span>
            </motion.span>
          </div>

          {/* Bloque de Cita */}
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

          {/* Botón de CTA */}
          <m.a
            href="#solucion"
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.9 }}
            // TAMAÑO RESPONSIVE: Más grande y prominente
            className="inline-block bg-[#A6E22E] text-[#014D40] font-bold px-10 py-4 rounded-full shadow-lg hover:bg-[#FFC300] hover:shadow-[0_0_20px_#A6E22E99] transition-all duration-300 mt-6 text-lg"
          >
            Solicita tu demo
          </m.a>
        </div>

        {/* Columna derecha: Animación Lottie */}
        <div className="flex justify-center mt-10 md:mt-0">
          <Lottie
            animationData={streetViewMapLoader} 
            loop={true}
            // TAMAÑO RESPONSIVE: Controlamos el tamaño máximo para que no sea muy grande
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