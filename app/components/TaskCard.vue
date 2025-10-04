<template>
  <div>
    <div class="flex justify-between items-start mb-2">
      <h2 class="text-xl font-semibold text-gray-100">{{ task.title }}</h2>
      <span
        :class="{
          'bg-green-600 text-green-100': task.status === 'completed',
          'bg-yellow-500 text-yellow-100': task.status === 'pending',
          'bg-red-600 text-red-100': task.status === 'overdue'
        }"
        class="px-2 py-1 rounded text-sm font-medium"
      >
        {{ task.status }}
      </span>
    </div>
    <p class="text-gray-300 mb-2">{{ task.description }}</p>
    <p class="text-gray-400 text-sm mb-1">Author: {{ task.author }}</p>
    <p class="text-gray-400 text-sm mb-1">Goal: {{ task.goal }}</p>
  </div>
  <p class="text-gray-500 text-xs mt-4">
    Created At: {{ task.createdAt }}
  </p>
</template>

<script setup lang="ts">
import type { Task } from '~/types/task';

defineProps<{
  task: Task
}>()
</script>