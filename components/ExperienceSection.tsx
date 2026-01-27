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
                    {/* PotatoHead Media Works */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fas fa-laptop-code text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm text-gray-400">2024 – 2025</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">PotatoHead Media Works</h3>
                            <p className="text-gray-400 mb-3">Full-Stack Developer</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2 mt-1">•</span>
                                    Engineered and delivered interactive, high-performance web platforms for client campaigns, ensuring seamless UX and robust backend integrations.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2 mt-1">•</span>
                                    Collaborated with design and strategy teams to translate creative briefs into scalable technical solutions.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2 mt-1">•</span>
                                    Oversaw deployment pipelines and optimized post-launch performance, leading to improved load times and reduced maintenance overhead.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Freelance Developer / Tech Consultant */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fas fa-laptop-code text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm text-gray-400">2022 – Present</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Freelance Developer / Tech Consultant</h3>
                            <p className="text-gray-400 mb-3">Independent</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2 mt-1">•</span>
                                    Partnered with startups and small businesses to design tailored digital solutions, from MVPs to fully deployed applications.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2 mt-1">•</span>
                                    Provided strategic guidance on technology choices, ensuring projects were future-proof and cost-efficient.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2 mt-1">•</span>
                                    Led end-to-end builds, handling everything from initial client consultations to final deployment and ongoing support.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* GDSC - VITC */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                                <i className="fas fa-laptop-code text-gray-300"></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm text-gray-400">2023 - 2025</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">GDSC - VITC</h3>
                            <p className="text-gray-400 mb-3">Core Team - Web Developer</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Contributed to website development for DevsHouse 2024(hackathon), improving participant experience and event workflow.</li>
                                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">•</span>Upgraded the official GDSC VITC website from Next.js 12 to 13, implementing modern app-based routing for better scalability.</li>
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
                            {/* <div className="flex items-center gap-4 mb-2"><span className="text-sm text-gray-400">July 2022 - Present</span></div> */}
                            <h3 className="text-lg font-bold text-white mb-1">Vellore Institute of Technology</h3>
                            <p className="text-gray-400 mb-3">BTECH Computer Science and Engineering • CGPA: 8.89</p>
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
