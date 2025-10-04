<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
    <top-bar :user-name="userName" class="bg-white/80 backdrop-blur-md shadow-md">
      <template #title>
        <span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold text-2xl">Mile</span>
        <span class="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-bold text-2xl ml-1">App</span>
      </template>
    </top-bar>

    <main class="flex-1">
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