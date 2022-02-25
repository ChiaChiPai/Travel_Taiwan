<script setup lang="ts"></script>

<template>
  <div class="relative">
    <ImgSrc name="Taipei-view" :width="347" :height="454" alt="台北" />
    <div class="banner">
      <h3>台北</h3>
      <p>650 間住宿</p>
    </div>
  </div>
  <div class="flex flex-col mx-45px justify-between">
    <div class="relative">
      <ImgSrc name="Hualien-view" :width="367" :height="221" alt="花蓮" />
      <div class="banner">
        <h3>花蓮</h3>
        <p>650 間住宿</p>
      </div>
    </div>
    <div class="relative">
      <ImgSrc name="Taoyuan-view" :width="367" :height="221" alt="桃園" />
      <div class="banner">
        <h3>桃園</h3>
        <p>650 間住宿</p>
      </div>
    </div>
  </div>
  <div class="w-347px relative">
    <ImgSrc name="Taitung-view" :width="347" :height="454" alt="台東" />
    <div class="banner">
      <h3>台東</h3>
      <p>650 間住宿</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.banner {
  @apply top-2 left-5 absolute;
  h3 {
    @apply font-700 text-[#fff] text-5xl leading-72px;
  }
  p {
    @apply font-400 text-[#fff] text-2xl leading-40px;
  }
}
</style>
