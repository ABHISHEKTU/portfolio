"use client";

import { motion } from "framer-motion";

const certs = [
  {
    name: "Foundations Associate — Agentic AI",
    issuer: "Oracle University",
    year: "2026",
    verify: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9DB38EDC5D46C0292B0A00646A146056FE1C6D42D9FA85A188FB1A9E34EB95DA",
  },
  { name: "Agentic AI Agent Architect", issuer: "IBM", year: "2025",
    verify: "https://www.credly.com/badges/8844e8f7-1109-4849-9041-b7972a27b2bc"
   },
  { name: "AI Fundamentals", issuer: "IBM", year: "2025", 
    verify: "https://www.credly.com/badges/8844e8f7-1109-4849-9041-b7972a27b2bc"
   },
  {
    name: "Docker Essentials: A Developer Introduction",
    issuer: "IBM · Cognitive Class",
    year: "2026",
    verify: "https://courses.cognitiveclass.ai/certificates/837616418e894363b5e8110c81567903",
  },
  {
    name: "Introduction to Containers, Kubernetes, and OpenShift",
    issuer: "IBM · Cognitive Class",
    year: "2026",
    verify: "https://courses.cognitiveclass.ai/certificates/27029c9a93944b208dbb3d833f8fca16",
  },
  
  {
    name: "Software Engineering Job Simulation",
    issuer: "Quantium · Forage",
    year: "2026",
    verify: "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/jhiG2W9K8KLZK8nXP_32A6DqtsbF7LbKdcq_6a5481e6f39d9bdef2f84e4b_1784113280625_completion_certificate.pdf",
  },
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
  viewport={{ once: true, margin: "-100px" }}
  transition={{ delay: i * 0.05, ease: "easeOut" }}
  className="rounded-2xl border border-foreground/10 bg-foreground/5 p-5"
>
  <h3 className="font-medium text-sm">{c.name}</h3>
  <p className="text-xs text-foreground/50 mt-1">{c.issuer} · {c.year}</p>
  {c.verify && (
    <a
      href={c.verify}
      target="_blank"
      className="text-xs text-accent-cyan hover:underline mt-2 inline-block"
    >
      Verify
    </a>
  )}
</motion.div>
        ))}
      </div>
    </section>
  );
}