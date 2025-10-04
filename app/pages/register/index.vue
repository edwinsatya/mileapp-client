<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-blue-700 mb-6 text-center">Register</h1>
      <auth-form
        :fields="fields"
        button-text="Register"
        @submit="handleRegister"
      />
      <div class="mt-4 text-center">
        <NuxtLink to="/login" class="text-blue-600 hover:underline">
          Already have an account? Login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FetchError } from 'ofetch';
import type { ErrorWithMessage, RegisterResponse } from '~/types/auth';
const { show } = useNotification();

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' }
]

async function handleRegister(formData: Record<string, string>) {
  try {
    const res: RegisterResponse = await $fetch(`${useGetApiBase('/register')}`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
    show('success', res.message)
    navigateTo('/login')
  } catch (err) {
    const error = err as FetchError<ErrorWithMessage>
    const errMessage = useGetErrorMessage(error.data!)
    show('error', errMessage)
  }
}
</script>