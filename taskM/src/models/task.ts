export interface Task {
  id: string
  title: string
  description?: string
  status: 'pending' | 'in-progress' | 'done'
  user_id: string
  created_at: string
}
