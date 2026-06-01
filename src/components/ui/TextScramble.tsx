"use client";

import { useEffect, useState, useRef } from "react";

const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextScramble({ text, className, delay = 0, duration = 1200 }: TextScrambleProps) {
  const [display, setDisplay] = useState("");
  const frameRef = useRef<number>(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      hasStarted.current = true;
      const length = text.length;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        let result = "";
        for (let i = 0; i < length; i++) {
          const charProgress = Math.min(Math.max((progress * (length + 1) - i) / 2, 0), 1);
          if (charProgress >= 1) {
            result += text[i];
          } else if (charProgress > 0) {
            result += chars[Math.floor(Math.random() * chars.length)];
          } else {
            result += "\u00A0";
          }
        }

        setDisplay(result);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, duration]);

  return <span className={className}>{display || text}</span>;
}
