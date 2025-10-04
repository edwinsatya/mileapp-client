<template>
  <div class="mt-16 flex flex-col min-h-[calc(100vh-6rem)]">
    <div class="p-6 flex-1">
      <loading-spinner v-if="pending" />
      <task-list v-else-if="data?.tasks?.length" :tasks="data.tasks" />
      <empty-tasks v-else title="No tasks available" sub-title="You have not created any tasks yet." />
    </div>

    <div class="sticky bottom-0 bg-white/50 backdrop-blur-sm shadow-inner w-full p-6 flex justify-center">
      <pagination-page v-if="(taskStore.query.totalPages > 1) && !pending && data?.tasks?.length" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TaskResponse } from '~/types/task';

definePageMeta({ layout: 'main' })

const { show } = useNotification();
const userStore = useUserStore();
const taskStore = useTaskStore();

const { data, pending } = await useFetch<TaskResponse>(
  () => `${useGetApiBase('/tasks')}?${taskStore.queryParams}`,
  {
    headers: { token: userStore.token },
    onResponseError({ response }) {
      taskStore.clearTasks();
      show('error', `Failed to get tasks: ${response.status}`);
    },
  }
);

if (data.value) {
  taskStore.$patch({
    query: {
      page: data.value.meta.page,
      totalPages: data.value.meta.totalPages
    }
  })
}
</script>