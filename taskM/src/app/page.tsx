'use client'
import React, { useState } from 'react'

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[15%] w-72 h-72 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-indigo-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Header */}
      <header className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">TaskFlow</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-white/80 hover:text-white transition-all duration-300 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#faq" className="text-white/80 hover:text-white transition-all duration-300 relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/login" className="bg-white/20 backdrop-blur-sm text-white font-medium px-5 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/20">
              Sign in
            </a>
            <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300">
              Get Started
            </a>
          </nav>
          
          {/* Mobile Hamburger */}
          
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-purple-900/95 to-blue-900/95 backdrop-blur-xl border-l border-white/20 z-40 md:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">TaskFlow</span>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <a 
                    href="#features" 
                    className="block text-white text-lg font-medium hover:text-blue-300 transition-all duration-200 hover:translate-x-2" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#faq" 
                    className="block text-white text-lg font-medium hover:text-blue-300 transition-all duration-200 hover:translate-x-2" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </a>
                </div>
                
                {/* Divider */}
                <div className="border-t border-white/20"></div>
                
                {/* Auth Buttons */}
                <div className="space-y-4">
                  <a href="/login" className="block bg-white/10 hover:bg-white/20 text-white text-center font-medium px-6 py-3 rounded-xl transition-all duration-200 border border-white/20 hover:border-white/40">
                    Sign in
                  </a>
                  <a href="/signup" className="block bg-blue-600 hover:bg-blue-700 text-white text-center font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                    Get Started Free
                  </a>
                </div>
              </div>
            </nav>
            
            {/* Footer */}
            <div className="p-6 border-t border-white/10">
              <div className="flex justify-center space-x-6">
                <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy</a>
                <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
                <a href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-6 border border-white/20">
            ✨ The modern way to manage tasks
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Organize your work.<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Ship faster.</span>
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-prose">
            Plan, prioritize, and track tasks in one beautiful place. Built with Next.js and Tailwind CSS for speed and developer joy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-center shadow-lg transition-colors">
              Get Started Free
            </a>
            <a href="/login" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-medium text-center border border-white/20 transition-colors">
              Live Demo
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free forever plan
            </span>
          </div>
        </div>
        
        {/* Task Demo Card */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Today's Tasks</h3>
              </div>
              <span className="text-xs text-blue-200 bg-blue-600/20 px-2 py-1 rounded-full border border-blue-400/30">Live Preview</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center justify-between rounded-lg bg-white/5 p-3 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                  </div>
                  <span className="font-medium text-white">Design landing page</span>
                </div>
                <span className="rounded-full bg-yellow-400/20 text-yellow-300 px-3 py-1 text-xs font-medium border border-yellow-400/30">In Progress</span>
              </li>
              <li className="flex items-center justify-between rounded-lg bg-white/5 p-3 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-green-400 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-white">Implement auth flow</span>
                </div>
                <span className="rounded-full bg-green-400/20 text-green-300 px-3 py-1 text-xs font-medium border border-green-400/30">Completed</span>
              </li>
              <li className="flex items-center justify-between rounded-lg bg-white/5 p-3 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-white/40"></div>
                  <span className="font-medium text-white">Set up routing</span>
                </div>
                <span className="rounded-full bg-white/10 text-white/70 px-3 py-1 text-xs font-medium border border-white/20">Backlog</span>
              </li>
            </ul>
            <div className="mt-6 flex justify-end">
              <a href="/signup" className="text-xs text-blue-300 hover:text-blue-200 flex items-center gap-1 transition-colors">
                <span>View all tasks</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful features for your workflow</h2>
          <p className="text-white/90 max-w-2xl mx-auto">Everything you need to manage projects, organize tasks, and boost productivity.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-blue-600/40 flex items-center justify-center mb-4 border border-blue-400/30">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-white/80 text-sm">Optimized with Next.js for instant loading and smooth interactions.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-purple-600/40 flex items-center justify-center mb-4 border border-purple-400/30">
              <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Beautiful UI</h3>
            <p className="text-white/80 text-sm">Tailwind CSS design system with modern aesthetics for a delightful experience.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-green-600/40 flex items-center justify-center mb-4 border border-green-400/30">
              <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
            <p className="text-white/80 text-sm">Enterprise-grade security with data encryption to keep your information safe.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-yellow-600/40 flex items-center justify-center mb-4 border border-yellow-400/30">
              <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Team Collaboration</h3>
            <p className="text-white/80 text-sm">Real-time updates and seamless sharing make teamwork effortless.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-blue-600/40 flex items-center justify-center mb-4 border border-blue-400/30">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Detailed Analytics</h3>
            <p className="text-white/80 text-sm">Gain insights into your productivity with comprehensive reports.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-pink-600/40 flex items-center justify-center mb-4 border border-pink-400/30">
              <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Scheduling</h3>
            <p className="text-white/80 text-sm">Plan your work with intelligent calendar integration and automated reminders.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-lg inline-block">
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/80">© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="/terms" className="text-white/80 hover:text-white transition-colors text-sm">Terms</a>
              <a href="/contact" className="text-white/80 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}