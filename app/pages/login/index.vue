<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-blue-700 mb-6 text-center">Login</h1>
      <auth-form
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
import type { FetchError } from 'ofetch';
import type { ErrorWithMessage, LoginResponse } from '~/types/auth';

const { show } = useNotification();
const userStore = useUserStore()

const fields = [
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' }
]

async function handleLogin(formData: Record<string, string>) {
  try {
    const res: LoginResponse = await $fetch(`${useGetApiBase('/login')}`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
    userStore.setUser(res.user)
    show('success', res.message)
    navigateTo('/')
  } catch (err) {
    const error = err as FetchError<ErrorWithMessage>
    const errMessage = useGetErrorMessage(error.data!)
    show('error', errMessage)
  }
}
</script>