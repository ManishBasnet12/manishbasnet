"use client";
import  { useEffect, useState } from "react";

const CustomCarousel = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX + 4, y: e.clientY + 8 });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: cursorPosition.x + "px",
          top: cursorPosition.y + "px",
        }}
        className="cursor"
      ></div>
    </>
  );
};

export default CustomCarousel;
