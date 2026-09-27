"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/60 border-b border-foreground/10"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span
          style={{ fontFamily: "var(--font-display)" }}
          className="text-lg font-bold text-accent-cyan"
        >
          ATU
        </span>
        <div className="flex gap-6 text-sm text-foreground/70">
          <a href="#projects" className="hover:text-accent-cyan transition">
            Projects
          </a>
          <a href="#about" className="hover:text-accent-cyan transition">
            About
          </a>
          <a href="#contact" className="hover:text-accent-cyan transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}