<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-gray-100">
    <top-bar :user-name="userName" class="bg-gray-800 shadow-lg">
      <template #title>
        <span class="text-blue-400 font-bold text-2xl">mile</span>
        <span class="text-orange-400 font-bold text-2xl">app</span>
      </template>
    </top-bar>

    <main class="flex-1 p-6 bg-gray-900">
      <slot />
    </main>

    <notification-popup />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const userStore = useUserStore()
const userName = userStore.user?.name || 'Guest'
</script>