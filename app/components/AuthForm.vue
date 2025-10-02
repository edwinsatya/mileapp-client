<template>
  <form @submit.prevent="onSubmit">
    <div v-for="field in fields" :key="field.name" class="mb-4">
      <label :for="field.name" class="block text-gray-700 mb-2">{{ field.label }}</label>
      <input
        :id="field.name"
        v-model="form[field.name]"
        :type="field.type"
        :placeholder="field.placeholder"
        :autocomplete="getAutocomplete(field.name)"
        class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
    </div>
    <button
      type="submit"
      class="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps<{
  fields: Array<{ name: string; label: string; type: string; placeholder?: string }>
  buttonText: string
}>()

const emit = defineEmits(['submit'])

const form = reactive(
  Object.fromEntries(props.fields.map(f => [f.name, '']))
)

function onSubmit() {
  emit('submit', { ...form })
}

function getAutocomplete(name: string) {
  if (name === 'password') return 'current-password'
  return name
}
</script>