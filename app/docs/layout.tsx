import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template:
            "%s | RuixenUI - Free UI Components to build beautiful websites",
        default: "RuixenUI - Free UI Components to build beautiful websites",
    },
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={source.pageTree}
            {...baseOptions}
            sidebar={{
                defaultOpenLevel: 1,
                banner: (
                    // <div className="border border-zinc-200 dark:border-zinc-800 text-white dark:text-zinc-900 p-2 rounded-md text-xs py-1 flex items-center gap-2">
                    //     <div className="text-gray-600 dark:text-gray-400  transition-colors flex items-center gap-1.5 text-xs hover:text-gray-800 dark:hover:text-gray-300 group hover:font-medium hover:cursor-pointer">
                    //         <span className="hidden md:flex items-center gap-2">
                    //             <span className="text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500 bg-clip-text font-semibold tracking-tighter flex flex-col">
                    //                 We are now part of the Vercel Open Source
                    //                 program for Spring 2025!
                    //             </span>
                    //         </span>
                    //     </div>
                    //     <svg
                    //         className="hidden dark:block"
                    //         viewBox="0 0 256 222"
                    //         width="32"
                    //         height="32"
                    //         xmlns="http://www.w3.org/2000/svg"
                    //     >
                    //         <title>Vercel Logo</title>
                    //         <path fill="#fff" d="m128 0 128 221.705H0z" />
                    //     </svg>
                    //     <svg
                    //         className="block dark:hidden"
                    //         viewBox="0 0 256 222"
                    //         width="32"
                    //         height="32"
                    //         xmlns="http://www.w3.org/2000/svg"
                    //     >
                    //         <title>Vercel Logo</title>
                    //         <path fill="#000" d="m128 0 128 221.705H0z" />
                    //     </svg>
                    // </div>
                    <></>
                ),
            }}
        >
            {children}
        </DocsLayout>
    );
}
