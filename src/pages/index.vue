<script setup lang="ts">
import type { AxiosResponse } from "axios";
import type { ScenicSpot, Hotel, Restaurant } from "../@types/apiResponse";

import indexBanner from "../assets/images/bg_index.png";
import cardFood from "../assets/images/card_food.png";
import cardInspect from "../assets/images/card_inspect.png";
import cardAccommodation from "../assets/images/card_accommodation.png";
import cardTraffic from "../assets/images/card_traffic.png";

import { ref, onBeforeMount, reactive } from "vue";
import { $api } from "../service/api";
import { select } from "../util/selectApiKey";
import { getImageUrl } from "../util/common";

const indexBannerImg = `background-image: url(${indexBanner});`;
const cardMenu = [
  {
    img: cardInspect,
    title: "景點",
  },
  {
    img: cardFood,
    title: "美食",
  },
  {
    img: cardAccommodation,
    title: "住宿",
  },
  {
    img: cardTraffic,
    title: "交通",
  },
];

let tourismData = ref({
  scenic: {} as ScenicSpot[],
  hotel: {} as Hotel[],
  restaurant: {} as Restaurant[],
});

onBeforeMount(async () => {
  const scenicPromise = $api.scenic.fetch({
    params: {
      $skip: Math.floor(Math.random() * 500),
      $top: 3,
      $select: select.scenic,
    },
  });
  const hotelPromise = $api.hotel.fetch({
    params: {
      $skip: Math.floor(Math.random() * 500),
      $top: 3,
      $select: select.hotel,
    },
  });
  const restaurantPromise = $api.restaurant.fetch({
    params: {
      $skip: Math.floor(Math.random() * 500),
      $top: 3,
      $select: select.restaurant,
    },
  });

  const [{ data: scenic }, { data: hotel }, { data: restaurant }] =
    (await Promise.all([scenicPromise, hotelPromise, restaurantPromise])) as [
      AxiosResponse<ScenicSpot[]>,
      AxiosResponse<Hotel[]>,
      AxiosResponse<Restaurant[]>
    ];

  tourismData.value = {
    scenic,
    hotel,
    restaurant,
  };
});
</script>

<template>
  <div class="bg-cover bg-no-repeat bg-bottom w-[100%]" :style="indexBannerImg">
    <img
      class="
        transform
        top-45px
        left-[50%]
        w-[22.1875vw]
        -translate-x-1/2
        absolute
        xl:w-[284px]
      "
      src="../assets/images/icon_taiwan.png"
      alt=""
    />
    <p
      class="
        text-center
        mb-[3.9vw]
        transform
        pt-[54.4531vw]
        bottom-[15.97vw]
        text-[rgba(0,0,0,0.5)]
        leading-[1.4]
      "
    >
      台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！<br />
      到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!
    </p>
    <IndexWeather class="pb-[62px]" />
  </div>
  <ul class="flex mb-[55px] justify-center">
    <li
      v-for="card in cardMenu"
      :key="card.title"
      :style="`background-image: url(${card.img});`"
      class="bg-cover bg-no-repeat h-[390px] mx-[18.5px] w-[285px] relative"
    >
      <p
        class="
          font-weight font-bold
          top-[15px]
          right-[16px]
          text-[30px]
          leading-[43px]
          w-[30px]
          absolute
        "
      >
        {{ card.title }}
      </p>
    </li>
  </ul>

  <GlobalSubtitle class="bg-[#6E9292]" :title="`熱門景點`" />
  <div class="flex pt-[79px] justify-center">
    <CardImage
      v-for="(scenic, idx) in tourismData.scenic"
      class="card-image"
      :key="idx"
      :name="scenic.ScenicSpotName"
      :location="scenic.Address"
      :pic="scenic.Picture"
      :preview="getImageUrl('preview/scenic_preview.jpg')"
    />
  </div>

  <GlobalSubtitle class="bg-[#738677] mt-[90px]" :title="`熱門美食`" />
  <div class="flex pt-[79px] justify-center">
    <CardText />
    <CardText class="mx-[35px]" />
    <CardText />
  </div>
  <GlobalSubtitle class="bg-[#C2BB96] mt-[90px]" :title="`住宿推薦`" />
  <div class="flex pt-[79px] justify-center">
    <CardText />
    <CardText class="mx-[35px]" />
    <CardText />
  </div>
</template>

<style lang="postcss">
.card-image {
  background: url(../assets/images/preview/scenic_preview.jpg);
}
.card-image:nth-child(2) {
  @apply mx-3;
}
</style>
