'use client';

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function Home() {
    return (
        <main className="overflow-hidden my-10">
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
            >
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>
            <section>
                <div className="text-left mx-auto container max-w-5xl lg:mt-0">
                    <AnimatedGroup variants={transitionVariants}>
                        <Link
                            href="#components"
                            className="hover:bg-background dark:hover:border-t-border bg-muted group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                        >
                            <span className="text-foreground text-sm">Now with Dark Mode, Transitions & AI-ready Components</span>
                            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />
                            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                    <span className="flex size-6">
                                        <ArrowRight className="m-auto size-3" />
                                    </span>
                                    <span className="flex size-6">
                                        <ArrowRight className="m-auto size-3" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <h1 className="mt-8 text-left text-5xl sm:text-6xl md:text-7xl xl:text-[6.5rem] font-extrabold leading-[1.1]">
                            Build Stunning UIs with <br />
                            <span className="inline-block whitespace-nowrap">
                                <span className="ruixen-gradient-text">R</span>uixen<span className="ruixen-gradient-text">UI</span>
                            </span>
                        </h1>
                        <p className="mt-6 text-left text-lg text-muted-foreground">
                            Ruixen UI is a modern, fast, and customizable React component library built with Tailwind CSS, TypeScript, and accessibility in mind.
                        </p>
                    </AnimatedGroup>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="mt-10 flex flex-col sm:flex-row items-start gap-3"
                    >
                        <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                            <Button asChild size="lg" className="rounded-xl px-5 text-base">
                                <Link href="/docs">
                                    <span className="text-nowrap">Get Started</span>
                                </Link>
                            </Button>
                        </div>
                        <Button
                            asChild
                            size="lg"
                            variant="ghost"
                            className="h-10.5 rounded-xl px-5"
                        >
                            <Link href="/docs/sections/hero/hero-section">
                                <span className="text-nowrap">Explore Components</span>
                            </Link>
                        </Button>
                    </AnimatedGroup>
                </div>
            </section>
        </main>
    )
}
