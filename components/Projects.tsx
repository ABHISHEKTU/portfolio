"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "var(--font-display)" }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 hover:border-accent-cyan/50 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-foreground/60 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-full bg-accent-purple/20 text-accent-purple"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href={p.github}
                target="_blank"
                className="text-accent-cyan hover:underline"
              >
                GitHub
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  className="text-accent-cyan hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}