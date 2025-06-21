"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const MAX_MEMBERS = 4;
const MIN_MEMBERS = 1;

const avatars = [
  "https://api.dicebear.com/8.x/thumbs/svg?seed=Fox",
  "https://api.dicebear.com/8.x/thumbs/svg?seed=Bear",
  "https://api.dicebear.com/8.x/thumbs/svg?seed=Cat",
  "https://api.dicebear.com/8.x/thumbs/svg?seed=Tiger",
];

const bounceVariant = {
  animate: {
    scale: [1, 1.05, 0.95, 1.02, 1],
    transition: { duration: 0.4 },
  },
};

export default function AvatarTeam() {
  const [count, setCount] = useState(2);
  const [isBouncing, setIsBouncing] = useState(false);

  const updateCount = (delta: number) => {
    const newVal = count + delta;
    if (newVal < MIN_MEMBERS || newVal > MAX_MEMBERS) {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 400);
      return;
    }
    setCount(newVal);
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8 rounded-xl bg-white dark:bg-zinc-900 shadow-md space-y-6">
      <h2 className="text-center text-xl font-bold text-zinc-800 dark:text-zinc-100">Choose Your Team</h2>

      <motion.div
        variants={bounceVariant}
        animate={isBouncing ? "animate" : ""}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center"
      >
        <AnimatePresence initial={false}>
          {Array.from({ length: count }, (_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shadow-sm"
            >
              <img
                src={avatars[i % avatars.length]}
                alt={`Avatar ${i + 1}`}
                className="w-16 h-16 rounded-full"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => updateCount(-1)}
          className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          <Minus className="w-5 h-5 text-zinc-800 dark:text-white" />
        </button>

        <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{count}</span>

        <button
          onClick={() => updateCount(1)}
          className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          <Plus className="w-5 h-5 text-zinc-800 dark:text-white" />
        </button>
      </div>
    </div>
  );
}
