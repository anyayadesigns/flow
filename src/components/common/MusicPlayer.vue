<!-- Floating background-music toggle para sa demos. Umiikot ang button habang tumutugtog. -->
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Lahat ng mp3 sa src/assets/mp3/ — bina-bundle ni Vite (gumagana sa /flow/ GitHub Pages).
// Bawat demo may sariling kanta: wedding.mp3, debut.mp3, birthday.mp3.
const modules = import.meta.glob('../../assets/mp3/*.mp3', { eager: true, query: '?url', import: 'default' })
const byName = {}
for (const [path, url] of Object.entries(modules)) {
  byName[path.split('/').pop()] = url
}

const props = defineProps({
  // Filename ng kanta para sa demong ito, hal. "debut.mp3"
  src: { type: String, default: '' },
})

// Piliin ang tamang kanta; kung wala pa ang file, mag-fallback sa wedding.mp3.
const songUrl = computed(
  () => byName[props.src] || byName['wedding.mp3'] || Object.values(byName)[0] || ''
)

const audio = ref(null)
const playing = ref(false)

// Module-level singleton — iisang audio lang ang puwedeng tumugtog sa isang
// pagkakataon. Pinipigilan nito ang dobleng tunog (hal. sa Vite HMR o mabilisang
// paglipat ng page kung saan nag-overlap ang luma at bagong instance).
let currentEl = null
function claimPlayback(el) {
  if (currentEl && currentEl !== el) {
    currentEl.pause()
  }
  currentEl = el
}

function start(el) {
  claimPlayback(el)
  el.volume = 0.5
  el.play().then(() => { playing.value = true }).catch(() => { playing.value = false })
}

function toggle() {
  const el = audio.value
  if (!el) return
  if (playing.value) {
    el.pause()
    playing.value = false
  } else {
    start(el)
  }
}

// Subukang auto-play pagkarating sa page (madalas i-block ng browser hangga't
// walang user interaction — kaya may fallback sa manual click).
onMounted(() => {
  if (audio.value) start(audio.value)
})

onBeforeUnmount(() => {
  if (audio.value) {
    audio.value.pause()
    if (currentEl === audio.value) currentEl = null
  }
})

// Linisin ang stale na audio tuwing mag-hot-reload ang module sa dev.
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if (currentEl) { currentEl.pause(); currentEl = null }
  })
}
</script>

<template>
  <div class="fixed bottom-5 right-5 z-50">
    <audio ref="audio" :src="songUrl" loop preload="auto" />
    <button
      type="button"
      @click="toggle"
      class="group relative flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 text-sage-deep shadow-lg ring-1 ring-sage/20 backdrop-blur transition hover:bg-cream"
      :aria-label="playing ? 'Pause music' : 'Play music'"
    >
      <!-- Pulsing ring kapag tumutugtog -->
      <span
        v-if="playing"
        class="absolute inset-0 animate-ping rounded-full bg-sage/30"
        aria-hidden="true"
      />
      <!-- Umiikot na disc + music note habang playing; tigil kapag paused -->
      <svg
        class="relative h-6 w-6"
        :class="playing ? '[animation:spin_3.5s_linear_infinite]' : ''"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <!-- vinyl disc -->
        <circle cx="12" cy="12" r="9.25" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <!-- music note sa loob -->
        <path d="M10.5 9.2v4.6M10.5 9.2l4-1.1v4.6" />
        <path d="M10.5 13.8a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm4-1.1a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z" />
      </svg>
    </button>
  </div>
</template>
