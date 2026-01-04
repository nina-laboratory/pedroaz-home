"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section className="mb-12">
      <h3 className="text-lg font-semibold text-foreground mb-6">Projects</h3>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="https://github.com/pedroaz/nina-labs" // Placeholder link
          target="_blank"
          className="group block p-5 rounded-xl border border-border bg-card hover:border-foreground/20 hover:shadow-sm transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-foreground">Nina Labs</h4>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground group-hover:text-foreground transition-colors"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            A personal laboratory for experimenting with modern web
            technologies, AI agents, and automated workflows.
          </p>
        </Link>
      </motion.div>
    </section>
  );
}
