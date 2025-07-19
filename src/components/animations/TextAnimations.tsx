import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export function TextFade({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
}: {
  direction: "up" | "down";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const FADE_DOWN: Variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
      },
    },
    hidden: {
      opacity: 0,
      y: direction === "down" ? -18 : 18,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}

// TypingEffect component
export function TypingEffect({ text = "Typing Effect" }: { text: string }) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h2
      ref={ref}
      className="text-xl sm:text-2xl tracking-tighter md:text-xl md:leading-[2rem]">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.03 }}>
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
