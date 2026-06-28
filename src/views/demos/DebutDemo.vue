<!-- DEMO 2: Debut — chic, glam, at elegante (plum + rosedust). -->
<script setup>
import { debutDemo as d } from '@/data/demoInvitations'
import CountdownTimer from '@/components/invitation/CountdownTimer.vue'
import EventDetails from '@/components/invitation/EventDetails.vue'
import DressCode from '@/components/invitation/DressCode.vue'
import PhotoGallery from '@/components/invitation/PhotoGallery.vue'
import RsvpForm from '@/components/invitation/RsvpForm.vue'
import LeafDivider from '@/components/common/LeafDivider.vue'
import DemoCta from '@/components/common/DemoCta.vue'
import MusicPlayer from '@/components/common/MusicPlayer.vue'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Hero (full-bleed glam photo behind a plum wash) -->
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 text-center">
      <img :src="d.heroImage" alt="" class="absolute inset-0 h-full w-full object-cover animate-kenburns" />
      <div class="absolute inset-0 bg-gradient-to-b from-[#3a2336]/78 via-[#5d3a5a]/58 to-[#3a2336]/90" aria-hidden="true" />

      <div class="relative max-w-2xl text-cream">
        <p v-reveal class="font-script text-3xl text-[#f4c2c2] sm:text-4xl">it's my debut</p>
        <h1 v-reveal="100" class="mt-3 font-display text-6xl font-light tracking-tight drop-shadow-sm sm:text-8xl">
          {{ d.celebrant }}
        </h1>
        <p v-reveal="150" class="mt-3 text-xs font-medium uppercase tracking-[0.4em] text-[#f4c2c2] [text-shadow:0_1px_4px_rgb(0_0_0/0.4)]">
          Eighteenth Birthday
        </p>
        <div v-reveal="200" class="mx-auto my-7 flex w-fit items-center gap-3 text-[#f4c2c2]" aria-hidden="true">
          <span class="h-px w-12 bg-[#f4c2c2]/60" /><span class="font-display text-xl">18</span><span class="h-px w-12 bg-[#f4c2c2]/60" />
        </div>
        <p v-reveal="250" class="mx-auto max-w-md text-cream/90 [text-shadow:0_1px_4px_rgb(0_0_0/0.4)]">{{ d.tagline }}</p>
        <p v-reveal="300" class="mt-4 font-display text-2xl text-[#f4c2c2]">{{ d.dateLabel }}</p>
      </div>

      <!-- Scroll cue -->
      <button
        type="button"
        @click="scrollTo('celebration')"
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
    <section id="celebration" class="bg-blush/40 px-6 py-20 text-center sm:py-24">
      <p v-reveal class="text-xs uppercase tracking-[0.3em] text-rosedust">
        Counting down to the celebration
      </p>
      <div v-reveal class="mx-auto my-6 flex w-fit items-center gap-3 text-rosedust/70" aria-hidden="true">
        <span class="h-px w-10 bg-rosedust/40" /><span class="text-sm">✦</span><span class="h-px w-10 bg-rosedust/40" />
      </div>
      <div v-reveal="100"><CountdownTimer :target-date="d.date" accent-class="text-[#6d4a63]" /></div>
    </section>

    <!-- About the Debutante (faded photo into text) -->
    <section class="relative">
      <div class="relative h-[55vh] w-full overflow-hidden sm:h-[62vh]">
        <img :src="d.about.image" alt="" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cream/40 to-cream" aria-hidden="true" />
      </div>

      <div class="relative z-10 -mt-32 px-6 pb-16 sm:-mt-40">
        <p v-reveal class="text-center font-script text-3xl text-rosedust">eighteen &amp; radiant</p>
        <h2 v-reveal class="mt-1 text-center font-display text-4xl font-light text-[#6d4a63] sm:text-5xl">
          About the Debutante
        </h2>
        <LeafDivider class="mx-auto mt-4 h-6 w-44 text-rosedust" />
        <p v-reveal class="mx-auto mt-6 max-w-xl text-center leading-loose text-bark/75 sm:text-lg">
          {{ d.about.text }}
        </p>
      </div>
    </section>

    <!-- Program -->
    <div v-reveal class="py-16">
      <EventDetails title="The Program" :items="d.program" accent-class="text-rosedust" />
    </div>

    <!-- Dress code -->
    <section class="bg-blush/40 py-16">
      <div v-reveal>
        <DressCode :theme="d.dressCode.theme" :palette="d.dressCode.palette" :note="d.dressCode.note" />
      </div>
    </section>

    <!-- Gallery -->
    <div class="py-16"><PhotoGallery :images="d.gallery" title="Highlights" /></div>

    <!-- RSVP -->
    <section class="bg-blush/50 py-20">
      <div v-reveal>
        <RsvpForm accent-class="text-rosedust" button-class="bg-rosedust hover:bg-sage-deep" />
      </div>
    </section>

    <!-- Conversion CTA -->
    <DemoCta occasion="debut" />

    <div class="bg-cream py-12 text-center">
      <router-link to="/" class="text-sm text-rosedust underline-offset-4 hover:underline">
        ← Back to home
      </router-link>
    </div>

    <MusicPlayer src="debut.mp3" />
  </main>
</template>
