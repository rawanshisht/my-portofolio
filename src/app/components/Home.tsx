import Image from "next/image";
export default function Hero() {
    return (
        <section className="realtive h-screen flex justify-around items-center gap-6 overflow-hidden" id="#">
            {/* Background Image */}
            <Image
                src="/hero.jpg"
                alt="Background"
                fill
                priority
                className="object-cover -z-10" // makes it cover like CSS background
            />

            {/* Overlay (optional for darkening) text-[#A0D2DB]*/}
            <div className="absolute inset-0 bg-black/40 -z-10"></div>
            <div>
                <h1 className="text-6xl font-bold text-sky-200">Rawan ElShishtawy</h1>
                <h2 className="text-4xl font-semibold text-sky-200">Frontend Developer</h2>
                <button className="bg-sky-200 text-sky-950 font-bold px-4 py-2 rounded mt-4 hover:bg-sky-300 transition">
                    Get in Touch
                </button>
            </div>
            <div>
                Image
            </div>
        </section>
    )
}