export interface Task {
  id: number
  createdAt: string
  title: string
  description: string
  status: number
  author: string
  goal: string
  dueDate: string
}

export interface MetaTask {
  page: number
  limit: number
  total: number
  totalPages: number 
}

export interface TaskResponse {
  tasks: Task[]
  meta: MetaTask
}