"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "var(--font-display)" }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6"
      >
        <div className="flex justify-between flex-wrap gap-2 mb-2">
          <h3 className="font-semibold">Freelance Developer</h3>
          <span className="text-sm text-foreground/50">2025 – 2026</span>
        </div>
        <p className="text-sm text-accent-cyan mb-3">D Moon Advertising LLC — Dubai (Remote)</p>
        <p className="text-sm text-foreground/60">
          Built a production Node.js giveaway automation system for the company.
        </p>
      </motion.div>
    </section>
  );
}