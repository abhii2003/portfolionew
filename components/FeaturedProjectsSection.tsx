"use client"
import Link from "next/link"
import React, { useRef } from "react"

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
  const cardWidth = 320 + 24 // card width + gap, adjust if changed in CSS
  const totalCards = featuredProjects.length + 1 // Including the "View All Projects" card

  const scrollRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // Scroll horizontally on vertical mouse wheel
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

  // Mouse drag handlers for horizontal drag-scroll
  function onMouseDown(event) {
    if (!scrollRef.current) return
    isDragging.current = true
    startX.current = event.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = "grabbing"
  }

  function onMouseLeave() {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = "grab"
  }

  function onMouseUp() {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = "grab"
  }

  function onMouseMove(event) {
    if (!isDragging.current || !scrollRef.current) return
    event.preventDefault()
    const x = event.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5 // scroll-fast factor
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="py-16">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">featured projects.</h1>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth cursor-grab"
          onWheel={handleWheel}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          style={{ userSelect: isDragging.current ? "none" : "auto" }} // disable text selection while dragging
        >
          <div className="flex space-x-6 w-max px-4 py-2">
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

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalCards }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-400 transition-colors cursor-pointer"
              onClick={() => {
                const container = scrollRef.current
                container?.scrollTo({ left: index * cardWidth, behavior: "smooth" })
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
