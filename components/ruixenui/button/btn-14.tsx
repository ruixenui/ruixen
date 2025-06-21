import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface Btn14Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
}

export function Btn14({ label = "Submit", className, ...props }: Btn14Props) {
    return (
        <Button
            variant="ghost"
            className={cn(
                "group relative w-1/2 h-8 px-3 rounded-lg overflow-hidden transition-all duration-500",
                className
            )}
            {...props}
        >
            {/* Gradient border using pseudo-element */}
            <div className="absolute inset-0 rounded-lg p-[1px] bg-linear-to-b from-[#C76A1B] via-[#E67B1F] dark:via-[#E67B1F]/50 to-[#943F00]">
                <div className="absolute inset-0 bg-[#FFF8F3] dark:bg-[#0A0705] rounded-lg opacity-80 dark:opacity-95" />
            </div>

            {/* Base background */}
            <div className="absolute inset-[1px] bg-[#FFF8F3] dark:bg-[#0A0705] rounded-lg opacity-85 dark:opacity-95" />

            {/* Multiple gradient layers */}
            <div className="absolute inset-[1px] bg-linear-to-r from-[#FFF8F3] via-[#FFE6D4] to-[#FFF8F3] dark:from-[#0A0705] dark:via-[#1A0F08] dark:to-[#0A0705] rounded-lg opacity-90 dark:opacity-95" />
            <div className="absolute inset-[1px] bg-linear-to-b from-[#E67B1F]/30 via-[#FFE6D4] to-[#943F00]/30 dark:from-[#E67B1F]/20 dark:via-[#2A1710]/40 dark:to-[#943F00]/20 rounded-lg opacity-90" />
            <div className="absolute inset-[1px] bg-linear-to-br from-[#FFB067]/20 via-[#FFE6D4] to-[#3D1D07]/30 dark:from-[#FFB067]/10 dark:via-[#2A1710]/30 dark:to-[#3D1D07]/20 rounded-lg" />

            {/* Content wrapper */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-sm font-medium bg-linear-to-b from-[#C76A1B] to-[#943F00] dark:from-[#FFD4B6] dark:to-[#FFA857] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,176,103,0.4)] tracking-tight">
                    {label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#C76A1B] dark:text-[#FFD4B6]" />
            </div>

            {/* Hover effects */}
            <div className="absolute inset-[1px] opacity-0 transition-opacity duration-300 bg-linear-to-r from-[#3D1D07]/20 via-[#FFB067]/10 to-[#3D1D07]/20 dark:from-[#FFB067]/5 dark:via-[#FFB067]/10 dark:to-[#FFB067]/5 group-hover:opacity-100 rounded-lg" />
        </Button>
    );
}
