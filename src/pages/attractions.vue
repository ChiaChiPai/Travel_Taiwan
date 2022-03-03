<script setup lang="ts">
import type { ScenicSpot } from '../@types/apiResponse'

import { ref, onBeforeMount } from 'vue'
import type { AxiosResponse } from 'axios'
import { $api } from '../service/api'
import { select } from '../util/selectApiKey'
import { getImageUrl } from '../util/common'
import { useRouter } from 'vue-router'

const router = useRouter()
let scenicData = ref({
  scenicHot: {} as ScenicSpot[],
  scenicTopic: {} as ScenicSpot[]
})
let searchResult = ref({} as ScenicSpot[])
let currentPageData = ref({} as ScenicSpot[])
const isShowSearch = ref(false)
const keyword = ref('')
const currentPage = ref(1)

onBeforeMount(async () => {
  if (Object.keys(router.currentRoute.value.query).length !== 0) {
    isShowSearch.value = true
    const scenicSearchPromise = $api.scenic.fetch({
      params: {
        $top: 100,
        $select: select.scenic
      }
    })

    const { data: scenicSearch } = (await scenicSearchPromise) as AxiosResponse<
      ScenicSpot[]
    >
    searchResult.value = scenicSearch
    currentPageData.value = searchResult.value.slice(0, 6)
  } else {
    const scenicHotPromise = $api.scenic.fetch({
      params: {
        $skip: Math.floor(Math.random() * 1000),
        $top: 3,
        $select: select.scenic
      }
    })
    const scenicTopicPromise = $api.scenic.fetch({
      params: {
        $skip: Math.floor(Math.random() * 1000),
        $top: 3,
        $select: select.scenic
      }
    })

    const [{ data: scenicHot }, { data: scenicTopic }] = (await Promise.all([
      scenicHotPromise,
      scenicTopicPromise
    ])) as [AxiosResponse<ScenicSpot[]>, AxiosResponse<ScenicSpot[]>]

    scenicData.value = {
      scenicHot,
      scenicTopic
    }
  }
})

const getSearchResult = (query: string) => {
  keyword.value = query
  router.push({
    name: 'attractions',
    query: {
      q: query
    }
  })
}
const handlePage = (page: string) => {
  console.log(page)
  currentPage.value = parseInt(page)

  currentPageData.value = searchResult.value.slice(
    (currentPage.value - 1) * 6,
    currentPage.value * 6
  ) //1-6 6-12 12-18
}
</script>

<template>
  <AttractionBanner @search="getSearchResult" />
  <div v-if="isShowSearch">
    <GlobalSubtitle
      class="bg-[#6E9292]"
      :title="keyword"
      :is-show-more="false"
    />
    <div
      class="
        flex flex-wrap
        mx-auto
        pt-[79px] pt-79px
        pb-[90px]
        w-1280px
        justify-evenly
      "
    >
      <CardImage
        v-for="(scenic, idx) in currentPageData"
        :key="idx"
        class="mb-9 card-image"
        :name="scenic.ScenicSpotName"
        :location="scenic.Address"
        :pic="scenic.Picture"
        :preview="getImageUrl('preview/scenic_preview.jpg')"
      />
    </div>
    <PaginationGroup
      v-if="Object.keys(searchResult).length > 0"
      :page-length="searchResult.length"
      :page-group-length="5"
      class="mb-28px justify-center"
      @handle-page="handlePage"
    />
  </div>
  <div v-else>
    <GlobalSubtitle class="bg-[#6E9292]" :title="`熱門景點`" />
    <div class="bg-grient-attraction flex pt-[79px] pb-[90px] justify-center">
      <CardImage
        v-for="(scenic, idx) in scenicData.scenicHot"
        :key="idx"
        class="card card-image"
        :name="scenic.ScenicSpotName"
        :location="scenic.Address"
        :pic="scenic.Picture"
        :preview="getImageUrl('preview/scenic_preview.jpg')"
      />
    </div>
    <GlobalSubtitle class="bg-[#6E9292]" :title="`主題景點`" />
    <div class="flex pt-[79px] pb-[90px] justify-center">
      <CardImage
        v-for="(scenic, idx) in scenicData.scenicTopic"
        :key="idx"
        class="card card-image"
        :name="scenic.ScenicSpotName"
        :location="scenic.Address"
        :pic="scenic.Picture"
        :preview="getImageUrl('preview/scenic_preview.jpg')"
      />
    </div>
  </div>
</template>

<style lang="postcss" scope>
.card-image {
  background: url(../assets/images/preview/scenic_preview.jpg);
}
</style>
