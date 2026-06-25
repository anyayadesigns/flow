<!-- Reusable countdown. Theme-able via `accentClass` (text color utility). -->
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  // ISO string ng event date, hal. "2026-12-12T15:00:00"
  targetDate: { type: String, required: true },
  // Tailwind text color para sa numbers, hal. "text-rose-600"
  accentClass: { type: String, default: 'text-indigo-600' },
})

const now = ref(new Date())
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})

const remaining = computed(() => {
  const diff = new Date(props.targetDate).getTime() - now.value.getTime()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  }
})

const units = computed(() => [
  { label: 'Days', value: remaining.value.days },
  { label: 'Hours', value: remaining.value.hours },
  { label: 'Minutes', value: remaining.value.minutes },
  { label: 'Seconds', value: remaining.value.seconds },
])

const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <div class="flex justify-center">
    <div
      v-if="!remaining.done"
      class="mx-auto grid max-w-md grid-cols-4 gap-2 sm:gap-4"
    >
      <div
        v-for="unit in units"
        :key="unit.label"
        class="flex flex-col items-center rounded-xl bg-white/70 px-1 py-3 shadow-sm backdrop-blur sm:rounded-2xl sm:px-5 sm:py-4"
      >
        <span
          class="text-2xl font-bold tabular-nums sm:text-4xl"
          :class="accentClass"
        >
          {{ pad(unit.value) }}
        </span>
        <span class="mt-1 text-[0.55rem] font-medium uppercase tracking-tight text-slate-500 sm:text-xs sm:tracking-wider">
          {{ unit.label }}
        </span>
      </div>
    </div>
    <p v-else class="text-lg font-semibold" :class="accentClass">
      It's happening today!
    </p>
  </div>
</template>
