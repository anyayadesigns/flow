<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppNavbar from '@/components/common/AppNavbar.vue'
import AppFooter from '@/components/common/AppFooter.vue'

// Sa loob ng demo, itago ang business navbar/footer para maramdaman ang "real" invitation.
const route = useRoute()
const isDemo = computed(() => route.path.startsWith('/demo/'))
</script>

<template>
  <AppNavbar v-if="!isDemo" />
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <AppFooter v-if="!isDemo" />
</template>
