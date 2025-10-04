<template>
  <div class="flex justify-center mt-6 space-x-2">
    <button
      class="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md disabled:opacity-40 hover:scale-105 transform transition"
      :disabled="taskStore.query.page <= 1"
      @click="taskStore.query.page--"
    >
      Prev
    </button>
    <span class="px-3 py-1 text-gray-700 font-medium">
      Page {{ taskStore.query.page }} / {{ taskStore.query.totalPages ?? 0 }}
    </span>
    <button
      class="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md disabled:opacity-40 hover:scale-105 transform transition"
      :disabled="taskStore.query.page >= taskStore.query.totalPages"
      @click="taskStore.query.page++"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
const taskStore = useTaskStore()
</script>