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
      filter: {
        title: ''
      },
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
      this.query = {
        ...this.query,
        page: 1,
        filter
      }
    },
    clearQuery() {
      this.query = {
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 1,
        sortBy: 'createdAt',
        sortOrder: 'desc',
        filter: {
          title: ''        
        }
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

      if (state.query.filter.title) {
        newQuery.append('title', state.query.filter.title)
      }

      return newQuery.toString();
    }
  }
});