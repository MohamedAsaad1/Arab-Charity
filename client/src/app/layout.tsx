import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
export const metadata: Metadata = {
  title: "Arab Charity",
  description: "the arab charity website",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="!scroll-smooth font-body">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="font-body">
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
