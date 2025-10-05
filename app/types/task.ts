export interface Task {
  id: number
  userId: number
  createdAt: string
  title: string
  description: string
  status: number
  author: string
  goal: string
  dueDate: string
}

export interface CreateTaskResponse extends Task {
  message: string
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