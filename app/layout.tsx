import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Winiarski Drzwi Okna",
  description: "Nowoczesny, szczelny i bezpieczny montaż stolarki otworowej dla Twojego domu na lata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/49ac457f8860cc506900c16f3fc295ab/script.js"
          strategy="beforeInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WJQPRQFV');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJQPRQFV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
