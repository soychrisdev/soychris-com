import { Navbar } from "@/components/views/root/navbar";
import PreviewOrDevelopmentModal from "@/components/views/root/preview-or-development-modal";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Christian Mesina | Desarrollador Full Stack",
    template: "%s | Christian Mesina",
  },
  description:
    "Portafolio profesional de Christian Mesina. Descubre mis proyectos, experiencia y servicios como desarrollador web especializado en Next.js, React y TypeScript.",
  keywords: [
    "Christian Mesina",
    "portafolio",
    "desarrollador web",
    "Next.js",
    "React",
    "TypeScript",
    "Biblia Digital",
    "full stack",
    "proyectos",
    "software",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Christian Mesina", url: "https://soychris.com" }],
  creator: "Christian Mesina",
  publisher: "Christian Mesina",
  alternates: {
    canonical: "https://soychris.com",
  },
  openGraph: {
    title: "Christian Mesina | Desarrollador Full Stack",
    description:
      "Portafolio profesional de Christian Mesina. Descubre mis proyectos, experiencia y servicios como desarrollador web especializado en Next.js, React y TypeScript.",
    url: "https://soychris.com",
    siteName: "Christian Mesina - Portfolio",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Mesina | Desarrollador Full Stack",
    description:
      "Portafolio profesional de Christian Mesina. Descubre mis proyectos, experiencia y servicios como desarrollador web especializado en Next.js, React y TypeScript.",
    creator: "@soychrisdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hostname = (await headers()).get("host");
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {hostname === "localhost:3000" && <PreviewOrDevelopmentModal />}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
