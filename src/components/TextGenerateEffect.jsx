"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../lib/utils"; // Adjust the path based on your folder structure

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "p",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration: duration || 1, delay: stagger(0.2) }
    );
  }, [scope, animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <motion.div
          ref={scope}
          className="text-[#575454] text-2xl leading-snug tracking-wide"
        >
          {wordsArray.map((word, idx) => (
            <motion.p
              key={word + idx}
              className="text-[#000000] opacity-0 inline-block mr-2 italic" // Added mr-2 for spacing
              style={{
                filter: filter ? "blur(0px)" : "none",
              }}
            >
              {word}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
