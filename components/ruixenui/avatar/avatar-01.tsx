"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Avatar01Props {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-10 h-10 text-sm",
  md: "w-14 h-14 text-base",
  lg: "w-20 h-20 text-lg",
  xl: "w-28 h-28 text-xl",
};

export default function Avatar01({
  name,
  imageUrl,
  size = "md",
  className = "",
}: Avatar01Props) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "👤";

  const fallbackStyle =
    "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500 text-white";

  return (
    <div className="flex items-center min-h-screen justify-center">
      <div
        className={cn(
          "relative",
          sizeMap[size],
          className
        )}
      >
        {/* Rotating glowing ring */}
        <div
          className={cn(
            "absolute inset-0 rounded-full animate-spin-slow z-0",
            "bg-gradient-to-tr from-sky-400 via-pink-500 to-yellow-500",
            "blur-sm opacity-70"
          )}
        />

        {/* Static gradient ring mask */}
        <div className="absolute inset-0 rounded-full bg-white z-10 m-[3px]" />

        {/* Avatar core */}
        <Avatar
          className={cn(
            "relative z-20 w-full h-full rounded-full overflow-hidden border border-white shadow-xl",
            sizeMap[size]
          )}
        >
          <AvatarImage
            src={imageUrl || "https://github.com/shadcn.png"}
            alt={name || "User"}
            className="object-cover"
          />
          <AvatarFallback
            className={cn(
              "flex items-center justify-center font-semibold uppercase",
              fallbackStyle
            )}
          >
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
