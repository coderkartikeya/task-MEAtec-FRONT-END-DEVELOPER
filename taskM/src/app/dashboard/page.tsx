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
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'in-progress' | 'done'>('all')
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  
  useEffect(() => {
    if (!user) {
      router.replace('/login')
      return
    }
    fetchTasks()
  }, [user, router])

  // Filter tasks based on search term and status
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (task.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter
    return matchesSearch && matchesStatus
  })

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
    setShowAddTaskModal(false)
  }
  
  async function handleUpdateTaskStatus(id: string, status: 'pending' | 'in-progress' | 'done') {
    await useTasksStore.getState().updateTask(id, { status })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'in-progress': return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'done': return 'bg-green-500/20 text-green-300 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  const getTaskStats = () => {
    const total = tasks.length
    const pending = tasks.filter(t => t.status === 'pending').length
    const inProgress = tasks.filter(t => t.status === 'in-progress').length
    const done = tasks.filter(t => t.status === 'done').length
    return { total, pending, inProgress, done }
  }

  const stats = getTaskStats()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              TaskFlow Dashboard
            </h1>
            {user && (
              <p className="text-white/70 mt-2 text-lg">
                Welcome back, <span className="text-purple-300 font-medium">{user.email}</span>
              </p>
            )}
          </div>
          <button 
            onClick={onLogout} 
            className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 font-medium"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm font-medium">Total Tasks</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-yellow-300">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm font-medium">In Progress</p>
                <p className="text-2xl font-bold text-blue-300">{stats.inProgress}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold text-green-300">{stats.done}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  placeholder="Search tasks..."
                />
              </div>
              
              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Completed</option>
              </select>
            </div>
            
            {/* Add Task Button */}
            <button 
              onClick={() => setShowAddTaskModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Task
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Your Tasks
            {filteredTasks.length !== tasks.length && (
              <span className="text-purple-300 text-lg">({filteredTasks.length} of {tasks.length})</span>
            )}
          </h2>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
              <span className="ml-3 text-white/80">Loading tasks...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 mb-2">Error loading tasks</p>
              <p className="text-white/60 text-sm">{error}</p>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-white/60 text-lg mb-2">
                {tasks.length === 0 ? 'No tasks yet' : 'No tasks match your search'}
              </p>
              <p className="text-white/40 text-sm">
                {tasks.length === 0 ? 'Add your first task to get started!' : 'Try adjusting your search or filter'}
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredTasks.map((task, index) => (
                <div key={index} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-purple-200 transition-colors">
                        {task.title}
                      </h3>
                      {task.description && (
                        <p className="text-white/70 mb-3 leading-relaxed">{task.description}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>Created: {task.created_at ? new Date(task.created_at).toLocaleDateString() : 'N/A'}</span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(task.status)}`}>
                          {task.status === 'in-progress' ? 'In Progress' : 
                           task.status === 'done' ? 'Completed' : 
                           'Pending'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <select
                        value={task.status}
                        onChange={(e) => handleUpdateTaskStatus(task.id, e.target.value as any)}
                        className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                        style={{
                          colorScheme: 'dark'
                        }}
                      >
                        <option value="pending" className="bg-slate-800 text-white">Pending</option>
                        <option value="in-progress" className="bg-slate-800 text-white">In Progress</option>
                        <option value="done" className="bg-slate-800 text-white">Completed</option>
                      </select>
                      
                      <button 
                        onClick={() => useTasksStore.getState().deleteTask(task.id)}
                        className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Task Modal */}
        {showAddTaskModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 border border-white/20 rounded-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Add New Task</h3>
                <button 
                  onClick={() => setShowAddTaskModal(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleAddTask} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Task Title</label>
                  <input 
                    type="text" 
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    placeholder="Enter task title"
                    required
                    autoFocus
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Description (Optional)</label>
                  <textarea 
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none"
                    placeholder="Enter task description"
                    rows={4}
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowAddTaskModal(false)}
                    className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-medium transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}