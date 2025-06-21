import { ThemeToggle } from "@/lib/theme-toggle";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import Image from "next/image";
import { HeaderPro } from "./header-pro";

export function Header() {
    return (
        <div className="sticky top-0 left-0 right-0 z-50">
            <div className="w-full bg-white dark:bg-black">
                <div className="flex flex-col items-center justify-center w-full">
                    <div
                        className={`
                            flex items-center justify-between
                            bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
                            dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                            shadow-md backdrop-blur-lg
                            border border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                            w-[95%] sm:min-w-[800px] sm:max-w-[1200px]
                            rounded-2xl px-6 py-3 mt-3 md:mt-5
                            transition-all duration-300 ease-in-out
                        `}
                    >
                        <div className="relative z-10 flex w-full items-center justify-between gap-2">
                            {/* Left Section - Logo and Navigation */}
                            <div className="flex items-center gap-5">
                                <Link href="/" className="flex items-center gap-2">
                                    <Image
                                        src="/ruixen.png"
                                        alt="logo"
                                        width={28}
                                        height={28}
                                        className="block rounded-full dark:hidden"
                                    />
                                    <span className="hidden sm:block font-semibold text-base text-zinc-800 dark:text-zinc-200">
                                        Ruixen UI
                                    </span>
                                </Link>

                                <span className="text-zinc-300 dark:text-zinc-700">|</span>

                                <div className="hidden sm:flex items-center gap-4">
                                    <ViewTransitionsLink
                                        href="/docs/components/action-search-bar"
                                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                                    >
                                        Components
                                    </ViewTransitionsLink>

                                    {/* 
                                    <ViewTransitionsLink
                                        href="/pricing"
                                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                                    >
                                        Pricing
                                    </ViewTransitionsLink>

                                    <Link
                                        href="https://ruixenui.pro/templates?utm_source=ruixenui.com&utm_medium=header"
                                        target="_blank"
                                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors flex items-center gap-2"
                                    >
                                        Templates
                                        <span className="text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 rounded-md px-1 py-0.5 text-xs font-medium">
                                            New
                                        </span>
                                    </Link> 
                                    */}
                                </div>
                            </div>

                            {/* Right Section - Buttons */}
                            <div className="hidden sm:flex items-center gap-4">
                                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                                <HeaderPro />
                                <ThemeToggle />
                            </div>

                            {/* Mobile Navigation remains unchanged */}
                            <div className="flex sm:hidden items-center gap-4">
                                <ViewTransitionsLink
                                    href="/docs/components/action-search-bar"
                                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                                >
                                    Components
                                </ViewTransitionsLink>
                                <ViewTransitionsLink
                                    href="/pricing"
                                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                                >
                                    Pricing
                                </ViewTransitionsLink>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
