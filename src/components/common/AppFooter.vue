<!-- Slim site-wide footer (text contact links — walang duplicate na CTA buttons). -->
<script setup>
import { contact, mailtoInquiry } from '@/data/contact'
import { business } from '@/data/site'
</script>

<template>
  <footer class="border-t border-sage/20 bg-cream text-bark">
    <div class="mx-auto max-w-5xl px-6 py-12 text-center">
      <p class="font-script text-3xl text-rosedust">{{ business.name }}</p>
      <p class="mt-2 text-sm text-bark/65">{{ business.tagline }}</p>

      <div class="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
        <a
          v-if="contact.email"
          :href="mailtoInquiry"
          class="inline-flex items-center gap-1.5 text-sage-deep underline-offset-4 transition hover:underline"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          {{ contact.email }}
        </a>
        <span v-if="contact.email" class="text-sage/40" aria-hidden="true">·</span>
        <a
          :href="contact.facebookUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 text-sage-deep underline-offset-4 transition hover:underline"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
          </svg>
          {{ contact.facebookLabel }}
        </a>
      </div>

      <p class="mt-6 text-xs text-bark/40">© 2026 {{ business.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>
