import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clove Collective — Your Vision. Spiced Up.",
  description: "A revolutionary PR and talent representation agency in the Philippines.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
