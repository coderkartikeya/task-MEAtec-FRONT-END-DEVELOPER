"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link"; // ✅ import Link
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("demo@taskflow.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const router=useRouter();

  const dateString = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );

  useEffect(() => {
    if (showDashboard) {
      const id = setTimeout(() => {}, 50);
      return () => clearTimeout(id);
    }
  }, [showDashboard]);

  // Get redirect URL from query params if available
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      // Store redirect path in sessionStorage
      sessionStorage.setItem('redirectAfterLogin', redirect);
    }
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // ✅ stop page reload

  try {
    const f = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!f.ok) {
      // handle non-200 responses
      const err = await f.json();
      setError(err.error || "Login failed");
      return;
    }

    const data = await f.json();
      // console.log("Login successful:", data);

      // Set user in auth store
      const { useAuthStore } = await import("@/store/auth");
      useAuthStore.getState().setUser({
        ...data.user,
        token: data.token,
      });

      // Check for redirect path in sessionStorage
      const redirectPath = sessionStorage.getItem('redirectAfterLogin');
      if (redirectPath) {
        sessionStorage.removeItem('redirectAfterLogin');
        router.push(redirectPath);
      } else {
        // Default redirect to dashboard
        router.push("/dashboard");
      }

      setError(""); // clear any old errors
  } catch (err) {
    console.error("Login error:", err);
    setError("Something went wrong. Please try again.");
  }
};




  return (
    <div className="gradient-bg min-h-screen">
      <div className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
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

        {/* Login Card */}
        <div className="max-w-md w-full space-y-8 relative z-10 animate-fade-in">
          {/* Header */}
          <div className="text-center">
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
            <h2 className="text-4xl font-bold text-white mb-2">TaskFlow</h2>
            <p className="text-xl text-white opacity-90">Modern Task Management</p>
            <p className="text-sm text-white opacity-70 mt-2">
              Organize • Prioritize • Achieve
            </p>
          </div>

          {/* Form */}
          <div className="glass-effect p-8 rounded-2xl shadow-2xl">
            <form className="space-y-6" onSubmit={onSubmit}>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-300 bg-white text-gray-900"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-300 bg-white text-gray-900"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
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
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-primary text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg"
              >
                Sign In to TaskFlow
              </button>

              {/* Signup Link */}
              <p className="text-center text-sm text-white/80 mt-4">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-primary-300 font-semibold hover:underline"
                >
                  Sign up
                </Link>
              </p>

              {/* Demo Info */}
              <div className="text-center pt-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <p className="text-xs text-white font-medium">
                    🚀 Demo Account Ready
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    demo@taskflow.com • password123
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");
        body {
          font-family: "Inter", sans-serif;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
        }
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
