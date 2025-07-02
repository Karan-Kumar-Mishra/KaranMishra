"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: number;
  inView?: boolean;
  inViewMargin?: string;
}

const BlurFade = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 16,
  blur = 8,
  inView = false,
  inViewMargin = "0px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: inViewMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, inViewMargin]);

  const isInView = !inView || isVisible;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur}px)` },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay,
        duration,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={defaultVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;