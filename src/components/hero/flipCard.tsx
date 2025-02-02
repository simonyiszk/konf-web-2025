"use client";
import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";
import HeroTicketFront from "./HeroTicketFront";
import HeroTicketBack from "./HeroTicketBack";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };
  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="relative w-[900px] h-[400px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
        className={`absolute inset-0 w-full h-full ${
          isFlipped ? "pointer-events-none" : ""
        }`}
      >
        <HeroTicketFront />
      </animated.div>
      <animated.div
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
        className={`absolute inset-0 w-full h-full ${
          !isFlipped ? "pointer-events-none" : ""
        }`}
      >
        <HeroTicketBack />
      </animated.div>
    </div>
  );
}
