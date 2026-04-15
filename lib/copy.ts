// SHCCNJ White-Label Edition
// Partner: Statewide Hispanic Chamber of Commerce of New Jersey

export const WHATSAPP_URL =
  "https://wa.me/15513349406?text=Hola%20Carlos%2C%20soy%20miembro%20de%20la%20Statewide%20Hispanic%20Chamber%20of%20Commerce%20NJ%20%28SHCCNJ%29%20y%20quiero%20reclamar%20mi%20descuento%20exclusivo%20de%20%24100%20para%20el%20taller%20de%20Next.js%20del%20s%C3%A1bado%202%20de%20mayo.%20Mi%20nombre%20es%3A"

export const WA_NUMBER = "15513349406"
export const EVENT_DATE = "Sábado 2 de Mayo, 2026"
export const EVENT_DATE_EN = "Saturday, May 2, 2026"
export const TARGET_DATE = new Date("2026-05-02T09:00:00-04:00")
export const MEMBER_PRICE = 197
export const PUBLIC_PRICE = 297
export const DISCOUNT = 100
export const SPOTS_AVAILABLE = 50
export const INSTRUCTOR_NAME = "Carlos"
export const INSTRUCTOR_INITIALS = "CR"
export const INSTRUCTOR_PROJECTS = 50
export const INSTRUCTOR_STUDENTS = 200
export const INSTRUCTOR_YEARS = 8
export const ENROLLED_THIS_WEEK = 23

export const INSTRUCTORS = [
  {
    name: "Carlos",
    initials: "CR",
    role: "Co-Fundador · Protolylat",
    bio: "Arquitecto de software especializado en productos AI-native y automatización para mercados hispanos. Partner tecnológico oficial de la SHCCNJ. Ha construido más de 50 productos digitales para empresas en Latinoamérica y Estados Unidos.",
    badge: "Partner SHCCNJ",
    stats: [
      { label: "Proyectos deployados", value: "50+" },
      { label: "Alumnos formados", value: "200+" },
      { label: "Años de experiencia", value: "8" },
    ],
    gradientFrom: "#C9A84C",
    gradientTo: "#A07830",
  },
  {
    name: "Daniel",
    initials: "DC",
    role: "Co-Fundador · Protolylat",
    bio: "Especialista en desarrollo frontend y experiencia de usuario. Mentor activo en la comunidad tech hispana de NJ/NY. Ha formado a más de 200 desarrolladores en talleres presenciales y virtuales desde 2020.",
    badge: "Instructor Certificado",
    stats: [
      { label: "Proyectos deployados", value: "40+" },
      { label: "Alumnos formados", value: "200+" },
      { label: "Años de experiencia", value: "6" },
    ],
    gradientFrom: "#3B82F6",
    gradientTo: "#1D4ED8",
  },
]

export const copy = {
  es: {
    // Announcement bar
    announcementBar: `🏆 Beneficio Exclusivo SHCCNJ · Descuento de $100 para miembros activos · Solo hasta el Sábado 2 de Mayo → Reclamar ahora`,

    // Navbar
    navLogo: "BuildInN8N",
    navLinks: [
      { label: "El Método", href: "#metodo" },
      { label: "Programa", href: "#curriculum" },
      { label: "Instructores", href: "#instructor" },
      { label: "Inscribirse", href: "#form" },
    ],
    navCta: "Reclamar Descuento Miembro →",
    navCountdownLabel: "Cierra en:",

    // Hero
    eyebrow: `🏆 Exclusivo Miembros SHCCNJ · 3 horas · Solo ${SPOTS_AVAILABLE} cupos · NJ · Online`,
    headline: "El Taller de Desarrollo Web Exclusivo para Miembros SHCCNJ",
    headlineAccent: "Exclusivo para Miembros SHCCNJ",
    typewriterPrefix: "",
    typewriterPhrases: [
      "Construye tu sitio web en Next.js en 3 horas.",
      "Sin saber programar. Sin depender de nadie.",
      "Con el respaldo de la comunidad SHCCNJ.",
      "Tu negocio en línea. Este Sábado 2 de Mayo.",
      "Descuento exclusivo de $100 para miembros.",
    ],
    subheadline:
      "Como miembro activo de la Statewide Hispanic Chamber of Commerce NJ, tienes acceso preferencial a nuestro taller intensivo de Next.js. Aprende a construir tu sitio web desde cero en solo 3 horas — este Sábado 2 de Mayo, 2026.",
    trustSignals: [
      { icon: "🏆", text: "Exclusivo SHCCNJ" },
      { icon: "🛡️", text: "Garantía 30 días" },
      { icon: "💬", text: "Soporte en Español" },
    ],
    heroCta: "🏆 Reclamar mis $100 de Descuento →",
    heroCopy: "Descuento de $100 exclusivo miembros SHCCNJ · $197 vs $297 precio público · Garantía de 30 días",
    heroSecondary: "Ver qué aprenderás ↓",
    heroPricePublic: "$297",
    heroPriceMember: "$197",
    heroPriceLabel: "precio exclusivo miembros SHCCNJ",
    heroPills: [
      { icon: "📅", text: "Sábado 2 de Mayo, 2026" },
      { icon: "📍", text: "New Jersey + Online" },
      { icon: "⏱", text: "Solo 3 Horas" },
      { icon: "🇺🇸", text: "En Español" },
    ],
    memberBadgeText: "MEMBER EXCLUSIVE · SHCCNJ",
    browserUrl: "BuildInN8N.com ✓ 🔒",
    terminalLines: [
      "$ npx create-next-app@latest mi-landing",
      "✓ Ready in 2.3s",
      "$ vercel deploy",
      "✅ Production: https://mi-landing.vercel.app",
    ],
    vercelBadge: "▲ Deployed to Production",

    // Tech ticker
    tickerPrefix: "🏆 SHCCNJ Exclusive · Construirás con →",
    tickerSuffix: "🇺🇸 100% en español · Comunidad Hispana NJ",

    // Trust bar
    trustBar: [
      { icon: "🏆", text: "SHCCNJ Partner Oficial" },
      { icon: "🇺🇸", text: "Comunidad Hispana NJ" },
      { icon: "⚡", text: "Powered by Protolylat" },
      { icon: "🎓", text: "+200 Estudiantes Formados" },
      { icon: "💬", text: "Soporte en Español" },
    ],

        // ── Advantage Section (replaces N8n section) ─────────────────────────────
    advantageTitle: "¿Por qué Protolylat para tu negocio en New Jersey?",
    advantageIntro:
      "No somos una agencia genérica. Somos la firma de Ingeniería de IA y Software Factory miembro de la Cámara Hispana de Comercio de NJ para llevar tecnología enterprise a los negocios hispanos — con acompañamiento en español y precios diseñados para PyMEs.",
    advantageCards: [
      {
        title: "IA Engineering",
        body: "Construimos agentes de IA personalizados para tu industria: atención al cliente, captación de leads, análisis de datos. Sin código genérico.",
        stat: "ROI medible en 90 días",
      },
      {
        title: "Software Factory",
        body: "Tu idea se convierte en producto digital. Desde MVP hasta plataforma escalable, con un equipo dedicado a tu visión.",
        stat: "Entrega en semanas, no meses",
      },
      {
        title: "Infraestructura Cloud",
        body: "Migramos, optimizamos y aseguramos tu operación digital. AWS, GCP, Azure — al precio correcto para PyMEs.",
        stat: "Hasta 60% menos en costos cloud",
      },
      {
        title: "Automatización de Procesos",
        body: "Eliminamos el trabajo manual de tu operación: facturación, seguimiento de clientes, reportes — todo automatizado.",
        stat: "+20 horas/semana recuperadas",
      },
    ],
    advantageQuote:
      "Los negocios hispanos en NJ merecen la misma tecnología que usan las Fortune 500 — sin intermediarios, sin costos prohibitivos, con acompañamiento en español.",

    // Pain points
    painTitle: "¿Te suena familiar alguno de estos?",
    painIntro:
      "Como empresario hispano en New Jersey, la tecnología puede ser tu ventaja competitiva — o la razón por la que pierdes clientes frente a la competencia.",
    painPoints: [
      { icon: "💸", title: "Dependencia de agencias caras en NJ que cobran $800+ y tardan semanas" },
      { icon: "🔗", title: "Dependes de alguien más para actualizar tu propio sitio" },
      { icon: "📉", title: "Tus clientes eligen a la competencia porque tienen mejor presencia digital" },
      { icon: "⏳", title: "Llevas meses con esa landing page pendiente mientras pierdes leads" },
      { icon: "💻", title: "Intentaste aprender a programar pero los tutoriales son interminables" },
    ],
    painFeaturedTitle: "Pagaste cursos de programación que te dejaron más confundido que antes",
    painFeaturedBody:
      "(Los cursos tradicionales te enseñan a programar como en 2015. Este taller te enseña a construir como se hace en 2026.)",

    // Vibe Coding section
    vibeTitle: "El código ya no es la barrera. El método, sí.",
    vibeIntro:
      "Hoy aprender a construir software no significa memorizar sintaxis. Significa dominar el método para decirle a la IA exactamente qué construir, cómo iterarlo y cuándo está listo para producción. Ese método tiene nombre: Vibe Coding. Y en 3 horas lo vas a dominar.",
    vibeSteps: [
      {
        num: "01",
        title: "Describes exactamente lo que quieres",
        body: "En español o inglés. Sin memorizar sintaxis. Sin setup complicado.",
      },
      {
        num: "02",
        title: "La IA escribe el Next.js completo",
        body: "v0.app, Cursor y Claude generan componentes profesionales en segundos.",
      },
      {
        num: "03",
        title: "Tú refinas, deploya y cobras",
        body: "Sin depender de nadie. Tu código, tu dominio, tu ingreso.",
      },
    ],
    // SHCCNJ Solution callout
    solutionCallout:
      "✅ Como miembro de SHCCNJ, tu comunidad ya negoció este acceso preferencial. Este taller fue diseñado pensando en empresarios hispanos como tú — dueños de negocios reales en New Jersey que necesitan presencia digital sin depender de nadie.",
    alertTitle: "¿Por qué un taller en vivo de 3 horas enseña más que 20 horas de curso grabado?",
    alertBullets: [
      "Los cursos grabados tienen 73% de abandono antes del módulo 3.",
      "Un taller en vivo fuerza la ejecución inmediata — sin pausa, sin procrastinación.",
      "50 profesionales resolviendo el mismo problema en tiempo real acelera el aprendizaje 4x (Active Learning Framework, MIT).",
      "Cuando terminas, tienes el resultado Y la habilidad. No solo el video.",
    ],

    // Next.js advantage
    nextTitle: "No es solo código. Es la tecnología que usan los gigantes.",
    nextIntro:
      "Las landing pages que construirás en este taller no son HTML estático. Son aplicaciones Next.js — el mismo framework que usan Netflix, TikTok, Twitch, Hulu, y miles de startups valuadas en millones. Eso cambia el precio que puedes cobrar.",
    nextCards: [
      {
        title: "SEO Nativo",
        body: "Google indexa Next.js de forma nativa. Server-side rendering significa que tu landing page aparece en búsquedas orgánicas sin trucos. Los clientes llegan solos.",
        stat: "73% más tráfico orgánico vs. HTML estático",
        icon: "Search",
      },
      {
        title: "Rendimiento Empresarial",
        body: "Core Web Vitals perfectos por diseño. Velocidad de carga < 2.5s garantizada. Los clientes no esperan — y Google te premia con mejores rankings.",
        stat: "LCP < 2.5s — Puntuación Google: 95+",
        icon: "Zap",
      },
      {
        title: "Tecnología de $Millones",
        body: "Cuando le dices a un cliente que su landing está en Next.js — el mismo stack de Netflix — el precio de $500 se convierte en $1,500 sin objeción.",
        stat: "Usado por Netflix · TikTok · Twitch · Vercel",
        icon: "TrendingUp",
      },
      {
        title: "Deployable en Minutos",
        body: "Vercel + Next.js = de tu código a un dominio real en 3 minutos. No servidores. No hosting complicado. Deploy con un comando. Escala solo.",
        stat: "0 configuración · Deploy en 3 min · Escala solo",
        icon: "Rocket",
      },
    ],
    nextQuote:
      "Las empresas que más invierten en Next.js no lo hacen por tendencia. Lo hacen porque convierte mejor, rankea mejor y escala sin límite. Tú lo aprenderás en 3 horas.",

    // Curriculum
    curriculumTitle: "Tu sábado, módulo a módulo — 3 horas que cambian tu negocio:",
    learnBadge: "Aprenderás:",
    leaveBadge: "Saldrás con:",
    modules: [
      {
        time: "09:00 AM ET",
        title: "Setup Express con Antigravity + Next.js",
        duration: "20 min",
        learn: "Cómo configurar tu entorno profesional con Next.js 15 y Antigravity desde cero.",
        leave: "Tu proyecto corriendo localmente con stack profesional listo para producción.",
      },
      {
        time: "09:20 AM ET",
        title: "Landing Page con IA — Hero que paraliza el scroll",
        duration: "40 min",
        learn: "La anatomía de un Hero que convierte: jerarquía visual + copy + CTA. Animaciones profesionales con Motion.",
        leave: "Tu primera sección deployada en Vercel — URL real que puedes compartir.",
      },
      {
        time: "10:00 AM ET",
        title: "Formulario conectado a WhatsApp Business + Email automático",
        duration: "30 min",
        learn: "Integrar Resend para emails automáticos de bienvenida y WhatsApp API para conversiones reales.",
        leave: "Landing page completa con formulario funcional que captura leads y los manda a WhatsApp.",
      },
      {
        time: "10:30 AM ET",
        title: "Deploy en Vercel con dominio propio",
        duration: "30 min",
        learn: "Deploy profesional con Next.js. Dominio personalizado. Tu sitio en internet para siempre.",
        leave: "Sitio deployado con dominio propio, indexable en Google, listo para conseguir clientes.",
      },
    ],

    // Value stack
    valueTitle: "Todo lo que construyes y recibes al inscribirte hoy:",
    valueItems: [
      { label: "Acceso al taller en vivo (3 horas) — Landing Page con IA", price: "$497" },
      { label: "Tu landing page deployada con dominio propio", price: "$297" },
      { label: "Formulario conectado a WhatsApp Business", price: "$197" },
      { label: "Email automático de bienvenida (Resend)", price: "$97" },
      { label: "Animaciones profesionales (Motion)", price: "$97" },
      { label: "Grabación completa + materiales", price: "$97" },
      { label: "Comunidad privada de WhatsApp (30 días)", price: "$57" },
      { label: "Q&A en vivo con el instructor", price: "$97" },
    ],
    valueTotalLabel: "Valor total del programa:",
    valueTotalPrice: "$1,336",
    valueYourLabel: "Tu inversión hoy (miembro SHCCNJ):",
    valueYourPrice: "$197",
    valueAnchor:
      "Un dev en NJ cobra $150/hr. 3 horas de consultoría = $450. Tú pagas $197 y aprendes a construirlo tú — para siempre.",

    // Terminal / cost analysis
    terminalAnalysis: [
      "> Valor total del programa.............. $1,336",
      "> Precio público........................ $297",
      "> Descuento miembro SHCCNJ.............. -$100 🏆",
      "> ─────────────────────────────────────────────",
      "> TU INVERSIÓN HOY (miembro SHCCNJ)..... $197",
      "> ROI estimado (1 cliente nuevo)......... +$1,500",
      "> ─────────────────────────────────────────────",
      "> RETORNO SOBRE INVERSIÓN............... 662%",
    ],

    // Pricing tiers
    pricingTitle: "Tu acceso como miembro SHCCNJ:",
    pricingTiers: [
      {
        label: "Miembro SHCCNJ",
        badge: "Precio Miembro",
        price: "$197",
        originalPrice: "$297",
        savings: "Ahorras $100 por ser miembro SHCCNJ 🏆",
        description: "Exclusivo para miembros activos de la Statewide Hispanic Chamber of Commerce NJ.",
        cta: "Reclamar mi Descuento de $100 →",
        highlighted: true,
      },
      {
        label: "Aliados del ecosistema",
        badge: "Aliados",
        price: "$247",
        originalPrice: "$297",
        savings: "Ahorras $50",
        description: "Para asesores de negocios, contadores, coaches y consultores que refieren clientes.",
        cta: "Quiero este precio →",
      },
      {
        label: "Público general",
        badge: "General",
        price: "$297",
        originalPrice: "$397",
        savings: "Precio sube a $397 pronto",
        description: "Acceso completo al taller. Precio vigente mientras haya cupos disponibles.",
        cta: "Asegurar mi cupo →",
      },
    ],

    // Pricing payment options
    pricingPaymentOptions: [
      { label: "Pago completo", detail: "$197 hoy", highlight: true },
      { label: "3 cuotas", detail: "3 x $66/mes", highlight: false },
      { label: "Reserva tu lugar", detail: "$100 hoy", highlight: false },
    ],
    memberIdPlaceholder: "Número de membresía SHCCNJ (opcional)",
    memberIdHelper: "Confirmaremos tu membresía por WhatsApp antes del pago",
    pricingFinePrint:
      "¿Aún no eres miembro? Únete en shccnj.org y regresa a reclamar tu descuento.",

    // Growth hack
    growthTitle: "Trae un amigo y los dos pagan menos:",
    growthBody:
      "Refiere a un familiar, amigo o colega — cuando ambos se inscriban, cada uno paga solo $197 en lugar de $297. Comparte tu link personalizado y el descuento se aplica automático.",
    growthBadge: "Solo 10 cupos con este precio",
    growthCta: "Obtener mi link de referido →",

    // Payment options (form)
    paymentTitle: "Opciones de pago flexibles:",
    paymentOptions: [
      { label: "Pago completo", detail: "$197 hoy (miembro SHCCNJ)", highlight: true },
      { label: "3 cuotas", detail: "3 x $66/mes", highlight: false },
      { label: "Reserva anticipada", detail: "$100 hoy · resto antes del taller", highlight: false },
    ],

    // Testimonials
    testimonialTitle: "Lo que dicen quienes ya vivieron la formación:",
    testimonials: [
      {
        before: "Había intentado 3 cursos de programación y los abandoné todos...",
        during: "...pero cuando vi al instructor construir el Hero en vivo, de repente todo tenía sentido.",
        after: "A las dos semanas ya había cobrado mi primer cliente $450 en Hackensack, NJ.",
        author: "María R.",
        role: "Freelancer · Nueva Jersey",
      },
      {
        before: "Tenía mi negocio de estética pero sin presencia online. Dependía 100% de Instagram...",
        during: "...en el módulo de SEO entendí por qué Google no me encontraba. Fue un momento 'aha' total.",
        after: "Mi landing en Next.js ahora aparece en Google. Conseguí 3 clientes nuevos el primer mes.",
        author: "Carlos M.",
        role: "Emprendedor · Queens, NY",
      },
      {
        before: "Era diseñadora en Canva. No sabía nada de código. Sentía que el desarrollo web no era para mí...",
        during: "...cuando deployé mi primera URL en Vercel a los 45 minutos, me puse a llorar de emoción.",
        after: "Ahora ofrezco landing pages en Next.js a $800 a restaurantes latinos en mi área.",
        author: "Diana P.",
        role: "Diseñadora → Developer · Paterson, NJ",
      },
    ],
    beforeLabel: "Antes",
    duringLabel: "Durante",
    afterLabel: "Después",
    statsBar: `🎓 ${INSTRUCTOR_STUDENTS}+ alumnos formados · 🌎 NJ · NY · FL · TX · CA · IL · y más · ⭐ 4.9/5 valoración promedio · 💼 $450 ingreso promedio primer mes`,

    // Guarantee
    guaranteeTitle: "Garantía de aprendizaje real — 30 días",
    guaranteeBody:
      "Si completas el taller en vivo y al terminar las 3 horas no puedes mostrarme una landing page deployada con tu nombre, te damos acceso liberado al próximo workshop — sin costo. También puedes optar por una gift card para repetir el taller cuando quieras. Tienes múltiples caminos de regreso: no perdiste nada.\n\nNo vendemos acceso a un webinar. Vendemos la certeza de que vas a construir algo que funciona, con tu nombre en internet, el mismo día.",
    guaranteeSHCCNJ:
      "Este taller cuenta con el respaldo institucional de la SHCCNJ. +7,000 miembros de nuestra comunidad ya tienen acceso a este beneficio.",

    // Credibility
    credibilityTitle: "Credibilidad",
    credibilitySubtitle: "Respaldado por experiencia",
    credibilityCards: [
      {
        icon: "Building2",
        title: "Metodología probada",
        body: "El Build Nextjs Landing Pages es una spin-off de Protolylat. Somos una software factory con experiencia real de más de 12 años construyendo productos digitales para clientes reales.",
      },
      {
        icon: "Wrench",
        title: "Fundadores en las trincheras",
        body: "No somos teóricos. Construimos, desplegamos y monetizamos productos todos los días. Enseñamos lo que practicamos.",
      },
      {
        icon: "Star",
        title: "Partner Oficial SHCCNJ",
        body: "Protolylat es el socio tecnológico oficial de la Statewide Hispanic Chamber of Commerce de New Jersey. Este taller es un beneficio exclusivo para sus miembros.",
      },
    ],

    // Instructor
    instructorBio: `Instructor bilingüe con ${INSTRUCTOR_YEARS} años buildando con Next.js. ${INSTRUCTOR_PROJECTS} proyectos deployados. ${INSTRUCTOR_STUDENTS} alumnos formados en USA. Partner tecnológico oficial de la SHCCNJ.`,
    instructorBadge: "Partner SHCCNJ",
    instructorStats: [
      { label: "Proyectos deployados", value: `${INSTRUCTOR_PROJECTS}+` },
      { label: "Alumnos formados", value: `${INSTRUCTOR_STUDENTS}+` },
      { label: "Años de experiencia", value: `${INSTRUCTOR_YEARS}` },
    ],
    instructorPartnerText:
      "Protolylat es el socio tecnológico oficial de la Statewide Hispanic Chamber of Commerce de New Jersey para formación en desarrollo web.",

    // FAQ
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Necesito saber programar para tomar este taller?",
        a: "No. Diseñamos el contenido para dueños de negocio y emprendedores sin background técnico. Si puedes usar Notion o Canva, puedes aprender a construir tu sitio en Next.js con nosotros.",
      },
      {
        q: "¿Cómo verifico que soy miembro activo de SHCCNJ?",
        a: "Basta con tu nombre registrado o número de membresía. Te contactaremos por WhatsApp para confirmar antes de procesar tu pago con el descuento aplicado.",
      },
      {
        q: "¿El taller es presencial o virtual?",
        a: "Ofrecemos ambas modalidades. La sesión presencial es en New Jersey el sábado 2 de mayo. La opción online incluye acceso en vivo + grabación completa para que repases a tu ritmo.",
      },
      {
        q: "¿Qué pasa si no puedo asistir el 2 de mayo?",
        a: "Recibes la grabación completa + todos los materiales + acceso al grupo privado de WhatsApp por 30 días. Tu inversión está protegida con nuestra garantía de 30 días.",
      },
      {
        q: "¿El descuento de $100 aplica también a las cuotas?",
        a: "Sí. El precio base se reduce a $197 y puedes dividirlo en 3 cuotas de ~$66/mes. El descuento SHCCNJ ya está incluido en ambas opciones.",
      },
      {
        q: "¿Puedo compartir este link con otros miembros de SHCCNJ?",
        a: "¡Por favor hazlo! Este beneficio está disponible para todos los miembros activos de la Statewide Hispanic Chamber of Commerce NJ. Mientras más miembros participen, más fuerte es nuestra comunidad.",
      },
    ],

    // Form
    formTitle: `Asegura tu cupo — Solo quedan ${SPOTS_AVAILABLE} lugares`,
    formSubtitle: "2 minutos · 100% por WhatsApp · Sin tarjeta de crédito aún",
    step0Title: "¡Reserva tu lugar en 2 minutos!",
    step0Body: `Solo ${SPOTS_AVAILABLE} cupos disponibles. Miembros SHCCNJ: $197`,
    step0Btn: "Empezar →",
    step1Label: "¿Cuál es tu nombre? 👋",
    step1Placeholder: "Tu nombre completo",
    step1Hint: "Presiona Enter ↵ para continuar",
    step2Label: "¿Cuál es tu WhatsApp? 📱",
    step2Sub: "Te enviamos la confirmación y el link del taller aquí",
    step3AccessLabel: "Elige tu acceso — cupos limitados: 🎟️",
    accessTiers: [
      {
        key: "chamber",
        emoji: "🏆",
        title: "Miembro SHCCNJ",
        body: "Exclusivo para miembros activos",
        price: "$197",
        originalPrice: "$297",
        savings: "Ahorras $100",
      },
      {
        key: "ally",
        emoji: "🤝",
        title: "Aliados del ecosistema",
        body: "Asesores, contadores, coaches, consultores",
        price: "$247",
        originalPrice: "$297",
        savings: "Ahorras $50",
      },
      {
        key: "general",
        emoji: "🚀",
        title: "Público general",
        body: "Precio vigente mientras haya cupos",
        price: "$297",
        originalPrice: "$397",
        savings: "Precio sube pronto",
      },
      {
        key: "referral",
        emoji: "👫",
        title: "Trae un amigo y los dos pagan menos",
        body: "Solo 10 cupos con este precio",
        price: "$197 c/u",
        originalPrice: "$297",
        savings: "Solo 10 cupos disponibles",
        badge: "10 cupos",
      },
    ],
    step4Label: "¿Cuál es tu nivel actual con IA y código? 🧠",
    levelCards: [
      { emoji: "🙈", title: "Cero absoluto", body: "Nunca he tocado código" },
      { emoji: "🤖", title: "He jugado con ChatGPT", body: "Sé lo básico de IA" },
      { emoji: "⚡", title: "Ya uso v0 o Cursor", body: "Tengo algo de experiencia" },
    ],
    loadingTexts: ["Verificando disponibilidad...", "Preparando tu lugar...", "¡Listo! Redirigiendo a WhatsApp..."],
    successTitle: (name: string) => `¡Perfecto, ${name}! Revisa tu WhatsApp 💬`,
    successBody: "Te confirmamos tu cupo en menos de 2 horas.",
    successBtn: "Abrir WhatsApp de nuevo →",
    nextBtn: "Continuar →",

    // Final CTA
    finalTitle: "Tu membresía en SHCCNJ ya te dio el acceso.",
    finalTitleAccent: "Solo falta que lo uses.",
    finalSubheadline:
      "El Sábado 2 de Mayo tienes la oportunidad de construir tu presencia digital, dejar de depender de agencias y aprender con tu comunidad.",
    finalTypewriterPhrases: [
      "3 horas. Tú. Tu código. En vivo.",
      "Sin devs. Sin esperar. La habilidad es tuya.",
      "Sábado 2 de Mayo. 50 cupos. ¿Entras?",
    ],
    countdownLabel: "Descuento miembro SHCCNJ termina en:",
    finalCta: "🏆 Reclamar mis $100 de Descuento →",
    finalCtaSecondary: "¿Preguntas? Escríbenos al WhatsApp →",
    finalMicro: "→ Registro por WhatsApp · 3 cuotas de $66/mes disponibles · Garantía 30 días",
    finalSocial: `🔥 ${ENROLLED_THIS_WEEK} personas ya reservaron su lugar esta semana`,
    finalEventCard: [
      "📅 Sábado 2 de Mayo, 2026",
      "⏰ 3 horas intensivas",
      "📍 New Jersey + Online",
      "💰 $197 para miembros SHCCNJ (vs $297 precio público)",
      "✅ Garantía de 30 días",
    ],

    // Sticky bar
    stickyText: `🏆 Descuento SHCCNJ $100 · Precio miembro: $197 · Termina en`,
    stickyBtn: "Reclamar →",

    // Footer
    footerTagline: "Formación tecnológica para la comunidad latina en NJ y USA. Partner oficial de la SHCCNJ.",
    footerEventLabel: "Evento",
    footerEventTime: "09:00 AM – 12:00 PM ET",
    footerOnline: "New Jersey + 100% online",
    footerLinks: ["Política de privacidad", "Términos", "Contacto", "shccnj.org"],
    footerWaTitle: "¿Preguntas antes de inscribirte?",
    footerWaBtn: "Chatear por WhatsApp →",
    footerSHCCNJPartner: "Partner Tecnológico Oficial",
    footerSHCCNJDisclaimer:
      "Esta oferta es exclusiva para miembros activos de la Statewide Hispanic Chamber of Commerce of New Jersey (SHCCNJ). Protolylat se reserva el derecho de verificar membresía activa antes de aplicar el descuento. Válido hasta el 2 de Mayo de 2026.",
    footerCopy: `© 2026 Protolylat · BuildInN8N. Evento 100% online. Horario Eastern Time (ET). NJ / NY / USA. Hecho con ❤️ para la comunidad hispana.`,
  },

  en: {
    announcementBar: `🏆 SHCCNJ Exclusive Benefit · $100 discount for active members · Only until Saturday May 2 → Claim now`,

    navLogo: "BuildInN8N",
    navLinks: [
      { label: "The Method", href: "#metodo" },
      { label: "Program", href: "#curriculum" },
      { label: "Instructors", href: "#instructor" },
      { label: "Enroll", href: "#form" },
    ],
    navCta: "Claim Member Discount →",
    navCountdownLabel: "Closes in:",

    eyebrow: `🏆 SHCCNJ Members Exclusive · 3 hours · Only ${SPOTS_AVAILABLE} spots · NJ · Online`,
    headline: "The Web Development Workshop Exclusive for SHCCNJ Members",
    headlineAccent: "Exclusive for SHCCNJ Members",
    typewriterPrefix: "",
    typewriterPhrases: [
      "Build your website in Next.js in 3 hours.",
      "No coding required. No depending on anyone.",
      "Backed by the SHCCNJ community.",
      "Your business online. This Saturday, May 2.",
      "Exclusive $100 discount for members.",
    ],
    subheadline:
      "As an active member of the Statewide Hispanic Chamber of Commerce NJ, you have preferential access to our intensive Next.js workshop. Learn to build your website from scratch in just 3 hours — this Saturday, May 2, 2026.",
    trustSignals: [
      { icon: "🏆", text: "SHCCNJ Exclusive" },
      { icon: "🛡️", text: "30-day guarantee" },
      { icon: "💬", text: "Support in Spanish" },
    ],
    heroCta: "🏆 Claim my $100 Discount →",
    heroCopy: "$100 discount exclusive to SHCCNJ members · $197 vs $297 public price · 30-day guarantee",
    heroSecondary: "See what you'll learn ↓",
    heroPricePublic: "$297",
    heroPriceMember: "$197",
    heroPriceLabel: "exclusive SHCCNJ member price",
    heroPills: [
      { icon: "📅", text: "Saturday, May 2, 2026" },
      { icon: "📍", text: "New Jersey + Online" },
      { icon: "⏱", text: "Only 3 Hours" },
      { icon: "🇺🇸", text: "In Spanish" },
    ],
    memberBadgeText: "MEMBER EXCLUSIVE · SHCCNJ",
    browserUrl: "BuildInN8N.com ✓ 🔒",
    terminalLines: [
      "$ npx create-next-app@latest my-landing",
      "✓ Ready in 2.3s",
      "$ vercel deploy",
      "✅ Production: https://my-landing.vercel.app",
    ],
    vercelBadge: "▲ Deployed to Production",

    tickerPrefix: "🏆 SHCCNJ Exclusive · You'll build with →",
    tickerSuffix: "🇺🇸 100% en español · NJ Hispanic Community",

    trustBar: [
      { icon: "🏆", text: "SHCCNJ Official Partner" },
      { icon: "🇺🇸", text: "NJ Hispanic Community" },
      { icon: "⚡", text: "Powered by Protolylat" },
      { icon: "🎓", text: "+200 Students Trained" },
      { icon: "💬", text: "Support in Spanish" },
    ],

        // ── Advantage Section ────────────────────────────────────────────────────
    advantageTitle: "Why Protolylat for your New Jersey business?",
    advantageIntro:
      "We are not a generic agency. We are the AI Engineering firm and Software Factory member of the Hispanic Chamber of Commerce of NJ to bring enterprise technology to Hispanic businesses — with Spanish-language support and pricing designed for SMBs.",
    advantageCards: [
      {
        title: "AI Engineering",
        body: "We build custom AI agents for your industry: customer service, lead generation, data analysis. No generic code.",
        stat: "Measurable ROI in 90 days",
      },
      {
        title: "Software Factory",
        body: "Your idea becomes a digital product. From MVP to scalable platform, with a team dedicated to your vision.",
        stat: "Delivery in weeks, not months",
      },
      {
        title: "Cloud Infrastructure",
        body: "We migrate, optimize and secure your digital operation. AWS, GCP, Azure — at the right price for SMBs.",
        stat: "Up to 60% less in cloud costs",
      },
      {
        title: "Process Automation",
        body: "We eliminate manual work from your operation: billing, client follow-up, reports — all automated.",
        stat: "+20 hours/week recovered",
      },
    ],
    advantageQuote:
      "Hispanic businesses in NJ deserve the same technology used by Fortune 500 companies — without intermediaries, without prohibitive costs, with Spanish-language support.",

    painTitle: "Do any of these sound familiar?",
    painIntro:
      "As a Hispanic business owner in New Jersey, technology can be your competitive advantage — or the reason you lose clients to the competition.",
    painPoints: [
      { icon: "💸", title: "Dependence on expensive NJ agencies that charge $800+ and take weeks" },
      { icon: "🔗", title: "You depend on someone else to update your own website" },
      { icon: "📉", title: "Clients choose your competition because they have better digital presence" },
      { icon: "⏳", title: "You've had that landing page pending for months while losing leads" },
      { icon: "💻", title: "You tried to learn to code but tutorials are endless and confusing" },
    ],
    painFeaturedTitle: "You paid for programming courses that left you more confused than before",
    painFeaturedBody:
      "(Traditional courses teach you to code like it's 2015. This workshop teaches you to build the way it's done in 2026.)",

    vibeTitle: "Code is no longer the barrier. The method is.",
    vibeIntro:
      "Learning to build software today doesn't mean memorizing syntax. It means mastering the method to tell AI exactly what to build, how to iterate it, and when it's production-ready. That method has a name: Vibe Coding. And in 3 hours you'll master it.",
    vibeSteps: [
      {
        num: "01",
        title: "You describe exactly what you want",
        body: "In Spanish or English. No syntax memorization. No complicated setup.",
      },
      {
        num: "02",
        title: "AI writes the complete Next.js",
        body: "v0.app, Cursor, and Claude generate professional components in seconds.",
      },
      {
        num: "03",
        title: "You refine, deploy, and charge",
        body: "Without depending on anyone. Your code, your domain, your income.",
      },
    ],
    solutionCallout:
      "✅ As an SHCCNJ member, your community already negotiated this preferential access. This workshop was designed with Hispanic business owners like you in mind — real business owners in New Jersey who need digital presence without depending on anyone.",
    alertTitle: "Why does a 3-hour live workshop teach more than 20 hours of recorded course?",
    alertBullets: [
      "Recorded courses have 73% abandonment before module 3.",
      "A live workshop forces immediate execution — no pause, no procrastination.",
      "50 professionals solving the same problem in real time accelerates learning 4x (Active Learning Framework, MIT).",
      "When you finish, you have the result AND the skill. Not just the video.",
    ],

    nextTitle: "Not just code. The technology powering the giants.",
    nextIntro:
      "The landing pages you'll build in this workshop aren't static HTML. They're Next.js applications — the same framework used by Netflix, TikTok, Twitch, Hulu, and thousands of million-dollar startups. That changes what you can charge.",
    nextCards: [
      {
        title: "Native SEO",
        body: "Google indexes Next.js natively. Server-side rendering means your landing page appears in organic searches without tricks. Clients come to you.",
        stat: "73% more organic traffic vs. static HTML",
        icon: "Search",
      },
      {
        title: "Enterprise Performance",
        body: "Perfect Core Web Vitals by design. Load speed < 2.5s guaranteed. Clients don't wait — and Google rewards you with better rankings.",
        stat: "LCP < 2.5s — Google Score: 95+",
        icon: "Zap",
      },
      {
        title: "Million-Dollar Tech",
        body: "When you tell a client their landing is on Next.js — same stack as Netflix — the $500 price becomes $1,500 without objection.",
        stat: "Used by Netflix · TikTok · Twitch · Vercel",
        icon: "TrendingUp",
      },
      {
        title: "Deploy in Minutes",
        body: "Vercel + Next.js = from your code to a real domain in 3 minutes. No servers. No complicated hosting. Deploy with one command. Scales itself.",
        stat: "0 config · Deploy in 3 min · Scales itself",
        icon: "Rocket",
      },
    ],
    nextQuote:
      "Companies that invest in Next.js don't do it for trends. They do it because it converts better, ranks better, and scales without limits. You'll learn it in 3 hours.",

    curriculumTitle: "Your Saturday, module by module — 3 hours that change your business:",
    learnBadge: "You'll learn:",
    leaveBadge: "You'll leave with:",
    modules: [
      {
        time: "09:00 AM ET",
        title: "Express Setup with Antigravity + Next.js",
        duration: "20 min",
        learn: "How to set up a professional environment with Next.js 15 and Antigravity from scratch.",
        leave: "Your project running locally with a professional stack ready for production.",
      },
      {
        time: "09:20 AM ET",
        title: "Landing Page with AI — Hero that stops the scroll",
        duration: "40 min",
        learn: "The anatomy of a converting Hero: visual hierarchy + copy + CTA. Professional animations with Motion.",
        leave: "Your first section deployed on Vercel — a real URL you can share.",
      },
      {
        time: "10:00 AM ET",
        title: "Form connected to WhatsApp Business + automated email",
        duration: "30 min",
        learn: "Integrate Resend for automatic welcome emails and WhatsApp API for real conversions.",
        leave: "Complete landing page with a working form that captures leads and sends them to WhatsApp.",
      },
      {
        time: "10:30 AM ET",
        title: "Deploy to Vercel with custom domain",
        duration: "30 min",
        learn: "Professional deploy with Next.js. Custom domain. Your site live on the internet forever.",
        leave: "Site deployed with a custom domain, Google-indexable, ready to get clients.",
      },
    ],

    valueTitle: "Everything you build and receive when you enroll today:",
    valueItems: [
      { label: "Live workshop access (3 hours) — Landing Page with AI", price: "$497" },
      { label: "Your landing page deployed with custom domain", price: "$297" },
      { label: "Form connected to WhatsApp Business", price: "$197" },
      { label: "Automatic welcome email (Resend)", price: "$97" },
      { label: "Professional animations (Motion)", price: "$97" },
      { label: "Full recording + materials", price: "$97" },
      { label: "Private WhatsApp community (30 days)", price: "$57" },
      { label: "Live Q&A with the instructor", price: "$97" },
    ],
    valueTotalLabel: "Total program value:",
    valueTotalPrice: "$1,336",
    valueYourLabel: "Your investment today (SHCCNJ member):",
    valueYourPrice: "$197",
    valueAnchor:
      "A dev in NJ charges $150/hr. 3 hours of consulting = $450. You pay $197 and learn to build it yourself — forever.",

    terminalAnalysis: [
      "> Total program value................ $1,336",
      "> Public price...................... $297",
      "> SHCCNJ member discount............ -$100 🏆",
      "> ─────────────────────────────────────────────",
      "> YOUR INVESTMENT TODAY (SHCCNJ).... $197",
      "> Estimated ROI (1 new client)...... +$1,500",
      "> ─────────────────────────────────────────────",
      "> RETURN ON INVESTMENT.............. 662%",
    ],

    pricingTitle: "Your access as an SHCCNJ member:",
    pricingTiers: [
      {
        label: "SHCCNJ Member",
        badge: "Member Price",
        price: "$197",
        originalPrice: "$297",
        savings: "Save $100 for being an SHCCNJ member 🏆",
        description: "Exclusive for active members of the Statewide Hispanic Chamber of Commerce NJ.",
        cta: "Claim my $100 Discount →",
        highlighted: true,
      },
      {
        label: "Ecosystem allies",
        badge: "Allies",
        price: "$247",
        originalPrice: "$297",
        savings: "Save $50",
        description: "For business advisors, accountants, coaches, and consultants who refer clients.",
        cta: "Get this price →",
      },
      {
        label: "General public",
        badge: "General",
        price: "$297",
        originalPrice: "$397",
        savings: "Price increases soon",
        description: "Full workshop access. Price valid while spots are available.",
        cta: "Secure my spot →",
      },
    ],

    pricingPaymentOptions: [
      { label: "Full payment", detail: "$197 today", highlight: true },
      { label: "3 installments", detail: "3 x $66/month", highlight: false },
      { label: "Reserve your spot", detail: "$100 today", highlight: false },
    ],
    memberIdPlaceholder: "SHCCNJ membership number (optional)",
    memberIdHelper: "We'll confirm your membership via WhatsApp before processing payment",
    pricingFinePrint: "Not a member yet? Join at shccnj.org and come back to claim your discount.",

    growthTitle: "Bring a friend and both pay less:",
    growthBody:
      "Refer a family member, friend, or colleague — when both of you enroll, each pays only $197 instead of $297. Share your personalized link and the discount applies automatically.",
    growthBadge: "Only 10 spots at this price",
    growthCta: "Get my referral link →",

    paymentTitle: "Flexible payment options:",
    paymentOptions: [
      { label: "Full payment", detail: "$197 today (SHCCNJ member)", highlight: true },
      { label: "3 installments", detail: "3 x $66/month", highlight: false },
      { label: "Early reserve", detail: "$100 today · rest before workshop", highlight: false },
    ],

    testimonialTitle: "What those who already went through the training say:",
    testimonials: [
      {
        before: "I had tried 3 programming courses and abandoned all of them...",
        during: "...but when I saw the instructor build the Hero live, suddenly everything made sense.",
        after: "Two weeks later I had already charged my first client $450 in Hackensack, NJ.",
        author: "María R.",
        role: "Freelancer · New Jersey",
      },
      {
        before: "I had my beauty business but no online presence. I depended 100% on Instagram...",
        during: "...in the SEO module I understood why Google couldn't find me. It was a total 'aha' moment.",
        after: "My Next.js landing now appears on Google. I got 3 new clients the first month.",
        author: "Carlos M.",
        role: "Entrepreneur · Queens, NY",
      },
      {
        before: "I was a Canva designer. I knew nothing about code. I felt web development wasn't for me...",
        during: "...when I deployed my first URL on Vercel at the 45-minute mark, I cried from emotion.",
        after: "I now offer Next.js landing pages at $800 to Latino restaurants in my area.",
        author: "Diana P.",
        role: "Designer → Developer · Paterson, NJ",
      },
    ],
    beforeLabel: "Before",
    duringLabel: "During",
    afterLabel: "After",
    statsBar: `🎓 ${INSTRUCTOR_STUDENTS}+ students trained · 🌎 NJ · NY · FL · TX · CA · IL · and more · ⭐ 4.9/5 average rating · 💼 $450 average first-month income`,

    guaranteeTitle: "Real learning guarantee — 30 days",
    guaranteeBody:
      "If you complete the live workshop and at the end of 3 hours you can't show me a deployed landing page with your name, we give you free access to the next workshop. You can also opt for a gift card to repeat the training whenever you want. You have multiple paths back — you lose nothing.\n\nWe don't sell webinar access. We sell the certainty that you'll build something that works, with your name on the internet, the same day.",
    guaranteeSHCCNJ:
      "This workshop has the institutional backing of SHCCNJ. +7,000 members of our community already have access to this benefit.",

    credibilityTitle: "Credibility",
    credibilitySubtitle: "Backed by real experience",
    credibilityCards: [
      {
        icon: "Building2",
        title: "Proven methodology",
        body: "Build Nextjs Landing Pages is a spin-off of Protolylat. We are a software factory with 12+ years of real experience building digital products for real clients.",
      },
      {
        icon: "Wrench",
        title: "Founders in the trenches",
        body: "We are not theorists. We build, deploy, and monetize products every day. We teach what we practice.",
      },
      {
        icon: "Star",
        title: "SHCCNJ Official Partner",
        body: "Protolylat is the official technology partner of the Statewide Hispanic Chamber of Commerce of New Jersey. This workshop is an exclusive benefit for its members.",
      },
    ],

    instructorBio: `Bilingual instructor with ${INSTRUCTOR_YEARS} years building with Next.js. ${INSTRUCTOR_PROJECTS} deployed projects. ${INSTRUCTOR_STUDENTS} students trained in the USA. Official technology partner of SHCCNJ.`,
    instructorBadge: "SHCCNJ Partner",
    instructorStats: [
      { label: "Deployed projects", value: `${INSTRUCTOR_PROJECTS}+` },
      { label: "Students trained", value: `${INSTRUCTOR_STUDENTS}+` },
      { label: "Years of experience", value: `${INSTRUCTOR_YEARS}` },
    ],
    instructorPartnerText:
      "Protolylat is the official technology partner of the Statewide Hispanic Chamber of Commerce of New Jersey for web development training.",

    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Do I need to know how to code to take this workshop?",
        a: "No. We designed the content for business owners and entrepreneurs without a technical background. If you can use Notion or Canva, you can learn to build your website in Next.js with us.",
      },
      {
        q: "How do I verify I'm an active SHCCNJ member?",
        a: "Your registered name or membership number is enough. We'll contact you via WhatsApp to confirm before processing your payment with the discount applied.",
      },
      {
        q: "Is the workshop in-person or virtual?",
        a: "We offer both. The in-person session is in New Jersey on Saturday, May 2. The online option includes live access + full recording so you can review at your own pace.",
      },
      {
        q: "What if I can't attend on May 2?",
        a: "You receive the full recording + all materials + access to the private WhatsApp group for 30 days. Your investment is protected with our 30-day guarantee.",
      },
      {
        q: "Does the $100 discount apply to the installment plan too?",
        a: "Yes. The base price is reduced to $197 and you can split it into 3 installments of ~$66/month. The SHCCNJ discount is already included in both options.",
      },
      {
        q: "Can I share this link with other SHCCNJ members?",
        a: "Please do! This benefit is available for all active members of the Statewide Hispanic Chamber of Commerce NJ. The more members participate, the stronger our community.",
      },
    ],

    formTitle: `Secure your spot — Only ${SPOTS_AVAILABLE} spots left`,
    formSubtitle: "2 minutes · 100% via WhatsApp · No credit card yet",
    step0Title: "Reserve your spot in 2 minutes!",
    step0Body: `Only ${SPOTS_AVAILABLE} spots available. SHCCNJ Members: $197`,
    step0Btn: "Start →",
    step1Label: "What's your name? 👋",
    step1Placeholder: "Your full name",
    step1Hint: "Press Enter ↵ to continue",
    step2Label: "What's your WhatsApp? 📱",
    step2Sub: "We'll send your confirmation and workshop link here",
    step3AccessLabel: "Choose your access — limited spots: 🎟️",
    accessTiers: [
      {
        key: "chamber",
        emoji: "🏆",
        title: "SHCCNJ Member",
        body: "Exclusive for active members",
        price: "$197",
        originalPrice: "$297",
        savings: "Save $100",
      },
      {
        key: "ally",
        emoji: "🤝",
        title: "Ecosystem allies",
        body: "Advisors, accountants, coaches, consultants",
        price: "$247",
        originalPrice: "$297",
        savings: "Save $50",
      },
      {
        key: "general",
        emoji: "🚀",
        title: "General public",
        body: "Price valid while spots last",
        price: "$297",
        originalPrice: "$397",
        savings: "Price increases soon",
      },
      {
        key: "referral",
        emoji: "👫",
        title: "Bring a friend — both pay less",
        body: "Only 10 spots at this price",
        price: "$197 ea.",
        originalPrice: "$297",
        savings: "Only 10 spots available",
        badge: "10 spots",
      },
    ],
    step4Label: "What's your current level with AI and code? 🧠",
    levelCards: [
      { emoji: "🙈", title: "Absolute zero", body: "Never touched code" },
      { emoji: "🤖", title: "I've played with ChatGPT", body: "I know AI basics" },
      { emoji: "⚡", title: "I already use v0 or Cursor", body: "I have some experience" },
    ],
    loadingTexts: ["Checking availability...", "Preparing your spot...", "Ready! Redirecting to WhatsApp..."],
    successTitle: (name: string) => `Perfect, ${name}! Check your WhatsApp 💬`,
    successBody: "We'll confirm your spot in less than 2 hours.",
    successBtn: "Open WhatsApp again →",
    nextBtn: "Continue →",

    finalTitle: "Your SHCCNJ membership already gave you access.",
    finalTitleAccent: "You just need to use it.",
    finalSubheadline:
      "On Saturday, May 2 you have the opportunity to build your digital presence, stop depending on agencies, and learn with your community.",
    finalTypewriterPhrases: [
      "3 hours. You. Your code. Live.",
      "No devs. No waiting. The skill is yours.",
      "Saturday May 2. 50 spots. Are you in?",
    ],
    countdownLabel: "SHCCNJ member discount ends in:",
    finalCta: "🏆 Claim my $100 Discount →",
    finalCtaSecondary: "Questions? Message us on WhatsApp →",
    finalMicro: "→ WhatsApp registration · 3 installments of $66/mo available · 30-day guarantee",
    finalSocial: `🔥 ${ENROLLED_THIS_WEEK} people already reserved this week`,
    finalEventCard: [
      "📅 Saturday, May 2, 2026",
      "⏰ 3 intensive hours",
      "📍 New Jersey + Online",
      "💰 $197 for SHCCNJ members (vs $297 public price)",
      "✅ 30-day guarantee",
    ],

    stickyText: `🏆 SHCCNJ $100 discount · Member price: $197 · Ends in`,
    stickyBtn: "Claim →",

    footerTagline: "Tech training for the Latino community in NJ and USA. Official SHCCNJ partner.",
    footerEventLabel: "Event",
    footerEventTime: "09:00 AM – 12:00 PM ET",
    footerOnline: "New Jersey + 100% online",
    footerLinks: ["Privacy Policy", "Terms", "Contact", "shccnj.org"],
    footerWaTitle: "Questions before enrolling?",
    footerWaBtn: "Chat on WhatsApp →",
    footerSHCCNJPartner: "Official Technology Partner",
    footerSHCCNJDisclaimer:
      "This offer is exclusive for active members of the Statewide Hispanic Chamber of Commerce of New Jersey (SHCCNJ). Protolylat reserves the right to verify active membership before applying the discount. Valid until May 2, 2026.",
    footerCopy: `© 2026 Protolylat · BuildInN8N. 100% online event. Eastern Time (ET). NJ / NY / USA. Made with ❤️ for the Hispanic community.`,
  },
}

export type Lang = "es" | "en"
export type Copy = typeof copy.es
