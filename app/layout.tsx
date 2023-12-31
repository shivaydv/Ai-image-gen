import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "AI Image Generation",
  description: "Tool which convert Text to Image",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn("", GeistSans.className)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            // disableTransitionOnChange
          >

        <main className=" flex flex-col min-h-screen ">
          <Navbar />
          <div className="flex-1 flex max-w-7xl mx-auto w-full px-2.5 xl:px-0 pt-2.5">
            {children}
          </div>
        </main>
        <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
