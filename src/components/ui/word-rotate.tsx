"use client";

import React, { useState, useEffect } from "react";

interface WordRotateProps {
  words: string[];
  className?: string;
}

export const WordRotate: React.FC<WordRotateProps> = ({ words, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words]);

  return <div className={className}>{words[currentIndex]}</div>;
};
