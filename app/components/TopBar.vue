<template>
  <nav
    class="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 bg-white/90 backdrop-blur-md text-gray-800 shadow-md z-50 transition-shadow duration-300"
    :class="{ 'shadow-xl': isScrolled }"
  >
    <div class="text-2xl font-bold">
      <slot name="title" />
    </div>

    <div class="flex items-center space-x-3">
      <span class="font-medium text-gray-800">{{ userName }}</span>
      <button
        class="px-3 py-1 cursor-pointer text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition flex items-center justify-center"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { FetchError } from 'ofetch';
import type { ErrorWithMessage } from '~/types/auth';

defineProps<{
  userName: string
}>()

const { show } = useNotification()
const userStore = useUserStore()

async function handleLogout() {
  try {
    await $fetch(`${useGetApiBase('/logout')}`, {
      method: 'POST',
      credentials: 'include'
    })
    show('success', 'Logout successful!')
    userStore.clearUser()
    navigateTo('/login')
  } catch (err) {
    const error = err as FetchError<ErrorWithMessage>
    const errMessage = useGetErrorMessage(error.data!)
    show('error', errMessage)
  }
}

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>