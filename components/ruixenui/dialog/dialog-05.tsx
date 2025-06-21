"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Settings,
  LogOut,
  User2,
  MessageSquareText,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const actions = [
  { label: "Profile", icon: User2 },
  { label: "Messages", icon: MessageSquareText },
  { label: "Settings", icon: Settings },
  { label: "Help", icon: HelpCircle },
  { label: "Logout", icon: LogOut },
];

export default function Dialog05() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open &&
          actions.map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 20 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "w-48 h-12 flex items-center justify-start gap-2 rounded-md bg-white px-4 py-2 shadow-md dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              )}
            >
              <action.icon size={20} className="opacity-80" />
              <span className="truncate">{action.label}</span>
            </motion.button>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full bg-black p-3 text-white shadow-md transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
}
