"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS/Azure",
];

export function TechStack() {
  return (
    <section className="mb-12">
      <h3 className="text-lg font-semibold text-foreground mb-6">Tech Stack</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {TECH_STACK.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center justify-center p-3 rounded-lg border border-border bg-muted/30 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
