import assert from "node:assert/strict";
import test from "node:test";
import { validateContactForm } from "../src/features/contact/validateContactForm.ts";

test("contact form rejects missing or malformed fields in English", () => {
  assert.deepEqual(validateContactForm({ name: "", email: "bad", subject: "", message: "short" }, "en"), {
    name: "Name is required",
    email: "Please enter a valid email",
    subject: "Subject is required",
    message: "Message must be at least 10 characters",
  });
});

test("contact form reports French validation messages", () => {
  assert.deepEqual(validateContactForm({ name: "A", email: "", subject: "", message: "" }, "fr"), {
    name: "Le nom doit contenir au moins 2 caractères",
    email: "L'email est requis",
    subject: "Le sujet est requis",
    message: "Le message est requis",
  });
});

test("contact form accepts valid values and trims surrounding whitespace", () => {
  assert.deepEqual(validateContactForm({
    name: "  Sam  ",
    email: "  sam@example.com  ",
    subject: "  Project inquiry  ",
    message: "  I would like to discuss a website project.  ",
  }, "en"), {});
});
