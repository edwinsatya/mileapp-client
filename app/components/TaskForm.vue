<template>
  <form
    class="space-y-6 max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
    @submit.prevent="onSubmit"
  >
    <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{{ submitText }}</h2>

    <div class="space-y-4">
      <input
        v-model="task.title"
        placeholder="Title"
        class="border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      >

      <textarea
        v-model="task.description"
        placeholder="Description"
        class="border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        rows="3"
        required
      />

      <select
        v-model.number="task.status"
        class="border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      >
        <option :value="1">Todo</option>
        <option :value="2">In Progress</option>
        <option :value="3">Pending</option>
        <option :value="4">In Review</option>
        <option :value="5">Done</option>
      </select>

      <input
        v-model="task.goal"
        placeholder="Goal"
        class="border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      >

      <input
        v-model="task.dueDate"
        type="date"
        :min="today"
        class="border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      >
    </div>

    <div class="flex justify-end items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
      <button
        type="button"
        class="bg-gray-300 mr-auto hover:bg-gray-700 text-white font-medium px-5 py-2 rounded transition disabled:opacity-50 cursor-pointer"
        :disabled="loading"
        @click="navigateTo('/')"
      >
        Cancel
      </button>

      <button
        v-if="showDelete"
        type="button"
        class="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition disabled:opacity-50 cursor-pointer"
        :disabled="loading"
        @click="showConfirm = true"
      >
        Delete
      </button>

      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded transition disabled:opacity-50 cursor-pointer"
        :disabled="loading"
      >
        {{ submitText }}
      </button>
    </div>
  </form>

  <!-- Delete confirmation popup -->
  <ConfirmDialog
    :visible="showConfirm"
    title="Confirm Delete"
    message="Are you sure you want to delete this task? This action cannot be undone."
    confirm-text="Yes, Delete"
    cancel-text="Cancel"
    @confirm="handleDelete"
    @cancel="showConfirm = false"
  />
</template>

<script setup lang="ts">
import type { Task } from '~/types/task';

const props = defineProps<{
  modelValue: Task
  submitText: string
  loading?: boolean
  showDelete?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: Task): void
  (e: 'submit' | 'delete'): void
}>()

const today = new Date().toISOString().split('T')[0]
const showConfirm = ref(false)

const task = computed<Task>({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})

const onSubmit = () => emits('submit')
const handleDelete = () => {
  showConfirm.value = false
  emits('delete')
}
</script>