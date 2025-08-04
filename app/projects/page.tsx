"use client"
import Link from "next/link"

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: "FI Group LMS Portal",
      description:
        "Comprehensive Learning Management System with role-based access control, user management, and integrated calendar functionalities.",
      url: "https://finursingcollege.in",
      blogUrl: "blogs.abhinavkushwaha.in",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Ngnix", "Pm2", 'GitHub Actions', "Digital Ocean"],
      featured: true,
    },
    {
      id: 2,
      title: "Daycare Management App",
      description:
        "Modern daycare management system with child tracking, parent communication, and administrative tools.",
      url: "https://daycare-management-app-design.vercel.app/",
      blogUrl: "blogs.abhinavkushwaha.in",
      tags: ["Next.js", "Prisma", "Supabase"],
      featured: true,
    },

    {
      id: 3,
      title: "Memvis(Ongoing)",
      description: "Advanced memory visualization and debugging tool for developers to analyze program memory usage.",
      url: "https://memvis.netlify.app/",
      blogUrl: "blogs.abhinavkushwaha.in",
      tags: ["JavaScript", "HTML5", "CSS3"],
      featured: false,
    },
    {
      id: 4,
      title: "Rescue & Reconnaissance Bot",
      description:
        "Disaster-survivor detection bot using real-time image processing and GPS tracking with emergency SMS alerts.",
      url: null,
      blogUrl: "blogs.abhinavkushwaha.in",
      tags: ["YOLOv5", "ESP32-CAM", "Supabase"],
      featured: false,
    },
    {
      id: 5,
      title: "E-Commerce Analytics Dashboard",
      description:
        "Real-time analytics dashboard for e-commerce platforms with advanced data visualization and reporting features.",
      url: "https://analytics-dashboard-demo.vercel.app/",
      blogUrl: "blogs.abhinavkushwaha.in",
      tags: ["Next.js", "Chart.js", "Tailwind CSS", "API Integration"],
      featured: true,
    },
  ]

  return (
    <div className="font-inter bg-[#0a0a0a] text-[#e5e5e5] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              <Link href="/" className="nav-link text-gray-400 hover:text-white text-sm font-medium">
                home
              </Link>
              <a href="#" className="nav-link active text-white text-sm font-medium">
                projects
              </a>
              <a
                href="https://blogs.abhinavkushwaha.in"
                target="_blank"
                className="nav-link text-gray-400 hover:text-white text-sm font-medium"
                rel="noreferrer"
              >
                blog
              </a>
              <Link href="/contact" className="nav-link text-gray-400 hover:text-white text-sm font-medium">
                contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:abhinavkush2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">my projects.</h1>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="project-card rounded-lg overflow-hidden bg-[#111111] border border-[#222222]"
            >
              {project.id === 1 ? (
                <div className="aspect-video website-thumbnail border-b border-gray-800 bg-[#1a1a1a] flex items-center justify-center">
                  <img src="/lmsimage.png" alt="FI Group LMS Portal" className="w-full h-full object-cover rounded" />
                </div>
              ) : project.url ? (
                <div className="aspect-video website-thumbnail border-b border-gray-800 bg-[#1a1a1a]">
                  <iframe
                    src={project.url}
                    className="w-full h-full pointer-events-none opacity-0 transition-opacity duration-300 hide-scrollbar"
                    loading="lazy"
                    style={{ overflow: 'hidden', scrollbarWidth: 'none' }}
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = "1"
                    }}
                    sandbox="allow-scripts allow-same-origin"
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video bg-gray-900 border-b border-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-robot text-4xl text-gray-600 mb-2"></i>
                    <p className="text-gray-500 text-sm">Hardware Project</p>
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-xs font-medium transition-colors"
                      rel="noreferrer"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center px-3 py-2 bg-gray-700 text-gray-400 rounded text-xs font-medium cursor-not-allowed">
                      <i className="fab fa-github mr-1"></i>
                      Private
                    </span>
                  )}
                  <Link href={`https://${project.blogUrl}`} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-blue-400 hover:text-blue-300 rounded text-xs font-medium transition-all duration-200 hover:scale-105">Read Blog</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </main >

      {/* Footer */}
      < footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-800 mt-16" >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/abhinav-kushwaha-8603b2247"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/abhii2003"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:abhinavkush2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer >
    </div >
  )
}
