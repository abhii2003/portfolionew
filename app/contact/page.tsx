"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              <Link href="/projects" className="nav-link text-gray-400 hover:text-white text-sm font-medium">
                projects
              </Link>
              <a
                href="https://blogs.abhinavkushwaha.in"
                target="_blank"
                className="nav-link text-gray-400 hover:text-white text-sm font-medium"
                rel="noreferrer"
              >
                blog
              </a>
              <a href="#" className="nav-link active text-white text-sm font-medium">
                contact
              </a>
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">contact me.</h1>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="form-input w-full px-4 py-3 rounded-md text-white placeholder-gray-400 bg-[#111111] border border-[#222222] focus:border-[#333333] outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-input w-full px-4 py-3 rounded-md text-white placeholder-gray-400 bg-[#111111] border border-[#222222] focus:border-[#333333] outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
                rows={6}
                className="form-input w-full px-4 py-3 rounded-md text-white placeholder-gray-400 bg-[#111111] border border-[#222222] focus:border-[#333333] outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 text-black py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
            >
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-800 mt-16">
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
      </footer>
    </div>
  )
}
