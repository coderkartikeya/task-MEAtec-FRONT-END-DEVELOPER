"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";


export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    startTransition(async () => {
      // signup login
      setSuccess('Account created. Please check your email if confirmation is required.');
      setTimeout(() => router.replace('/login'), 800);
    });
  }

  return (
    <main className="min-h-screen gradient-bg flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full floating-animation" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-5 rounded-full floating-animation"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-white opacity-10 rounded-full floating-animation"
          style={{ animationDelay: "-1s" }}
        />
      </div>
      
      <div className="w-full max-w-md rounded-xl glass-effect p-6 relative z-10 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce-subtle">
            <svg
              className="w-10 h-10 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-white opacity-80">Join TaskFlow and boost your productivity</p>
        </div>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-xl border border-white/20 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-300 bg-white/90 text-gray-900" placeholder="Ada Lovelace" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-xl border border-white/20 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-300 bg-white/90 text-gray-900" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full rounded-xl border border-white/20 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-300 bg-white/90 text-gray-900" placeholder="••••••••" required />
          </div>
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-white font-medium">{error}</p>
              </div>
            </div>
          )}
          {success && (
            <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-3">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-emerald-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-white font-medium">{success}</p>
              </div>
            </div>
          )}
          <button disabled={isPending} className="w-full btn-primary text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg disabled:opacity-50">
            {isPending ? "Creating..." : "Create account"}
          </button>
        </form>
        <p className="text-sm mt-4 text-white/80">Already have an account? <a className="text-primary-300 hover:text-primary-200" href="/login">Sign in</a></p>
      </div>
    </main>
  );
}
