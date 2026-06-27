<!-- DEMO 1: Wedding — Romantic Botanical, elegante at malambing. -->
<script setup>
import { weddingDemo as d } from '@/data/demoInvitations'
import CountdownTimer from '@/components/invitation/CountdownTimer.vue'
import EventTimeline from '@/components/invitation/EventTimeline.vue'
import TimeAndPlace from '@/components/invitation/TimeAndPlace.vue'
import EntourageList from '@/components/invitation/EntourageList.vue'
import DressCode from '@/components/invitation/DressCode.vue'
import PhotoGallery from '@/components/invitation/PhotoGallery.vue'
import RsvpForm from '@/components/invitation/RsvpForm.vue'
import LeafDivider from '@/components/common/LeafDivider.vue'
import DemoCta from '@/components/common/DemoCta.vue'
import MusicPlayer from '@/components/common/MusicPlayer.vue'

// Hiwalayin ang pangalan para ma-accent ang "&"; buuin ang date parts para sa hero.
const coupleParts = d.couple.split(' & ')
const dt = new Date(d.date)
const heroDate = {
  weekday: dt.toLocaleDateString('en-US', { weekday: 'long' }),
  month: dt.toLocaleDateString('en-US', { month: 'long' }),
  day: dt.getDate(),
  year: dt.getFullYear(),
  time: dt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Hero — cinematic full-photo -->
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <img :src="d.heroImage" alt="" class="absolute inset-0 h-full w-full object-cover animate-kenburns" />
      <div class="absolute inset-0 bg-gradient-to-b from-[#3b3a35]/55 via-[#3b3a35]/45 to-[#3b3a35]/80" aria-hidden="true" />
      <!-- Center vignette para basahin ang text -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,58,53,0.5)_0%,_transparent_62%)]" aria-hidden="true" />

      <div class="relative max-w-2xl text-white">
        <p v-reveal class="font-script text-3xl text-white/90 [text-shadow:0_2px_12px_rgb(0_0_0/0.5)] sm:text-4xl">
          we're getting married
        </p>
        <h1 v-reveal="100" class="text-shimmer mt-3 font-display text-6xl font-light leading-[1.02] tracking-wide drop-shadow-[0_2px_16px_rgb(0_0_0/0.6)] sm:text-8xl">
          {{ coupleParts[0] }}<span class="italic"> &amp; </span>{{ coupleParts[1] }}
        </h1>
        <div v-reveal="200" class="mx-auto my-7 flex w-fit items-center gap-3 text-white/80" aria-hidden="true">
          <span class="h-px w-14 bg-white/60" /><span class="text-sm">✦</span><span class="h-px w-14 bg-white/60" />
        </div>
        <p v-reveal="250" class="text-sm uppercase tracking-[0.35em] text-white/90 [text-shadow:0_1px_8px_rgb(0_0_0/0.5)]">
          {{ heroDate.month }} {{ heroDate.day }}, {{ heroDate.year }}
        </p>
        <p v-reveal="300" class="mt-3 font-display text-lg uppercase tracking-[0.15em] text-white/85 [text-shadow:0_1px_8px_rgb(0_0_0/0.5)]">
          {{ d.venue.name }}
        </p>
      </div>

      <!-- Scroll cue -->
      <button
        type="button"
        @click="scrollTo('countdown')"
        class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 transition hover:text-white"
        aria-label="Scroll down"
      >
        <span class="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <svg class="h-5 w-5 animate-bob" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>

    <!-- Countdown (clean) -->
    <section id="countdown" class="px-6 py-20 text-center">
      <p v-reveal class="text-xs uppercase tracking-[0.3em] text-sage">Counting down to forever</p>
      <div v-reveal class="mx-auto my-6 flex w-fit items-center gap-3 text-[#c2a36b]" aria-hidden="true">
        <span class="h-px w-10 bg-[#c2a36b]/45" /><span class="text-sm">✦</span><span class="h-px w-10 bg-[#c2a36b]/45" />
      </div>
      <div v-reveal="100"><CountdownTimer :target-date="d.date" accent-class="text-sage-deep" /></div>
    </section>

    <!-- Our Story (faded photo into text) -->
    <section class="relative">
      <div class="relative h-[55vh] w-full overflow-hidden sm:h-[62vh]">
        <img :src="d.story.image" alt="" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cream/65 to-cream" aria-hidden="true" />
      </div>

      <div class="relative z-10 -mt-24 px-6 pb-16 sm:-mt-28">
        <p v-reveal class="text-center font-script text-3xl text-rosedust">our story</p>
        <h2 v-reveal class="mt-1 text-center font-display text-4xl font-light text-sage-deep sm:text-5xl">
          How it all began
        </h2>
        <p v-reveal class="mx-auto mt-6 max-w-xl text-center leading-loose text-bark/75 sm:text-lg">
          {{ d.story.text }}
        </p>
      </div>
    </section>

    <!-- Entourage -->
    <EntourageList :data="d.entourage" />

    <!-- Program -->
    <div v-reveal class="py-16">
      <EventTimeline title="Wedding Timeline" :items="d.program" ring-class="border-sage/60" />
    </div>

    <!-- Time & Place (event cards + modal) -->
    <TimeAndPlace :bg-image="d.timeAndPlace.bgImage" :events="d.timeAndPlace.events" />

    <!-- Attire -->
    <section class="py-16">
      <div v-reveal>
        <DressCode :theme="d.dressCode.theme" :palette="d.dressCode.palette" :note="d.dressCode.note" :attire="d.dressCode.attire" />
      </div>
    </section>

    <!-- Gifts -->
    <section class="bg-blush/30 px-6 py-20">
      <div v-reveal class="mx-auto max-w-xl text-center">
        <p class="font-script text-3xl text-rosedust">with love</p>
        <h2 class="mt-1 font-display text-4xl font-light text-sage-deep sm:text-5xl">A Note on Gifts</h2>
        <LeafDivider class="mx-auto mt-4 h-6 w-44 text-sage" />
        <p class="mx-auto mt-6 max-w-md leading-loose text-bark/75">{{ d.gifts }}</p>
      </div>

      <!-- Sample QR codes — magkatabi kahit sa mobile -->
      <div v-reveal class="mx-auto mt-8 max-w-2xl">
        <p class="text-center text-sm text-bark/60">
          For convenience, here are our QR codes for monetary gifts.
        </p>
        <div class="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
          <figure
            v-for="qr in d.giftQrs"
            :key="qr.label"
            class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-bark/5 sm:p-6"
          >
            <img
              :src="qr.image"
              :alt="`${qr.label} QR code`"
              class="mx-auto aspect-square w-full max-w-[180px] rounded-lg object-contain"
            />
            <figcaption class="mt-3 text-center">
              <span class="block font-display text-lg text-sage-deep">{{ qr.label }}</span>
              <span class="mt-0.5 block text-xs text-bark/55">{{ qr.name }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <div v-reveal class="py-16"><PhotoGallery :images="d.gallery" title="Photo Gallery" /></div>

    <!-- Hashtag -->
    <section class="bg-sage-deep px-6 py-16 text-center text-cream">
      <p v-reveal class="font-script text-3xl text-cream/85">share the love</p>
      <p v-reveal class="mt-2 font-display text-3xl tracking-wide sm:text-4xl">{{ d.hashtag }}</p>
      <p v-reveal class="mt-3 text-sm text-cream/70">Tag your photos so we can relive every moment with you.</p>
    </section>

    <!-- FAQ -->
    <section class="bg-cream px-6 py-20">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="font-script text-3xl text-rosedust">good to know</p>
        <h2 class="mt-1 font-display text-4xl font-light text-sage-deep sm:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div class="mx-auto mt-10 max-w-2xl space-y-1.5">
        <details
          v-for="(f, i) in d.faqs"
          :key="i"
          v-reveal="i * 60"
          class="group overflow-hidden rounded-xl"
          :open="i === 0"
        >
          <summary
            class="flex cursor-pointer list-none items-center gap-3 bg-sage/85 px-5 py-4 font-display text-lg italic text-cream transition group-open:bg-sage-deep [&::-webkit-details-marker]:hidden"
          >
            <svg
              class="h-4 w-4 flex-none transition-transform duration-300 group-open:rotate-45"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            {{ f.q }}
          </summary>
          <p class="bg-blush/40 px-5 py-5 leading-relaxed text-bark/80">{{ f.a }}</p>
        </details>
      </div>
    </section>

    <!-- RSVP -->
    <section class="bg-blush/50 py-20">
      <div v-reveal>
        <RsvpForm
          accent-class="text-sage-deep"
          button-class="bg-sage hover:bg-sage-deep"
          :heading="d.rsvp.heading"
          :subtext="d.rsvp.subtext"
          :deadline-text="d.rsvp.deadlineText"
          :reserved-seats="d.rsvp.reservedSeats"
        />
      </div>
    </section>

    <!-- Conversion CTA -->
    <DemoCta occasion="wedding" />

    <div class="bg-cream py-12 text-center">
      <router-link to="/" class="text-sm text-sage underline-offset-4 hover:underline">
        ← Back to home
      </router-link>
    </div>

    <MusicPlayer src="wedding.mp3" />
  </main>
</template>
