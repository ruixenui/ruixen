import { HeaderPro } from "@/components/landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, Sparkles } from "lucide-react";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <div className="flex items-center">
                <Image
                    src="/ruixen.png"
                    alt="RuixenUI Logo"
                    width={24}
                    height={24}
                    className="mr-2 rounded-full"
                />
                <span className="hidden md:inline-flex items-center text-lg font-normal tracking-tight text-black dark:text-white">
                    Ruixen UI
                </span>
            </div>
        ),
    },
    links: [
        // {
        //     text: "Pricing",
        //     url: "/pricing",
        // },
        {
            text: "Templates",
            url: "https://ruixenui.pro/templates?utm_source=ruixenui.com&utm_medium=header",
        },
        {
            type: "custom",
            children: <HeaderPro />,
        },
    ],
};
