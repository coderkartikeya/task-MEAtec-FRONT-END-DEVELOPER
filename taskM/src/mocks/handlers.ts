// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "in-progress" | "done";
  created_at: string;
  user_id: string;
}

let tasks: Task[] = [
  { 
    id: "1", 
    title: "Learn Zustand", 
    description: "Setup global state", 
    status: "pending",
    created_at: new Date().toISOString(),
    user_id: "123"
  },
  { 
    id: "2", 
    title: "Mock API", 
    description: "Use MSW for fake endpoints", 
    status: "in-progress",
    created_at: new Date().toISOString(),
    user_id: "123"
  },
];

export const handlers = [
  // Login
  http.post("/login", async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string };

    if (email === "demo@taskflow.com" && password === "password123") {
      return HttpResponse.json({
        token: "fake-jwt-token",
        user: { id: "123", email, name: "Demo User" },
      });
    }

    return HttpResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }),

  // Get tasks
  http.get("/tasks", () => {
    return HttpResponse.json(tasks);
  }),

  // Add task
  http.post("/tasks", async ({ request }) => {
    const newTask = await request.json() as Omit<Task, "id" | "created_at">;
    const task: Task = { 
      id: Date.now().toString(), 
      ...newTask, 
      created_at: new Date().toISOString() 
    };
    tasks.push(task);
    return HttpResponse.json(task, { status: 201 });
  }),

  // Update task
  http.put("/tasks/:id", async ({ params, request }) => {
    const { id } = params;
    const updates = await request.json() as Partial<Task>;
    let updatedTask: Task | null = null;
    
    tasks = tasks.map((t) => {
      if (t.id === id) {
        updatedTask = { ...t, ...updates };
        return updatedTask;
      }
      return t;
    });
    
    if (!updatedTask) {
      return HttpResponse.json({ error: "Task not found" }, { status: 404 });
    }
    
    return HttpResponse.json(updatedTask);
  }),

  // Delete task
  http.delete("/tasks/:id", ({ params }) => {
    const { id } = params;
    tasks = tasks.filter((t) => t.id !== id);
    return HttpResponse.json({ success: true });
  }),
];
