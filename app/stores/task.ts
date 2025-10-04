import { defineStore } from 'pinia';
import type { Task } from '~/types/task';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    setTasks(taskData: Task[]) {
      this.tasks = taskData
    },
    clearTasks() {
      this.tasks = []
    }
  }
})