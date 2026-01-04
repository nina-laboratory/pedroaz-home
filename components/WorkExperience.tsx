"use client";

import { motion } from "framer-motion";

export function WorkExperience() {
  return (
    <section className="mb-12">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Work Experience
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative border-l-2 border-border pl-6 pb-2"
      >
        <div className="absolute top-0 left-[-5px] h-2.5 w-2.5 rounded-full bg-border group-hover:bg-foreground/50 transition-colors" />

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
          <h4 className="text-base font-medium text-foreground">
            Berlin Bytes
          </h4>
          <span className="text-sm text-muted-foreground">Present</span>
        </div>

        <div className="text-sm font-medium text-muted-foreground mb-3">
          Engineering Manager
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Leading engineering teams to deliver high-quality software solutions.
          Focusing on technical strategy, team growth, and operational
          excellence.
        </p>
      </motion.div>
    </section>
  );
}
