<template>
  <form class="space-y-4 max-w-lg" @submit.prevent="onSubmit">
    <input
      v-model="task.title"
      placeholder="Title"
      class="border p-2 w-full rounded"
      required
    >

    <textarea
      v-model="task.description"
      placeholder="Description"
      class="border p-2 w-full rounded"
      required
    />

    <select v-model.number="task.status" class="border p-2 w-full rounded" required>
      <option :value="1">Todo</option>
      <option :value="2">In Progress</option>
      <option :value="3">Pending</option>
      <option :value="4">In Review</option>
      <option :value="5">Done</option>
    </select>

    <input
      v-model="task.goal"
      placeholder="Goal"
      class="border p-2 w-full rounded"
      required
    >

    <input
      v-model="task.dueDate"
      type="date"
      :min="today"
      class="border p-2 w-full rounded"
      required
    >

    <div class="flex space-x-2">
      <button
        type="submit"
        class="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="loading"
      >
        {{ submitText }}
      </button>

      <button
        v-if="showDelete"
        type="button"
        class="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="loading"
        @click="onDeleteClick"
      >
        Delete
      </button>
    </div>
  </form>
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

const task = computed<Task>({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})

const onSubmit = () => emits('submit')
const onDeleteClick = () => emits('delete')
</script>