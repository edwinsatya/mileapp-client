<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <p>Only visible if logged in</p>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script setup lang="ts">
const { show } = useNotification();

async function handleLogout() {
  try {
    const data = await useApiFetch('/logout', {
      method: 'POST',
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