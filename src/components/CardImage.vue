<script setup lang="ts">
import type { commonInfo } from '../@types/apiResponse'

interface Props {
  isShowOption?: boolean
  name: string
  location: string
  pic: commonInfo['Picture']
  preview: string
}

withDefaults(defineProps<Props>(), {
  isShowOption: true,
  name: '',
  location: '',
  pic: () => ({
    PictureUrl1: ''
  }),
  preview: ''
})
</script>

<template>
  <div
    class="bg-cover rounded-30px h-[420px] w-[368px] overflow-hidden relative"
  >
    <img
      :src="pic.PictureUrl1 || preview"
      class="object-cover object-center h-[420px] w-[368px]"
      :alt="pic.PictureDescription1 || name"
      width="368"
      height="420"
    />
    <div v-if="isShowOption">
      <div
        class="
          bg-white
          flex
          rounded-30px
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
    </div>
    <div class="h-[100%] pt-354px bottom-0 w-[100%] absolute">
      <div
        class="
          flex
          bg-[rgba(0,0,0,0.4)]
          font-700
          h-66px
          text-white
          px-12px
          justify-between
          items-center
        "
      >
        <div
          class="flex-1 text-shadow-sm text-36px leading-[39.2px] line-clamp-1"
        >
          {{ name }}
        </div>
        <div v-if="isShowOption" class="flex item-center">
          <img
            class="mr-[4px]"
            src="@/assets/svg/icon_location-white.svg"
            alt=""
          />
          <span
            class="
              text-base text-16px
              leading-22px
              inline-block
              whitespace-nowrap
            "
            >{{
              location
                ? location
                    .match(/[^0-9]/gi)
                    .join('')
                    .slice(0, 3)
                : ''
            }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
