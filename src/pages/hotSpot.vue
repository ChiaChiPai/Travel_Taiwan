<script setup lang="ts"></script>

<template>
  <div class="bg-[#6E9292] py-15px px-30px">
    <img src="@/assets/images/icon_taiwan.png" class="mr-28px w-72px" alt="" />
  </div>
  <div class="mb-8px attraction-intro">
    <AttractionIntro />
  </div>
  <div class="flex mx-auto max-w-1280px pb-27px justify-between">
    <div class="border-r-gray-600 w-[50%]">
      <h2 class="font-700 mb-32px text-48px leading-68px">景點資訊</h2>
      <dl class="mb-51px info">
        <dt>地址</dt>
        <dd>臺北市信義區信義路5段7號</dd>
        <dt>電話</dt>
        <dd
          class="
            border-[rgba(0,0,0,0.5)] border-width-[3px]
            rounded-10px
            py-4px
            pr-60px
            pl-14px
          ">
          +886-2-81018800
        </dd>
        <dt>開放時間</dt>
        <dd>星期一～五 11:00 - 21:00</dd>
        <dd>星期六.日 10:00 - 21:00</dd>
      </dl>
      <ul
        class="
          flex
          border-t-2px border-[rgba(0,0,0,0.5)]
          pt-14px
          w-[96.61%]
          recommand
          justify-center
        ">
        <li>周邊推薦</li>
        <li>周邊美食</li>
        <li>周邊住宿</li>
      </ul>
    </div>
    <div class="bg-[rgba(0,0,0,0.5)] w-2px" />
    <div class="">
      <h3
        class="font-700 mb-26px text-32px text-[rgba(0,0,0,0.8)] leading-45px">
        景點地圖
      </h3>
      <div class="bg-gray-200 rounded-20px h-408px w-476px" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.attraction-intro {
  background: linear-gradient(180deg, #adccce 0%, rgba(230, 245, 245, 0) 50%);
}

.info {
  dt {
    @apply font-bold text-32px text-[rgba(0,0,0,0.8)] leading-45px inline;
  }
  dd {
    @apply text-32px text-[rgba(0,0,0,0.5)] leading-45px inline;
    margin-inline-start: 24px;
  }
  dd + dt::before {
    content: '';
    height: 36px;
    display: block;
    mask-repeat: 10px;
  }

  dd + dd {
    margin-left: 152px;
  }
}
.recommand {
  li {
    @apply rounded-10px font-700 py-14px px-18px text-32px leading-45px box-border;
    border: 3px solid rgba(0, 0, 0, 0.5);
  }
  li + li {
    @apply ml-18px;
  }
}
</style>
