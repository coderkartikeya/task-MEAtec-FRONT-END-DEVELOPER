"use client";

import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/src/store/auth'
import { supabase } from '@/src/lib/supabaseClient'

export default function DashboardPage() {
  const router = useRouter()
  const user = useAuthStore((s) => s.user)

  async function onLogout() {
    await supabase.auth.signOut()
    useAuthStore.getState().clearUser()
    document.cookie = `sb-access-token=; Max-Age=0; Path=/;`
    router.replace('/login')
  }

  return (
    <main className="min-h-screen container mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button onClick={onLogout} className="rounded-md bg-slate-900 text-white px-4 py-2">Logout</button>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 p-6 bg-white">
        <p className="text-slate-700">Signed in as <span className="font-semibold">{user?.email}</span></p>
      </div>
    </main>
  )
}
