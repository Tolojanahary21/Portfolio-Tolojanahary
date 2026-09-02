/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/static-components */
 
"use client";

import { useEffect, useRef, useState } from "react";
import AboutBackground from "./AboutBackground";

export default function About() {
//compteur
function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let current = 0;

    const duration = 500;
    const stepTime = duration / value;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= value) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="text-2xl font-semibold text-[#00e6c3]">
      {count}
      {count >= value && suffix}
    </span>
  );
}

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      <AboutBackground isVisible={isVisible} />

       
    </section>
  );
}
 
