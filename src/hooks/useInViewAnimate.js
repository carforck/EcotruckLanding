// src/hooks/useInViewAnimate.js
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const useInViewAnimate = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    ...options,
  });

  const animation = {
    initial: { opacity: 0, y: 40 },
    animate: inView
      ? { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      : {},
  };

  return { ref, animation, motion };
};
