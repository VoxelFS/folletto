import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Folletto Caffè",
  icons: {
    icon: "./favicon.ico",
  },
  description: "Folleto Caffè offers cutting-edge beverage automation robots at competitive prices.",
  keywords: ["folletto", "folletto Caffè", "folletto cafe", "folletto auckland", "folletto website", "robotic barista"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
