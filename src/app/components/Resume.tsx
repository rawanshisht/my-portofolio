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
                <div className="relative -z-10 w-[300px] h-[400px] md:w-[400px] md:h-[500px] shadow-xl rounded-lg overflow-auto">
                    <Image
                        src="/resume-preview.png"
                        alt="Resume preview"
                        fill
                        className="object-contain"
                    />
                </div>
            </a>
            <a href="/Rawan ElShishtawy.pdf" download="Rawan-ElShishtawy-Resume.pdf" className="w-48 bg-primary-color text-deep-bg font-semibold md:font-bold px-4 py-2 rounded mt-4 hover:bg-accent-color transition hover:cursor-pointer text-center">
                Download Resume
            </a>
        </section>
    )
}