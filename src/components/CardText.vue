<script setup lang="ts">
import { defineProps } from 'vue'
import type { commonInfo } from '../@types/apiResponse'

interface Props {
  isShowOption?: boolean
  name: string
  location: string
  pic: commonInfo['Picture']
  preview: string
  phone: string
  openTime: string
}

withDefaults(defineProps<Props>(), {
  isShowOption: () => true,
  name: '',
  location: '',
  pic: () => ({
    PictureDescription1: ''
  }),
  preview: '',
  phone: '',
  openTime: ''
})
</script>

<template>
  <div class="border-[2px] rounded-30px h-[420px] w-[368px] relative">
    <div
      class="
        bg-white
        flex
        rounded-20px
        h-40px
        top-18px
        left-18px
        text-14px text-[rgba(0,0,0,0.3)]
        w-125px
        absolute
        items-center
        justify-center
      ">
      <img class="mx-4px w-16px" src="@/assets/svg/icon_visitor.svg" alt="" />
      <div>4.2</div>
      <img class="mx-4px w-24px" src="@/assets/svg/icon_eye.svg" alt="" />
      <div>4.2萬</div>
    </div>
    <img
      class="top-18px right-18px absolute"
      src="@/assets/images/icon_tag.png"
      alt="" />
    <div
      class="
        bg-[#0f0]
        rounded-tr-30px rounded-tl-30px
        h-[60.95%]
        mb-[8px]
        w-[100%]
      " />
    <div class="px-[15px]">
      <div class="flex items-center">
        <h3 class="mr-[12px] text-[32px] text-[rgba(0,0,0,0.8)] leading-[45px]">
          胡切仔麵
        </h3>
        <img class="mr-[4px]" src="@/assets/svg/icon_location.svg" alt="" />
        <span class="text-base text-[rgba(0,0,0,0.5)] inline-block"
          >南投縣</span
        >
      </div>
      <ul class="text-[14px] text-[rgba(0,0,0,0.5)] leading-[27px]">
        <li>南投縣545埔里鎮新生路10號</li>
        <li>營業時間：16:00-22:00</li>
        <li>電話：04-92994225</li>
      </ul>
    </div>
  </div>
</template>

<style></style>
