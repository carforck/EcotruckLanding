// src/components/ui/AnimatedHeadline.jsx
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import SplitType from "split-type";

export default function AnimatedHeadline({ text, highlight }) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, { types: "words" });
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1.2,
        delay: i * 0.05,
      },
    }));

    return () => split.revert();
  }, [controls]);

  const words = text.split(" ");

  return (
    <h2 ref={ref} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
      {words.map((word, i) => {
        const isHighlight = highlight.includes(word);
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
            custom={i}
            className={`inline-block mr-2 ${isHighlight ? "text-[#A6E22E]" : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
}
