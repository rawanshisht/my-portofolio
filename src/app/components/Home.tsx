import Image from "next/image";
export default function Hero() {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 overflow-hidden px-3"
            id="#">
            {/* Background Image */}
            <Image
                src="/hero.jpg"
                alt="Background"
                fill
                priority
                className="object-cover -z-10 h-screen"
            />
            {/* Overlay (optional for darkening) text-[#A0D2DB]*/}
            <div className="absolute inset-0 bg-black/40 -z-10"></div>

            <div className="flex flex-col items-center md:items-start gap-4">
                <h1 className="text-2xl md:text-5xl font-bold text-sky-200">Rawan ElShishtawy</h1>
                <h2 className="text-lg md:text-3xl font-semibold text-sky-200">Frontend Developer</h2>
                <a href="mailto:rawan.a.elshishtawy@gmail.com?subject=Let's%20Work%20Together" className="w-40 bg-sky-200 text-sky-950 font-semibold md:font-bold px-4 py-2 rounded mt-4 hover:bg-sky-300 transition hover:cursor-pointer text-center">
                    Get in Touch
                </a>
            </div>

            <Image
                src="/developer.jpg"
                alt="Background"
                width={400}
                height={400}
                priority
                className="object-cover rounded-lg shadow-xl md:w-[400px] md:h-[400px] px-3"
            />
        </section >
    )
}