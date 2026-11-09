export type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFields, string>>;

export function validateContactForm(
  fields: ContactFields,
  language: "en" | "fr"
): ContactFormErrors {
  const isFrench = language === "fr";
  const errors: ContactFormErrors = {};

  if (!fields.name.trim()) {
    errors.name = isFrench ? "Le nom est requis" : "Name is required";
  } else if (fields.name.trim().length < 2) {
    errors.name = isFrench
      ? "Le nom doit contenir au moins 2 caractères"
      : "Name must be at least 2 characters";
  }

  if (!fields.email.trim()) {
    errors.email = isFrench ? "L'email est requis" : "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = isFrench ? "Email invalide" : "Please enter a valid email";
  }

  if (!fields.subject.trim()) {
    errors.subject = isFrench ? "Le sujet est requis" : "Subject is required";
  }

  if (!fields.message.trim()) {
    errors.message = isFrench ? "Le message est requis" : "Message is required";
  } else if (fields.message.trim().length < 10) {
    errors.message = isFrench
      ? "Le message doit contenir au moins 10 caractères"
      : "Message must be at least 10 characters";
  }

  return errors;
}
