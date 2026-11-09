/* eslint-disable react-hooks/set-state-in-effect */
 
"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight, Mail, Send, Loader2, Check, X } from "lucide-react";
import ContactsBackground from "./ContactsBackground";
import { useLanguage } from "@/src/components/layout/LanguageContext";
import { validateContactForm, type ContactFormErrors } from "./validateContactForm";

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
    icon: Mail,
    href: "mailto:tolojanaharyandriatahiana@gmail.com",
    label: "Email",
  },
];

export default function Contact() {
  const { language } = useLanguage();
  const isFrench = language === "fr";
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

  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

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

    if (formErrors[name as keyof ContactFormErrors]) {
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

    const errors = validateContactForm(formData, language);

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
      className="contact-section relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      <ContactsBackground isVisible={isVisible} />

      <div className="contact-layout relative z-10 mx-auto">
        <div className="contact-copy">
          <div className="contact-heading">
            <span aria-hidden="true" />
            <span>Contact</span>
          </div>

          <h2>
            {language === "fr" ? <>Un projet en tête ? <span>Parlons-en.</span></> : <>Have a project in mind? <span>Let’s talk.</span></>}
          </h2>

          <p>
            {language === "fr" ? "Que ce soit pour une opportunité, une collaboration ou une question technique, écris-moi directement." : "Whether you have an opportunity, want to collaborate, or have a technical question, send me a message."}
          </p>

          <div className="contact-actions">
            <a href="mailto:tolojanaharyandriatahiana@gmail.com" className="contact-primary">{language === "fr" ? "Parlons de votre projet" : "Let’s collaborate"}<ArrowUpRight size={15} /></a>
            <div className="contact-social-pills">{socials.map(({ icon: Icon, href, label }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label}><Icon size={13} /><span>{label}</span><ArrowUpRight size={11} /></a>)}</div>
          </div>
        </div>

        <div className="contact-form-column">
          <p className="contact-form-title">{language === "fr" ? "Écrivez-moi un message" : "Send me a message"}</p>
          <form
            onSubmit={onSubmit}
            className="contact-form"
          >
            {/* Nom */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50"
              >
                {language === "fr" ? "Nom" : "Name"}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(formErrors.name)}
                value={formData.name}
                onChange={handleChange}
                placeholder={language === "fr" ? "Votre nom" : "Your name"}
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
                autoComplete="email"
                required
                aria-invalid={Boolean(formErrors.email)}
                value={formData.email}
                onChange={handleChange}
                placeholder={language === "fr" ? "vous@exemple.com" : "you@example.com"}
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
                {language === "fr" ? "Sujet" : "Subject"}
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                aria-invalid={Boolean(formErrors.subject)}
                value={formData.subject}
                onChange={handleChange}
                placeholder={language === "fr" ? "Collaboration, opportunité..." : "Collaboration, opportunity..."}
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
                {language === "fr" ? "Message" : "Message"}
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                aria-invalid={Boolean(formErrors.message)}
                placeholder={language === "fr" ? "Décrivez votre projet ou votre question..." : "Describe your project or question..."}
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
                  {language === "fr" ? "Envoi en cours..." : "Sending..."}
                </>
              ) : state.succeeded ? (
                <>
                  <Check size={16} />
                  {language === "fr" ? "Message envoyé" : "Message sent"}
                </>
              ) : (
                <>
                  <Send size={16} />
                  {language === "fr" ? "Envoyer le message" : "Send message"}
                </>
              )}
            </button>

            {/* Succès */}
            {state.succeeded && (
              <div className="flex items-center gap-2 rounded-xl border border-[#5ee6c9]/20 bg-[#5ee6c9]/5 px-4 py-3 text-xs text-[#5ee6c9]">
                <Check size={14} />
                <span>
                  {isFrench ? "Votre message a bien été transmis. Je vous répondrai dans les plus brefs délais." : "Your message has been sent. I’ll get back to you as soon as I can."}
                </span>
              </div>
            )}

            {/* Erreur */}
            {state.errors && (
              <div className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-xs text-red-400">
                <X size={14} />
                <span>
                  {isFrench ? "Une erreur est survenue lors de l’envoi. Veuillez réessayer ou m’écrire directement par email." : "Something went wrong while sending your message. Please try again or email me directly."}
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
 
