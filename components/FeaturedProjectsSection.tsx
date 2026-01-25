"use client"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredProjects = [
    {
        id: 2,
        title: "Daycare Management App",
        description:
            "Modern daycare management system with child tracking, parent communication, and administrative tools.",
        url: "https://dms.splashnest.com",
        blogUrl: "blogs.abhinavkushwaha.in",
        tags: ["Next.js", "Prisma", "Supabase"],
    },
    {
        id: 3,
        title: "Memvis(Ongoing)",
        description: "Advanced memory visualization and debugging tool for developers to analyze program memory usage.",
        url: "https://memvis.netlify.app/",
        blogUrl: "blogs.abhinavkushwaha.in",
        tags: ["DWARF", "eBPF", "Python"],
        featured: false,
    },
    {
        id: 1,
        title: "FI Group LMS Portal",
        description:
            "Comprehensive Learning Management System with role-based access control, user management, and integrated calendar functionalities.",
        url: "https://finursingcollege.in",
        blogUrl: "blogs.abhinavkushwaha.in",
        tags: ["Next.js", "PostgreSQL", "Ngnix", "Pm2", "Prisma", "GitHub Actions", "Digital Ocean"],
    },
]

export default function FeaturedProjectsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)

    const cardWidth = 320 + 24 // card width + gap
    const totalItems = featuredProjects.length + 1

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
            const index = Math.max(0, Math.min(Math.round(scrollLeft / cardWidth), totalItems - 1))
            setCurrentIndex(index)
        }
    }

    const scrollToIndex = (index: number) => {
        const clampedIndex = Math.max(0, Math.min(index, totalItems - 1))
        if (scrollContainerRef.current) {
            const scrollLeft = clampedIndex * cardWidth
            scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" })
        }
        setCurrentIndex(clampedIndex)
    }

    const scrollLeft = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1)
        }
    }

    const scrollRight = () => {
        if (currentIndex < totalItems - 1) {
            scrollToIndex(currentIndex + 1)
        }
    }

    useEffect(() => {
        const container = scrollContainerRef.current
        if (container) {
            updateScrollButtons()
            container.addEventListener("scroll", updateScrollButtons, { passive: true })
            return () => container.removeEventListener("scroll", updateScrollButtons)
        }
    }, [cardWidth, totalItems])

    return (
        <section className="py-16">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">featured projects.</h1>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none"></div>

                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto scroll-smooth hide-scrollbar"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    <div className="flex space-x-6 w-max px-4 py-2">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="project-card rounded-lg overflow-hidden bg-[#111111] border border-[#222222] w-80 flex-shrink-0 scroll-snap-align-start hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {project.id === 1 ? (
                                    <div className="aspect-video website-thumbnail border-b border-gray-800 bg-[#1a1a1a] h-48 flex items-center justify-center">
                                        <img src="/lmsimage.png" alt="FI Group LMS Portal" className="w-full h-full object-cover rounded" />
                                    </div>
                                ) : (
                                    <div className="aspect-video website-thumbnail border-b border-gray-800 bg-[#1a1a1a] h-48 relative overflow-hidden">
                                        <iframe
                                            src={project.url}
                                            className="w-full h-full pointer-events-none opacity-0 transition-opacity duration-300"
                                            loading="lazy"
                                            onLoad={(e) => {
                                                e.currentTarget.style.opacity = "1"
                                            }}
                                            style={{ overflow: "hidden", scrollbarWidth: "none" }}
                                        ></iframe>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                    </div>
                                )}
                                <div className="p-4 relative">
                                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">{tag}</span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex space-x-2">
                                        {project.id === 1 ? (
                                            <span className="inline-flex items-center px-3 py-2 bg-gray-700 text-gray-400 rounded text-xs font-medium cursor-not-allowed">
                                                <i className="fas fa-ban mr-1"></i>Out of Service
                                            </span>
                                        ) : (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                className="inline-flex items-center px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
                                                rel="noreferrer"
                                            >
                                                <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                                            </a>
                                        )}
                                        {project.id === 3 ? (
                                            <span className="inline-flex items-center px-3 py-2 text-gray-500 bg-gray-800/50 rounded text-xs font-medium cursor-not-allowed">
                                                Coming Soon
                                            </span>
                                        ) : (
                                            <Link
                                                href={project.id === 1 ? "/blog/fi-group-lms-portal" : project.id === 2 ? "/blog/daycare-management-app" : `https://${project.blogUrl}`}
                                                target={project.id === 1 || project.id === 2 ? "_self" : "_blank"}
                                                rel="noreferrer"
                                                className="inline-flex items-center px-3 py-2 text-blue-400 hover:text-blue-300 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
                                            >
                                                Read Blog
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="w-80 flex-shrink-0 scroll-snap-align-start">
                            <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 text-center hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:scale-[1.02]">
                                <div>
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                                        <Link href="/projects" className="flex items-center justify-center">
                                            <i className="fas fa-arrow-right text-gray-400 text-xl"></i>
                                        </Link>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">View All Projects</h3>
                                    <p className="text-gray-400 text-sm mb-4">Explore my complete portfolio</p>
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-md text-sm font-medium transition-colors"
                                    >
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-between mb-8 mt-6">
                    <div className="flex items-center space-x-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-20"></div>
                        <button
                            onClick={scrollLeft}
                            disabled={!canScrollLeft}
                            className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${canScrollLeft
                                ? "text-gray-300 hover:text-white hover:bg-gray-800/50 cursor-pointer"
                                : "text-gray-600 cursor-not-allowed opacity-50"
                                }`}
                            aria-label="Previous projects"
                        >
                            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                            <span className="text-sm font-medium">prev</span>
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        {featuredProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "bg-white scale-125"
                                    : "bg-gray-600 hover:bg-gray-400 hover:scale-110"
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>


                    <div className="flex items-center space-x-4">
                        <button
                            onClick={scrollRight}
                            disabled={!canScrollRight}
                            className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${canScrollRight
                                ? "text-gray-300 hover:text-white hover:bg-gray-800/50 cursor-pointer"
                                : "text-gray-600 cursor-not-allowed opacity-50"
                                }`}
                            aria-label="Next projects"
                        >
                            <span className="text-sm font-medium">next</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-20"></div>
                    </div>
                </div>

                {/* Mobile Dots */}
                <div className="flex md:hidden justify-center mt-6 space-x-2">
                    {Array.from({ length: totalItems }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${currentIndex === index ? "bg-gray-400" : "bg-gray-600 hover:bg-gray-400"
                                }`}
                            onClick={() => scrollToIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    )
}
