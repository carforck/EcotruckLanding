// src/components/sections/EchoOfTheProblem.jsx
import React, { useEffect, useState } from "react";
import { useInViewAnimate } from "../../hooks/useInViewAnimate";


// (AnimatedCounter Componente Auxiliar sin cambios de lógica)
const AnimatedCounter = ({ endValue, duration = 2000, suffix = "" }) => {
  const { ref, inView, motion: m } = useInViewAnimate({ threshold: 0.8, triggerOnce: false }); 
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ... (Lógica de useEffect se mantiene igual)
    if (!inView) {
      setCount(0); 
      return;
    }
    const start = 0;
    const end = endValue;
    const increment = end / (duration / 16); 
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, endValue, duration]);

  const formattedCount = count.toLocaleString("es-CO");

  return (
    <m.span 
      ref={ref} 
      className="text-5xl md:text-6xl font-extrabold text-[#A6E22E] block mb-1 md:mb-2" 
    >
      {formattedCount}
      {suffix}
    </m.span>
  );
};


// =================================================================
// 2. DATOS DE LAS TARJETAS (PROBLEMS) - SIN CAMBIOS EN DATOS
// =================================================================
const PROBLEMS = [
  {
    iconKey: 'Comunicacion',
    title: "📢 Falta de Comunicación",
    delay: 0,
    stat: { value: 70, suffix: "%", label: "de PQR por Incumplimiento de Horario" },
    description:
      "La desorganización en las rutas de aseo es el principal motor de las PQR, causando incertidumbre y exponiendo a la comunidad a multas por sacar la basura a destiempo.",
  },
  {
    iconKey: 'PuntosCriticos',
    title: "🚨 Puntos Críticos de Basura",
    delay: 0.2,
    stat: { value: 16, suffix: "+ m³", label: "de Residuos recogidos en un solo punto crítico" }, 
    description:
      "El retraso en la recolección fomenta los 'basureros satélites' permanentes, especialmente en barrios vulnerables, afectando la Ciénaga de la Virgen y caños vitales.",
  },
  {
    iconKey: 'Aprovechamiento',
    title: "♻️ Bajo Aprovechamiento",
    delay: 0.4,
    stat: { value: 4, suffix: "%", label: "de Residuos Sólidos Aprovechados" }, 
    description:
      "Con una tasa de aprovechamiento inferior al 4% en la ciudad, se pierden millones en valor reciclable y se acelera la saturación del relleno sanitario local.",
  },
];


// =================================================================
// 3. COMPONENTE PRINCIPAL: EchoOfTheProblem (OPTIMIZADO)
// =================================================================
export default function EchoOfTheProblem() {
  const { ref, inView, animation, motion: m } = useInViewAnimate(0.25);

  return (
    <section
      id="problema"
      ref={ref}
      className="py-16 md:py-24 bg-[#F5F7F4] text-center px-4 sm:px-6"
    >
      {/* Encabezado Principal - TÍTULO OPTIMIZADO */}
      <m.h2
        variants={animation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#014D40] mb-4"
      >
        Las Cifras que Cartagena no puede ignorar
      </m.h2>

      {/* Subtítulo / Descripción General sin cambios */}
      <m.p
        variants={animation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto text-base sm:text-xl text-[#4A4A4A] mb-12 md:mb-16 font-medium px-2"
      >
        La acumulación de basura amenaza la salud pública, el turismo y la belleza histórica de la ciudad. La solución es la comunicación en tiempo real.
      </m.p>

      {/* Grid de Cards de Problemas */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {PROBLEMS.map((problem) => (
          <m.div
            key={problem.title}
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: problem.delay, duration: 0.5 }}
            // CLASES HOVER OPTIMIZADAS
            className="bg-white shadow-xl rounded-2xl p-6 md:p-8 
                       transform hover:-translate-y-1 transition-all duration-300 
                       border-b-4 border-[#A6E22E]/70 flex flex-col items-center text-center hover:shadow-2xl" 
          >
            <div className="mb-4 flex flex-col items-center">
              {/* ÉNFASIS VISUAL: Contenedor para el número */}
              <div className="p-4 rounded-full bg-[#014D40]/5 mb-1 border border-[#A6E22E]/20">
                <AnimatedCounter 
                  endValue={problem.stat.value} 
                  suffix={problem.stat.suffix} 
                />
              </div>
              <p className="text-[#4A4A4A] font-semibold text-sm md:text-lg uppercase">
                {problem.stat.label}
              </p>
            </div>

            <h3 className="text-[#014D40] font-bold text-xl md:text-2xl mb-3 w-full">
              {problem.title} 
            </h3>
            
            <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
              {problem.description}
            </p>
          </m.div>
        ))}
      </div>
    </section>
  );
}