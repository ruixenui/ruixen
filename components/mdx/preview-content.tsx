"use client";

import {
    useActionState,
    useEffect,
    useState,
    useTransition,
    useRef,
    type RefObject,
} from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    ArrowUpRight,
    Copy,
    Check,
    CheckCheck,
    Terminal,
    ChevronDown,
    Code,
} from "lucide-react";
import { copyComponent } from "@/lib/action";
import { cn } from "@/lib/utils";
import { OpenInV0Button } from "../open-in-v0-button";
import { AnimatePresence, motion } from "motion/react";
import ShadcnIcon from "../icons/shadcn";

export default function PreviewContent({
    link,
    prePath,
    isBlock = false,
}: {
    link: string;
    prePath: string;
    isBlock?: boolean;
}) {
    const [isPending, startTransition] = useTransition();
    const [state, formAction] = useActionState(copyComponent, {
        error: "",
        content: "",
        success: false,
    });
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTerminalCopied, setIsTerminalCopied] = useState(false);
    const [selectedPackageManager, setSelectedPackageManager] = useState<
        "bunx" | "npx" | "pnpm"
    >("bunx");

    const handleCopyClick = async () => {
        const [folder, filename] = link.split("/");

        startTransition(async () => {
            const formData = new FormData();
            formData.append("folder", folder);
            formData.append("fileName", filename);

            formAction(formData);
        });
    };

    const getFileName = () => {
        const [folder, filename] = link.split("/");
        return filename ? filename : folder;
    };

    const handleTerminalClick = (packageManager?: "bunx" | "npx" | "pnpm") => {
        const [folder, filename] = link.split("/");
        const componentName = filename ? filename : folder;
        const pm = packageManager || selectedPackageManager;

        let commandToCopy: string;
        const componentAddCommand = `shadcn@latest add ${componentName}`;

        if (pm === "pnpm") {
            commandToCopy = `pnpm dlx ${componentAddCommand}`;
        } else {
            commandToCopy = `${pm} ${componentAddCommand}`;
        }

        navigator.clipboard.writeText(commandToCopy);
        setIsTerminalCopied(true);
        setTimeout(() => {
            setIsTerminalCopied(false);
        }, 1000);
    };

    const openInV0 = () => {
        const [folder, filename] = link.split("/");

        return filename ? filename : folder;
    };

    useEffect(() => {
        if (state.error) {
            setShowLoginDialog(true);
        }
        if (state.success && state.content) {
            setIsCopied(true);
            navigator.clipboard.writeText(state.content);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    }, [state]);

    function SuccessParticles({
        buttonRef,
    }: {
        buttonRef: React.RefObject<HTMLButtonElement>;
    }) {
        const rect = buttonRef.current?.getBoundingClientRect();
        if (!rect) return null;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create a unique key for each particle to satisfy the linter
        const particles = Array.from({ length: 6 }, (_, index) => ({
            id: `particle-${index}-${Math.random().toString(36).substr(2, 9)}`,
            index, // Pass index for staggering delay
        }));

        return (
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="fixed w-1 h-1 bg-black dark:bg-white rounded-full"
                        style={{ left: centerX, top: centerY }}
                        initial={{
                            scale: 0,
                            x: 0,
                            y: 0,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            x: [
                                0,
                                (particle.index % 2 ? 1 : -1) *
                                    (Math.random() * 50 + 20),
                            ],
                            y: [0, -Math.random() * 50 - 20],
                        }}
                        transition={{
                            duration: 0.6,
                            delay: particle.index * 0.1, // Use particle.index for delay
                            ease: "easeOut",
                        }}
                    />
                ))}
            </AnimatePresence>
        );
    }

    const terminalButtonRef = useRef<HTMLButtonElement>(null);
    const copyButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            {isTerminalCopied && (
                <SuccessParticles
                    buttonRef={
                        terminalButtonRef as RefObject<HTMLButtonElement>
                    }
                />
            )}
            {isCopied && (
                <SuccessParticles
                    buttonRef={copyButtonRef as RefObject<HTMLButtonElement>}
                />
            )}

            <div
                className={cn("relative mt-4", "rounded-xl p-3")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <a
                        href={`${prePath}/preview/${link}`}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                            "flex items-center gap-2",
                            "text-sm font-medium",
                            "text-zinc-800 dark:text-zinc-200",
                            "hover:text-zinc-600 dark:hover:text-zinc-400",
                            "transition-all duration-200 no-underline group"
                        )}
                    >
                        Live Preview
                        <ArrowUpRight
                            className={cn(
                                "h-4 w-4",
                                "transition-transform duration-200 group-hover:rotate-12"
                            )}
                        />
                    </a>

                    <div className="flex items-center gap-2">
                        <OpenInV0Button name={openInV0()} />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    ref={terminalButtonRef}
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "relative overflow-hidden",
                                        "h-7 px-3 text-xs font-medium",
                                        "bg-black dark:bg-white",
                                        "text-white dark:text-black",
                                        "hover:bg-black/90 dark:hover:bg-white/90",
                                        "hover:text-white dark:hover:text-black",
                                        "transition-all duration-200",
                                        "group flex items-center gap-1",
                                        "rounded-lg",
                                        "shadow-none"
                                    )}
                                >
                                    {isTerminalCopied ? (
                                        <CheckCheck className="h-3.5 w-3.5 text-white dark:text-black" />
                                    ) : (
                                        <ShadcnIcon
                                            className={cn(
                                                "h-3.5 w-3.5",
                                                "transition-all duration-200",
                                                "group-hover:rotate-12"
                                            )}
                                        />
                                    )}
                                    <span>add {getFileName()}</span>
                                    <ChevronDown className="h-3.5 w-3.5 opacity-70 ml-1" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="-ml-3 w-[190px] bg-black dark:bg-white text-white rounded-lg dark:text-black border border-neutral-700 dark:border-neutral-300"
                            >
                                <DropdownMenuItem
                                    onSelect={() => {
                                        setSelectedPackageManager("bunx");
                                        handleTerminalClick("bunx");
                                    }}
                                    className="flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 focus:bg-neutral-800 dark:focus:bg-neutral-200"
                                >
                                    <Terminal className="h-3.5 w-3.5 text-white dark:text-black" />
                                    <span className="text-white dark:text-black">
                                        bunx
                                    </span>
                                    {selectedPackageManager === "bunx" && (
                                        <Check className="h-4 w-4 ml-auto text-white dark:text-black" />
                                    )}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onSelect={() => {
                                        setSelectedPackageManager("npx");
                                        handleTerminalClick("npx");
                                    }}
                                    className="flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 focus:bg-neutral-800 dark:focus:bg-neutral-200"
                                >
                                    <Terminal className="h-3.5 w-3.5 text-white dark:text-black" />
                                    <span className="text-white dark:text-black">
                                        npx
                                    </span>
                                    {selectedPackageManager === "npx" && (
                                        <Check className="h-4 w-4 ml-auto text-white dark:text-black" />
                                    )}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onSelect={() => {
                                        setSelectedPackageManager("pnpm");
                                        handleTerminalClick("pnpm");
                                    }}
                                    className="flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 focus:bg-neutral-800 dark:focus:bg-neutral-200"
                                >
                                    <Terminal className="h-3.5 w-3.5 text-white dark:text-black" />
                                    <span className="text-white dark:text-black">
                                        pnpm
                                    </span>
                                    {selectedPackageManager === "pnpm" && (
                                        <Check className="h-4 w-4 ml-auto text-white dark:text-black" />
                                    )}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {!isBlock && (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleCopyClick();
                                }}
                            >
                                <Button
                                    ref={copyButtonRef}
                                    type="submit"
                                    variant="ghost"
                                    size="sm"
                                    disabled={isPending}
                                    className={cn(
                                        "relative overflow-hidden",
                                        "h-7 px-3 text-xs font-medium",
                                        "bg-black dark:bg-white",
                                        "text-white dark:text-black",
                                        "hover:bg-black/90 dark:hover:bg-white/90",
                                        "hover:text-white dark:hover:text-black",
                                        "transition-all duration-200",
                                        "group flex items-center gap-1",
                                        "rounded-lg",
                                        "shadow-none"
                                    )}
                                >
                                    {isCopied ? (
                                        <>
                                            <CheckCheck className="h-3.5 w-3.5 text-white dark:text-black" />
                                        </>
                                    ) : (
                                        <Code
                                            className={cn(
                                                "h-3.5 w-3.5",
                                                "transition-all duration-200",
                                                "group-hover:rotate-12"
                                            )}
                                        />
                                    )}
                                    <span>Copy</span>
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
