// src/hooks/useInViewAnimate.js
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

/**
 * Hook personalizado para animar elementos al entrar en el viewport.
 * @param {object} options Opciones de configuración para useInView.
 * @returns {object} { ref, inView, animation, motion }
 */
export const useInViewAnimate = (options = {}) => {
  // Configuración base de la animación
  const defaultOptions = {
    // Si la animación se activa una sola vez (comportamiento típico para "entry animations")
    triggerOnce: true, 
    // Por defecto, se activa cuando el 20% del elemento es visible
    threshold: 0.2, 
    ...options,
  };

  const { ref, inView } = useInView(defaultOptions);

  // Definición de las variantes de Framer Motion
  const animation = {
    // Estado 'hidden' (similar a initial)
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    // Estado 'visible' (similar a animate)
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  // Retornamos todos los elementos necesarios para el componente que lo consume
  return { 
    ref, 
    inView, // Añadido: Es útil para el componente que lo consume
    animation, 
    motion // Añadido: Exporta 'motion' para no tener que importarlo en cada componente
  };
};