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
           <div className="space-y-4 text-foreground/70 leading-relaxed">
  <p>
    MCA graduate from CUSAT (2026) with a BSc in Physics. I build AI/ML and
    full-stack systems that actually ship, not tutorial clones.
  </p>
  <p>
    Recent work: a drift-detection API for deployed ML models, a
    Celery/Redis sentiment pipeline running as five Docker services, a
    Shopify–Odoo integration with live webhooks, and a RAG-based medical
    image diagnosis assistant. I have also delivered production work as a
    freelance developer for a Dubai-based client.
  </p>
  <p>
    Looking for fresher AI/ML and full-stack roles. Open to relocation
    anywhere in India.
  </p>
</div>
        </div>
      </motion.div>
    </section>
  );
}