import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import { META_THEME_COLORS, siteConfig } from "@/config/site";
import { RootProvider } from "fumadocs-ui/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({ 
    subsets: ["latin"], 
    weight: ["200", "300", "400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    keywords: [
        "ui",
        "components",
        "Tailwind CSS",
        "Next.js",
        "shadcn",
        "Framer Motion",
        "React Library",
    ],
    robots: "index, follow",
    authors: [{ name: "Ruixen", url: "https://x.com/ruixen" }],
    creator: "Ruixen",
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        creator: "@ruixen",
        title: siteConfig.name,
        description: siteConfig.description,
    },
};

export const viewport: Viewport = {
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: META_THEME_COLORS.light,
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: META_THEME_COLORS.dark,
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={cn(
                        "antialiased"
                    )}
                >
                    <RootProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="dark"
                            enableSystem
                            disableTransitionOnChange
                        >
                            <div className={bricolageGrotesque.className + " bg-white dark:bg-black flex flex-col min-h-screen"}>
                                <div className="flex-1">{children}</div>
                            </div>
                        </ThemeProvider>
                    </RootProvider>
                    <Analytics />
                    <SpeedInsights />
                </body>
            </html>
        </ViewTransitions>
    );
}
