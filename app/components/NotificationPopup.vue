<template>
  <transition name="fade">
    <div
      v-if="notification"
      :class="[
        'fixed bottom-6 right-6 z-50 px-6 py-4 rounded shadow-lg text-white',
        notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'
      ]"
    >
      {{ notification.message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { notification } from '~/composables/useNotification';
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>