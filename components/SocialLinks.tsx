"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pedro-azevedo-627ab8b2/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/pedroaz",
    icon: Github,
  },
];

export function SocialLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pedro.azvm@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-wrap gap-4">
      {SOCIALS.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground bg-white border border-border rounded-lg hover:text-foreground hover:border-foreground/20 transition-colors shadow-sm"
          >
            <social.icon size={16} />
            {social.name}
          </Link>
        </motion.div>
      ))}

      {/* Resume Link */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: (SOCIALS.length + 1) * 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground bg-white border border-border rounded-lg hover:text-foreground hover:border-foreground/20 transition-colors shadow-sm"
        >
          <FileText size={16} />
          Resume
        </Link>
      </motion.div>

      {/* Email Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: SOCIALS.length * 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCopyEmail}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground bg-white border border-border rounded-lg hover:text-foreground hover:border-foreground/20 transition-all shadow-sm cursor-pointer relative"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 text-green-600"
            >
              <Check size={16} />
              Copied!
            </motion.span>
          ) : (
            <motion.span
              key="mail"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <Mail size={16} />
              Email
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </section>
  );
}
