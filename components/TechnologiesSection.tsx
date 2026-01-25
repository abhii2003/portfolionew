"use client"
export default function TechnologiesSection() {
    return (
        <section className="py-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-12">Technologies I work with</h2>
            {/* Languages, Web Frameworks & Tools */}
            <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-300 mb-6">Languages, Web Frameworks & Tools</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-4xl mx-auto">
                    <div className="tech-icon text-center"><i className="fab fa-python text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Python</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-code text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">C++</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-java text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Java</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-js-square text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">JavaScript</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-code text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">TypeScript</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-react text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">React.js</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-cube text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Next.js</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-node-js text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Node.js</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-cogs text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Express</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-html5 text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">HTML</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-css3-alt text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">CSS</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-wind text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Tailwind</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-cube text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">shadcn/ui</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-server text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">REST APIs</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-figma text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Figma</p></div>
                </div>
            </div>
            
            {/* Database & DevOps */}
            <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">Database & DevOps</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 max-w-4xl mx-auto">
                    <div className="tech-icon text-center"><i className="fas fa-database text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">PostgreSQL</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-database text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">OracleSQL</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-database text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">MySQL</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-cube text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Prisma</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-cube text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Drizzle</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-git-alt text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Git</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-gitlab text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">GitLab</p></div>
                    <div className="tech-icon text-center"><i className="fab fa-github text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">GitHub Actions</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-cloud text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">DigitalOcean</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-server text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Nginx</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-cogs text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">PM2</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-sync-alt text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">CI/CD</p></div>
                    <div className="tech-icon text-center"><i className="fas fa-tools text-3xl text-gray-400 mb-2"></i><p className="text-xs text-gray-500">Server Maintenance</p></div>
                </div>
            </div>

        </section>
    )
}
