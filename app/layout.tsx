import React, {ReactNode,} from 'react'
import {Leckerli_One, Poppins} from "next/font/google";
import {Viewport} from "next";
import PlausibleProvider from "next-plausible";
import {getSEOTags} from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import {config as faConfig} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import config from "@/config";
import "./globals.css";

faConfig.autoAddCss = false
const fontLogo = Leckerli_One({ subsets: ["latin"], weight: ['400'], variable:'--font-logo' });
const fontPoppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable:'--font-poppins' });

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={`${fontLogo.variable} ${fontPoppins.variable} font-poppins overflow-x-hidden h-full  bg-teal-200 text-base antialiased`}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
