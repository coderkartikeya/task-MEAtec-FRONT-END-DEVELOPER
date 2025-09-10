"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { User } from "../models/user";

// Extend User model with JWT
export interface AuthUser extends User {
  token?: string;
}

type AuthState = {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  clearUser: () => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user) => set({ user }),

      clearUser: () => set({ user: null }),

      
      login: async (email: string, password: string) => {
        try {
          const res = await fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            const err = await res.json();
            console.error("Login failed:", err);
            return false;
          }

          const data = await res.json();
          set({ user: { ...data.user, token: data.token } });
          return true;
        } catch (err) {
          console.error("Login error:", err);
          return false;
        }
      },

      
      logout: async () => {
        try {
          // If we later use Supabase:
          // await supabase.auth.signOut();

          set({ user: null });

          if (typeof document !== "undefined") {
            document.cookie = `sb-access-token=; Max-Age=0; Path=/;`;
          }
        } catch (err) {
          console.error("Logout error:", err);
        }
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user }), 
    }
  )
);
