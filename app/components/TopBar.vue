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
defineProps<{
  userName: string
}>()

const { show } = useNotification()

async function handleLogout() {
  try {
    const data = await useApiFetch('/logout', {
      method: 'post',
      credentials: 'include'
    })
    if (data.error) {
      const errMessage = Array.isArray(data.details)
        ? data.details.map((d: { field: string; message: string }) => `${d.field}: ${d.message}`).join('\n')
        : data.error
      show('error', errMessage)
    } else {
      show('success', 'Logout successful!')
      navigateTo('/login')
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Logout failed'
    show('error', errorMessage)
  }
}
</script>