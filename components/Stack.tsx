"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skills";

export default function Stack() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm uppercase tracking-wide text-accent-cyan mb-6 text-center"
      >
        Stack
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="flex flex-wrap gap-2 justify-center"
      >
        {skills.map((s) => (
          <span
            key={s}
            className="text-sm px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </section>
  );
}