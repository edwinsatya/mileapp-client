<template>
  <h1 class="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
    Task List
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="task in tasks"
      :key="task.id"
      :class="[
        'rounded-xl cursor-pointer bg-white p-5 flex flex-col justify-between transition-transform duration-300 transform hover:-translate-y-1',
        task.status === 'completed'
          ? 'border-l-4 border-green-500 shadow-md hover:shadow-green-300/50'
          : task.status === 'pending'
          ? 'border-l-4 border-yellow-500 shadow-md hover:shadow-yellow-300/50'
          : task.status === 'overdue'
          ? 'border-l-4 border-red-500 shadow-md hover:shadow-red-300/50'
          : 'border-l-4 border-gray-300 shadow-md hover:shadow-gray-200/50'
      ]"
    >
      <task-card :task="task" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types/task';

defineProps<{
  tasks: Task[]
}>()
</script>