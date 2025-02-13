"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import getCurrentDayPeriod from "@/lib/day-time-emoji";
import formatDateTime from "@/lib/time-formatter";


export default function DraggableBadges() {
  const badgesContainerRef = useRef<HTMLDivElement>(null);

  const [dayPeriod, setDayPeriod] = useState(getCurrentDayPeriod());
  const [likeCount, setLikeCount] = useState(45);
  const [currentDateTime, setCurrentDateTime] = useState(formatDateTime(new Date()));

  const likeClickHandler = () => {
    setLikeCount((prev) => prev + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDayPeriod(getCurrentDayPeriod());
      setCurrentDateTime(formatDateTime(new Date()));
    }, 60000); // 60sec

    return () => clearInterval(interval);
  }, []);

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
          top: 50,
          left: 20,
          rotate: "15deg",
        }}
        className="badge px-3 py-1 rounded-full shadow-md cursor-grab active:cursor-grabbing"
      >
        <span onClick={likeClickHandler}>🫀 {likeCount}</span>
      </motion.div>

      <motion.div
        {...dragConfig}
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          rotate: "15deg",
        }}
        className="badge px-3 py-1 rounded-full shadow-md cursor-grab active:cursor-grabbing"
      >
        <span>📍 India, Jaipur</span>
      </motion.div>

      <motion.div
        {...dragConfig}
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          rotate: "15deg",
        }}
        className="badge px-3 py-1 rounded-full shadow-md cursor-grab active:cursor-grabbing"
      >
        <span>{dayPeriod.emoji} {dayPeriod.message}</span>
      </motion.div>

      <motion.div
        {...dragConfig}
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          rotate: "15deg",
        }}
        className="badge px-3 py-1 rounded-full shadow-md cursor-grab active:cursor-grabbing"
      >
        <span>⏳ {currentDateTime}</span>
      </motion.div>
    </aside>
  );
}