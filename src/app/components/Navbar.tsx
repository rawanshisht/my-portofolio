"use client";
import { useState, useEffect } from "react";
import { House, User, FolderGit, File, Mail, Github, CodeXml } from 'lucide-react';

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
            <div className="flex-1">
                <a href="#" className="text-3xl font-bold">R.</a>
            </div>

            <div className="flex-none">
                {/* Mobile (burger menu) */}
                <div className="dropdown dropdown-end md:hidden">
                    <button tabIndex={0} className="btn btn-ghost">
                        {/* burger icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-950 rounded-box w-52"
                    >
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-lg relative text-sky-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">{link.name}</a>
                            </li>
                        ))}
                        <li><a href="https://github.com/rawanshisht" target="_blank" rel="noopener noreferrer">Github</a></li>
                    </ul>
                </div>

                {/* Desktop (inline menu) */}
                <ul className="menu menu-horizontal hidden md:flex px-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-lg relative text-sky-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">{link.icon}{link.name}</a>
                        </li>
                    ))}
                    <li><a href="https://github.com/rawanshisht" target="_blank" rel="noopener noreferrer"><Github size={24} /></a></li>
                </ul>
            </div>
        </nav>
    );
}
