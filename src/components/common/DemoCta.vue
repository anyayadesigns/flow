<!-- Conversion CTA band — lalabas sa bawat demo para mahikayat ang benta. -->
<script setup>
import { contact, mailtoInquiry } from '@/data/contact'

defineProps({
  occasion: { type: String, default: 'invitation' },
})
</script>

<template>
  <section class="bg-sage-deep text-cream">
    <div v-reveal class="mx-auto max-w-2xl px-6 py-20 text-center">
      <p class="font-script text-3xl text-cream/90">loved this?</p>
      <h2 class="mt-2 font-display text-3xl font-light sm:text-4xl">
        Get a {{ occasion }} invitation like this
      </h2>
      <p class="mx-auto mt-4 max-w-md text-cream/75">
        Personalized for your event, complete with live RSVP — message us to begin.
      </p>
      <div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          v-if="contact.email"
          :href="mailtoInquiry"
          class="rounded-full bg-cream px-9 py-3.5 text-sm font-medium text-sage-deep transition hover:bg-rosedust hover:text-cream"
        >
          Inquire by email
        </a>
        <a
          :href="contact.facebookUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-full px-9 py-3.5 text-sm font-medium transition"
          :class="contact.email
            ? 'border border-cream/40 text-cream hover:bg-cream/10'
            : 'bg-cream text-sage-deep hover:bg-rosedust hover:text-cream'"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
          </svg>
          Message on Facebook
        </a>
      </div>
      <p class="mt-6 text-sm text-cream/60">
        <template v-if="contact.email">{{ contact.email }} · </template>{{ contact.facebookLabel }}
      </p>
    </div>
  </section>
</template>
