"use client";

import { useEffect, useRef, useState } from "react";
import { SiGithub, SiDiscord  } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail, Send, Loader2, Check, X } from "lucide-react";
import ContactsBackground from "./ContactsBackground";

type Status = "idle" | "sending" | "sent" | "error";

const socials = [
  { icon: SiGithub, href: "https://github.com/Tolojanahary21", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/tolojanahary-stephan-344a77397/", label: "LinkedIn" },
  { icon: SiDiscord, href: "https://discord.com/channels/@me", label: "Discord" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Échec de l'envoi");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      <ContactsBackground isVisible={isVisible} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-10 bg-[#5ee6c9]" />
          <span className="font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-[0.35em] text-[#5ee6c9]">
            Contact
          </span>
        </div>

        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold leading-tight md:text-4xl">
          Un projet en tête ?{" "}
          <span className="text-[#5ee6c9]">Parlons-en.</span>
        </h2>

        <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/65">
          Que ce soit pour une opportunité, une collaboration ou juste une
          question technique, le formulaire ci-dessous m&apos;écrit directement
          par mail.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Coordonnées */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <a
                href="mailto:tolojanaharyandriatahiana@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#5ee6c9]/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5ee6c9]/10 text-[#5ee6c9]">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">Email</p>
                  <p className="mt-0.5 font-[family-name:var(--font-mono)] text-sm">
                    tolojanaharyandriatahiana@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all duration-300 hover:border-[#5ee6c9] hover:bg-[#5ee6c9] hover:text-[#0a0e14]"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:mt-0">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#5ee6c9] shadow-[0_0_8px_#5ee6c9]" />
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Disponible pour de nouveaux projets
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#5ee6c9]/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="vous@exemple.com"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#5ee6c9]/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Décrivez votre projet ou votre question..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#5ee6c9]/50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5ee6c9] px-6 py-3.5 text-sm font-semibold text-[#06110f] transition-all duration-300 hover:shadow-[0_0_30px_rgba(94,230,201,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Envoi en cours...
                </>
              ) : status === "sent" ? (
                <>
                  <Check size={16} />
                  Message envoyé
                </>
              ) : (
                <>
                  <Send size={16} />
                  Envoyer le message
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="flex items-center gap-2 text-xs text-[#5ee6c9]">
                <Check size={14} /> Merci, je réponds généralement sous 48h.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-xs text-red-400">
                <X size={14} /> {errorMsg || "L'envoi a échoué, réessaie ou écris-moi directement."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}