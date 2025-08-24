"use client";
import { useState, useEffect } from "react";
import { House, User, FolderGit, File, Mail, Github, CodeXml, X } from 'lucide-react';

export default function Navbar() {
    const navLinks = [
        { icon: <House size={16} />, name: "Home", href: "#" },
        { icon: <User size={16} />, name: "About", href: "#about" },
        { icon: <CodeXml size={16} />, name: "Skills", href: "#skills" },
        { icon: <FolderGit size={16} />, name: "Projects", href: "#projects" },
        { icon: <File size={16} />, name: "Resume", href: "#resume" },
        { icon: <Mail size={16} />, name: "Contact", href: "#contact" },
    ];
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // 50px down
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={`navbar sticky top-0 px-6 w-full text-sky-50 ${scrolled ? "bg-black/40" : "bg-transparent"}`}>
            <div className="flex items-center justify-between w-full md:justify-start">
                {/* Mobile (burger menu) */}
                <div className="md:hidden">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className="text-white font-bold px-4 py-2 rounded mt-4 hover:text-sky-200 cursor-pointer transition drawer-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu bg-blue-950 text-base-content min-h-full w-80 p-4 relative">

                                <ul className="mt-4">
                                    {/* Close button */}
                                    <label htmlFor="my-drawer" className="cursor-pointer flex justify-end">
                                        <X size={28} className="text-sky-100 hover:text-sky-200" />
                                    </label>
                                    {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-lg relative text-sky-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">{link.name}</a>
                                        </li>
                                    ))}
                                    <li><a className="text-lg relative text-sky-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full" href="https://github.com/rawanshisht" target="_blank" rel="noopener noreferrer">Github</a></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center md:justify-start">
                    <a href="#" className="text-3xl font-bold text-sky-200">
                        R.
                    </a>
                </div>
                {/* Desktop (inline menu) */}
                <div className="hidden md:flex ml-auto">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-lg relative text-sky-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">{link.icon}{link.name}</a>
                            </li>
                        ))}
                        <li><a className="text-lg relative text-sky-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full" href="https://github.com/rawanshisht" target="_blank" rel="noopener noreferrer"><Github size={24} /></a></li>
                    </ul>
                </div>
            </div>

        </nav >
    );
}
