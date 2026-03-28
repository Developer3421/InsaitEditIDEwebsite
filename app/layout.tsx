import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Insait Edit — Professional IDE Suite",
  description:
    "Insait Edit is a powerful IDE product line featuring IDE C#, IDE PHP, and IDE Web. Build faster, smarter, better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
