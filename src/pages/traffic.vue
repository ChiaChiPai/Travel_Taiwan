<script setup lang="ts">
import delicacyBanner from '../assets/images/delicacy_banner.jpg'

const delicacy = `background-image: url(${delicacyBanner});`
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-bottom h-700px w-[100%] relative"
    :style="delicacy">
    <img
      class="
        transform
        top-[40%]
        left-[50%]
        w-[44.44444vw]
        -translate-x-1/2 -translate-y-1/2
        absolute
        xl:w-[568px]
      "
      src="../assets/images/delicacy_banner_icon.png"
      alt="" />
    <div
      class="flex transform bottom-[22%] left-[50%] -translate-x-1/2 absolute">
      <label ref="input" class="mr-14px search-bar relative">
        <input
          class="
            outline-none
            rounded-8px
            py-13px
            pr-13px
            pl-8px
            leading-23px
            w-529px
          "
          type="search"
          placeholder="請輸入關鍵字" />
      </label>
    </div>
  </div>
</template>
