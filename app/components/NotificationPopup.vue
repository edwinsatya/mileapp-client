<template>
  <transition
    enter-active-class="animate-fade-in-up"
    leave-active-class="animate-fade-out"
  >
    <div
      v-if="notification"
      :class="[
        'fixed bottom-6 right-6 z-50 px-6 py-4 rounded shadow-lg text-white font-medium transform transition-all',
        notification.type === 'success'
          ? 'bg-gradient-to-r from-green-400 to-green-600 shadow-green-400/50'
          : 'bg-gradient-to-r from-red-400 to-red-600 shadow-red-400/50'
      ]"
    >
      {{ notification.message }}
    </div>
  </transition>
</template>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0));
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2));
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.35s ease-out forwards;
}

.animate-fade-out {
  animation: fadeOut 0.25s ease-in forwards;
}
</style>