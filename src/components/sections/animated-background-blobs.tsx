"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobs = [
  {
    className:
      "absolute left-[-6rem] top-[-3rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,rgba(79,70,229,0)_68%)] blur-2xl",
    animate: { x: [0, 20, -10, 0], y: [0, 12, -8, 0] },
    duration: 12,
  },
  {
    className:
      "absolute right-[-5rem] top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,rgba(124,58,237,0)_70%)] blur-2xl",
    animate: { x: [0, -16, 8, 0], y: [0, -10, 10, 0] },
    duration: 14,
  },
  {
    className:
      "absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1)_0%,rgba(14,165,233,0)_72%)] blur-2xl",
    animate: { x: [0, 10, -12, 0], y: [0, -14, 10, 0] },
    duration: 16,
  },
];

export function AnimatedBackgroundBlobs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {blobs.map((blob) =>
        shouldReduceMotion ? (
          <div key={blob.className} className={blob.className} />
        ) : (
          <motion.div
            key={blob.className}
            className={blob.className}
            animate={blob.animate}
            transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        )
      )}
    </div>
  );
}
