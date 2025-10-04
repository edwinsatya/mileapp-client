<template>
  <nav class="flex items-center justify-between p-4 bg-gray-800 text-gray-100 shadow-md">
    <div class="text-2xl font-bold">
      <slot name="title" />
    </div>

    <div class="flex items-center space-x-3">
      <span class="font-medium text-gray-100">{{ userName }}</span>
      <button
        class="px-2 cursor-pointer text-sm bg-red-500 pt-1 pb-2 text-white rounded-md hover:bg-red-600 transition flex items-center justify-center"
        @click="handleLogout"
      >
        <span>Logout</span>
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
</script>