import type { Metadata } from "next";
import localFont from "next/font/local";

import { Layout } from "@/components/Layout";
import "@/assets/styles/globals.scss";

export const metadata: Metadata = {
    title: "THE BIG BABA",
    description: "Generated by create next app",
   
};

const SFProDisplay = localFont({
    src: [
        {
            path: "./fonts/SFProDisplay-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/SFProDisplay-Medium.woff2",
            weight: "500",
            style: "normal",
        },

        {
            path: "./fonts/SFProDisplay-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={SFProDisplay.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}