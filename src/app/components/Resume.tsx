import Image from "next/image";

export default function Resume() {
    return (
        <section id="resume" className="min-h-screen scroll-mt-20 flex flex-col justify-center items-center gap-6 my-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-color uppercase text-center">Resume</h2>
            <a
                href="/Rawan ElShishtawy.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/resume-preview.png"
                    alt="Resume preview"
                    width={400}
                    height={400}
                    className="px-6 w-full max-w-xs md:max-w-md h-auto object-contain rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform hover:cursor-pointer overflow-auto"
                />
            </a>
            <a href="/Rawan ElShishtawy.pdf" download="Rawan-ElShishtawy-Resume.pdf" className="w-48 bg-primary-color text-deep-bg font-semibold md:font-bold px-4 py-2 rounded mt-4 hover:bg-accent-color transition hover:cursor-pointer text-center">
                Download Resume
            </a>
        </section>
    )
}