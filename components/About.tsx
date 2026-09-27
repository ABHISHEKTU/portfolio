"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/profile.jpg"
            alt="Abhishek T U"
            width={220}
            height={220}
            className="rounded-2xl object-cover border border-accent-cyan/30"
          />
        </motion.div>
        <div className="md:col-span-2">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            MCA graduate from CUSAT, Kerala, with a BSc Physics background.
            Focused on AI/ML and full-stack engineering — building deployed,
            production-style projects rather than tutorials. Comfortable
            across the stack: model pipelines, APIs, and frontend delivery.
          </p>
        </div>
      </motion.div>
    </section>
  );
}