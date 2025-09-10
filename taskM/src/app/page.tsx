import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen gradient-bg text-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[15%] w-72 h-72 bg-primary-500/30 rounded-full filter blur-3xl animate-bounce-subtle"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-bounce-subtle" style={{animationDelay: '2s'}}></div>
      </div>
      
      <header className="container mx-auto px-6 py-6 flex items-center justify-between relative z-10 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">TaskFlow</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition-all duration-300 relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#faq" className="text-white/80 hover:text-white transition-all duration-300 relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Link href="/login" className="glass-effect text-primary-600 font-medium px-5 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 ml-2">
            Sign in
          </Link>
        </nav>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <section className="container mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full glass-effect text-primary-600 text-xs font-semibold mb-6 animate-bounce-subtle">
            ✨ The modern way to manage tasks
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Organize your work.<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Ship faster.</span>
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-prose">
            Plan, prioritize, and track tasks in one beautiful place. Built with Next.js and Tailwind CSS for speed and developer joy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/signup" className="btn-primary text-white px-8 py-4 rounded-xl font-medium text-center shadow-lg">
              Get Started Free
            </Link>
            <Link href="/login" className="glass-effect text-white px-8 py-4 rounded-xl font-medium text-center border border-white/10">
              Live Demo
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="glass-effect rounded-xl p-6 shadow-xl card-hover border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-600">Today's Tasks</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-primary-600/70 bg-primary-600/10 px-2 py-1 rounded-full">Live Preview</span>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center justify-between rounded-lg glass-effect p-3 border border-white/5 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-amber-400 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                  </div>
                  <span className="font-medium">Design landing page</span>
                </div>
                <span className="rounded-full bg-amber-400/20 text-amber-400 px-3 py-1 text-xs font-medium">In Progress</span>
              </li>
              <li className="flex items-center justify-between rounded-lg glass-effect p-3 border border-white/5 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Implement auth flow</span>
                </div>
                <span className="rounded-full bg-emerald-400/20 text-emerald-400 px-3 py-1 text-xs font-medium">Completed</span>
              </li>
              <li className="flex items-center justify-between rounded-lg glass-effect p-3 border border-white/5 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-white/30 flex items-center justify-center"></div>
                  <span className="font-medium">Set up routing</span>
                </div>
                <span className="rounded-full bg-white/10 text-white/70 px-3 py-1 text-xs font-medium">Backlog</span>
              </li>
            </ul>
            <div className="mt-6 flex justify-end">
              <button className="text-xs text-primary-600 hover:text-primary-500 flex items-center gap-1 transition-colors">
                <span>View all tasks</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Powerful features for your workflow</h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">Everything you need to manage projects, organize tasks, and boost productivity.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="glass-effect rounded-xl p-8 card-hover border border-white/5 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-xl bg-primary-600/40 flex items-center justify-center mb-6 border border-primary-500/30">
              <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
            <p className="text-white/90">Optimized with Next.js App Router and edge-ready APIs for instant loading and smooth interactions.</p>
          </div>
          
          <div className="glass-effect rounded-xl p-8 card-hover border border-white/5 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-xl bg-purple-600/40 flex items-center justify-center mb-6 border border-purple-500/30">
              <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Beautiful UI</h3>
            <p className="text-white/90">Tailwind CSS design system with clean defaults and modern aesthetics for a delightful user experience.</p>
          </div>
          
          <div className="glass-effect rounded-xl p-8 card-hover border border-white/5 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-xl bg-emerald-600/40 flex items-center justify-center mb-6 border border-emerald-500/30">
              <svg className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
            <p className="text-white/90">Enterprise-grade security with data encryption and regular backups to keep your information safe.</p>
          </div>
          
          <div className="glass-effect rounded-xl p-8 card-hover border border-white/5 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-xl bg-amber-600/40 flex items-center justify-center mb-6 border border-amber-500/30">
              <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
            <p className="text-white/90">Real-time updates and seamless sharing make teamwork effortless, no matter where your team is located.</p>
          </div>
          
          <div className="glass-effect rounded-xl p-8 card-hover border border-white/5 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-xl bg-blue-600/40 flex items-center justify-center mb-6 border border-blue-500/30">
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Detailed Analytics</h3>
            <p className="text-white/90">Gain insights into your productivity with comprehensive reports and visual dashboards.</p>
          </div>
          
          <div className="glass-effect rounded-xl p-8 card-hover border border-white/5 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-xl bg-pink-600/40 flex items-center justify-center mb-6 border border-pink-500/30">
              <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Smart Scheduling</h3>
            <p className="text-white/90">Plan your work with intelligent calendar integration and automated reminders.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link href="/signup" className="btn-primary text-white px-8 py-4 rounded-xl font-medium inline-block hover:bg-white/5 transition-all">
            Explore all features
          </Link>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-10 text-sm">
        <div className="glass-effect rounded-xl p-6 border border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/80">© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}