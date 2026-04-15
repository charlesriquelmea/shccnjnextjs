"use client"

import { Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { EVENT_DATE, EVENT_DATE_EN, WHATSAPP_URL } from "@/lib/copy"
import type { Copy, Lang } from "@/lib/copy"

interface FooterProps {
  c: Copy
  lang: Lang
}

export function Footer({ c, lang }: FooterProps) {
  const eventDate = lang === "es" ? EVENT_DATE : EVENT_DATE_EN

  return (
    <footer className="border-t border-slate-800 pt-14 pb-8 px-4 sm:px-6" style={{ backgroundColor: "#020617" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Col 1: Co-brand + tagline + social */}
          <div className="flex flex-col gap-4">
            {/* SHCCNJ partner row */}
            <div
              className="flex items-center gap-3 p-3 rounded-xl border"
              style={{ borderColor: "rgba(201,168,76,0.25)", backgroundColor: "rgba(201,168,76,0.06)" }}
            >
              <img
                src="https://shccnj.org/wp-content/uploads/2021/01/SHCCNJ-logo.png"
                alt="SHCCNJ"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = "none"
                  const fallback = target.nextElementSibling as HTMLElement | null
                  if (fallback) fallback.style.display = "inline"
                }}
              />
              <span
                className="hidden text-xs font-black px-2 py-0.5 rounded"
                style={{ backgroundColor: "#C9A84C", color: "#0a0a0a" }}
              >
                SHCCNJ
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-bold" style={{ color: "#C9A84C" }}>
                  {c.footerSHCCNJPartner}
                </span>
                <a
                  href="https://shccnj.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  shccnj.org
                </a>
              </div>
            </div>

            {/* Protolylat logo */}
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#C9A84C" />
                <path d="M14 4L18 12H22L16 18L18 24L14 20L10 24L12 18L6 12H10L14 4Z" fill="#0a0a0a" />
              </svg>
              <span className="text-white font-black text-base">{c.navLogo}</span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed">{c.footerTagline}</p>

            {/* SHCCNJ social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/shccnj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SHCCNJ Instagram"
                className="text-slate-600 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://shccnj.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors underline underline-offset-2"
              >
                shccnj.org
              </a>
            </div>
          </div>

          {/* Col 2: Event info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">{c.footerEventLabel}</h3>
            <div className="flex flex-col gap-1.5 text-sm text-slate-500">
              <p className="font-medium text-slate-300">{eventDate}</p>
              <p>{c.footerEventTime}</p>
              <p>{c.footerOnline}</p>
            </div>
{/*             <div className="flex flex-wrap gap-2 mt-2">
              {c.footerLinks.map((link) => (
                <a
                  key={link}
                  href={link.toLowerCase().includes("shccnj.org") ? "https://shccnj.org" : "#"}
                  target={link.toLowerCase().includes("shccnj.org") ? "_blank" : undefined}
                  rel={link.toLowerCase().includes("shccnj.org") ? "noopener noreferrer" : undefined}
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors underline underline-offset-2"
                >
                  {link}
                </a>
              ))}
            </div> */}
          </div>

          {/* Col 3: WhatsApp */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">WhatsApp</h3>
            <p className="text-sm text-slate-500">{c.footerWaTitle}</p>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-bold gap-2 w-fit min-h-11"
              onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
            >
              <MessageCircle size={16} />
              {c.footerWaBtn}
            </Button>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-6" />

        {/* SHCCNJ disclaimer */}
        <p className="text-center text-xs text-slate-600 leading-relaxed mb-4 max-w-3xl mx-auto">
          {c.footerSHCCNJDisclaimer}
        </p>

        <p className="text-center text-xs text-slate-700 leading-relaxed">
          {c.footerCopy}
        </p>
      </div>
    </footer>
  )
}
