import { useState, useEffect } from "react";

const greetings = [
  { text: "Hi", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "你好", lang: "Chinese" },
  { text: "مرحبا", lang: "Arabic" },
];

const MultilingualGreeting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block min-w-[120px]">
      <span className="gradient-text text-5xl md:text-7xl font-bold animate-fade-in">
        {greetings[currentIndex].text}
      </span>
    </div>
  );
};

export default MultilingualGreeting;
