"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "var(--font-display)" }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Contact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-foreground/60 mb-8"
      >
        Open to fresher AI/ML and full-stack roles, anywhere in India.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="mailto:abhishektu123@gmail.com"
          className="px-6 py-3 rounded-full bg-accent-cyan text-black font-medium hover:opacity-80 transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/ABHISHEKTU"
          target="_blank"
          className="px-6 py-3 rounded-full border border-foreground/30 hover:border-accent-cyan transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/abhishek-t-u-318b432a0"
          target="_blank"
          className="px-6 py-3 rounded-full border border-foreground/30 hover:border-accent-cyan transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}