import { defineStore } from 'pinia';
import type { Task } from '~/types/task';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
    query: {
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 0,
      sortBy: 'createdAt',
      sortOrder: 'desc',
      filter: {} as Record<string, string>,
    }
  }),
  actions: {
    setTasks(taskData: Task[]) {
      this.tasks = taskData;
    },
    clearTasks() {
      this.tasks = []
    },
    setPage(page: number) {
      this.query.page = page;
    },
    setSort(sortBy: string, sortOrder: 'asc' | 'desc') {
      this.query.sortBy = sortBy
      this.query.sortOrder = sortOrder
    },
    setFilter(filter: { title: string }) {
      this.query.filter = filter
    },
    clearQuery() {
      this.query = {
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 1,
        sortBy: 'createdAt',
        sortOrder: 'desc',
        filter: {}
      }
    }
  },
  getters: {
    queryParams: (state) => {
      const newQuery = new URLSearchParams({
        page: state.query.page.toString(),
        limit: state.query.limit.toString(),
        sortBy: state.query.sortBy,
        sortOrder: state.query.sortOrder,
      });

      Object.entries(state.query.filter).forEach(([k, v]) => {
        if (v) newQuery.append(`filter[${k}]`, v);
      });

      return newQuery.toString();
    }
  }
});