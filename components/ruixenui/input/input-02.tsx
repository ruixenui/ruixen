"use client";

import { useState, useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { Check, Plus, X } from "lucide-react";
import { useClickOutside } from "@/hooks/use-click-outside";

interface Tag {
  id: string;
  label: string;
  colorClass?: string;
}

interface Props {
  label?: string;
  placeholder?: string;
  suggestions?: Tag[];
  onTagsChange?: (tags: Tag[]) => void;
  maxTags?: number;
  error?: string;
  defaultTags?: Tag[];
}

const COLORS = [
  "bg-rose-100 text-rose-800",
  "bg-amber-100 text-amber-800",
  "bg-emerald-100 text-emerald-800",
  "bg-sky-100 text-sky-800",
];

export default function Input_02({
  label = "Tags",
  placeholder = "Enter tag...",
  suggestions = [],
  onTagsChange,
  maxTags = 5,
  error,
  defaultTags = [],
}: Props) {
  const [tags, setTags] = useState<Tag[]>(defaultTags);
  const [input, setInput] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref as RefObject<HTMLElement>, () => setDropdown(false));

  const handleAddTag = (newTag: Tag) => {
    if (tags.length >= maxTags || tags.find((t) => t.id === newTag.id)) return;
    const coloredTag = {
      ...newTag,
      colorClass:
        newTag.colorClass || COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    const updated = [...tags, coloredTag];
    setTags(updated);
    onTagsChange?.(updated);
  };

  const handleRemove = (id: string) => {
    const updated = tags.filter((tag) => tag.id !== id);
    setTags(updated);
    onTagsChange?.(updated);
  };

  const filteredSuggestions = suggestions.filter(
    (s) =>
      (input === "" || s.label.toLowerCase().includes(input.toLowerCase())) &&
      !tags.find((tag) => tag.id === s.id)
  );

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      handleAddTag({ id: input.trim(), label: input.trim() });
      setInput("");
      setDropdown(false);
    }

    if (e.key === "Backspace" && input === "" && tags.length > 0) {
      const lastTag = tags[tags.length - 1];
      handleRemove(lastTag.id);
    }
  };

  return (
    <div ref={ref} className="w-full max-w-lg space-y-1">
      {label && (
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
          {label}
        </label>
      )}

      <div
        className={cn(
          "flex flex-wrap items-center gap-2 px-3 py-2 border rounded-lg",
          "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700",
          error && "border-red-500"
        )}
      >
        {tags.map((tag) => (
          <span
            key={tag.id}
            className={cn(
              "flex items-center gap-1 px-2 py-0.5 rounded-full text-sm",
              tag.colorClass || "bg-gray-200 text-gray-800"
            )}
          >
            {tag.label}
            <button onClick={() => handleRemove(tag.id)}>
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setDropdown(true);
          }}
          onFocus={() => setDropdown(true)}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
          className="flex-1 min-w-[120px] bg-transparent text-sm outline-none text-zinc-900 dark:text-zinc-100"
        />
      </div>

      {dropdown && (filteredSuggestions.length > 0 || input.trim()) && (
        <div className="bg-white dark:bg-zinc-800 border rounded-md shadow mt-1 p-2 space-y-1">
          {filteredSuggestions.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                handleAddTag(s);
                setInput("");
                setDropdown(false);
              }}
              className="w-full text-left px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded text-sm"
            >
              {s.label}
            </button>
          ))}

          {input.trim() &&
            !suggestions.find(
              (s) => s.label.toLowerCase() === input.trim().toLowerCase()
            ) && (
              <button
                onClick={() => {
                  handleAddTag({ id: input.trim(), label: input.trim() });
                  setInput("");
                  setDropdown(false);
                }}
                className="w-full text-left px-2 py-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                <Plus className="inline w-3 h-3 mr-1" /> Create "{input.trim()}"
              </button>
            )}
        </div>
      )}

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
