import { MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


export default function Contact() {
    return (
        <section id="contact" className="min-h-screen scroll-mt-20 flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-color uppercase text-center"> Let&apos;s Build Something Amazing</h2>
            <h3 className="text-xl md:text-2xl/10 text-center font-semibold p-6 text-secondary-color tracking-none md:tracking-wider w-5/6 mx-auto">
                Looking for a developer who can create high-performance, interactive web experiences?
            </h3>
            <h3 className="text-xl md:text-2xl/10 text-center font-semibold text-secondary-color tracking-none md:tracking-wider mx-auto">
                <span className="flex items-center justify-center gap-2">
                    <MapPin size={20} /> UK
                </span>
            </h3>
            <a href="mailto:rawan.a.elshishtawy@gmail.com?subject=Let's%20Work%20Together" className="w-40 bg-primary-color text-dark-bg font-semibold md:font-bold px-4 py-2 rounded mt-4 hover:bg-accent-color transition hover:cursor-pointer text-center">
                Get in Touch
            </a>
            <div className="flex gap-6 text-secondary-color my-6">
                <a className="text-lg text-secondary-color"
                    href="https://github.com/rawanshisht" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a className="text-lg text-secondary-color"
                    href="https://www.linkedin.com/in/rawanshisht/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={24} />
                </a>
            </div>
        </section>
    )
}