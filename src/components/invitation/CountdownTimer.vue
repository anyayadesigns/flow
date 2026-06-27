<!-- Reusable countdown. Theme-able via `accentClass` (text color utility). -->
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  // ISO string ng event date, hal. "2026-12-12T15:00:00"
  targetDate: { type: String, required: true },
  // Tailwind text color para sa numbers, hal. "text-rose-600"
  accentClass: { type: String, default: 'text-indigo-600' },
  // Kulay ng hati at label — para gumana rin sa dark background.
  dividerClass: { type: String, default: 'divide-bark/10' },
  labelClass: { type: String, default: 'text-bark/45' },
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
      class="flex items-stretch divide-x"
      :class="dividerClass"
    >
      <div
        v-for="unit in units"
        :key="unit.label"
        class="px-4 text-center sm:px-9"
      >
        <span
          class="block font-display text-5xl font-light leading-none tabular-nums sm:text-7xl"
          :class="accentClass"
        >
          {{ pad(unit.value) }}
        </span>
        <span
          class="mt-2.5 block text-[0.55rem] font-medium uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.3em]"
          :class="labelClass"
        >
          {{ unit.label }}
        </span>
      </div>
    </div>
    <p v-else class="font-display text-3xl font-light" :class="accentClass">
      It's happening today!
    </p>
  </div>
</template>
