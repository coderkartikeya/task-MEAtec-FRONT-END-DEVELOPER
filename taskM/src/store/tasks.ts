"use client";

import { create } from "zustand";
import type { Task } from "../models/task";
import { useAuthStore } from "./auth";

type TaskState = {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  fetchTasks: () => Promise<void>;
  addTask: (task: Omit<Task, "id" | "created_at">) => Promise<void>;
  updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
};

export const useTasksStore = create<TaskState>((set, get) => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async () => {
    const user = useAuthStore.getState().user;
    if (!user) {
      set({ tasks: [] });
      return;
    }

    set({ loading: true, error: null });
    try {
      const res = await fetch("/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");

      const data = (await res.json()) as Task[];
      set({ tasks: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  addTask: async (task) => {
    try {
      const res = await fetch("/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      if (!res.ok) throw new Error("Failed to add task");

      const newTask = (await res.json()) as Task;
      set({ tasks: [newTask, ...get().tasks] });
    } catch (err) {
      console.error("Add task error:", err);
    }
  },

  updateTask: async (id, updates) => {
    try {
      const res = await fetch(`/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error("Failed to update task");

      const updated = (await res.json()) as Task;
      set({
        tasks: get().tasks.map((t) => (t.id === id ? updated : t)),
      });
    } catch (err) {
      console.error("Update task error:", err);
    }
  },

  deleteTask: async (id) => {
    try {
      const res = await fetch(`/tasks/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete task");

      set({ tasks: get().tasks.filter((t) => t.id !== id) });
    } catch (err) {
      console.error("Delete task error:", err);
    }
  },
}));
