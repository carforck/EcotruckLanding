// src/components/sections/EchoFade.jsx
import { motion } from "framer-motion";

export default function EchoFade() {
  return (
    <footer className="bg-[#014D40] text-gray-200 text-center py-16 md:py-20 border-t border-[#A6E22E]/30 relative overflow-hidden">
      {/* Eco pulsante con Motion */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        initial={{ scale: 1, opacity: 0.4 }}
        animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <div className="w-32 h-32 rounded-full border-2 border-[#A6E22E]/40"></div>
      </motion.div>

      {/* Segundo pulso con delay */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.5,
        }}
      >
        <div className="w-32 h-32 rounded-full border-2 border-[#A6E22E]/20"></div>
      </motion.div>

      {/* Frase principal */}
      <motion.h3
        className="text-2xl md:text-3xl font-bold mb-4 tracking-tight relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        El eco continúa...
      </motion.h3>

      {/* Frase poética */}
      <motion.p
        className="text-sm md:text-base max-w-2xl mx-auto mb-6 px-4 italic text-[#D1D5DB] relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Cada ruta deja una huella. Cada dato impulsa una decisión. Cada ciudad
        se transforma cuando la tecnología escucha.
      </motion.p>

      {/* Línea de tiempo */}
      <motion.div
        className="flex justify-center items-center gap-2 text-xs text-[#A6E22E] font-mono tracking-wide relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span>2023</span>
        <span>•</span>
        <span>2024</span>
        <span>•</span>
        <span>{new Date().getFullYear()}</span>
        <span>•</span>
        <span>∞</span>
      </motion.div>

      {/* Firma final */}
      <motion.p
        className="mt-8 text-xs opacity-70 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        © {new Date().getFullYear()} EcoTruck. Tecnología que resuena en el
        tiempo.
      </motion.p>
    </footer>
  );
}
