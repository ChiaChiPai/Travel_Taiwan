<script setup lang="ts">
import type { commonInfo } from '../@types/apiResponse'

interface Props {
  isShowOption?: boolean
  name: string
  city?: string | null
  service?: string | null
  location: string
  pic: commonInfo['Picture']
  phone: string
  preview: string
}

withDefaults(defineProps<Props>(), {
  isShowOption: true,
  city: null,
  service: null,
  name: '',
  location: '',
  pic: () => ({
    PictureUrl1: ''
  }),
  phone: '',
  preview: ''
})
</script>

<template>
  <div class="border-[2px] rounded-30px w-[368px] relative overflow-hidden">
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
      "
    >
      <img class="mx-4px w-16px" src="@/assets/svg/icon_visitor.svg" alt="" />
      <div>4.2</div>
      <img class="mx-4px w-24px" src="@/assets/svg/icon_eye.svg" alt="" />
      <div>4.2萬</div>
    </div>
    <img
      class="top-18px right-18px absolute"
      src="@/assets/images/icon_tag.png"
      alt=""
    />
    <div class="rounded-tr-30px rounded-tl-30px h-[60.95%] mb-[8px] w-[100%]">
      <div
        class="h-256px"
        :style="`background: url(${preview}) no-repeat top/cover`"
      >
        <img
          v-if="pic.PictureUrl1"
          class="object-center object-cover h-256px w-full"
          :src="pic.PictureUrl1"
          :alt="pic.PictureDescription1 || name"
        />
      </div>
      <div class="px-[15px]">
        <div class="flex items-center">
          <h3
            class="
              flex-1
              mr-[12px]
              text-[32px] text-[rgba(0,0,0,0.8)]
              leading-[45px]
              line-clamp-1
            "
          >
            {{ name }}
          </h3>
          <img class="mr-[4px]" src="@/assets/svg/icon_location.svg" alt="" />
          <span class="text-base text-[rgba(0,0,0,0.5)] inline-block">{{
            city || location.slice(0, 3)
          }}</span>
        </div>
        <ul class="text-[14px] text-[rgba(0,0,0,0.5)] leading-[27px]">
          <li>{{ location }}</li>
          <li v-if="service">{{ service }}</li>
          <li>電話：{{ phone }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
