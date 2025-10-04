<template>
  <div class="flex flex-col items-center justify-center mt-20 text-gray-400">
    <svg
      class="w-20 h-20 mb-4 text-gray-600"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"/>
    </svg>
    <p v-show="title" class="text-lg">{{ title }}</p>
    <p v-show="subTitle" class="text-sm text-gray-500 mt-1">{{ subTitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subTitle?: string
}>()
</script>