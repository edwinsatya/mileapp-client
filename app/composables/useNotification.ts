import { ref } from 'vue';

export const notification = ref<{ type: 'success' | 'error'; message: string } | null>(null)

export function useNotification() {
  function show(type: 'success' | 'error', message: string, timeout = 3000) {
    notification.value = { type, message }
    setTimeout(() => {
      notification.value = null
    }, timeout)
  }
  return { notification, show }
}