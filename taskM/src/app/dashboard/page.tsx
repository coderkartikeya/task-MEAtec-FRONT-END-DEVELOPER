"use client";

import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'
import { useTasksStore } from '@/store/tasks'
import { useEffect, useState } from 'react'


export default function DashboardPage() {
  const router = useRouter()
  const user = useAuthStore((s) => s.user)
  const { tasks, loading, error, fetchTasks } = useTasksStore()
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskDescription, setNewTaskDescription] = useState('')
  
  useEffect(() => {
    // Check if user is authenticated
    if (!user) {
      router.replace('/login')
      return
    }
    
    // Fetch tasks if user is authenticated
    fetchTasks()
  }, [user, router])

  async function onLogout() {
    await useAuthStore.getState().logout()
    router.replace('/login')
  }
  
  async function handleAddTask(e: React.FormEvent) {
    e.preventDefault()
    if (!newTaskTitle.trim()) return
    
    await useTasksStore.getState().addTask({
      title: newTaskTitle,
      description: newTaskDescription,
      status: 'pending',
      user_id: user?.id || ''
    })
    
    setNewTaskTitle('')
    setNewTaskDescription('')
  }
  
  async function handleUpdateTaskStatus(id: string, status: 'pending' | 'in-progress' | 'done') {
    await useTasksStore.getState().updateTask(id, { status })
  }

  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">TaskFlow Dashboard</h1>
            {user && <p className="text-white mt-2">Welcome, {user.email}</p>}
          </div>
          <button onClick={onLogout} className="btn-primary text-white px-4 py-2 rounded-lg">Logout</button>
        </div>
        
        <div className="mt-6 glass-effect rounded-xl p-6">
          <p className="text-white mb-4">Welcome, <span className="font-semibold">{user?.email}</span></p>
          
          {/* Add New Task Form */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Add New Task</h2>
            <form onSubmit={handleAddTask} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Task Title</label>
                <input 
                  type="text" 
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full rounded-lg border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-300 bg-white/90 text-gray-900"
                  placeholder="Enter task title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Description (Optional)</label>
                <textarea 
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  className="w-full rounded-lg border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-300 bg-white/90 text-gray-900"
                  placeholder="Enter task description"
                  rows={3}
                />
              </div>
              <button 
                type="submit" 
                className="btn-primary text-white py-2 px-4 rounded-lg font-medium"
              >
                Add Task
              </button>
            </form>
          </div>
          
          {/* Task List */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Your Tasks</h2>
            {loading ? (
              <p className="text-white/80">Loading tasks...</p>
            ) : error ? (
              <p className="text-red-400">Error: {error}</p>
            ) : tasks.length === 0 ? (
              <p className="text-white/80">No tasks yet. Add your first task above!</p>
            ) : (
              <div className="space-y-3">
                {tasks.map((task,index) => (
                  <div key={index} className="glass-effect p-4 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-white">{task.title}</h3>
                        {task.description && (
                          <p className="text-white/80 text-sm mt-1">{task.description}</p>
                        )}
                        <p className="text-xs text-white/60 mt-2">
                          Created: {task.created_at ? new Date(task.created_at).toLocaleDateString() : 'N/A'}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <select
                          value={task.status}
                          onChange={(e) => handleUpdateTaskStatus(task.id, e.target.value as 'pending' | 'in-progress' | 'done')}
                          className="text-xs rounded-full px-2 py-1 bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-1 focus:ring-white/50"
                        >
                          <option value="pending">Pending</option>
                          <option value="in-progress">In Progress</option>
                          <option value="done">Done</option>
                        </select>
                        <button 
                          onClick={() => useTasksStore.getState().deleteTask(task.id)}
                          className="text-xs rounded-full px-2 py-1 bg-red-500/20 text-white border border-red-500/30 hover:bg-red-500/40 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      {task.status === 'pending' && (
                        <span className="inline-block rounded-full bg-yellow-400/20 text-yellow-300 px-2 py-0.5 text-xs font-medium">Pending</span>
                      )}
                      {task.status === 'in-progress' && (
                        <span className="inline-block rounded-full bg-blue-400/20 text-blue-300 px-2 py-0.5 text-xs font-medium">In Progress</span>
                      )}
                      {task.status === 'done' && (
                        <span className="inline-block rounded-full bg-green-400/20 text-green-300 px-2 py-0.5 text-xs font-medium">Completed</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
