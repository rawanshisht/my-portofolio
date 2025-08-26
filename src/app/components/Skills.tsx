export default function Skills() {
    return (
        <section id="skills" className="min-h-screen scroll-mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-sky-200 uppercase text-center my-6">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto">
                <div className="bg-stone-100 p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform">
                    <h4 className="text-2xl font-bold text-center">Programming</h4>
                    <ul className="mt-6 space-y-2 font-medium">
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>C#</li>
                    </ul>
                </div>

                <div className="bg-stone-100 p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform">
                    <h4 className="text-2xl font-bold text-center">Frontend</h4>
                    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 font-medium">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>Daisy UI</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>React Native</li>
                        <li>REST API</li>
                    </ul>
                </div>

                <div className="bg-stone-100 p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform">
                    <h4 className="text-2xl font-bold text-center">Backend</h4>
                    <ul className="mt-6 space-y-2 font-medium">
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Node.js (Express)</li>
                    </ul>
                </div>

                <div className="bg-stone-100 p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform">
                    <h4 className="text-2xl font-bold text-center">Other Tools</h4>
                    <ul className="mt-6 space-y-2 font-medium">
                        <li>Git - GitHub</li>
                        <li>Postman</li>
                        <li>Firebase</li>
                        <li>Entity Framework</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
