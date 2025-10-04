<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="task in tasks"
      :key="task.id"
      :class="[
        'rounded-lg shadow-lg p-5 flex flex-col justify-between transition-shadow duration-300',
        false
          ? 'bg-gray-600 opacity-50 cursor-not-allowed'
          : 'bg-gray-800 hover:shadow-blue-500/50 cursor-pointer'
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