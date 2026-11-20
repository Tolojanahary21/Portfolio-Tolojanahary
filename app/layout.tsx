import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tolojanahary Stephan — Développeur Full-Stack",
  description: "Portfolio de Tolojanahary Stephan, étudiant en Master 1 à l’ENI et développeur Full-Stack à Madagascar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
