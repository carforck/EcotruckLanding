import { useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCounter({
  target = 0,
  prefix = "",
  suffix = "",
  duration = 2,
}) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useAnimationFrame(() => {
    setDisplay(Math.floor(count.get()));
  });

  useEffect(() => {
    count.set(0);
    count.animate(target, { duration, ease: "easeOut" });
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
