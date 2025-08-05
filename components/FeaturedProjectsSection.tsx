"use client"
import Link from "next/link"
import React, { useRef, useState, useEffect } from "react"

const featuredProjects = [
  {
    id: 1,
    title: "FI Group LMS Portal",
    description:
      "Comprehensive Learning Management System with role-based access control, user management, and integrated calendar functionalities.",
    url: "https://finursingcollege.in",
    blogUrl: "blogs.abhinavkushwaha.in",
    tags: ["Next.js", "PostgreSQL", "Ngnix", "Pm2", "Prisma", "GitHub Actions", "Digital Ocean"],
  },
  {
    id: 2,
    title: "Daycare Management App",
    description:
      "Modern daycare management system with child tracking, parent communication, and administrative tools.",
    url: "https://daycare-management-app-design.vercel.app/",
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
]

export default function FeaturedProjectsSection() {
  const cardWidth = 320 + 24 // card width + gap
  const totalCards = featuredProjects.length + 1 // including "View All Projects"

  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return
      const scrollLeft = containerRef.current.scrollLeft
      // Calculate active index based on scrollLeft and cardWidth
      const index = Math.round(scrollLeft / cardWidth)
      setActiveIndex(index)
    }

    const container = containerRef.current
    container?.addEventListener("scroll", onScroll, { passive: true })

    return () => container?.removeEventListener("scroll", onScroll)
  }, [cardWidth])

  function scrollToIndex(index) {
    if (!containerRef.current) return
    const maxIndex = totalCards - 1
    const clampedIndex = Math.min(Math.max(index, 0), maxIndex)
    containerRef.current.scrollTo({ left: clampedIndex * cardWidth, behavior: "smooth" })
    setActiveIndex(clampedIndex)
  }

  // Scroll wheel handler for vertical scroll triggering horizontal scroll
  function handleWheel(event) {
    const container = event.currentTarget
    const canScrollLeft = container.scrollLeft > 0
    const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      if ((event.deltaY < 0 && canScrollLeft) || (event.deltaY > 0 && canScrollRight)) {
        event.preventDefault()
        container.scrollLeft += event.deltaY
      }
    }
  }

  return (
    <section className="py-16 relative">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">featured projects.</h1>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        {/* Left arrow: scroll to first dot */}
        {activeIndex > 0 && (
          <button
            onClick={() => scrollToIndex(0)}
            className="hidden md:flex items-center justify-center absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full text-white font-bold text-2xl select-none z-20"
            aria-label="Scroll to first project"
            style={{ userSelect: "none" }}
          >
            &lt;
          </button>
        )}

        {/* Right arrow: scroll to last dot */}
        {activeIndex < totalCards - 1 && (
          <button
            onClick={() => scrollToIndex(totalCards)}
            className="hidden md:flex items-center justify-center absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full text-white font-bold text-2xl select-none z-20"
            aria-label="Scroll to last project"
            style={{ userSelect: "none" }}
          >
            &gt;
          </button>
        )}

        <div
          ref={containerRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          onWheel={handleWheel}
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex space-x-6 w-max px-4 py-2 select-none">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card rounded-lg overflow-hidden bg-[#111111] border border-[#222222] w-80 flex-shrink-0 scroll-snap-align-start"
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
                      className="w-full h-full pointer-events-none opacity-0 transition-opacity duration-300 hide-scrollbar"
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
                      <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
                      rel="noreferrer"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                    </a>
                    <Link
                      href={`https://${project.blogUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-3 py-2 text-blue-400 hover:text-blue-300 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
                    >
                      Read Blog
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Extra card for View All Projects */}
              <div className="w-80 flex-shrink-0 scroll-snap-align-start">
                  <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 text-center hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:scale-105">
  
                      <div>
                          <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                              <Link href="/projects" className="flex items-center justify-center"><i className="fas fa-arrow-right text-gray-400 text-xl"></i></Link>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">View All Projects</h3>
                          <p className="text-gray-400 text-sm mb-4">Explore my complete portfolio</p>
                          <Link href="/projects" className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-md text-sm font-medium transition-colors">See More</Link>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalCards }).map((_, index) => (
            <div
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === activeIndex ? "bg-cyan-400" : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
