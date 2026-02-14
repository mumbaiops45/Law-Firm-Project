"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollTop}
      className="
        fixed bottom-6 right-6
        bg-[#C9A24D]
        w-14 h-14
        flex items-center justify-center
        rounded-xl
        shadow-lg
        transition-all duration-300
        hover:bg-[#b8913f]
        hover:scale-110
        z-50
      "
    >
      <span className="text-[#111111] text-2xl font-bold">⌃⌃</span>
    </button>
  );
}
