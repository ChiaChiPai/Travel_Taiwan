<script setup lang="ts">
import AccommodationBanner from "../assets/images/Accommodation_banner.jpg";

const Accommodation = `background-image: url(${AccommodationBanner});`;
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-bottom h-700px w-[100%] relative"
    :style="Accommodation"
  >
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
      src="../assets/images/Accommodation_banner_icon.png"
      alt=""
    />
    <ul
      class="
        flex
        transform
        bottom-[3%]
        left-[50%]
        text-14px
        -translate-x-1/2
        search
        absolute
      "
    >
      <li class="">
        <label ref="input" class="search_title">目的地</label>
        <input
          class="
            outline-none
            rounded-8px
            py-13px
            pr-13px
            pl-14px
            leading-23px
            w-351px
          "
          type="search"
          placeholder="你要去哪裡？"
        />
      </li>
      <li class="">
        <div class="search_title">入住-退房</div>
        <div
          class="
            bg-white
            cursor-pointer
            outline-none
            rounded-8px
            py-13px
            pr-13px
            pl-14px
            text-[rgba(0,0,0,0.5)]
            leading-23px
            w-159px
          "
        >
          <img
            src="@/assets/svg/icon_calendar.svg"
            class="mr-12px inline-block"
            alt=""
          />
          <p class="leading-20px inline-block">2021/10/6~10/9</p>
        </div>
      </li>
      <li class="">
        <div class="search_title">房間及人數</div>
        <div
          class="
            bg-white
            cursor-pointer
            outline-none
            rounded-8px
            text-center
            py-13px
            pr-13px
            pl-14px
            text-[rgba(0,0,0,0.5)]
            leading-23px
            w-254px
          "
        >
          ２位成人，1間房間
        </div>
      </li>
      <li
        class="
          bg-[#fff]
          rounded-xl
          flex
          h-48px
          w-96px
          justify-center
          items-center
          self-end
        "
      >
        <SvgIcon name="magnifier" class="h-18px mr-10px w-18px"></SvgIcon>
        <span class="font-bold text-xl text-[rgba(0,0,0,0.5)]">搜尋</span>
      </li>
    </ul>
  </div>
  <div class="bg-gradient flex h-281px w-full">
    <div class="h-454px w-375px">
      <h3>台北</h3>
      <p>650 間住宿</p>
    </div>
    <div class="">
      <div class="h-221px w-367px">
        <ImgSrc name="Taipei-view" type="jpg" width="367" height="221"></ImgSrc>
        <h3>台北</h3>
        <p>650 間住宿</p>
      </div>
      <div class="h-221px w-367px">
        <h3>台北</h3>
        <p>650 間住宿</p>
      </div>
    </div>
    <div class="h-454px w-375px">
      <h3>台北</h3>
      <p>650 間住宿</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.search_title {
  @apply font-700 mb-14px text-28px text-[rgba(0,0,0,0.5)] leading-39px block;
}
.search {
  @apply bg-[rgba(255,255,255,0.4)] rounded-20px shadow-lg py-35px px-20px;
  li {
    @apply mx-19px;
  }
}

.bg-gradient {
  background: linear-gradient(180deg, #e6ddb2 0%, rgba(230, 221, 178, 0) 100%);
}
</style>
