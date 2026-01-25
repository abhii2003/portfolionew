"use client"
export default function Footer() {
    return (
        <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-800 mt-16">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <a href="https://www.linkedin.com/in/abhinav-kushwaha-8603b2247" target="_blank" className="text-gray-400 hover:text-white transition-colors" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/abhii2003" target="_blank" className="text-gray-400 hover:text-white transition-colors" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:abhinavkush2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
