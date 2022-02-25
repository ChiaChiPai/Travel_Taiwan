<script setup lang="ts">
import type { AxiosResponse } from 'axios'
import type { ScenicSpot, Hotel, Restaurant } from '../@types/apiResponse'

import { ref, onBeforeMount } from 'vue'
import { $api } from '../service/api'
import { select } from '../util/selectApiKey'
import { getImageUrl } from '../util/common'

const cardMenu = [
  {
    img: getImageUrl('card_inspect.png'),
    title: '景點'
  },
  {
    img: getImageUrl('card_food.png'),
    title: '美食'
  },
  {
    img: getImageUrl('card_accommodation.png'),
    title: '住宿'
  },
  {
    img: getImageUrl('card_traffic.png'),
    title: '交通'
  }
]
let tourismData = ref({
  scenic: {} as ScenicSpot[],
  hotel: {} as Hotel[],
  restaurant: {} as Restaurant[]
})

onBeforeMount(async () => {
  const scenicPromise = $api.scenic.fetch({
    params: {
      $skip: Math.floor(Math.random() * 500),
      $top: 3,
      $select: select.scenic
    }
  })
  const hotelPromise = $api.hotel.fetch({
    params: {
      $skip: Math.floor(Math.random() * 500),
      $top: 3,
      $select: select.hotel
    }
  })
  const restaurantPromise = $api.restaurant.fetch({
    params: {
      $skip: Math.floor(Math.random() * 500),
      $top: 3,
      $select: select.restaurant
    }
  })

  const [{ data: scenic }, { data: hotel }, { data: restaurant }] =
    (await Promise.all([scenicPromise, hotelPromise, restaurantPromise])) as [
      AxiosResponse<ScenicSpot[]>,
      AxiosResponse<Hotel[]>,
      AxiosResponse<Restaurant[]>
    ]

  tourismData.value = {
    scenic,
    hotel,
    restaurant
  }
})
</script>

<template>
  <div
    class="w-[100%]"
    :style="`background: url(${getImageUrl(
      'bg_index.png'
    )}) no-repeat bottom/cover`"
  >
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
      :style="`background: url(${card.img}) no-repeat bottom/cover;`"
      class="h-[390px] mx-[18.5px] w-[285px] relative"
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
      :key="idx"
      class="card card-image"
      :name="scenic.ScenicSpotName"
      :location="scenic.Address"
      :pic="scenic.Picture"
      :preview="getImageUrl('preview/scenic_preview.jpg')"
    />
  </div>

  <GlobalSubtitle class="bg-[#738677] mt-[90px]" :title="`熱門美食`" />
  <div class="flex pt-[79px] justify-center">
    <CardText
      v-for="(scenic, idx) in tourismData.restaurant"
      :key="idx"
      class="card card-restaurant"
      :name="scenic.RestaurantName"
      :city="scenic.City"
      :location="scenic.Address"
      :pic="scenic.Picture"
      :phone="scenic.Phone"
      :service="`營業時間：${scenic.OpenTime}`"
      :preview="getImageUrl('preview/restaurant_preview.jpg')"
    />
  </div>
  <GlobalSubtitle class="bg-[#C2BB96] mt-[90px]" :title="`住宿推薦`" />
  <div class="flex pt-[79px] justify-center">
    <CardText
      v-for="(scenic, idx) in tourismData.hotel"
      :key="idx"
      class="card card-restaurant"
      :name="scenic.HotelName"
      :location="scenic.Address"
      :pic="scenic.Picture"
      :phone="scenic.Phone"
      :service="`服務項目：${scenic.ServiceInfo || ''}`"
      :preview="getImageUrl('preview/hotel_preview.jpg')"
    />
  </div>
</template>

<style lang="postcss">
.card {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.card:nth-child(2) {
  @apply mx-9;
}
.card-image {
  background: url(../assets/images/preview/scenic_preview.jpg);
}
</style>
