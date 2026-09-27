"use client";

import { motion } from "framer-motion";

const education = [
  { degree: "MCA", school: "Cochin University College of Engineering Kuttanad (CUSAT)", year: "2026", note: "76% aggregate" },
  { degree: "BSc Physics", school: "Sree Krishna College, Guruvayoor (University of Calicut)", year: "2020 – 2024" },
];

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "var(--font-display)" }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Education
      </motion.h2>
      <div className="space-y-4">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 flex justify-between flex-wrap gap-2"
          >
            <div>
              <h3 className="font-semibold">{e.degree}</h3>
              <p className="text-sm text-foreground/60">{e.school}</p>
            </div>
            <div className="text-sm text-foreground/50 text-right">
              <p>{e.year}</p>
              {e.note && <p className="text-accent-cyan">{e.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}