import Image from "next/image";
export default function Hero() {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 overflow-hidden px-3 md:px-6 "
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
                <button className="w-40 bg-sky-200 text-sky-950 font-semibold md:font-bold px-4 py-2 rounded mt-4 hover:bg-sky-300 transition">
                    Get in Touch
                </button>
            </div>
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
                <Image
                    src="/developer.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover rounded-lg shadow-2xl"
                />
            </div>
        </section >
    )
}