<template>
  <div class="p-6">
    <h1 v-show="tasks.length" class="text-3xl font-bold text-blue-400 mb-6">Task List</h1>
    <empty-tasks v-if="!tasks.length" title="No tasks available" sub-title="You have not created any tasks yet." />
    <task-list v-else :tasks="tasks" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

interface Task {
  id: number
  createdAt: string
  title: string
  description: string
  status?: string
  author: string
  goal: string
  disabled?: boolean
}

const tasks = ref<Task[]>([
   {
    id: 1,
    createdAt: '2025-10-03',
    title: 'Design homepage',
    description: 'Create the main layout for homepage using Tailwind.',
    status: 'pending',
    author: 'Edwin',
    goal: 'Frontend',
    disabled: false,
  },
  {
    id: 2,
    createdAt: '2025-10-03',
    title: 'Design homepage',
    description: 'Create the main layout for homepage using Tailwind.',
    status: 'pending',
    author: 'Edwin',
    goal: 'Frontend',
    disabled: false,
  },
  {
    id: 3,
    createdAt: '2025-10-03',
    title: 'Design homepage',
    description: 'Create the main layout for homepage using Tailwind.',
    status: 'pending',
    author: 'Edwin',
    goal: 'Frontend',
    disabled: false,
  },
  {
    id: 4,
    createdAt: '2025-10-03',
    title: 'Design homepage',
    description: 'Create the main layout for homepage using Tailwind.',
    status: 'pending',
    author: 'Edwin',
    goal: 'Frontend',
    disabled: false,
  },
])
</script>