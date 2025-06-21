"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { SendHorizontal, Camera, Music, TerminalSquare } from "lucide-react";

export default function AIInput_17() {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 100,
    maxHeight: 220,
  });

  const [panel, setPanel] = useState<"media" | "music" | "code" | null>(null);

  const handleSend = () => {
    if (value.trim()) {
      console.log("Submitted:", value);
      setValue("");
      adjustHeight(true);
      setPanel(null);
    }
  };

  return (
    <div className="w-full px-4 py-6 ">
      <div className="max-w-3xl mx-auto rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-md">
        <div className="relative p-4">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your message..."
            className={cn(
              "w-full min-h-[100px] resize-none text-base",
              "bg-transparent border border-black/10 dark:border-white/10 rounded-lg",
              "px-4 py-3 text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50",
              "focus-visible:ring-0"
            )}
            style={{ overflow: "hidden" }}
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={!value.trim()}
            className={cn(
              "absolute bottom-6 right-6 p-2 rounded-full transition-colors",
              value.trim()
                ? "text-blue-600 dark:text-blue-400"
                : "text-black/30 dark:text-white/30 cursor-not-allowed"
            )}
          >
            <SendHorizontal className="w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-4 px-4 pb-2">
          <IconButton
            className="border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300"
            icon={<Camera className="w-4 h-4 text-pink-700 dark:text-pink-300" />}
            onClick={() => setPanel(panel === "media" ? null : "media")}
            active={panel === "media"}
          />
          <IconButton
            className="border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300"
            icon={<Music className="w-4 h-4 text-green-700 dark:text-green-300" />}
            onClick={() => setPanel(panel === "music" ? null : "music")}
            active={panel === "music"}
          />
          <IconButton
            className="border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300"
            icon={<TerminalSquare className="w-4 h-4 text-blue-700 dark:text-blue-300" />}
            onClick={() => setPanel(panel === "code" ? null : "code")}
            active={panel === "code"}
          />
        </div>
      </div>
    </div>
  );
}

function IconButton({
  icon,
  onClick,
  active,
  className,
}: {
  icon: React.ReactNode;
  onClick: () => void;
  active: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 rounded-xl border transition-all duration-200 ease-in-out",
        className,
        active
          ? "bg-blue-100 dark:bg-blue-900 border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300"
          : "bg-muted hover:bg-muted/70 border border-border text-muted-foreground"
      )}
    >
      {icon}
    </button>
  );
}
