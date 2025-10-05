<template>
  <div class="flex space-x-2">
    <!-- Filter Button -->
    <div class="relative">
      <button
        class="px-4 py-2 rounded-md text-black bg-gradient-to-r from-white to-blue-200 hover:from-blue-400 hover:to-blue-500 hover:text-white transition"
        @click="toggleFilter"
      >
        Filter
      </button>

      <!-- Filter Popup -->
      <transition name="fade-slide">
        <div
          v-if="showFilter"
          class="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md shadow-lg rounded-lg p-4 border border-gray-200 z-50"
        >
          <h3 class="font-semibold mb-2 text-gray-700">Filter Tasks</h3>
          <input
            v-model="localFilter.title"
            type="text"
            placeholder="Search by title"
            class="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
          <div class="mt-3 flex justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
              @click="applyFilter"
            >
              Apply
            </button>
            <button
              class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition"
              @click="resetFilter"
            >
              Reset
            </button>
          </div>
        </div>
      </transition>
    </div>

    <!-- Sort Button -->
    <div class="relative">
      <button
        class="px-4 py-2 rounded-md text-black bg-gradient-to-r from-white to-green-100 hover:from-green-400 hover:to-green-500 hover:text-white transition"
        @click="toggleSort"
      >
        Sort
      </button>

      <!-- Sort Popup -->
      <transition name="fade-slide">
        <div
          v-if="showSort"
          class="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md shadow-lg rounded-lg p-4 border border-gray-200 z-50"
        >
          <h3 class="font-semibold mb-2 text-gray-700">Sort Tasks</h3>
          <select
            v-model="localSortBy"
            class="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="createdAt">Created At</option>
            <option value="dueDate">Due Date</option>
          </select>
          <select
            v-model="localSortOrder"
            class="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <div class="mt-3 flex justify-between">
            <button
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
              @click="applySort"
            >
              Apply
            </button>
            <button
              class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition"
              @click="resetSort"
            >
              Reset
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useTaskStore } from '~/stores/task'

const taskStore = useTaskStore()

const showFilter = ref(false)
const showSort = ref(false)

function toggleFilter() {
  showFilter.value = !showFilter.value
  if (showFilter.value) showSort.value = false
}

function toggleSort() {
  showSort.value = !showSort.value
  if (showSort.value) showFilter.value = false
}

const localFilter = reactive({ ...taskStore.query.filter })
const localSortBy = ref(taskStore.query.sortBy)
const localSortOrder = ref(taskStore.query.sortOrder)

function applyFilter() {
  taskStore.setFilter({ title: localFilter.title })
  showFilter.value = false
}

function resetFilter() {
  localFilter.title = ''
  applyFilter()
}

function applySort() {
  taskStore.setSort(localSortBy.value, localSortOrder.value as 'asc' | 'desc')
  showSort.value = false
}

function resetSort() {
  localSortBy.value = 'createdAt'
  localSortOrder.value = 'desc'
  applySort()
}
</script>
