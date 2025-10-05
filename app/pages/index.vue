<template>
  <div class="mt-16 flex flex-col min-h-screen">
    <div class="p-6 flex-1">
      <header-tasks />
      <loading-spinner v-if="pending" title="Loading tasks..." />
      <task-list v-else-if="data?.tasks?.length" :tasks="data.tasks" />
      <empty-tasks v-else title="No tasks available" sub-title="You have not created any tasks yet." />
    </div>

    <client-only>
      <div v-if="(taskStore.query.totalPages > 1) && !pending && data?.tasks?.length" class="sticky bottom-0 bg-white/50 backdrop-blur-sm shadow-inner w-full p-6 flex justify-center">
        <pagination-page />
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import type { TaskResponse } from '~/types/task';
useHead({
  title: 'Task List',
  meta: [
    { name: 'description', content: 'Task Management' },
  ]
})

definePageMeta({ layout: 'main' })

const { show } = useNotification();
const userStore = useUserStore();
const taskStore = useTaskStore();

const { data, pending } = useFetch<TaskResponse>(
  () => `${useGetApiBase('/tasks')}?${taskStore.queryParams}`,
  {
    headers: { token: userStore.token },
    onResponse({ response }) {
      taskStore.$patch({
        tasks: response._data?.tasks,
        query: {
          page: response._data?.meta.page,
          totalPages: response._data?.meta.totalPages
        }
      })
    },
    onResponseError({ response }) {
      taskStore.clearTasks()
      show('error', `Failed to get tasks: ${response.status}`)
    },
  }
)
</script>