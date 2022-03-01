<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  length: number
}

const props = withDefaults(defineProps<Props>(), {
  length: 1
})

const pages = computed(() => Math.floor(props.length / 6))
</script>

<template>
  <Pagination :page-length="20" />
  <div class="flex items-center">
    <svgIcon name="arrow-left" color="#f8f8f8" class="h-44px w-44px"></svgIcon>
    <ul class="flex mx-2 pagination">
      <li>...</li>
      <li v-for="page in pages" :key="page">{{ page }}</li>
      <li>...</li>
    </ul>
    <svgIcon name="arrow-right" class="h-44px w-44px"></svgIcon>
  </div>
</template>

<style lang="postcss" scoped>
.pagination {
  li {
    @apply rounded-full bg-[#f8f8f8] h-44px mx-4px text-center text-[rgba(0,0,0,0.8)] leading-44px w-44px;
    &.active {
      @apply bg-[rgba(0,0,0,0.3)];
    }
  }
}
</style>
