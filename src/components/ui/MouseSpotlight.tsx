"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998] hidden lg:block"
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    >
      <div
        className="w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.06) 0%, rgba(16, 185, 129, 0.03) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
