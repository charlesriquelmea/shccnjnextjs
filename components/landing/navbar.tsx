"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Copy, Lang } from "@/lib/copy"
import { WHATSAPP_URL } from "@/lib/copy"
import { trackEvent } from "@/lib/analytics"

interface NavbarProps {
  c: Copy
  lang: Lang
  setLang: (l: Lang) => void
  prefersReducedMotion: boolean
  countdown: {d:string, h: string; m: string; s: string }
  onCtaClick: () => void
}

function CoBrandLockup() {
  return (
    <div className="flex items-center gap-2.5">
      {/* SHCCNJ logo */}
      <a
        href="https://shccnj.org"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
        onClick={(e) => e.stopPropagation()}
        aria-label="SHCCNJ website"
      >
        <img
          src="https://shccnj.org/wp-content/uploads/2021/01/SHCCNJ-logo.png"
          alt="SHCCNJ"
          className="h-8 w-auto object-contain"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = "none"
            const fallback = target.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = "flex"
          }}
        />
        <span
          className="hidden items-center px-2 py-0.5 rounded text-xs font-black"
          style={{ backgroundColor: "#C9A84C", color: "#0a0a0a", display: "none" }}
        >
          SHCCNJ Build In Nextjs
        </span>
      </a>

      {/* Divider */}
      <span className="text-slate-500 font-light text-lg select-none">×</span>

      {/* Protolylat logo */}
      <a
        href="#"
        className="flex items-center gap-1.5 text-white font-black text-base tracking-tight hover:opacity-90 transition-opacity"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
      >
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="28" height="28" rx="6" fill="#C9A84C" />
          <path d="M14 4L18 12H22L16 18L18 24L14 20L10 24L12 18L6 12H10L14 4Z" fill="#0a0a0a" />
        </svg>
        <span className="text-sm">Protolylat</span>
      </a>
    </div>
  )
}

export function Navbar({ c, lang, setLang, prefersReducedMotion, countdown, onCtaClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handleLangToggle = (l: Lang) => {
    setLang(l)
    trackEvent("lang_toggle", { lang: l })
  }

  const handleCTAClick = (location: string) => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")
    trackEvent("cta_click", { location })
  }

  return (
    <motion.nav
      className="fixed top-10 left-0 right-0 z-40 transition-all duration-300"
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={
        prefersReducedMotion
          ? {}
          : scrolled
          ? { backgroundColor: "rgba(2,6,23,0.92)" }
          : { backgroundColor: "rgba(0,0,0,0)" }
      }
      style={scrolled ? { borderBottom: "1px solid rgb(30,41,59)", backdropFilter: "blur(12px)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Co-brand lockup */}
        <CoBrandLockup />

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {c.navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: lang toggle + countdown + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-full border border-slate-700 p-0.5 bg-slate-900/80 overflow-hidden">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => handleLangToggle(l)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 uppercase ${
                  lang === l
                    ? "text-[#0a0a0a]"
                    : "text-slate-400 hover:text-white"
                }`}
                style={lang === l ? { backgroundColor: "#C9A84C" } : {}}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Mini countdown */}
          <span className="text-xs font-mono text-slate-400 hidden lg:block">
            {c.navCountdownLabel}{" "}
            <span className="font-bold" style={{ color: "#C9A84C" }}>
              {countdown.d}d:{countdown.h}h:{countdown.m}m:{countdown.s}s
            </span>
          </span>

          <Button
            size="sm"
            className="font-bold text-xs px-4 text-[#0a0a0a] border-0"
            style={{ backgroundColor: "#C9A84C" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#E8C96A" }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C9A84C" }}
            onClick={onCtaClick}
          >
            {c.navCta}
          </Button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center rounded-full border border-slate-700 p-0.5 bg-slate-900/80">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => handleLangToggle(l)}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-full transition-all uppercase ${
                  lang === l ? "text-[#0a0a0a]" : "text-slate-400"
                }`}
                style={lang === l ? { backgroundColor: "#C9A84C" } : {}}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-md px-4 py-4 flex flex-col gap-4"
          >
            {/* SHCCNJ badge in mobile menu */}
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <span className="text-xs font-semibold" style={{ color: "#C9A84C" }}>
                Beneficio Exclusivo para Miembros · shccnj.org
              </span>
            </div>
            {c.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base text-slate-200 hover:text-white transition-colors font-medium py-1"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="font-bold w-full mt-2 text-[#0a0a0a] border-0"
              style={{ backgroundColor: "#C9A84C" }}
              onClick={() => {
                handleCTAClick("navbar_mobile")
                setMobileOpen(false)
              }}
            >
              {c.navCta}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
