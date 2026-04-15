"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import type { Copy } from "@/lib/copy"
import { WHATSAPP_URL } from "@/lib/copy"

interface AnnouncementBarProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function AnnouncementBar({ c, prefersReducedMotion }: AnnouncementBarProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")
  }

  const text = `${c.announcementBar}  ·  ${c.announcementBar}  ·  `

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="cursor-pointer overflow-hidden relative h-10 flex items-center"
      style={{ backgroundColor: "#C9A84C" }}
      onClick={handleClick}
      role="banner"
      aria-label={c.announcementBar}
    >
      <div ref={containerRef} className="flex items-center whitespace-nowrap w-full">
        {prefersReducedMotion ? (
          <span className="px-4 text-sm font-semibold text-[#0a0a0a]">{c.announcementBar}</span>
        ) : (
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex" }}
          >
            <span className="text-sm font-semibold tracking-wide pr-8 text-[#0a0a0a]">
              {text}
              <span className="font-bold underline underline-offset-2">Reclamar ahora</span>
            </span>
            <span className="text-sm font-semibold tracking-wide pr-8 text-[#0a0a0a]">
              {text}
              <span className="font-bold underline underline-offset-2">Reclamar ahora</span>
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
