<!-- DEMO 1: Wedding — Romantic Botanical, elegante at malambing. -->
<script setup>
import { weddingDemo as d } from '@/data/demoInvitations'
import CountdownTimer from '@/components/invitation/CountdownTimer.vue'
import EventDetails from '@/components/invitation/EventDetails.vue'
import MapEmbed from '@/components/invitation/MapEmbed.vue'
import EntourageList from '@/components/invitation/EntourageList.vue'
import PhotoGallery from '@/components/invitation/PhotoGallery.vue'
import RsvpForm from '@/components/invitation/RsvpForm.vue'
import DemoCta from '@/components/common/DemoCta.vue'
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Hero (soft photo behind a cream wash) -->
    <section class="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
      <img :src="d.heroImage" alt="" class="absolute inset-0 h-full w-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/82 to-cream/92" aria-hidden="true" />
      <!-- Dagdag na cream glow sa likod ng text para readable -->
      <div class="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-cream/40 blur-3xl" aria-hidden="true" />

      <div class="relative max-w-2xl">
        <p v-reveal class="font-script text-3xl text-rosedust sm:text-4xl">We're getting married</p>
        <h1 v-reveal="100" class="mt-3 font-display text-5xl font-light tracking-tight text-sage-deep drop-shadow-sm sm:text-7xl">
          {{ d.couple }}
        </h1>
        <div v-reveal="200" class="mx-auto my-8 flex w-fit items-center gap-3 text-sage" aria-hidden="true">
          <span class="h-px w-10 bg-sage/60" /><span class="text-xs">❀</span><span class="h-px w-10 bg-sage/60" />
        </div>
        <p v-reveal="250" class="mx-auto max-w-md text-bark/85">{{ d.tagline }}</p>
        <p v-reveal="300" class="mt-4 font-display text-2xl text-rosedust">{{ d.dateLabel }}</p>
      </div>
    </section>

    <!-- Countdown -->
    <section class="px-6 py-16">
      <p v-reveal class="mb-8 text-center text-xs uppercase tracking-[0.3em] text-sage">
        Counting down to forever
      </p>
      <div v-reveal="100"><CountdownTimer :target-date="d.date" accent-class="text-sage-deep" /></div>
    </section>

    <!-- Our Story (faded photo into text) -->
    <section class="relative">
      <!-- Background photo na nag-fafade papuntang cream -->
      <div class="relative h-[55vh] w-full overflow-hidden sm:h-[62vh]">
        <img :src="d.story.image" alt="" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cream/40 to-cream" aria-hidden="true" />
      </div>

      <!-- Content na naka-overlap sa fade -->
      <div class="relative z-10 -mt-32 px-6 pb-16 sm:-mt-40">
        <p v-reveal class="text-center font-script text-3xl text-rosedust">our story</p>
        <h2 v-reveal class="mt-1 text-center font-display text-4xl font-light text-sage-deep sm:text-5xl">
          How it all began
        </h2>
        <p v-reveal class="mx-auto mt-6 max-w-xl text-center leading-loose text-bark/75 sm:text-lg">
          {{ d.story.text }}
        </p>
      </div>
    </section>

    <!-- Program -->
    <div v-reveal class="py-16">
      <EventDetails title="Order of Events" :items="d.program" accent-class="text-rosedust" />
    </div>

    <!-- Venue -->
    <section class="px-6 py-16">
      <h2 v-reveal class="mb-10 text-center font-display text-4xl font-light text-sage-deep">The Ceremony</h2>
      <div v-reveal="100" class="mx-auto max-w-2xl">
        <MapEmbed :query="d.venue.mapQuery" :venue-name="d.venue.name" :address="d.venue.address" />
      </div>
    </section>

    <!-- Entourage -->
    <div v-reveal class="py-16"><EntourageList :members="d.entourage" /></div>

    <!-- Gallery -->
    <div class="py-16"><PhotoGallery :images="d.gallery" title="Our Moments" /></div>

    <!-- RSVP -->
    <section class="bg-blush/50 py-20">
      <div v-reveal>
        <RsvpForm accent-class="text-sage-deep" button-class="bg-sage hover:bg-sage-deep" />
      </div>
    </section>

    <!-- Conversion CTA -->
    <DemoCta occasion="wedding" />

    <div class="bg-cream py-12 text-center">
      <router-link to="/" class="text-sm text-sage underline-offset-4 hover:underline">
        ← Back to home
      </router-link>
    </div>
  </main>
</template>
