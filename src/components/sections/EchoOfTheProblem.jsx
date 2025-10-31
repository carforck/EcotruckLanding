import React, { useEffect, useState } from "react";
// Asegúrate de que la ruta a tu hook sea correcta
import { useInViewAnimate } from "../../hooks/useInViewAnimate";
// Importa tu componente de imagen/icono aquí si lo tienes.
// Por ejemplo: import EcoImage from './EcoImage'; 


// =================================================================
// 1. COMPONENTE AUXILIAR: AnimatedCounter (Animación Repetible)
// =================================================================
/**
 * Componente que anima un número al hacerse visible y se reinicia al salir.
 */
const AnimatedCounter = ({ endValue, duration = 2000, suffix = "" }) => {
  // CAMBIO CLAVE: 'triggerOnce: false' para que la animación se repita.
  // 'threshold: 0.8' significa que el 80% del elemento debe estar visible para disparar.
  const { ref, inView, motion: m } = useInViewAnimate({ threshold: 0.8, triggerOnce: false }); 
  const [count, setCount] = useState(0);

  // Lógica de animación del contador
  useEffect(() => {
    // Si NO está visible, reiniciamos el contador a 0 y salimos
    if (!inView) {
      setCount(0); 
      return;
    }
    
    // Si SÍ está visible, iniciamos la animación de conteo
    const start = 0;
    const end = endValue;
    const increment = end / (duration / 16); // 16ms por frame (aprox 60fps)
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

    // Cleanup: detiene el intervalo cuando el componente sale de la vista o se desmonta
    return () => clearInterval(timer);
  }, [inView, endValue, duration]);

  // Formato: Usamos toLocaleString para separar miles (ej: 10.000)
  const formattedCount = count.toLocaleString("es-CO");

  return (
    <m.span 
      ref={ref} 
      className="text-6xl font-extrabold text-eco-green block mb-2"
    >
      {formattedCount}
      {suffix}
    </m.span>
  );
};


// =================================================================
// 2. DATOS DE LAS TARJETAS (PROBLEMS)
// =================================================================
const PROBLEMS = [
  {
    iconKey: 'Desinformacion',
    title: "💭 Desinformación",
    delay: 0,
    stat: { value: 70, suffix: "%", label: "de Quejas mensuales por servicio" },
    description:
      "Más del 70% de las PQR (Peticiones, Quejas, Reclamos) son por incumplimiento de horario o desinformación sobre las rutas.",
  },
  {
    iconKey: 'Retrasos',
    title: "🕒 Rutas Ineficientes",
    delay: 0.2,
    stat: { value: 3, suffix: " Días", label: "sin recolección en zonas vulnerables" },
    description:
      "La ineficiencia en las rutas provoca acumulación de residuos por más de 3 días en puntos clave de la ciudad.",
  },
  {
    iconKey: 'Impacto',
    title: "📉 Desperdicio Ambiental",
    delay: 0.4,
    stat: { value: 96, suffix: "%", label: "de Residuos terminan en el relleno" },
    description:
      "Casi la totalidad de los residuos (96.7% a nivel nacional) son dispuestos en rellenos, perdiendo el potencial de reciclaje.",
  },
];


// =================================================================
// 3. COMPONENTE PRINCIPAL: EchoOfTheProblem
// =================================================================
export default function EchoOfTheProblem() {
  const { ref, inView, animation, motion: m } = useInViewAnimate(0.25);

  return (
    <section
      id="problema"
      ref={ref}
      className="py-24 bg-eco-light text-center px-6"
    >
      {/* Encabezado Principal */}
      <m.h2
        variants={animation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-4xl font-extrabold text-eco-dark mb-4 sm:text-5xl"
      >
        Escucha el llamado de las calles 📢
      </m.h2>

      {/* Subtítulo / Descripción General */}
      <m.p
        variants={animation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto text-xl text-eco-gray mb-16 font-medium"
      >
        La acumulación de basura afecta la salud, el turismo y la imagen de
        Cartagena. Necesitamos comunicación en tiempo real.
      </m.p>

      {/* Grid de Cards de Problemas */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PROBLEMS.map((problem) => (
          <m.div
            key={problem.title}
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: problem.delay, duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl p-8 
                       transform hover:scale-[1.02] transition-transform duration-300 
                       border-b-4 border-eco-green/70 flex flex-col items-center text-center"
          >
            {/* Contenedor del Contador con animación */}
            <div className="mb-4">
              <AnimatedCounter 
                endValue={problem.stat.value} 
                suffix={problem.stat.suffix} 
              />
              <p className="text-eco-gray font-semibold text-lg uppercase">
                {problem.stat.label}
              </p>
            </div>

            {/* Título de la tarjeta */}
            <h3 className="text-eco-dark font-bold text-2xl mb-3 w-full">
              {problem.title.substring(problem.title.indexOf(' ') + 1)} 
            </h3>
            
            {/* Descripción del problema */}
            <p className="text-eco-gray text-base leading-relaxed">
              {problem.description}
            </p>
          </m.div>
        ))}
      </div>
    </section> // <<-- ¡AQUÍ ESTÁ LA ETIQUETA DE CIERRE!
  );
}