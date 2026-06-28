<!-- src/views/HomeRomantic.vue — Main landing page (Romantic Botanical) -->
<script setup>
import { RouterLink } from 'vue-router'
import BotanicalSprig from '@/components/common/BotanicalSprig.vue'
import LeafDivider from '@/components/common/LeafDivider.vue'
import { contact, mailtoInquiry } from '@/data/contact'
import { business, launchOffer, tiers } from '@/data/site'

// In-page smooth scroll (hash mode-safe — hindi ginagalaw ang router hash).
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const services = [
  {
    title: 'Custom Web Invitations',
    desc: 'A beautifully designed invitation page with its own shareable link.',
    icon: 'M4.5 6h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6ZM3 7.5 12 13l9-5.5',
  },
  {
    title: 'Online RSVP',
    desc: 'Guests confirm online and all their responses are collected neatly in one place for you.',
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    title: 'Countdown Timer',
    desc: 'A graceful countdown that builds anticipation for the big day.',
    icon: 'M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    title: 'Maps & Directions',
    desc: 'Embedded venue maps so every guest finds their way with ease.',
    icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  },
  {
    title: 'Photo Gallery',
    desc: 'Share your story through an elegant gallery of cherished moments.',
    icon: 'M2.25 15.75l5.16-5.16a2.25 2.25 0 0 1 3.18 0L15.75 15.75M14.25 14.25l1.16-1.16a2.25 2.25 0 0 1 3.18 0l2.16 2.16M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z',
  },
  {
    title: 'Background Music',
    desc: 'Choose a song that plays on your invitation — set to autoplay, or with a gentle tap of the play button.',
    icon: 'M9 9v8.25M9 9l10.5-3v8.25M9 17.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm10.5-1.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
  },
  {
    title: 'Attire Guide',
    desc: 'A dress code guide with color palettes so guests arrive perfectly dressed.',
    icon: 'M9.53 16.12a3 3 0 0 0-5.78 1.13 2.25 2.25 0 0 1-2.4 2.24 4.5 4.5 0 0 0 8.4-2.24c0-.4-.08-.78-.22-1.13Zm0 0a16 16 0 0 0 3.39-1.62m-5.04-.02a16 16 0 0 1 1.62-3.4m3.42 3.42a16 16 0 0 0 4.76-4.65l3.88-5.81a1.15 1.15 0 0 0-1.6-1.6l-5.81 3.88a16 16 0 0 0-4.65 4.76m3.42 3.42a6.78 6.78 0 0 0-3.42-3.42',
  },
  {
    title: 'FAQs',
    desc: 'Answers to common guest questions, from parking to plus-ones, all in one place.',
    icon: 'M9.88 7.52c1.17-1.03 3.07-1.03 4.24 0 1.17 1.02 1.17 2.69 0 3.71-.2.18-.43.33-.67.44-.74.36-1.45 1-1.45 1.83v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.01v.01H12v-.01Z',
  },
  {
    title: 'Timeline',
    desc: 'A clear timeline of the day so every guest knows exactly what happens when.',
    icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.01v.01H3.75V6.75Zm0 5.25h.01v.01H3.75V12Zm0 5.25h.01v.01H3.75v-.01Z',
  },
  {
    title: 'Gifts',
    desc: 'A gentle gifts or registry section for monetary gifts and wish lists.',
    icon: 'M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.88A2.63 2.63 0 1 0 9.38 7.5H12m0-2.62V7.5m0-2.62A2.63 2.63 0 1 1 14.63 7.5H12m0 0V21m-8.62-9.75h17.24a.38.38 0 0 0 .38-.38v-1.5a.38.38 0 0 0-.38-.37H3.38a.38.38 0 0 0-.38.37v1.5c0 .21.17.38.38.38Z',
  },
]

const customizable = [
  {
    title: 'Your theme & colors',
    desc: 'We match your motif and palette — soft and romantic, bold and modern, or anything in between.',
  },
  {
    title: 'Your photos & story',
    desc: 'Your engagement shots, prenup, or family photos — woven into a gallery and your own love story.',
  },
  {
    title: 'Your sections, your way',
    desc: 'Pick what to include — countdown, program, dress code, FAQs, gifts, song requests, and more.',
  },
  {
    title: 'Your wording & details',
    desc: 'Names, dates, venue, entourage, messages — written and arranged exactly the way you want.',
  },
  {
    title: 'Revisions until it feels right',
    desc: 'We fine-tune the design with you — Premium includes unlimited revisions before you share it.',
  },
  {
    title: 'Your own shareable link',
    desc: 'A personalized web address for your invitation that you send to every guest.',
  },
]

const steps = [
  { n: '01', title: 'Choose your package', desc: 'Pick the option that fits your celebration and budget.' },
  { n: '02', title: 'We personalize it', desc: 'Send us your details and photos; we craft your invitation.' },
  { n: '03', title: 'Share your link', desc: 'Send one link to every guest — and watch the RSVPs roll in.' },
]

// Elegante na line icons kada okasyon (sosyal — walang larawan).
const featured = [
  { to: '/demo/wedding', name: 'Wedding', sample: 'Juan & Maria', key: 'wedding' },
  { to: '/demo/debut', name: 'Debut', sample: 'Sofia Mae · 18th', key: 'debut' },
  { to: '/demo/birthday', name: 'Birthday', sample: "Lucas' 5th", key: 'birthday' },
]

// Iba't ibang pangalan kaysa sa demo samples — para hindi malito (sample vs. totoong kliyente).
// Placeholder na sample ng invitation cards — PALITAN ng totoong gawa ng design partner.
const partnerSamples = [
  'https://images.unsplash.com/photo-1633037773384-27d7ac0491e7?w=500&q=70&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1632610992723-82d7c212f6d7?w=500&q=70&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553013983-15241ab69e57?w=500&q=70&auto=format&fit=crop',
]

const testimonials = [
  { quote: 'Our guests kept saying it was the most beautiful invitation they had ever received.', who: 'Patricia & Miguel', event: 'Wedding' },
  { quote: 'The live RSVP made planning our headcount completely effortless.', who: 'Bea G.', event: 'Debut' },
  { quote: 'Stress-free from start to finish, and it looked stunning on every phone.', who: 'Lance & Kim', event: 'Wedding' },
]

const faqs = [
  { q: 'How long does it take?', a: `Most invitations are ready within ${business.turnaround}. Need it sooner? Rush options are available.` },
  { q: 'Can I customize the design and colors?', a: 'Absolutely — every invitation is tailored to your theme, colors, and story.' },
  { q: 'How do my guests RSVP?', a: 'You share one link; guests RSVP online and all their responses are collected neatly in one place for you.' },
  { q: 'Where is my invitation hosted?', a: 'We host it for you with its own shareable link — nothing for you to set up.' },
  { q: 'How do I pay? Is there a downpayment?', a: "We'll guide you after your inquiry. A small downpayment reserves your slot." },
  { q: 'Do you offer printed invitation cards?', a: 'Yes — through our design partner. That is a separate service, priced by design and quantity. Just ask!' },
]

</script>

<template>
  <main class="bg-cream text-bark">
    <!-- ════════════ HERO (full-bleed photo) ════════════ -->
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden">
      <!-- Background photo (placeholder — palitan ng totoong photo sa public/images) -->
      <img
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=75&auto=format&fit=crop"
        alt=""
        class="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <!-- Soft overlay for legibility -->
      <div class="absolute inset-0 bg-gradient-to-b from-sage-deep/85 via-sage-deep/70 to-sage-deep/90" aria-hidden="true" />

      <div class="relative mx-auto max-w-3xl px-6 py-28 text-center text-cream">
        <h1 v-reveal class="font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-7xl">
          Invitations your guests<br class="hidden sm:block" />
          will never forget
        </h1>

        <p v-reveal="200" class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Custom digital invitations and RSVP websites for weddings, debuts,
          and life's milestones — elegantly designed, and ready in days.
          <span class="font-medium text-[#e8b4ae]">We craft printed invitation cards, too.</span>
        </p>

        <!-- Hook: launch offer (slim single line) -->
        <p v-reveal="300" class="mt-6 text-xs tracking-wide [text-shadow:0_1px_4px_rgb(0_0_0/0.6)]">
          <span class="font-medium text-[#e8b4ae]">❀ Launch offer — save up to ₱{{ launchOffer.saveUpTo }}</span>
        </p>

        <div v-reveal="400" class="mt-10 flex items-center justify-center gap-3 sm:gap-8">
          <button
            type="button"
            @click="scrollTo('demos')"
            class="flex-1 whitespace-nowrap rounded-full bg-cream px-4 py-3 text-xs font-medium tracking-wide text-sage-deep shadow-lg transition hover:bg-rosedust hover:text-cream sm:flex-none sm:px-10 sm:py-3.5 sm:text-sm"
          >
            View our demos
          </button>
          <button
            type="button"
            @click="scrollTo('pricing')"
            class="flex-1 whitespace-nowrap rounded-full border border-cream/50 px-4 py-3 text-xs font-medium tracking-wide text-cream transition hover:bg-cream/10 sm:flex-none sm:px-10 sm:py-3.5 sm:text-sm"
          >
            Explore our plans
          </button>
        </div>
      </div>

      <!-- Scroll cue -->
      <button
        type="button"
        @click="scrollTo('more')"
        class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/80 transition hover:text-cream"
        aria-label="Scroll down to see more"
      >
        <span class="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <svg class="h-5 w-5 animate-bob" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>

    <!-- ════════════ HOW IT WORKS ════════════ -->
    <section id="more" class="bg-blush/40">
      <div class="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div v-reveal class="mx-auto max-w-xl text-center">
          <p class="font-script text-3xl text-rosedust">how it works</p>
          <h2 class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
            Three simple steps
          </h2>
          <LeafDivider class="mx-auto mt-4 h-6 w-44 text-sage" />
        </div>

        <div class="mt-16 grid grid-cols-3 gap-4 sm:gap-12">
          <div
            v-for="(step, i) in steps"
            :key="step.n"
            v-reveal="i * 120"
            class="text-center"
          >
            <p class="font-script text-3xl text-sage/70 sm:text-5xl">{{ step.n }}</p>
            <h3 class="mt-2 font-display text-base text-sage-deep sm:mt-3 sm:text-2xl">{{ step.title }}</h3>
            <p class="mx-auto mt-1 max-w-xs text-xs leading-relaxed text-bark/75 sm:mt-2 sm:text-sm">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════ MADE JUST FOR YOU (customization) ════════════ -->
    <section class="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <div v-reveal class="mx-auto max-w-xl text-center">
        <p class="font-script text-3xl text-rosedust">made just for you</p>
        <h2 class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
          Fully customized to your celebration
        </h2>
        <LeafDivider class="mx-auto mt-4 h-6 w-44 text-sage" />
        <p class="mt-5 text-bark/75">
          Nothing here is a fixed template. Every RSVP website is built around
          <em class="not-italic text-rosedust">your</em> theme, your story, and exactly
          the details you want to share.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        <div
          v-for="(item, i) in customizable"
          :key="item.title"
          v-reveal="i * 80"
          class="flex items-start gap-4"
        >
          <span class="mt-1 flex-none text-lg text-sage" aria-hidden="true">❀</span>
          <div>
            <h3 class="font-display text-xl text-sage-deep">{{ item.title }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-bark/75">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <p v-reveal class="mx-auto mt-12 max-w-lg text-center font-script text-2xl text-rosedust">
        you tell us your vision — we design it your way
      </p>
      <LeafDivider v-reveal class="mx-auto mt-8 h-6 w-44 text-sage" />
    </section>

    <!-- ════════════ SERVICES (what we create) ════════════ -->
    <section id="services" class="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div v-reveal class="mx-auto max-w-xl text-center">
        <p class="font-script text-3xl text-rosedust">what we create</p>
        <h2 class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
          Everything your invitation needs
        </h2>
        <LeafDivider class="mx-auto mt-4 h-6 w-44 text-sage" />
        <p class="mt-5 text-bark/75">
          More than a pretty card — a complete, interactive experience for you and
          your guests.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3">
        <article
          v-for="(s, i) in services"
          :key="s.title"
          v-reveal="i * 80"
          class="text-center sm:text-left"
        >
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blush/70 text-sage-deep sm:mx-0 sm:h-14 sm:w-14">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7">
              <path :d="s.icon" />
            </svg>
          </div>
          <h3 class="mt-4 font-display text-xl font-normal text-sage-deep sm:mt-5 sm:text-2xl">{{ s.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-bark/75">{{ s.desc }}</p>
        </article>
      </div>
    </section>

    <!-- ════════════ FEATURED DEMOS ════════════ -->
    <section id="demos" class="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div v-reveal class="mx-auto max-w-xl text-center">
        <p class="font-script text-3xl text-rosedust">see it in action</p>
        <h2 class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
          Live demos
        </h2>
        <p class="mt-5 text-bark/75">A glimpse of what your guests will experience.</p>
      </div>

      <div class="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <RouterLink
          v-for="(demo, i) in featured"
          :key="demo.to"
          v-reveal="i * 80"
          :to="demo.to"
          class="group flex w-[82%] shrink-0 snap-center flex-col items-center rounded-3xl border border-sage/20 bg-cream px-8 py-10 text-center transition hover:-translate-y-1 hover:border-sage/40 hover:shadow-lg hover:shadow-sage/10 md:w-auto md:shrink"
        >
          <!-- Elegant icon medallion -->
          <span class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blush/70 to-sage/15 text-sage-deep ring-1 ring-sage/15 transition group-hover:scale-105">
            <!-- Wedding: interlocking rings -->
            <svg v-if="demo.key === 'wedding'" class="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="m9 4 1.6 2.4M9 4 7.4 6.4M9 4H7.4" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="8.5" cy="15" r="5.5" />
              <circle cx="15.5" cy="15" r="5.5" />
            </svg>
            <!-- Debut: gem / diamond -->
            <svg v-else-if="demo.key === 'debut'" class="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 4h14l3 5-10 11L2 9l3-5Z" />
              <path d="M2 9h20M9.5 4 7 9l5 11M14.5 4 17 9l-5 11" />
            </svg>
            <!-- Birthday: cake -->
            <svg v-else class="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 20h16M4 20v-7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7M4 14c1.3 1.4 2.7 1.4 4 0s2.7-1.4 4 0 2.7 1.4 4 0 2.7-1.4 4 0" />
              <path d="M8 7V5M12 7V5M16 7V5" />
              <circle cx="8" cy="3.5" r="0.6" fill="currentColor" /><circle cx="12" cy="3.5" r="0.6" fill="currentColor" /><circle cx="16" cy="3.5" r="0.6" fill="currentColor" />
            </svg>
          </span>

          <span class="mt-5 font-display text-2xl text-sage-deep">{{ demo.name }}</span>
          <span class="mt-1 text-sm text-bark/55">{{ demo.sample }}</span>
          <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-rosedust">
            View demo
            <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </span>
        </RouterLink>
      </div>
      <p class="mt-4 text-center text-xs tracking-wide text-bark/40 md:hidden">swipe to explore →</p>
    </section>

    <!-- ════════════ PRICING ════════════ -->
    <section id="pricing" class="bg-blush/60">
      <div class="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div v-reveal class="mx-auto max-w-xl text-center">
          <p class="font-script text-3xl text-rosedust">our offerings</p>
          <h2 class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
            Two ways to be remembered
          </h2>
          <p class="mt-5 text-bark/75">
            Gentle, transparent pricing — one lovely fee, no hidden costs.
          </p>
          <div class="mt-7 flex items-center justify-center gap-2.5 text-rosedust">
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 -scale-x-100" fill="currentColor" aria-hidden="true">
              <path d="M5 19c0-8 6-13 14-14-1 8-6 13-14 14Z" />
            </svg>
            <span class="font-script text-2xl leading-none">a limited launch offer</span>
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M5 19c0-8 6-13 14-14-1 8-6 13-14 14Z" />
            </svg>
          </div>
          <p class="mt-1.5 text-[0.7rem] uppercase tracking-[0.25em] text-bark/45">only a few slots left</p>
        </div>

        <div class="mt-16 flex flex-col gap-6 md:mx-auto md:grid md:max-w-3xl md:grid-cols-2 md:gap-8">
          <article
            v-for="(tier, i) in tiers"
            :key="tier.name"
            class="relative flex w-full flex-col rounded-3xl border bg-cream p-7 transition sm:p-9 md:w-auto"
            :class="tier.recommended ? 'border-rosedust/50 shadow-lg shadow-rosedust/10' : 'border-sage/25'"
          >
            <header>
              <div class="flex flex-col-reverse items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <h3 class="font-display text-3xl font-normal text-sage-deep">{{ tier.name }}</h3>
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

            <RouterLink
              to="/packages"
              class="mt-9 block rounded-full px-6 py-3.5 text-center text-sm font-medium tracking-wide transition"
              :class="tier.recommended
                ? 'bg-rosedust text-cream hover:bg-sage-deep'
                : 'border border-sage/40 text-sage-deep hover:bg-sage hover:text-cream hover:border-sage'"
            >
              Choose {{ tier.name }}
            </RouterLink>
          </article>
        </div>
      </div>
    </section>

    <!-- ════════════ DESIGN PARTNER (separate service) ════════════ -->
    <section class="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <div v-reveal class="rounded-3xl border border-sage/25 bg-blush/30 p-8 text-center sm:p-14">
        <p class="font-script text-3xl text-rosedust">also available</p>
        <h2 class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
          Invitation Design &amp; Printed Cards
        </h2>
        <LeafDivider class="mx-auto mt-4 h-6 w-44 text-sage" />
        <p class="mx-auto mt-5 max-w-xl text-bark/75">
          Together with our invitation design partner, we also offer bespoke
          invitation artwork crafted into beautiful, print-ready physical cards.
          This is a separate service, priced by design and quantity.
        </p>

        <!-- Sample invitation cards (picture-first para agad maintindihan) -->
        <div class="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
          <div
            v-for="(img, i) in partnerSamples"
            :key="i"
            v-reveal="i * 80"
            class="overflow-hidden rounded-2xl border border-sage/20 bg-cream shadow-sm"
          >
            <img
              :src="img"
              alt="Invitation card sample"
              loading="lazy"
              class="aspect-[3/4] h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-bark/70">
          <span>❀ Bespoke invitation design</span>
          <span>❀ Print-ready files</span>
          <span>❀ Physical card production</span>
        </div>
        <a
          :href="contact.facebookUrl"
          target="_blank"
          rel="noopener"
          class="mt-9 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-sage/40 px-6 py-3.5 text-sm font-medium text-sage-deep transition hover:bg-sage hover:text-cream sm:w-auto sm:px-9"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 flex-none" aria-hidden="true">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
          </svg>
          Request a quote
        </a>
      </div>
    </section>

    <!-- ════════════ TESTIMONIALS ════════════ -->
    <section class="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div v-reveal class="mx-auto max-w-xl text-center">
        <p class="font-script text-3xl text-rosedust">kind words</p>
        <h2 class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
          Loved by our couples
        </h2>
      </div>

      <div class="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <figure
          v-for="(t, i) in testimonials"
          :key="t.who"
          class="flex w-[82%] shrink-0 snap-center flex-col rounded-3xl border border-sage/20 bg-blush/30 p-8 md:w-auto md:shrink"
        >
          <span class="font-display text-5xl leading-none text-sage/40" aria-hidden="true">“</span>
          <blockquote class="-mt-3 flex-1 font-display text-xl font-light italic leading-relaxed text-bark/85">
            {{ t.quote }}
          </blockquote>
          <figcaption class="mt-6">
            <p class="font-medium text-sage-deep">{{ t.who }}</p>
            <p class="text-xs uppercase tracking-[0.2em] text-rosedust">{{ t.event }}</p>
          </figcaption>
        </figure>
      </div>
      <p class="mt-4 text-center text-xs tracking-wide text-bark/40 md:hidden">swipe for more →</p>
    </section>

    <!-- ════════════ FAQ ════════════ -->
    <section id="faq" class="bg-blush/40">
      <div class="mx-auto max-w-3xl px-6 py-24 sm:py-28">
        <div v-reveal class="text-center">
          <p class="font-script text-3xl text-rosedust">good to know</p>
          <h2 class="mt-2 font-display text-4xl font-light tracking-tight text-sage-deep sm:text-5xl">
            Frequently asked
          </h2>
        </div>

        <div class="mt-12 divide-y divide-sage/20 border-y border-sage/20">
          <details
            v-for="(f, i) in faqs"
            :key="i"
            v-reveal
            class="group py-5"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-sage-deep [&::-webkit-details-marker]:hidden"
            >
              {{ f.q }}
              <svg
                class="h-5 w-5 flex-none text-rosedust transition-transform duration-300 group-open:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                aria-hidden="true"
              >
                <path d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </summary>
            <p class="mt-3 leading-relaxed text-bark/75">{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- ════════════ CONTACT / CLOSING ════════════ -->
    <section id="contact" class="relative overflow-hidden bg-sage-deep text-cream">
      <BotanicalSprig class="absolute -bottom-4 left-1/2 h-40 w-auto -translate-x-1/2 text-cream/15" />
      <div v-reveal class="relative mx-auto max-w-2xl px-6 py-28 text-center">
        <p class="font-script text-4xl text-cream/90">let's begin</p>
        <h2 class="mt-3 font-display text-4xl font-light leading-tight sm:text-5xl">
          Every celebration starts<br />with an invitation
        </h2>
        <p class="mx-auto mt-7 max-w-md text-cream/75">
          Tell us about your special day, and we'll help you choose the package
          that suits it most.
        </p>
        <div class="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            v-if="contact.email"
            :href="mailtoInquiry"
            class="rounded-full bg-cream px-10 py-3.5 text-sm font-medium tracking-wide text-sage-deep transition hover:bg-rosedust hover:text-cream"
          >
            Inquire by email
          </a>
          <a
            :href="contact.facebookUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full px-10 py-3.5 text-sm font-medium transition"
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
        <p class="mt-8 text-sm text-cream/60">
          <template v-if="contact.email">{{ contact.email }} · </template>{{ contact.facebookLabel }}
        </p>
      </div>
    </section>
  </main>
</template>
