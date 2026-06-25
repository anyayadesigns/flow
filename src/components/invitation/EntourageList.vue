<!-- Wedding entourage — grouped roles, centered, na may leaf divider. -->
<script setup>
import LeafDivider from '@/components/common/LeafDivider.vue'

defineProps({
  members: { type: Array, required: true }, // { role, name } — name supports \n
})
</script>

<template>
  <section class="mx-auto max-w-md px-6 text-center">
    <p class="text-xs font-medium uppercase tracking-[0.3em] text-rosedust">
      with us at the altar
    </p>
    <h2 class="mt-2 font-display text-4xl font-light text-sage-deep">The Entourage</h2>
    <LeafDivider class="mx-auto mt-4 h-6 w-40 text-sage" />

    <div class="mt-10 space-y-8">
      <div v-for="(m, i) in members" :key="i">
        <p class="text-xs font-medium uppercase tracking-[0.25em] text-sage-deep">
          {{ m.role }}
        </p>
        <p class="mt-2 whitespace-pre-line font-display text-lg leading-relaxed text-bark">
          {{ m.name }}
        </p>
      </div>
    </div>
  </section>
</template>
