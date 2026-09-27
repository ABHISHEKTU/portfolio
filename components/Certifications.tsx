"use client";

import { motion } from "framer-motion";

const certs = [
     { name: "Foundations Associate — Agentic AI", issuer: "Oracle University", year: "2026" },
  { name: "Agentic AI Agent Architect", issuer: "IBM", year: "2025" },
  { name: "Docker Essentials", issuer: "Cognitive Class", year: "2026" },
   {name: "Containers, Kubernetes & OpenShift", issuer: "Cognitive Class", year: "2026" },
  { name: "AI Fundamentals", issuer: "IBM", year: "2025" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ fontFamily: "var(--font-display)" }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Certifications
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-foreground/10 bg-foreground/5 p-5"
          >
            <h3 className="font-medium text-sm">{c.name}</h3>
            <p className="text-xs text-foreground/50 mt-1">{c.issuer} · {c.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}