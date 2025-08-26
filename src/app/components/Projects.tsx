export default function Projects() {
    return (
        <section id="projects" className="min-h-screen scroll-mt-20">
            <h2 className="text-xl md:text-4xl md:text-5xl font-bold text-sky-200 uppercase text-center my-6">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto">
                <div className="bg-stone-100 p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform">
                    <h4 className="text-2xl font-bold text-center">Maia App </h4>
                    <p className="mt-6 space-y-2 text-md font-medium">
                        Contributed to the front-end development of Maia, an Islamic app featuring an emotion tracker and chatbot, using
                        JavaScript, React and Vite
                    </p>
                </div>

                <div className="bg-stone-100 p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform">
                    <h4 className="text-2xl font-bold text-center">AutiLearn</h4>
                    <p className="mt-6 space-y-2 text-md font-medium">Designed an AI-powered e-learning platform using MongoDB, Express, and React, creating personalized learning
                        paths and interactive modules that boosted user engagement </p>
                </div>

                <div className="bg-stone-100 p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform">
                    <h4 className="text-2xl font-bold text-center">Tazkeer App</h4>
                    <p className="mt-6 space-y-2 text-md font-medium">
                        Developed a mobile-first Quran memorization app with MongoDB, Express, Firebase, React, and Redux, serving
                        users with tracking, assessment, and personalized learning paths
                    </p>
                </div>

                <div className="bg-stone-100 p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform">
                    <h4 className="text-2xl font-bold text-center">Autonomous Delivery System</h4>
                    <p className="mt-6 space-y-2 text-md font-medium">
                        Engineered a delivery system, composed of two main sub-systems: e-commerce and an outdoor autonomous robot
                        for delivering requested orders, handling daily deliveries
                    </p>
                    <p className="mt-6 space-y-2 text-md font-medium">
                        Developed e-commerce web and mobile apps to facilitate managing the delivery system for daily client orders
                    </p>
                </div>
            </div>
        </section>
    )
}