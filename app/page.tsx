"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
  <>
    <Nav />
    <main className="pt-20">
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent"
          >
            Abhishek T U
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl text-foreground/70"
          >
            AI/ML and Full-Stack Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-accent-cyan text-black font-medium hover:opacity-80 transition"
            >
              View Projects
            </a>
            
            <a
              href="https://drive.google.com/file/d/1hnFIq4XroHSoBtEVlRzNfv4T1kA12boF/view"
              target="_blank"
              className="px-6 py-3 rounded-full border border-foreground/30 hover:border-accent-cyan transition"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
      <About />
<div className="section-divider" />
<Stack />
<div className="section-divider" />
<Projects />
<div className="section-divider" />
<Experience />
<div className="section-divider" />
<Education />
<div className="section-divider" />
<Certifications />
<div className="section-divider" />
<Contact />
    </main>
  </>
);
}