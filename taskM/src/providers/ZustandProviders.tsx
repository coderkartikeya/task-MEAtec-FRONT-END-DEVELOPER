// src/providers/ZustandProvider.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { useAuthStore } from "@/store/auth";
import { useTasksStore } from "@/store/tasks";

export function ZustandProvider({ children }: { children: ReactNode }) {
  // Hydrate stores
  const user = useAuthStore((s) => s.user);
  
  // Set auth cookie if user exists
  useEffect(() => {
    if (user?.token) {
      document.cookie = `sb-access-token=${user.token}; path=/; max-age=3600`;
    }
  }, [user]);

  return <>{children}</>;
}
