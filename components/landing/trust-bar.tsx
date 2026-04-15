"use client"

import { motion } from "framer-motion"
import type { Copy } from "@/lib/copy"

interface TrustBarProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function TrustBar({ c, prefersReducedMotion }: TrustBarProps) {
  return (
    <section
      className="py-8 px-4 sm:px-6 border-b border-slate-800"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {c.trustBar.map((item, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border"
              style={{
                backgroundColor: "rgba(201,168,76,0.06)",
                borderColor: "rgba(201,168,76,0.2)",
              }}
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span className="text-sm font-semibold text-slate-200 whitespace-nowrap">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
