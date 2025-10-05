<template>
  <div class="w-full mt-16 flex justify-center items-center min-h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)]">
    <div class="p-6 mx-auto">
      <h1 class="text-2xl font-bold mb-6">Edit Task</h1>
      <task-form
        v-if="task"
        v-model="task"
        submit-text="Update Task"
        :loading="pending"
        :show-delete="true"
        @submit="handleSubmit"
        @delete="handleDelete"
      />
      <loading-spinner v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue';
import type { FetchError } from 'ofetch';
import type { ErrorWithMessage } from '~/types/auth';
import type { Task, TaskResponseWithMessage } from '~/types/task';
useHead({
  title: 'Edit Task Page',
  meta: [
    { name: 'description', content: 'Edit task' },
  ]
})

definePageMeta({ layout: 'main' })

const { show } = useNotification()
const userStore = useUserStore()
const route = useRoute()
const pending = ref(false)
const task = ref<Task | null>(null)

const fetchTask = async () => {
  try {
    const res: TaskResponseWithMessage = await $fetch(`${useGetApiBase(`/tasks/${route.params.id}`)}`, {
      method: 'GET',
      headers: { token: userStore.token }
    })
    task.value = { ...res.task, dueDate: new Date(res.task.dueDate).toLocaleDateString('en-CA')}
  } catch (err) {
    const error = err as FetchError<ErrorWithMessage>
    const errMessage = useGetErrorMessage(error.data!)
    show("error", `Fetching task failed: ${errMessage}`)
    navigateTo('/')
  }
}

const handleSubmit = async () => {
  if (!task.value) return
  pending.value = true
  try {
    const res: TaskResponseWithMessage = await $fetch(`${useGetApiBase(`/tasks/${route.params.id}`)}`, {
    method: 'PUT',
    headers: { token: userStore.token },
    body: task.value
  })
    show('success', res.message)
    navigateTo('/')
  } catch(err) {
    const error = err as FetchError<ErrorWithMessage>
    const errMessage = useGetErrorMessage(error.data!)
    show("error", `Update task failed: ${errMessage}`)
  } finally {
    pending.value = false
  }
}

const handleDelete = async () => {
  pending.value = true
  try {
    const res: TaskResponseWithMessage = await $fetch(`${useGetApiBase(`/tasks/${route.params.id}`)}`, {
      method: 'DELETE',
      headers: { token: userStore.token }
    })
    show('success', res.message)
    navigateTo('/')
  } catch(err) {
    const error = err as FetchError<ErrorWithMessage>
    const errMessage = useGetErrorMessage(error.data!)
    show("error", `Delete task failed: ${errMessage}`)
  } finally {
    pending.value = false
  }
}

onMounted(fetchTask)
</script>