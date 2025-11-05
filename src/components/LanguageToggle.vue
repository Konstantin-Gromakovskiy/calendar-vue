<template>
  <div class="language-toggle">
    <button :class="{ active: locale === 'ru' }" @click="() => changeLang('ru')">RU</button>
    <button :class="{ active: locale === 'en' }" @click="() => changeLang('en')">EN</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale,  } = useI18n()

const changeLang = (value: string) => {locale.value = value }
</script>

<style scoped>
.language-toggle {
  display: flex;
  gap: 5px;
}
button {
  background: none;
  padding: 3px;
  border: 1px solid teal;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.active {
  background: teal;
}

</style>
