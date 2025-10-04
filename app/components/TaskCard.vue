<template>
  <div>
    <div class="flex justify-between items-start mb-2">
      <h2 class="text-xl font-semibold text-gray-800">{{ task.title }}</h2>
      <span
        :class="{
          'bg-gradient-to-r from-green-400 to-green-600 text-white': task.status === 'completed',
          'bg-gradient-to-r from-yellow-400 to-orange-500 text-white': task.status === 'pending',
          'bg-gradient-to-r from-red-500 to-orange-600 text-white': task.status === 'overdue'
        }"
        class="px-2 py-1 rounded text-sm font-medium shadow"
      >
        {{ task.status }}
      </span>
    </div>
    <p class="text-gray-600 mb-2">{{ task.description }}</p>
    <p class="text-gray-500 text-sm mb-1">Author: {{ task.author }}</p>
    <p class="text-gray-500 text-sm mb-1">Goal: {{ task.goal }}</p>
  </div>
  <p class="text-gray-400 text-xs mt-4">
    Created At: {{ task.createdAt }}
  </p>
</template>

<script setup lang="ts">
import type { Task } from '~/types/task';

defineProps<{
  task: Task
}>()
</script>