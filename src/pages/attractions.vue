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
const titleRef = ref(null)

onBeforeMount(async () => {
  const urlQuery = router.currentRoute.value.query
  if (Object.keys(urlQuery).length !== 0) {
    ajaxSearchData(router.currentRoute.value.query.q as string)
    keyword.value = urlQuery.q as string
  } else {
    init()
  }
})

const init = async () => {
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

const ajaxSearchData = async (q: string) => {
  isShowSearch.value = true
  searchResult.value = []
  const scenicSearchPromise = $api.scenic.fetch({
    params: {
      $select: select.scenic,
      $filter: `contains(ScenicSpotName, '${q}') or contains(Address, '${q}')`
    }
  })

  const { data: scenicSearch } = (await scenicSearchPromise) as AxiosResponse<
    ScenicSpot[]
  >
  searchResult.value = scenicSearch
  currentPageData.value = searchResult.value.slice(0, 6)
}

const getSearchResult = (query: string) => {
  keyword.value = query
  router.push({
    name: 'attractions',
    query: {
      q: query
    }
  })
  ajaxSearchData(query)
}

const handlePage = (page: string) => {
  currentPageData.value = searchResult.value.slice(
    (parseInt(page) - 1) * 6,
    parseInt(page) * 6
  )

  window.scrollTo({
    top: (titleRef.value as HTMLElement | null)?.clientHeight ?? 700
  })
}
</script>

<template>
  <div ref="titleRef">
    <AttractionBanner @search="getSearchResult" />
  </div>
  <div v-if="isShowSearch">
    <GlobalSubtitle
      class="bg-[#6E9292]"
      :title="`關鍵字：${keyword}`"
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
