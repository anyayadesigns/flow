<!-- Packages page — same source of truth as home (@/data/site) kaya laging tugma. -->
<script setup>
import { RouterLink } from 'vue-router'
import LeafDivider from '@/components/common/LeafDivider.vue'
import { tiers } from '@/data/site'
import { contact, mailtoInquiry } from '@/data/contact'
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Header -->
    <section class="mx-auto max-w-3xl px-6 pt-32 pb-12 text-center sm:pt-36">
      <p v-reveal class="font-script text-3xl text-rosedust">our offerings</p>
      <h1 v-reveal="100" class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
        Packages &amp; Pricing
      </h1>
      <LeafDivider class="mx-auto mt-4 h-6 w-44 text-sage" />
      <p v-reveal="150" class="mx-auto mt-5 max-w-md text-bark/75">
        One lovely fee, no hidden costs — and every package is fully customized to
        your celebration.
      </p>
      <div v-reveal="200" class="mt-6 flex items-center justify-center gap-2.5 text-rosedust">
        <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 -scale-x-100" fill="currentColor" aria-hidden="true">
          <path d="M5 19c0-8 6-13 14-14-1 8-6 13-14 14Z" />
        </svg>
        <span class="font-script text-2xl leading-none">a limited launch offer</span>
        <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <path d="M5 19c0-8 6-13 14-14-1 8-6 13-14 14Z" />
        </svg>
      </div>
    </section>

    <!-- Tiers -->
    <section class="px-6 pb-24">
      <div class="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
        <article
          v-for="(tier, i) in tiers"
          :key="tier.name"
          v-reveal="i * 120"
          class="relative flex flex-col rounded-3xl border bg-cream p-8 sm:p-9"
          :class="tier.recommended ? 'border-rosedust/50 shadow-lg shadow-rosedust/10' : 'border-sage/25'"
        >
          <header>
            <div class="flex flex-col-reverse items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <h2 class="font-display text-3xl font-normal text-sage-deep">{{ tier.name }}</h2>
              <span
                v-if="tier.recommended"
                class="flex-none rounded-full bg-rosedust/15 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-rosedust"
              >
                most loved
              </span>
            </div>
            <p class="mt-1 font-script text-xl text-rosedust">{{ tier.tagline }}</p>
          </header>

          <div class="mt-7 flex items-baseline gap-3">
            <p class="font-display text-5xl font-light text-bark">
              <span class="align-top text-2xl text-bark/60">₱</span>{{ tier.price }}
            </p>
            <p class="font-display text-2xl font-light text-bark/40 line-through">₱{{ tier.original }}</p>
          </div>
          <p class="mt-2 text-xs uppercase tracking-[0.2em] text-rosedust">
            One-time · save ₱{{ tier.save }}
          </p>

          <ul class="mt-8 flex-1 space-y-3.5">
            <li
              v-for="feature in tier.features"
              :key="feature"
              class="flex items-start gap-3 text-sm text-bark/80"
            >
              <span class="mt-1.5 text-sage" aria-hidden="true">❀</span>
              <span class="leading-relaxed">{{ feature }}</span>
            </li>
          </ul>

          <a
            :href="contact.email ? mailtoInquiry : contact.facebookUrl"
            :target="contact.email ? null : '_blank'"
            :rel="contact.email ? null : 'noopener'"
            class="mt-9 block rounded-full px-6 py-3.5 text-center text-sm font-medium tracking-wide transition"
            :class="tier.recommended
              ? 'bg-rosedust text-cream hover:bg-sage-deep'
              : 'border border-sage/40 text-sage-deep hover:bg-sage hover:text-cream hover:border-sage'"
          >
            Inquire about {{ tier.name }}
          </a>
        </article>
      </div>

      <p class="mx-auto mt-10 max-w-md text-center text-sm text-bark/60">
        Not sure which fits? Message us and we'll help you choose
        <a :href="contact.facebookUrl" target="_blank" rel="noopener" class="text-sage-deep underline underline-offset-4">on Facebook</a><template v-if="contact.email">
        or at
        <a :href="mailtoInquiry" class="text-sage-deep underline underline-offset-4">{{ contact.email }}</a></template>.
      </p>

      <div class="mt-12 text-center">
        <RouterLink to="/" class="text-sm text-sage underline-offset-4 hover:underline">
          ← Back to home
        </RouterLink>
      </div>
    </section>
  </main>
</template>
