"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

type Locale = "en" | "ar"

type Translations = Record<string, string>

type Dictionary = {
  en: Translations
  ar: Translations
}

const dictionary: Dictionary = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.lets_talk": "Let's Talk",
    "nav.language": "AR",

    "hero.badge": "Available for opportunities",
    "hero.title": "AI/ML/Gen-AI Developer",
    "hero.subtitle": "Generative AI Engineer • LLM Specialist • Full Stack Developer",
    "hero.description": "Building intelligent systems powered by LangChain, Hugging Face, and RAG. Passionate about applying cutting-edge AI tools to solve real-world problems efficiently and at scale.",
    "hero.cta.work": "View My Work",
    "hero.cta.contact": "Contact Me",
    "hero.scroll": "Scroll Down",

    "projects.badge": "Featured Work",
    "projects.title": "My Projects",
    "projects.subtitle": "Real-world applications powering businesses globally",
    "projects.visit": "Visit Live Site",
    "projects.details": "View Details",
    "projects.features": "Key Features",
    "projects.tech": "Tech Stack",
    "projects.github": "View more on GitHub",
    "projects.back": "Back to Projects",

    "about.badge": "About Me",
    "about.title": "Crafting AI Solutions",
    "about.subtitle": "Transforming ideas into intelligent applications",
    "about.p1": "I'm a Generative AI Engineer with hands-on experience building LLM-powered applications using LangChain, Hugging Face, and RAG.",
    "about.p2": "Skilled in developing intelligent systems for text, image, and video generation. Passionate about applying AI tools to solve real-world problems.",
    "about.p3": "Beyond AI, I have extensive experience in full-stack development with the MERN stack.",
    "about.stat.projects": "Projects Deployed",
    "about.stat.countries": "Countries Served",
    "about.stat.grad": "Graduation Year",
    "about.education.degree": "Bachelor in Artificial Intelligence",
    "about.education.university": "The University of Faisalabad",
    "about.education.location": "Faisalabad, Pakistan",
    "about.education.coursework": "Relevant Coursework",

    "skills.badge": "Technical Expertise",
    "skills.title": "Skills & Technologies",

    "contact.badge": "Let's Create Something Amazing",
    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to bring your ideas to life? Let's discuss how we can work together.",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Your Message",
    "contact.form.placeholder_name": "Hassan Sarwar",
    "contact.form.placeholder_email": "hassan.sarwar21@gmail.com",
    "contact.form.placeholder_message": "Tell me about your project...",
    "contact.form.sending": "Sending...",
    "contact.form.sent": "Message Sent!",
    "contact.form.send": "Send Message",
    "contact.connect": "Connect With Me",

    "project.visit": "Visit Website",
    "project.overview": "Overview",
    "project.features": "Key Features",
    "project.tech": "Tech Stack",
    "project.next": "Next Project",
    "project.prev": "Previous Project",

    "footer.tagline": "AI/ML/Gen-AI Developer building intelligent solutions for the future.",
    "footer.portfolio": "Portfolio",
    "footer.made_with": "Made with",
    "footer.and": "and",
    "footer.designed_by": "Designed & Developed by Hassan",
    "footer.more_github": "View more on GitHub",

    "cert.badge": "Verified Achievements",
    "cert.title": "My Certificates",
    "cert.subtitle": "Professional certifications that validate my expertise and commitment to continuous learning",
    "cert.instructor": "Instructor",
    "cert.hours": "hours",
    "cert.verify": "Verify Certificate",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "نبذة",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل",
    "nav.lets_talk": "تحدث معي",
    "nav.language": "EN",

    "hero.badge": "متاح للفرص",
    "hero.title": "مطوّر ذكاء اصطناعي / تعلّم آلي / توليدي",
    "hero.subtitle": "مهندس ذكاء اصطناعي توليدي • متخصص LLM • مطوّر فل ستاك",
    "hero.description": "أبني أنظمة ذكية مدعومة بـ LangChain و Hugging Face و RAG. شغوف بتطبيق أحدث أدوات الذكاء الاصطناعي لحل مشاكل واقعية بكفاءة وعلى نطاق واسع.",
    "hero.cta.work": "شاهد أعمالي",
    "hero.cta.contact": "تواصل معي",
    "hero.scroll": "مرر للأسفل",

    "projects.badge": "أعمال مميزة",
    "projects.title": "مشاريعي",
    "projects.subtitle": "تطبيقات واقعية تدعم أعمالاً حول العالم",
    "projects.visit": "زيارة الموقع",
    "projects.details": "عرض التفاصيل",
    "projects.features": "أهم المزايا",
    "projects.tech": "التقنيات",
    "projects.github": "المزيد على GitHub",
    "projects.back": "العودة للمشاريع",

    "about.badge": "نبذة عني",
    "about.title": "بناء حلول ذكاء اصطناعي",
    "about.subtitle": "تحويل الأفكار إلى تطبيقات ذكية",
    "about.p1": "أنا مهندس ذكاء اصطناعي توليدي لدي خبرة عملية في بناء تطبيقات تعتمد على نماذج LLM باستخدام LangChain و Hugging Face و RAG.",
    "about.p2": "متمرس في تطوير أنظمة ذكية لتوليد النصوص والصور والفيديو. شغوف بتطبيق أدوات الذكاء الاصطناعي لحل مشاكل واقعية.",
    "about.p3": "إلى جانب الذكاء الاصطناعي، لدي خبرة قوية في تطوير الواجهات والخلفيات باستخدام MERN.",
    "about.stat.projects": "مشاريع منشورة",
    "about.stat.countries": "دول مخدومة",
    "about.stat.grad": "سنة التخرج",
    "about.education.degree": "بكالوريوس في الذكاء الاصطناعي",
    "about.education.university": "جامعة فيصل آباد",
    "about.education.location": "فيصل آباد، باكستان",
    "about.education.coursework": "المقررات ذات الصلة",

    "skills.badge": "خبرات تقنية",
    "skills.title": "المهارات والتقنيات",

    "contact.badge": "لنصنع شيئاً رائعاً",
    "contact.title": "تواصل معي",
    "contact.subtitle": "جاهز لتحويل أفكارك إلى واقع؟ دعنا نتحدث حول كيفية العمل معاً.",
    "contact.form.title": "أرسل رسالة",
    "contact.form.name": "اسمك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.message": "رسالتك",
    "contact.form.placeholder_name": "حسن سرور",
    "contact.form.placeholder_email": "hassan.sarwar21@gmail.com",
    "contact.form.placeholder_message": "حدثني عن مشروعك...",
    "contact.form.sending": "جاري الإرسال...",
    "contact.form.sent": "تم إرسال الرسالة!",
    "contact.form.send": "إرسال الرسالة",

    "footer.tagline": "مطوّر ذكاء اصطناعي/تعلم آلي/توليدي يبني حلولاً ذكية للمستقبل.",
    "footer.portfolio": "معرض الأعمال",
    "footer.made_with": "صُنع بـ",
    "footer.and": "و",
    "footer.designed_by": "تم التصميم والتطوير بواسطة حسن",
    "footer.more_github": "المزيد على GitHub",

    "cert.badge": "إنجازات موثّقة",
    "cert.title": "شهاداتي",
    "cert.subtitle": "شهادات احترافية تؤكد خبرتي والتزامي بالتعلم المستمر",
    "cert.instructor": "المدرب",
    "cert.hours": "ساعة",
    "cert.verify": "التحقق من الشهادة",
  },
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (window.localStorage.getItem("locale") as Locale | null) : null
    if (stored === "en" || stored === "ar") setLocaleState(stored)
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    if (typeof window !== "undefined") window.localStorage.setItem("locale", next)
  }

  const toggleLocale = () => setLocale(locale === "en" ? "ar" : "en")

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr"

  useEffect(() => {
    if (typeof document === "undefined") return
    document.documentElement.setAttribute("lang", locale)
    document.documentElement.setAttribute("dir", dir)
  }, [locale, dir])

  const t = (key: string) => dictionary[locale][key] ?? dictionary.en[key] ?? key

  const value = useMemo(() => ({ locale, setLocale, toggleLocale, t, dir }), [locale, dir])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
