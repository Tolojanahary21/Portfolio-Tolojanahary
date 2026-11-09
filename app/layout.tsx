import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tolojanahary Stephan — Full-Stack Developer",
  description: "Selected work, skills, and experience of Tolojanahary Stephan, a full-stack developer based in Madagascar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
