"use client"

import { motion } from "framer-motion"
import { INSTRUCTORS } from "@/lib/copy"
import type { Copy } from "@/lib/copy"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

interface InstructorProps {
  c: Copy
  prefersReducedMotion: boolean
}

interface FounderCardProps {
  initials: string
  name: string
  role: string
  badge: string
  bio: string
  stats: { value: string; label: string }[]
  gradientFrom: string
  gradientTo: string
  delay?: number
  prefersReducedMotion: boolean
}

function FounderCard({
  initials,
  name,
  role,
  badge,
  bio,
  stats,
  gradientFrom,
  gradientTo,
  delay = 0,
  prefersReducedMotion,
}: FounderCardProps) {
  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? {}
          : {
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay },
              },
            }
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col items-center gap-6 rounded-2xl border p-8"
      style={{ backgroundColor: "#1E293B", borderColor: "rgba(201,168,76,0.2)" }}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black text-white border-2 select-none"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            borderColor: "rgba(201,168,76,0.4)",
          }}
          aria-label={`Foto de ${name}`}
        >
          {initials}
        </div>
        <span
          className="inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold text-center"
          style={{
            borderColor: "rgba(201,168,76,0.4)",
            backgroundColor: "rgba(201,168,76,0.1)",
            color: "#C9A84C",
          }}
        >
          {badge}
        </span>
      </div>

      {/* Bio */}
      <div className="flex flex-col items-center text-center gap-4 w-full">
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-slate-500 mt-0.5">{role}</p>
        </div>
        <p className="text-slate-400 leading-relaxed text-sm">{bio}</p>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-3 gap-3 w-full mt-2">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-3 rounded-xl border border-slate-700 text-center"
                style={{ backgroundColor: "#0F172A" }}
              >
                <span className="text-xl font-black tabular-nums" style={{ color: "#C9A84C" }}>
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 mt-1 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function InstructorSection({ c, prefersReducedMotion }: InstructorProps) {
  return (
    <section
      id="instructor"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#C9A84C" }}
          >
            Quiénes enseñan
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Los fundadores de Protolylat
          </h2>
        </motion.div>

        {/* Two-column founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INSTRUCTORS.map((instructor, i) => (
            <FounderCard
              key={instructor.name}
              initials={instructor.initials}
              name={instructor.name}
              role={instructor.role}
              badge={instructor.badge}
              bio={instructor.bio}
              stats={instructor.stats}
              gradientFrom={instructor.gradientFrom}
              gradientTo={instructor.gradientTo}
              delay={i * 0.15}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* SHCCNJ partnership text */}
        <motion.p
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-sm font-semibold mt-8 leading-relaxed"
          style={{ color: "#C9A84C" }}
        >
          {c.instructorPartnerText}
        </motion.p>
      </div>
    </section>
  )
}
