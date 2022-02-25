<template>
  <ul class="flex pagination">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
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
