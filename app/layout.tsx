import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "quran with speed",
    default: "quran with speed",
  },
  description: "wanna be performant site built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-mono antialiased`}>{children}</body>

      <footer className="px-6 py-4 font-mono border-t-2 border-black">
        <ul className="flex gap-4">
          <li>
            <a
              className="hover:underline hover:text-blue-600"
              href="https://github.com/heytheretyo"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:text-blue-600"
              href="https://github.com/heytheretyo"
            >
              Waitlist
            </a>
          </li>
        </ul>
      </footer>
    </html>
  );
}
