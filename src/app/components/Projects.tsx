export default function Projects() {
    const projects = [
        {
            index: 1,
            title: "Maia App",
            subtitle: "Tech Sisters Hackathon",
            description: "Contributed to the front-end development of Maia, an Islamic app featuring an emotion tracker and chatbot, using JavaScript, React and Vite",
            link: "https://github.com/Tech-Sisters/hackathon24-team2",
            tech: [
                { name: "JavaScript", color: "#F7DF1E" },
                { name: "React", color: "#61DAFB" },
                { name: "Vite", color: "#646CFF" }
            ]
        },
        {
            index: 2,
            title: "AutiLearn",
            subtitle: "Mega Hackathon",
            description: "Designed an AI-powered e-learning platform using MongoDB, Express, and React, creating personalized learning paths and interactive modules that boosted user engagement",
            link: "https://devpost.com/software/autilearn",
            tech: [
                { name: "MongoDB", color: "#47A248" },
                { name: "Node.js (Express)", color: "#6B7280" },
                { name: "React", color: "#61DAFB" }
            ]
        },
        {
            index: 3,
            title: "Tazkeer App",
            subtitle: "Tech Sisters Hackathon",
            description: "Developed a mobile-first Quran memorization app with MongoDB, Express, Firebase, React, and Redux, serving users with tracking, assessment, and personalized learning paths",
            link: "https://github.com/Tech-Sisters/hackathon23-team2",
            tech: [
                { name: "MongoDB", color: "#47A248" },
                { name: "Node.js (Express)", color: "#6B7280" },
                { name: "Firebase", color: "#FFCA28" },
                { name: "React", color: "#61DAFB" },
                { name: "Redux", color: "#764ABC" }
            ]
        },
        {
            index: 4,
            title: "Autonomous Delivery System",
            subtitle: "Graduation project with Valeo (Egypt)",
            description: "Engineered a delivery system, composed of two main sub-systems: e-commerce and an outdoor autonomous robot for delivering requested orders, handling daily deliveries. Developed e-commerce web and mobile apps to facilitate managing the delivery system for daily client orders",
            link: "https://mohamedwagih.github.io/",
            tech: [
                { name: "MongoDB", color: "#47A248" },
                { name: "Node.js (Express)", color: "#6B7280" },
                { name: "JavaScript", color: "#F7DF1E" },
                { name: "React", color: "#61DAFB" },
                { name: "React Native", color: "#61DAFB" }
            ]

        }
    ]
    return (
        <section id="projects" className="min-h-screen scroll-mt-20 flex flex-col justify-center items-center gap-6 my-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-color uppercase text-center my-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto">
                {
                    projects.map((project, index) => (
                        <div key={index} className="bg-light-bg p-6 rounded-xl shadow-black shadow-lg hover:scale-[1.02] transition-transform hover:cursor-pointer">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <h4 className="text-lg font-bold text-left">{project.title} </h4>
                                <h4 className="text-md font-medium text-left text-gray-400 italic">{project.subtitle} </h4>
                                <p className="mt-3 text-md font-medium">
                                    {project.description}
                                </p>
                                <div className="divider"></div>
                                <div className="my-3">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="inline-block px-3 py-1 mr-2 mb-2 rounded-full text-sm font-medium" style={{ backgroundColor: tech.color, color: '#000' }}>
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}