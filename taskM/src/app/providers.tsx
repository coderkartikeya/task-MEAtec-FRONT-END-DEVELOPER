"use client";

import { useEffect } from 'react'
import { supabase } from '@/src/lib/supabaseClient'
import { useAuthStore } from '@/src/store/auth'

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let isMounted = true
    ;(async () => {
      const { data } = await supabase.auth.getSession()
      const session = data.session
      const user = data.session?.user
      if (!isMounted) return
      if (session && user) {
        useAuthStore.getState().setUser({ id: user.id, email: user.email ?? '', name: (user.user_metadata as any)?.name })
        // Persist token to cookie for middleware
        if (session.access_token) {
          document.cookie = `sb-access-token=${session.access_token}; Path=/; SameSite=Lax`;
        }
      }
    })()

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user
      if (session && user) {
        useAuthStore.getState().setUser({ id: user.id, email: user.email ?? '', name: (user.user_metadata as any)?.name })
        document.cookie = `sb-access-token=${session.access_token}; Path=/; SameSite=Lax`;
      } else {
        useAuthStore.getState().clearUser()
        document.cookie = `sb-access-token=; Max-Age=0; Path=/;`
      }
    })

    return () => {
      isMounted = false
      sub.subscription.unsubscribe()
    }
  }, [])

  return <>{children}</>
}
