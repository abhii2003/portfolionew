"use client"
import Link from "next/link"
export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-4xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-8">
                        <a href="#home" className="nav-link active text-white text-sm font-medium">home</a>
                        <Link href="/projects" className="nav-link text-gray-400 hover:text-white text-sm font-medium">projects</Link>
                        <a href="#experience" className="nav-link text-gray-400 hover:text-white text-sm font-medium">experience</a>
                        <a href="https://blogs.abhinavkushwaha.in" target="_blank" className="nav-link text-gray-400 hover:text-white text-sm font-medium" rel="noreferrer">blog</a>
                        <Link href="/contact" className="nav-link text-gray-400 hover:text-white text-sm font-medium">contact</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="mailto:abhinavkush2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fas fa-envelope text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
