"use client"
export default function HomeSection() {
    return (
        <section id="home" className="section flex items-center justify-center min-h-screen pt-24">
            <div className="text-center max-w-3xl">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        hello! abhinav here. <span className="text-3xl"></span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-4">Computer science student and a full-stack developer from India.</p>
                </div>
                <div className="mb-8">
                    <div className="w-48 h-48 mx-auto mb-8 rounded-lg overflow-hidden">
                        <img src="/placeholder.svg?height=200&width=200&text=Profile+Photo" alt="Abhinav Kushwaha" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="space-y-4 mb-8">
                    <p className="text-gray-400">For collaboration, reach out via email <span className="text-blue-400">↗</span></p>
                    <p className="text-sm text-gray-500">For quick questions, find me on{" "}
                        <a href="https://www.linkedin.com/in/abhinav-kushwaha-8603b2247" className="text-blue-400 hover:underline">LinkedIn</a>{" "}instead.
                    </p>
                </div>
                <div className="flex items-center justify-center space-x-6">
                    <a href="#" className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-md text-sm font-medium transition-colors border border-gray-700">
                        <i className="fas fa-file-alt mr-2"></i>Resume
                    </a>
                    <a href="https://www.linkedin.com/in/abhinav-kushwaha-8603b2247" target="_blank" className="text-gray-400 hover:text-white transition-colors" rel="noreferrer">
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="https://github.com/abhii2003" target="_blank" className="text-gray-400 hover:text-white transition-colors" rel="noreferrer">
                        <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href="mailto:abhinavkush2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fas fa-envelope text-xl"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}
