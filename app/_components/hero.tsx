"use client";
import memoji from "@/assets/media/memoji.png";
import random_emoji from "@/lib/random-emoji";
import RandomSvgUnderline from "@/lib/random-svg-underline";
import Image from "next/image";
import DraggableBadges from "./draggable-badges";

export default function Hero() {
  return (
    <>
      <section className="text-dark-accent flex flex-col items-center justify-center pt-12 relative overflow-hidden px-4">
        <Image
          src={memoji}
          alt="Memoji of Aayushmaan Soni"
          className="w-[100px] md:w-[140px] pt-7"
        />

        <div className="badge px-4 py-1.5 md:px-5 md:py-2 rounded-full font-medium text-sm md:text-[14px] flex items-center justify-center">
          <div className="relative w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500" />
          </div>
          <p className="pl-2">Available for work</p>
        </div>

        <p className="font-calistoga text-[21px] md:text-4xl mt-4 text-center">
          Hi, I am Aayushmaan Soni {random_emoji()}
        </p>

        <p className="text-4xl/tight md:text-6xl/20 font-black text-center mt-2">
          Learning,
          <RandomSvgUnderline
            className="stroke-white/45"
            strokeWidth={10}
          >
            <span>Building</span>
          </RandomSvgUnderline> <br />
          {" "}& Exploring
        </p>

        <p className="text-dark-accent/75 w-full md:w-[700px] text-center mt-2 mb-5 text-sm md:text-base px-4">
          <span className="text-dark-accent-highlight">Full Stack Web Developer</span>, 
          specializing in the <span className="text-dark-accent-highlight">MERN stack</span>, 
          with a passion for building user-focused, scalable, and innovative web applications.
        </p>

        <a href="" className="badge px-4 py-1.5 md:px-5 md:py-2 rounded-full text-dark-accent z-30 text-sm md:text-base">
          Connect with me 🤝
        </a>

        <DraggableBadges />
      </section>
    </>
  );
}