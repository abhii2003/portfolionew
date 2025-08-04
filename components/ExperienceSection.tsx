"use client"
export default function ExperienceSection() {

    // Tab functionality
    function showTab(tabName: string) {
        const currentContent = document.querySelector(".tab-content:not(.hidden)")
        const newContent = document.getElementById(tabName + "-content")
        if (currentContent === newContent) return

        // Simple tab switch, no animation
        currentContent?.classList.add("hidden")
        newContent?.classList.remove("hidden")

        // Update tab buttons
        document.querySelectorAll(".tab-button").forEach((button) => {
            button.classList.remove("active", "text-white")
            button.classList.add("text-gray-400")
            button.classList.remove("bg-[#1a1a1a]", "border-[#333333]")
            button.classList.add("bg-[#111111]", "border-[#222222]")
        })
        const activeTab = document.getElementById(tabName + "-tab")
        activeTab?.classList.add("active", "text-white")
        activeTab?.classList.remove("text-gray-400")
        activeTab?.classList.add("bg-[#1a1a1a]", "border-[#333333]")
        activeTab?.classList.remove("bg-[#111111]", "border-[#222222]")
    }

    // Make showTab available globally
    if (typeof window !== "undefined") {
        ; (window as any).showTab = showTab
    }

    return (
        <section id="experience" className="py-16">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">experience.</h1>
            </div>
            <div className="flex justify-center mb-12">
                <div className="flex">
                    <button onClick={() => showTab("work")} id="work-tab" className="tab-button active px-6 py-3 rounded-l-md text-sm font-medium text-white bg-[#1a1a1a] border border-[#333333]">Work</button>
                    <button onClick={() => showTab("education")} id="education-tab" className="tab-button px-6 py-3 rounded-r-md text-sm font-medium text-gray-400 bg-[#111111] border border-[#222222]">Education</button>
                </div>
            </div>
            <div id="work-content" className="tab-content max-w-4xl mx-auto">
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fas fa-laptop-code text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm text-gray-400">2024 - 2025</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">PotatoHead Media Works</h3>
                            <p className="text-gray-400 mb-3">Full-stack Developer</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Designed and developed full-stack web applications using modern frameworks.</li>
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Evaluated and recommended technology stacks tailored to client needs, considering scalability, performance, and maintainability.</li>
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Managed end-to-end project lifecycles — from requirements gathering and technical architecture to deployment and post-launch support.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fas fa-laptop-code text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm text-gray-400">2022 - Present</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Freelance Developer / Tech Consultant</h3>
                            <p className="text-gray-400 mb-3">Independent</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Designed and developed full-stack web applications using modern frameworks</li>
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Managed end-to-end project lifecycles from requirements to deployment</li>
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Evaluated and recommended technology stacks for scalability and performance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fab fa-google text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm text-gray-400">2023 - Present</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">GDSC - VITC</h3>
                            <p className="text-gray-400 mb-3">Core Team - Web Developer</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Contributed to hackathon website development (DevsHouse 2024)</li>
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Upgraded GDSC VITC website from Next.js 12 to 13 with app-based routing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="education-content" className="tab-content hidden max-w-4xl mx-auto">
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fas fa-university text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">{/* <span className="text-sm text-gray-400">July 2022 - Present</span> */}</div>
                            <h3 className="text-lg font-bold text-white mb-1">Vellore Institute of Technology</h3>
                            <p className="text-gray-400 mb-3">BTECH Computer Science • CGPA: 8.88</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fas fa-school text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2"></div>
                            <h3 className="text-lg font-bold text-white mb-1">Kendriya Vidyalaya</h3>
                            <p className="text-gray-400 mb-3">12th (10+2) PCMCs • Percentage: 96%</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fas fa-school text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2"></div>
                            <h3 className="text-lg font-bold text-white mb-1">Kendriya Vidyalaya</h3>
                            <p className="text-gray-400 mb-3">10th • Percentage: 96.4%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
