<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-blue-700 mb-6 text-center">Login</h1>
      <AuthForm
        :fields="fields"
        button-text="Login"
        @submit="handleLogin"
      />
      <div class="mt-4 text-center">
        <NuxtLink to="/register" class="text-blue-600 hover:underline">
          Don't have an account? Register
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const { show } = useNotification();

const fields = [
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' }
]

async function handleLogin(formData: Record<string, string>) {
  const userStore = useUserStore()
  
  try {
    const data = await useApiFetch('/login', {
      method: 'post',
      body: JSON.stringify(formData),
      credentials: 'include'
    })
    if (data.error) {
      const errMessage = Array.isArray(data.details)
        ? data.details.map((d: { field: string; message: string }) => `${d.field}: ${d.message}`).join('\n')
        : data.error
      show('error', errMessage)
    } else {
      userStore.setUser(data.user) 
      show('success', 'Login successful!')
      navigateTo('/')
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Login failed'
    show('error', errorMessage)
  }
}
</script>