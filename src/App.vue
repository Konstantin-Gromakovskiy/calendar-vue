<template>
  <main>
    <language-toggle/>
    <my-calendar/>
  </main>
</template>

<script lang="ts" setup>

import LanguageToggle from '@/components/LanguageToggle.vue'
import MyCalendar from '@/components/MyCalendar.vue'
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
