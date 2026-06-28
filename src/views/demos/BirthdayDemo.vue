<!-- DEMO 3: Birthday — warm, playful, pero refined. -->
<script setup>
import { birthdayDemo as d } from '@/data/demoInvitations'
import CountdownTimer from '@/components/invitation/CountdownTimer.vue'
import EventDetails from '@/components/invitation/EventDetails.vue'
import MapEmbed from '@/components/invitation/MapEmbed.vue'
import PhotoGallery from '@/components/invitation/PhotoGallery.vue'
import RsvpForm from '@/components/invitation/RsvpForm.vue'
import DemoCta from '@/components/common/DemoCta.vue'
import MusicPlayer from '@/components/common/MusicPlayer.vue'
import PartyBalloons from '@/components/common/PartyBalloons.vue'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Hero (with background image) -->
    <section class="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-28 text-center">
      <!-- Background photo -->
      <img
        :src="d.heroImage"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-amber-800/45 via-orange-600/30 to-rose-700/55" aria-hidden="true" />

      <!-- Balloons -->
      <PartyBalloons class="pointer-events-none absolute -left-5 top-4 h-32 w-auto animate-bob sm:left-6 sm:h-44" />
      <PartyBalloons class="pointer-events-none absolute -right-5 top-10 h-28 w-auto -scale-x-100 animate-bob [animation-delay:0.6s] sm:right-8 sm:h-40" />

      <!-- Confetti -->
      <span class="pointer-events-none absolute left-[16%] top-[24%] h-2.5 w-2.5 animate-bob rounded-full bg-yellow-300" />
      <span class="pointer-events-none absolute right-[20%] top-[30%] h-2 w-2 animate-bob rounded-full bg-teal-300 [animation-delay:0.4s]" />
      <span class="pointer-events-none absolute bottom-[28%] left-[26%] h-2 w-2 rotate-45 animate-bob bg-rose-300 [animation-delay:0.8s]" />
      <span class="pointer-events-none absolute bottom-[32%] right-[15%] h-2.5 w-2.5 animate-bob rounded-full bg-orange-300 [animation-delay:0.2s]" />
      <span class="pointer-events-none absolute left-[11%] top-[46%] h-2 w-2 animate-bob rounded-full bg-sky-300 [animation-delay:1s]" />

      <div class="relative text-cream">
        <p v-reveal class="font-script text-3xl sm:text-4xl">you're invited</p>
        <h1 v-reveal="100" class="mt-3 font-display text-4xl font-light tracking-tight drop-shadow sm:text-7xl">
          {{ d.celebrant }}
        </h1>
        <div v-reveal="200" class="mx-auto my-8 flex w-fit items-center gap-3 text-cream/90" aria-hidden="true">
          <span class="h-px w-10 bg-cream/60" /><span class="text-base">🎈</span><span class="h-px w-10 bg-cream/60" />
        </div>
        <p v-reveal="250" class="mx-auto max-w-md text-cream/95 [text-shadow:0_1px_4px_rgb(0_0_0/0.35)]">{{ d.tagline }}</p>
        <p v-reveal="300" class="mt-4 font-display text-2xl text-cream">{{ d.dateLabel }}</p>
      </div>

      <button
        type="button"
        @click="scrollTo('party')"
        class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/80 transition hover:text-cream"
        aria-label="Scroll down"
      >
        <span class="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <svg class="h-5 w-5 animate-bob" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>

    <!-- Countdown (clean) -->
    <section id="party" class="bg-amber-50/60 px-6 py-20 text-center sm:py-24">
      <p v-reveal class="text-xs uppercase tracking-[0.3em] text-amber-600">Party starts in</p>
      <div v-reveal class="mx-auto my-6 flex w-fit items-center gap-3 text-amber-500/70" aria-hidden="true">
        <span class="h-px w-10 bg-amber-400/50" /><span class="text-sm">✿</span><span class="h-px w-10 bg-amber-400/50" />
      </div>
      <div v-reveal="100"><CountdownTimer :target-date="d.date" accent-class="text-amber-600" /></div>
    </section>

    <!-- About the Birthday Star (playful, pambata) -->
    <section class="relative overflow-hidden bg-amber-50/70 px-6 py-20">
      <!-- Confetti at playful na palamuti -->
      <span class="pointer-events-none absolute left-[8%] top-10 h-3 w-3 rounded-full bg-rose-300" />
      <span class="pointer-events-none absolute right-[10%] top-16 h-2.5 w-2.5 rotate-45 bg-teal-300" />
      <span class="pointer-events-none absolute bottom-12 left-[14%] h-2.5 w-2.5 rounded-full bg-sky-300" />
      <span class="pointer-events-none absolute bottom-16 right-[12%] h-3 w-3 rounded-full bg-amber-300" />
      <span class="pointer-events-none absolute right-[40%] top-6 text-lg">⭐</span>
      <span class="pointer-events-none absolute bottom-6 left-[38%] text-lg">🎈</span>

      <div class="relative mx-auto max-w-3xl">
        <div class="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
          <!-- Photo sa fun na nakatagilid na frame + age badge -->
          <div v-reveal class="relative shrink-0">
            <div class="-rotate-3 overflow-hidden rounded-[2rem] border-[6px] border-white shadow-xl">
              <img :src="d.about.image" alt="" class="h-60 w-60 object-cover sm:h-64 sm:w-64" />
            </div>
            <span class="absolute -right-3 -top-3 flex h-16 w-16 rotate-12 items-center justify-center rounded-full bg-amber-400 font-display text-3xl font-bold text-white shadow-lg ring-4 ring-amber-100">
              5
            </span>
          </div>

          <div v-reveal="100" class="text-center sm:text-left">
            <p class="font-script text-3xl text-amber-600">turning five 🦁</p>
            <h2 class="mt-1 font-display text-4xl font-light text-amber-700 sm:text-5xl">
              About the Birthday Star
            </h2>
            <p class="mt-5 leading-loose text-bark/75 sm:text-lg">{{ d.about.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program -->
    <div v-reveal class="py-16">
      <EventDetails title="Party Schedule 🎉" :items="d.program" accent-class="text-amber-600" />
    </div>

    <!-- Venue -->
    <section class="bg-green-50/50 px-6 py-16">
      <h2 v-reveal class="mb-10 text-center font-display text-4xl font-light text-amber-700">Where's the Party? 📍</h2>
      <div v-reveal="100" class="mx-auto max-w-2xl">
        <MapEmbed :query="d.venue.mapQuery" :venue-name="d.venue.name" :address="d.venue.address" />
      </div>
    </section>

    <!-- Gallery -->
    <div class="py-16"><PhotoGallery :images="d.gallery" title="The Fun 🎉" /></div>

    <!-- RSVP -->
    <section class="bg-amber-50/60 py-20">
      <div v-reveal>
        <RsvpForm accent-class="text-amber-700" button-class="bg-amber-500 hover:bg-amber-600" />
      </div>
    </section>

    <!-- Conversion CTA -->
    <DemoCta occasion="birthday" />

    <div class="bg-cream py-12 text-center">
      <router-link to="/" class="text-sm text-amber-600 underline-offset-4 hover:underline">
        ← Back to home
      </router-link>
    </div>

    <MusicPlayer src="birthday.mp3" />
  </main>
</template>
