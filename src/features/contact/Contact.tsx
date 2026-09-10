 
"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SiGithub, SiDiscord } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail, Send, Loader2, Check, X } from "lucide-react";
import ContactsBackground from "./ContactsBackground";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const socials = [
  {
    icon: SiGithub,
    href: "https://github.com/Tolojanahary21",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/tolojanahary-stephan-344a77397/",
    label: "LinkedIn",
  },
  {
    icon: SiDiscord,
    href: "https://discord.com/channels/@me",
    label: "Discord",
  },
];

export default function Contact() {
  // ─────────────────────────────────────────────
  // Formspree
  // ─────────────────────────────────────────────
  const [state, handleSubmit] = useForm("mlgwkrrb");

  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // ─────────────────────────────────────────────
  // Animation background
  // ─────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ─────────────────────────────────────────────
  // Succès Formspree
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setFormErrors({});
    }
  }, [state.succeeded]);

  // ─────────────────────────────────────────────
  // Validation locale
  // ─────────────────────────────────────────────
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

    // Nom
    if (!formData.name.trim()) {
      errors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Le nom doit contenir au moins 2 caractères";
    }

    // Email
    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      errors.email = "Email invalide";
    }

    // Sujet
    if (!formData.subject.trim()) {
      errors.subject = "Le sujet est requis";
    }

    // Message
    if (!formData.message.trim()) {
      errors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      errors.message =
        "Le message doit contenir au moins 10 caractères";
    }

    return errors;
  };

  // ─────────────────────────────────────────────
  // Changement des champs
  // ─────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // ─────────────────────────────────────────────
  // Envoi Formspree
  // ─────────────────────────────────────────────
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm();

    setFormErrors(errors);

    // Stop si erreur de validation
    if (Object.keys(errors).length > 0) {
      return;
    }

    // FormData envoyé à Formspree
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name.trim());
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("subject", formData.subject.trim());
    formDataToSend.append("message", formData.message.trim());

    await handleSubmit(formDataToSend);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      <ContactsBackground isVisible={isVisible} />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-10 bg-[#5ee6c9]" />

          <span className="font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-[0.35em] text-[#5ee6c9]">
            Contact
          </span>
        </div>

        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold leading-tight md:text-4xl">
          Un projet en tête?{" "}
          <span className="text-[#5ee6c9]">Parlons-en.</span>
        </h2>

        <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/65">
          Que ce soit pour une opportunité, une collaboration ou juste une
          question technique, le formulaire ci-dessous m&apos;écrit directement
          par mail.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ─────────────────────────────────────
              Coordonnées
          ───────────────────────────────────── */}
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
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Email
                  </p>

                  <p className="mt-0.5 font-[family-name:var(--font-mono)] text-sm">
                    tolojanaharyandriatahiana@gmail.com
                  </p>
                </div>
              </a>

              {/* Réseaux */}
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

            {/* Disponibilité */}
            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:mt-0">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#5ee6c9] shadow-[0_0_8px_#5ee6c9]" />

              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Disponible pour de nouveaux projets
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────
              Formulaire
          ───────────────────────────────────── */}
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
          >
            {/* Nom */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50"
              >
                Nom
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className={`w-full rounded-xl border ${
                  formErrors.name
                    ? "border-red-400/70"
                    : "border-white/10"
                } bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#5ee6c9]/50`}
              />

              {formErrors.name && (
                <p className="mt-1.5 text-xs text-red-400">
                  {formErrors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vous@exemple.com"
                className={`w-full rounded-xl border ${
                  formErrors.email
                    ? "border-red-400/70"
                    : "border-white/10"
                } bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#5ee6c9]/50`}
              />

              {formErrors.email && (
                <p className="mt-1.5 text-xs text-red-400">
                  {formErrors.email}
                </p>
              )}

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Sujet */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50"
              >
                Sujet
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration, opportunité..."
                className={`w-full rounded-xl border ${
                  formErrors.subject
                    ? "border-red-400/70"
                    : "border-white/10"
                } bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#5ee6c9]/50`}
              />

              {formErrors.subject && (
                <p className="mt-1.5 text-xs text-red-400">
                  {formErrors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Décrivez votre projet ou votre question..."
                className={`w-full resize-none rounded-xl border ${
                  formErrors.message
                    ? "border-red-400/70"
                    : "border-white/10"
                } bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#5ee6c9]/50`}
              />

              {formErrors.message && (
                <p className="mt-1.5 text-xs text-red-400">
                  {formErrors.message}
                </p>
              )}

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Bouton */}
            <button
              type="submit"
              disabled={state.submitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5ee6c9] px-6 py-3.5 text-sm font-semibold text-[#06110f] transition-all duration-300 hover:shadow-[0_0_30px_rgba(94,230,201,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Envoi en cours...
                </>
              ) : state.succeeded ? (
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

            {/* Succès */}
            {state.succeeded && (
              <div className="flex items-center gap-2 rounded-xl border border-[#5ee6c9]/20 bg-[#5ee6c9]/5 px-4 py-3 text-xs text-[#5ee6c9]">
                <Check size={14} />
                <span>
                  Message envoyé avec succès. Je vous répondrai dans les
                  plus brefs délais.
                </span>
              </div>
            )}

            {/* Erreur */}
            {state.errors && (
              <div className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-xs text-red-400">
                <X size={14} />
                <span>
                  Une erreur est survenue lors de l&apos;envoi. Veuillez
                  réessayer ou m&apos;écrire directement par email.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
 