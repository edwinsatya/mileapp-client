<template>
  <ClientOnly>
    <div class="min-h-screen flex items-center justify-center bg-blue-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-blue-700 mb-6 text-center">Register</h1>
        <AuthForm
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
  </ClientOnly>
</template>

<script setup lang="ts">
const { show } = useNotification();
const router = useRouter()
const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' }
]

async function handleRegister(formData: Record<string, string>) {
  try {
    const data = await useApiFetch('/register', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    if (data.error) {
      const errMessage = Array.isArray(data.details)
        ? data.details.map((d: { field: string; message: string }) => `${d.field}: ${d.message}`).join('\n')
        : data.error
      show('error', errMessage)
    } else {
      show('success', 'Registration successful!')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Registration failed'
    show('error', errorMessage)
  }
}
</script>