<script setup lang="ts">
import delicacyBanner from '../assets/images/delicacy_banner.jpg'
import intro_img1 from '../assets/images/img_delicacy1.png'
import intro_img2 from '../assets/images/img_delicacy2.png'
import intro_img3 from '../assets/images/img_delicacy3.png'

const delicacy = `background-image: url(${delicacyBanner});`

const introList = [
  {
    title: '台灣文化',
    img: intro_img1
  },
  {
    title: '台灣小吃',
    img: intro_img2
  },
  {
    title: '台灣各地特色',
    img: intro_img3
  }
]
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
  <div class="h-200px delicacy-intro relative">
    <div class="flex -top-84px w-100vw justify-center absolute">
      <div
        v-for="(intro, idx) in introList"
        :key="idx"
        :style="`background-image: url(${intro.img});`"
        class="flex flex-col h-215px w-326px">
        <div class="flex-grow" />
        <h3
          :class="{
            'rounded-bl-20px': idx === 0,
            'rounded-br-20px': idx === 2
          }"
          class="
            bg-[rgba(255,255,255,0.28)]
            font-700
            h-52px
            text-center text-white text-28px
            leading-52px leading-40px
          ">
          {{ intro.title }}
        </h3>
      </div>
    </div>
  </div>
  <GlobalSubtitle
    :title="`熱門美食`"
    :is-show-more="false"
    class="bg-[#738677]" />
  <div class="flex flex-wrap mx-auto pt-79px w-1280px justify-evenly">
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
  </div>

  <PaginationGroup class="mb-28px justify-center" />
</template>

<style>
.delicacy-intro {
  background: linear-gradient(180deg, #a7b4aa 0%, rgba(167, 180, 170, 0) 100%);
}

.search-bar::after {
  content: '';
  background: url(@/assets/svg/icon_search.svg) no-repeat;
  @apply bg-cover h-22px top-15px right-13px w-22px absolute;
}
</style>
