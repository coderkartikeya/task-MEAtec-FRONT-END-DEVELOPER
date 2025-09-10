// src/app/providers.tsx
"use client";

import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("../mocks/browser").then(({ worker }) => {
        worker.start({
          onUnhandledRequest: "bypass", // ignore requests you don’t mock
        });
      });
    }
  }, []);

  return <>{children}</>;
}
