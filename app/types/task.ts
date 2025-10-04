export interface Task {
  id: number
  createdAt: string
  title: string
  description: string
  status?: string
  author: string
  goal: string
}