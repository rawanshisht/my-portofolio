"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Hero() {
    const words = ["Freelancer", "Frontend Developer", "Software Developer"];
    const [wordIndex, setWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const typingSpeed = isDeleting ? 80 : 120; // speed for typing vs deleting

        const handleTyping = () => {
            setDisplayedText((prev) =>
                isDeleting
                    ? currentWord.substring(0, prev.length - 1)
                    : currentWord.substring(0, prev.length + 1)
            );

            // if finished typing word, wait before deleting
            if (!isDeleting && displayedText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000);
            }
            // if finished deleting word, move to next
            else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, wordIndex, words]);

    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-start md:justify-around gap-6 overflow-hidden px-3"
            id="#">
            {/* Background Image */}
            <Image
                src="/hero.jpg"
                alt="Background"
                fill
                priority
                className="object-cover -z-10 h-screen"
            />
            <div className="absolute inset-0 bg-black/40 -z-10"></div>

            <div className="flex flex-col items-center md:items-start gap-4 relative -z-10">
                <h1 className="text-2xl md:text-5xl font-bold text-primary-color">Rawan ElShishtawy</h1>
                <h2 className="text-lg md:text-3xl font-semibold text-primary-color">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </h2>
                <a href="mailto:rawan.a.elshishtawy@gmail.com?subject=Let's%20Work%20Together" className="w-40 bg-primary-color text-dark-bg font-semibold md:font-bold px-4 py-2 rounded mt-4 hover:bg-accent-color transition hover:cursor-pointer text-center">
                    Get in Touch
                </a>
            </div>

            <div className="avatar -z-10">
                <div className="w-64 md:w-96 rounded-full">
                    <Image
                        src="/developer.png"
                        alt="Background"
                        fill
                        priority
                        className="object-contain rounded-lg shadow-xl px-3"
                    />
                </div>
            </div>
        </section >
    )
}