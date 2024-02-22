import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter, Space_Grotesk, Zilla_Slab} from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joshua Gomes",
  description:
    "Hello, World! I'm Joshua Gomes, a Software Engineer and tech enthusiast with a background that might just surprise you!",
};

const MainFont = Inter({
  weight: "400",
  variable: "--font-body",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${MainFont.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-body max-w-[600px] dark:bg-[#111010] bg-white dark:text-stone-200 text-black mx-auto sm:px-0 px-6"
        suppressHydrationWarning
      >
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mb-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
