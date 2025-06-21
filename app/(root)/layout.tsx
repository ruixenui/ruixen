import { Header } from "@/components/landing/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({ 
    subsets: ["latin"], 
    weight: ["200", "300", "400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
    title: {
        template: "%s | Ruixen UI - Components",
        default: "Ruixen UI - Components",
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${bricolageGrotesque.className} font-sans`}>
            <Header />
            <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black">
                {children}
            </main>
            <Footer />
        </div>
    );
}
