<!-- Sticky navbar — transparent sa hero, sumosolid sa scroll; may mobile hamburger menu. -->
<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { contact, mailtoInquiry } from '@/data/contact'
import { business } from '@/data/site'

const route = useRoute()
const router = useRouter()
const scrolled = ref(false)
const open = ref(false) // mobile menu

// Solid kapag naka-scroll, naka-bukas ang mobile menu, o wala sa home.
const solid = computed(() => scrolled.value || open.value || route.path !== '/')

function onScroll() {
  scrolled.value = window.scrollY > 40
}
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

async function go(id) {
  open.value = false
  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
    setTimeout(() => scrollToId(id), 80)
  } else {
    scrollToId(id)
  }
}

const links = [
  { id: 'services', label: 'Services' },
  { id: 'demos', label: 'Demos' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
]
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="solid ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
      <RouterLink
        to="/"
        class="font-script text-2xl leading-none transition-colors"
        :class="solid ? 'text-rosedust' : 'text-cream'"
        @click="open = false"
      >
        {{ business.name }}
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-7 md:flex">
        <button
          v-for="l in links"
          :key="l.id"
          type="button"
          class="text-sm tracking-wide transition-colors"
          :class="solid ? 'text-bark/70 hover:text-sage-deep' : 'text-cream/85 hover:text-cream'"
          @click="go(l.id)"
        >
          {{ l.label }}
        </button>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="contact.email ? mailtoInquiry : contact.facebookUrl"
          :target="contact.email ? null : '_blank'"
          :rel="contact.email ? null : 'noopener'"
          class="hidden rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors sm:inline-flex"
          :class="solid ? 'bg-sage text-cream hover:bg-sage-deep' : 'bg-cream/90 text-sage-deep hover:bg-cream'"
        >
          {{ contact.email ? 'Inquire' : 'Message us' }}
        </a>

        <!-- Hamburger (mobile only) -->
        <button
          type="button"
          class="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden"
          :class="solid ? 'text-sage-deep hover:bg-sage/10' : 'text-cream hover:bg-cream/10'"
          :aria-expanded="open"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <svg v-if="!open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6">
            <path stroke-linecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <Transition name="menu">
      <nav
        v-if="open"
        class="border-t border-sage/15 bg-cream/95 px-5 pb-6 pt-2 backdrop-blur md:hidden"
      >
        <button
          v-for="l in links"
          :key="l.id"
          type="button"
          class="block w-full border-b border-sage/10 py-3.5 text-left font-display text-xl text-sage-deep"
          @click="go(l.id)"
        >
          {{ l.label }}
        </button>
        <a
          :href="contact.email ? mailtoInquiry : contact.facebookUrl"
          :target="contact.email ? null : '_blank'"
          :rel="contact.email ? null : 'noopener'"
          class="mt-5 block rounded-full bg-sage px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.15em] text-cream transition hover:bg-sage-deep"
          @click="open = false"
        >
          {{ contact.email ? 'Inquire' : 'Message us' }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
