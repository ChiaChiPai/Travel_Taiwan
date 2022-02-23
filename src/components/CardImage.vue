<script setup lang="ts">
defineProps({
  isShowOption: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="rounded-30px h-[420px] w-[368px] overflow-hidden relative">
    <div v-if="isShowOption">
      <div
        class="
          bg-white
          flex
          rounded-30px
          h-40px
          top-18px
          left-18px
          text-14px
          text-[rgba(0,0,0,0.3)]
          w-125px
          absolute
          items-center justify-center
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
    <div class="bg-[#0f0] h-[100%] mb-[8px] pt-354px w-[100%]">
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
        <div class="text-shadow-sm text-36px leading-[39.2px]">台北１０１</div>
        <div v-if="isShowOption" class="flex item-center">
          <img
            class="mr-[4px]"
            src="@/assets/svg/icon_location-white.svg"
            alt=""
          />
          <span
            class="
              text-base
              text-16px leading-22px
              inline-block
              whitespace-nowrap
            "
            >南投縣</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
