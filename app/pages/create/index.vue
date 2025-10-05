<template>
  <div class="w-full mt-16 flex justify-center items-center min-h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)]">
    <div class="p-6 mx-auto">
      <h1 class="text-2xl font-bold mb-6">Create Task</h1>
      <task-form
        v-model="task"
        submit-text="Create Task"
        :loading="pending"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FetchError } from 'ofetch';
import type { ErrorWithMessage } from '~/types/auth';
import type { Task, TaskResponseWithMessage } from '~/types/task';
useHead({
  title: 'Create Task Page',
  meta: [
    { name: 'description', content: 'Create task' },
  ]
})

definePageMeta({ layout: 'main' })

const { show } = useNotification()
const userStore = useUserStore()
const pending = ref(false)

const task = ref<Task>({
  id: 0,
  userId: 0,
  title: '',
  description: '',
  status: 1,
  goal: '',
  dueDate: (new Date().toISOString().split('T')[0] as string),
  author: '',
  createdAt: new Date().toISOString(),
})

const handleSubmit = async () => {
  pending.value = true
  try {
    const payload = { ...task.value, dueDate: new Date(task.value.dueDate).toISOString() }
    const res: TaskResponseWithMessage = await $fetch(`${useGetApiBase('/tasks')}`, {
      method: 'POST',
      headers: { token: userStore.token },
      body: payload,
    })
    show('success', res.message)
    navigateTo('/')
  } catch (err) {
    const error = err as FetchError<ErrorWithMessage>
    const errMessage = useGetErrorMessage(error.data!)
    show('error', errMessage)
  } finally {
    pending.value = false
  }
}
</script>