<script setup lang="ts"></script>

<template>
  <div
    class="
      border-[2px]
      border-[rgba(0, w-[368px]
      0, 0.3
      "
  >
    <img
      class="
        max-w-[128px]
        transform
        top-[-75px]
        left-[50%]
        -translate-x-1/2
        absolute
      "
      src="@/assets/images/img_avatar.png"
      alt=""
    />
    <img
      class="top-18px right-18px absolute"
      src="@/assets/images/icon_tag.png"
      alt=""
    />
    <div class="bg-[#0f0] rounded-t-[30px] h-[256px] mb-[8px] w-[100%]"></div>
    <div class="px-[15px]">
      <h3
        class="
          mr-[12px]
          mb-12px text-[32px]
          text-[rgba(0,0,0,0.8)]
          leading-[45px]
        "
      >
        胡切仔麵
      </h3>
      <ul class="text-[14px] text-[rgba(0,0,0,0.5)] leading-[27px]">
        <li>
          除了台北101台北到底還有那些夜景？
          讓KKday告訴你台北還有哪些易達又美麗的夜景景點吧!
        </li>
      </ul>
      <ul
        class="
          flex
          h-40px
          text-[14px]
          text-[rgba(0,0,0,0.3)]
          label justify-end
          items-center
        "
      >
        <li>
          <img src="@/assets/svg/icon_eye.svg" alt="" />
          <span>3萬</span>
        </li>
        <li>
          <img src="@/assets/svg/icon_love.svg" alt="" />
          <span>3千</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.label {
  img {
    @apply mr-6px;
  }
  li {
    @apply flex items-center;
  }
  li + li {
    @apply ml-18px;
  }
}
</style>
