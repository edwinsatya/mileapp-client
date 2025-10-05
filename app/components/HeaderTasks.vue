<template>
  <div class="flex justify-between">
    <filter-sort v-if="taskStore.tasks.length" />

    <div class="mb-4 ml-auto">
      <button
        class="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        @click="navigateTo('/create')"
      >
        Create Task
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const taskStore = useTaskStore()
</script>