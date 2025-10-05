<template>
  <div>
    <div class="flex justify-between items-start mb-2">
      <h2 class="text-xl font-semibold text-gray-800">{{ task.title }}</h2>
      <span
        :class="{
          'bg-gradient-to-r from-blue-400 to-blue-600 text-white': task.status == 2,
          'bg-gradient-to-r from-yellow-400 to-orange-500 text-white': task.status == 3,
          'bg-gradient-to-r from-purple-400 to-purple-600 text-white': task.status === 4,
          'bg-gradient-to-r from-green-400 to-green-600 text-white': task.status == 5,
          'bg-gradient-to-r from-gray-400 to-gray-600 text-white': task.status == 1,
        }"
        class="px-2 py-1 rounded text-sm font-medium shadow"
      >
        {{ formatStatus(task.status) }}
      </span>
    </div>
    <p class="text-gray-600 mb-2">{{ task.description }}</p>
    <p class="text-gray-500 text-sm mb-1">Author: {{ task.author }}</p>
    <p class="text-gray-500 text-sm mb-1">Goal: {{ task.goal }}</p>

    <p class="text-gray-400 text-xs mt-4">
      Created At: {{ formatDate(task.createdAt) }}
    </p>
    <p
        :class="dueDateClass(task.dueDate)"
        class="text-xs mt-1 font-medium"
      >
        Due Date: {{ formatDate(task.dueDate) }}
      </p>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types/task';

defineProps<{
  task: Task
}>()

const formatStatus = (status: number) => {
  switch (status) {
    case 1:
      return 'Todo'
    case 2:
      return 'In Progress'
    case 3:
      return 'Pending'
    case 4:
      return 'In Review'
    case 5:
      return 'Done'
    default:
      return '-'
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function dueDateClass(dueDateString: string) {
  const today = new Date()
  const due = new Date(dueDateString)
  
  today.setHours(0, 0, 0, 0)
  due.setHours(0, 0, 0, 0)

  const diffDays = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  if (diffDays === 1) {
    // Tomorrow -> Orange
    return 'text-orange-500 font-semibold'
  } else if (diffDays <= 0) {
    // Today or past -> Strong red
    return 'text-red-600 font-bold'
  } else {
    // Normal
    return 'text-gray-400'
  }
}
</script>