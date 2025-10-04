export interface Task {
  id: number
  createdAt: string
  title: string
  description: string
  status?: string
  author: string
  goal: string
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