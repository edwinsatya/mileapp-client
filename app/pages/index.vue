<template>
  <div class="p-6">
    <loading-spinner v-if="pending" />
    <task-list v-else-if="taskStore.tasks.length" :tasks="taskStore.tasks" />
    <empty-tasks v-else title="No tasks available" sub-title="You have not created any tasks yet." />
  </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types/task';

definePageMeta({
  layout: 'main',
})

const { show } = useNotification();
const userStore = useUserStore()
const taskStore = useTaskStore()

const { data: tasksData, pending } = await useFetch<{ tasks: Task[] }>(`${useGetApiBase('/tasks')}`, 
  {
    method: 'GET',
    headers: { token: userStore.token },
    onResponseError({ response }) {
      taskStore.setTasks([])
      show('error', `Failed to get tasks: ${response.status}`)
    }
  }
)

if (tasksData.value?.tasks) {
  taskStore.setTasks(tasksData.value.tasks)
}
</script>