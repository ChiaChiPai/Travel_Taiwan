<script lang="ts" setup>
import { ref } from 'vue'
import { getImageUrl } from '../util/common'

defineEmits<{
  (e: 'search', keyword: string): void
}>()

const keyword = ref('')
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-bottom h-700px w-[100%] relative"
    :style="`background: url(${getImageUrl(
      'attraction_banner.jpg'
    )}) no-repeat bottom/cover`"
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
      src="../assets/images/atrraction_banner_icon.png"
      alt=""
    />
    <div
      class="flex transform bottom-[22%] left-[50%] -translate-x-1/2 absolute"
    >
      <label ref="input" class="mr-14px search-bar relative">
        <input
          v-model="keyword"
          class="
            outline-none
            rounded-8px
            py-13px
            pr-13px
            pl-8px
            leading-23px
            w-550px
          "
          type="search"
          placeholder="請輸入關鍵字"
          @keyup.enter="$emit('search', keyword)"
        />
      </label>
      <!-- <img src="@/assets/images/btn_search.png" alt="" /> -->
    </div>
  </div>
</template>

<style lang="postcss">
.bg-grient-attraction {
  background: linear-gradient(
    179.72deg,
    #adccce 0.72%,
    rgba(173, 204, 206, 0) 67.54%
  );
}

.search-bar::after {
  content: '';
  background: url(@/assets/svg/icon_search.svg) no-repeat;
  @apply bg-cover h-22px top-15px right-13px w-22px absolute;
}
</style>
