import type { Metadata } from "next";
import {
    EB_Garamond,
    Roboto_Slab,
    Playfair_Display,
    Cinzel,
} from "next/font/google";
import "./globals.scss";

const EBGaramond = EB_Garamond({
    variable: "--font-EB-garamond",
    subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
    variable: "--font-roboto-slab",
    subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
});

const cinzel = Cinzel({
    variable: "--font-cinzel",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Storie della Memoria",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${EBGaramond.variable} ${robotoSlab.variable} ${playfairDisplay.variable} ${cinzel.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
