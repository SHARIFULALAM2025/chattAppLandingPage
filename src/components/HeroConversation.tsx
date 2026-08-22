"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Line = {
  from: "them" | "you";
  text: string;
  time: string;
};

const SCRIPT: Line[] = [
  { from: "them", text: "did you push the group chat fix?", time: "11:42" },
  { from: "you", text: "pushing now", time: "11:42" },
  { from: "them", text: "cool, testing on my end", time: "11:43" },
  { from: "you", text: "should be live in ~30s", time: "11:43" },
  { from: "them", text: "got it instantly. nice.", time: "11:44" },
];

const TYPING_MS = 900;
const HOLD_MS = 1400;
const RESTART_PAUSE_MS = 1800;

export default function HeroConversation() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState<"them" | "you" | null>("them");

  useEffect(() => {
    let cancelled = false;
    let i = 0;

    async function run() {
      while (!cancelled) {
        setTyping(SCRIPT[i].from);
        await wait(TYPING_MS);
        if (cancelled) return;
        setTyping(null);
        i += 1;
        setVisibleCount(i);
        await wait(HOLD_MS);
        if (cancelled) return;

        if (i >= SCRIPT.length) {
          await wait(RESTART_PAUSE_MS);
          if (cancelled) return;
          i = 0;
          setVisibleCount(0);
          await wait(300);
        }
      }
    }

    function wait(ms: number) {
      return new Promise((res) => setTimeout(res, ms));
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const lines = SCRIPT.slice(0, visibleCount);

  return (
    <div className="relative rounded-2xl border border-ink-line bg-ink-raised p-4 sm:p-5 shadow-[0_0_0_1px_rgba(55,214,196,0.05)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 mb-4 px-1">
        <span className="h-2.5 w-2.5 rounded-full bg-alert/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F2C94C]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
        <span className="ml-3 font-display text-[11px] tracking-wide text-muted">
          conversation — sharif &amp; kamrul
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] text-signal font-display">
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
          live
        </span>
      </div>

      <div className="flex flex-col gap-2.5 min-h-[280px] justify-end">
        <AnimatePresence initial={false}>
          {lines.map((line, idx) => (
            <motion.div
              key={`${line.text}-${idx}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`flex ${line.from === "you" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-xl px-3.5 py-2 text-[13.5px] leading-snug ${
                  line.from === "you"
                    ? "bg-signal text-ink"
                    : "bg-white/[0.06] text-paper border border-ink-line"
                }`}
              >
                <p>{line.text}</p>
                <p
                  className={`mt-1 font-display text-[10px] tracking-wide ${
                    line.from === "you" ? "text-ink/60" : "text-muted"
                  }`}
                >
                  {line.time}
                  {line.from === "you" && <span className="ml-1">✓✓</span>}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex ${typing === "you" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-xl px-3.5 py-2.5 ${
                typing === "you"
                  ? "bg-signal/90"
                  : "bg-white/[0.06] border border-ink-line"
              }`}
            >
              <span className="flex gap-1">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className={`h-1.5 w-1.5 rounded-full ${
                      typing === "you" ? "bg-ink/70" : "bg-muted"
                    } animate-bounce`}
                    style={{ animationDelay: `${d * 120}ms` }}
                  />
                ))}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
