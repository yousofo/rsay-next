import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import NavList from "@/components/navList/NavList";
import ProviderWrapper from "@/state/ProviderWrapper";
// import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RSAY | رسائي",
  description: "RSAY for cyber security services.",
  keywords: [
    "RSAY",
    "رسائي",
    "cyber",
    "cybersecurity",
    "cyber security",
    "hack",
    "hacking",
    "security",
    "company",
    "learn",
    "courses",
    "universities",
    "contact",
    "services",
  ],
};

// const availableLocales = ['en', 'ar'];
// export async function generateStaticParams() {
//   return availableLocales.map((locale) => ({ locale }));
// }

export default async function LocaleLayout({ children, params: { locale } }) {
  // const { locale } = params;
  const messages = await getMessages();
  // if (!availableLocales.includes(locale)) {
  //   notFound(); // Handle unknown locales
  // }

  return (
    <html lang={locale ?? "en"} dir={locale === "ar" ? "rtl" : "ltr"}>
      <ProviderWrapper>
        <body
          // ${geistSans.variable} ${geistMono.variable}
          // ${roboto_Flex.className}
          className={`${cairo.className} antialiased`}
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <NavList />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </ProviderWrapper>
    </html>
  );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <ProviderWrapper>
//         <body
//           className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         >
//           <Header />
//           <NavList />
//           {children}
//           <Footer />
//         </body>
//       </ProviderWrapper>
//     </html>
//   );
// }
