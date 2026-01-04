"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
            Pedro Azevedo
          </h1>
          <h2 className="text-xl text-muted-foreground font-medium mb-4">
            Engineering Manager at Berlin Bytes
          </h2>
          <p className="max-w-[500px] text-muted-foreground leading-relaxed">
            Building high-performing teams and scalable products in Berlin.
            Passionate about engineering excellence, developer experience, and
            product strategy.
          </p>
        </div>

        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-muted shrink-0">
          <Image
            src="/pedroaz_photo.jpg"
            alt="Pedro Azevedo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
