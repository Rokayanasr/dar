import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { Cairo } from "next/font/google";
import "./../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@fortawesome/fontawesome-svg-core/styles.css";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
    title: "Dar Data",
    description: "Hosting serivces for your business",
};

export default async function RootLayout({ children, params }) {
    const { locale } = params;

    const messages = await getMessages(locale);

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body className={cairo.className}>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
                
            </body>
        </html>
    );
}
