import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPU Fleet Telemetry - UI Pipeline Starter",
  description: "Production starter template demonstrating UI Pipeline tokens, layout architecture, and motion micro-physics.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300 min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
