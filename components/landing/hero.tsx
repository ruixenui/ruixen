"use client";

import { BrowseComponentsButton } from "@/components/ui/browse-button";
import FeatureBlock from "./feature-block";
import { motion } from "motion/react";
import Card08 from "../ruixenui/card/card-08";
import Btn03 from "../ruixenui/button/btn-03";
import Input09 from "../ruixenui/input/input-09";
import Link from "next/link";
import { Btn14 } from "../ruixenui/button/btn-14";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import ActionSearchBar from "../ruixenui/action-search-bar";
import {
    PlaneTakeoff,
    BarChart2,
    Video,
    AudioLines,
    Globe,
    Diamond,
} from "lucide-react";
import AIInput_04 from "../ruixenui/ai-input/ai-input-04";

interface Action {
    id: string;
    label: string;
    icon: React.ReactNode;
    description?: string;
    short?: string;
    end?: string;
}

const allActions: Action[] = [
    {
        id: "1",
        label: "Book tickets",
        icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
        description: "Operator",
        short: "⌘K",
        end: "Agent",
    },
    {
        id: "2",
        label: "Summarize",
        icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
        description: "gpt-4o",
        short: "⌘cmd+p",
        end: "Command",
    },
    {
        id: "3",
        label: "Screen Studio",
        icon: <Video className="h-4 w-4 text-purple-500" />,
        description: "gpt-4o",
        short: "",
        end: "Application",
    },
    {
        id: "4",
        label: "Talk to Jarvis",
        icon: <AudioLines className="h-4 w-4 text-green-500" />,
        description: "DeepSeek",
        short: "",
        end: "Active",
    },
    {
        id: "5",
        label: "Translate",
        icon: <Globe className="h-4 w-4 text-blue-500" />,
        description: "Gemini",
        short: "",
        end: "Command",
    },
];

export function HeroSection() {
    return (
        <div className="mx-auto w-full md:w-[90%] min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 px-4 py-16 md:py-4">
            {/* Left side - Title and CTA */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left space-y-8 md:mb-28">
                <div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                        Collection <br />
                        of{" "}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-rose-500 to-purple-500 dark:from-orange-400 dark:via-rose-400 dark:to-purple-400">
                            stunning
                        </span>{" "}
                        components.
                    </h1>
                    <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 tracking-tighter max-w-lg">
                        100+ Open Source UI components built with{" "}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-rose-500 to-purple-500 dark:from-orange-400 dark:via-rose-400 dark:to-purple-400">
                            Tailwind CSS
                        </span>{" "}
                        and{" "}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-rose-500 to-purple-500 dark:from-orange-400 dark:via-rose-400 dark:to-purple-400">
                            shadcn/ui
                        </span>{" "}
                        perfect for <span className="font-semibold">React</span>{" "}
                        and <span className="font-semibold">Next.js</span>.
                    </p>
                </div>
                <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2">
                        <BrowseComponentsButton />
                        <BrowseBlocksButton />
                    </div>
                </div>
                <FeatureBlock />
            </div>

            {/* Right side - Components Layout */}
            <div className="w-full lg:w-[55%] flex flex-col justify-between 4 lg:pl-8">
                {/* Top row: Card + Action Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                >
                    {/* Card component */}
                    <div className="w-full flex flex-col items-center justify-center ">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                            Card
                        </span>
                        <Card08 href="/docs/components/card" />
                    </div>

                    {/* Action Search Bar */}
                    <div className="w-full">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                            Components
                        </span>
                        <ActionSearchBar
                            actions={allActions}
                            defaultOpen={true}
                        />
                    </div>
                </motion.div>

                {/* Middle row: AI Chat */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                >
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                        AI Chat
                    </span>
                    <AIInput_04 />
                </motion.div>

                {/* Bottom row: Buttons on left, Input on right */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Left side - Buttons */}
                    <div className="w-full">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                            Buttons
                        </span>
                        <div className="w-full flex flex-col items-center justify-center gap-3">
                            <Link href="/docs/components/button">
                                <Btn14
                                    label="Bring me"
                                    className=" w-42 py-5"
                                />
                            </Link>
                            <Link href="/docs/components/button">
                                <Btn03 className=" w-42 py-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Input */}
                    <div className="w-full">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                            Input
                        </span>
                        <Link href="/docs/components/input">
                            <Input09 />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
