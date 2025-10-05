<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black opacity-80 flex items-center justify-center z-50"
    >
      <div
        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-80 text-center"
      >
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {{ title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-5">
          {{ message }}
        </p>
        <div class="flex justify-center space-x-3">
          <button
            type="button"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded transition cursor-pointer"
            @click="$emit('cancel')"
          >
            {{ cancelText }}
          </button>
          <button
            type="button"
            class="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition cursor-pointer"
            @click="$emit('confirm')"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  visible: boolean
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
}>()

defineEmits<{ (e: 'confirm' | 'cancel'): void }>()

const defaults = {
  title: 'Confirm Action',
  message: 'Are you sure?',
  confirmText: 'Yes',
  cancelText: 'Cancel'
}

const title = props.title || defaults.title
const message = props.message || defaults.message
const confirmText = props.confirmText || defaults.confirmText
const cancelText = props.cancelText || defaults.cancelText
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>