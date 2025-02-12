"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import useWindowSize from "@/lib/hooks/use-window-size";

export default function DraggableBadges() {
  const windowSize = useWindowSize();
  const badgesContainerRef = useRef<HTMLDivElement>(null);
  const baseWidth = 1440;
  const scale = Math.max(windowSize.width / baseWidth, 0.5);

  const dragConfig = {
    drag: true,
    dragConstraints: badgesContainerRef,
    dragElastic: 0.65,
    dragTransition: {
      power: 0.3,
      timeConstant: 500,
      bounceStiffness: 400,
      bounceDamping: 10
    }
  };

  return (
    <aside ref={badgesContainerRef} className="absolute inset-0 z-10">
      <motion.div
        {...dragConfig}
        style={{
          position: "absolute",
          top: 50 * scale,
          left: 20 * scale,
          rotate: "15deg",
          fontSize: `${Math.max(14 * scale, 12)}px`
        }}
        className="badge px-3 py-1 rounded-full shadow-md cursor-grab active:cursor-grabbing"
      >
        <span>🫀 45</span>
      </motion.div>

      <motion.div
        {...dragConfig}
        style={{
          position: "absolute",
          top: windowSize.width < 768 ? 120 * scale : 150 * scale,
          left: windowSize.width < 768 ? 
            Math.min(280 * scale, windowSize.width - 150) : 
            380 * scale,
          rotate: "-12deg",
          fontSize: `${Math.max(14 * scale, 12)}px`
        }}
        className="badge px-3 py-1 rounded-full shadow-md cursor-grab active:cursor-grabbing"
      >
        <span>📍 India, Jaipur</span>
      </motion.div>

      <motion.div
        {...dragConfig}
        style={{
          position: "absolute",
          top: windowSize.width < 768 ? 220 * scale : 280 * scale,
          left: windowSize.width < 768 ? 40 * scale : 60 * scale,
          rotate: "25deg",
          fontSize: `${Math.max(14 * scale, 12)}px`
        }}
        className="badge px-3 py-1 rounded-full shadow-md cursor-grab active:cursor-grabbing"
      >
        <span>🌞</span>
      </motion.div>

      <motion.div
        {...dragConfig}
        style={{
          position: "absolute",
          top: windowSize.width < 768 ? 320 * scale : 400 * scale,
          left: windowSize.width < 768 ? 
            Math.min(240 * scale, windowSize.width - 150) : 
            320 * scale,
          rotate: "-8deg",
          fontSize: `${Math.max(14 * scale, 12)}px`
        }}
        className="badge px-3 py-1 rounded-full shadow-md cursor-grab active:cursor-grabbing"
      >
        <span>⏳ 6 Dec • 22:27</span>
      </motion.div>
    </aside>
  );
}