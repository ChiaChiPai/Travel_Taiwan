<script lang="tsx">
import { defineComponent, computed, ref, watch } from 'vue'
import SvgIcon from './SvgIcon.vue'
export default defineComponent({
  props: {
    pageLength: {
      type: Number,
      required: true
    },
    pageGroupLength: {
      // 顯示頁數
      type: Number,
      default: 10
    }
  },
  emits: ['handlePage'],

  setup(props, { emit }) {
    // Data
    const totalPage = Math.floor(props.pageLength / 6) + 1 // 總頁數
    const currentPage = ref(1) // 目前頁數

    // computed
    const currentPageGroup = computed(() => {
      // 第幾組頁面
      return Math.floor((currentPage.value - 1) / props.pageGroupLength)
    })
    const pages = computed(() => {
      // 計算 render 出來的 dom 頁數
      const startPage = currentPageGroup.value * props.pageGroupLength + 1
      const endPage =
        (currentPageGroup.value + 1) * props.pageGroupLength > totalPage
          ? totalPage
          : (currentPageGroup.value + 1) * props.pageGroupLength

      const arr = []
      for (let i = startPage; i <= endPage; i++) {
        arr.push(
          <li
            class={{
              active: currentPage.value === i,
              'cursor-pointer': true
            }}
            onClick={() => {
              currentPage.value = i
            }}
          >
            {i}
          </li>
        )
      }
      return arr
    })

    // watch
    watch(
      () => currentPage.value,
      newVal => emit('handlePage', newVal)
    )

    // methods
    const prev = () => {
      if (currentPageGroup.value > 0 && totalPage > props.pageGroupLength)
        return (
          <li
            onClick={() => {
              currentPage.value =
                props.pageGroupLength * (currentPageGroup.value - 1) + 1
            }}
          >
            ...
          </li>
        )
    }
    const next = () => {
      if (
        totalPage > props.pageGroupLength &&
        currentPageGroup.value < Math.floor(totalPage / props.pageGroupLength)
      )
        return (
          <li
            onClick={() => {
              currentPage.value =
                props.pageGroupLength * (currentPageGroup.value + 1) + 1
            }}
          >
            ...
          </li>
        )
    }

    // render HTML
    return () => (
      <div class="flex items-center">
        {currentPage.value <= 1 ? (
          ''
        ) : (
          <div
            onClick={() => {
              currentPage.value--
            }}
          >
            <SvgIcon
              name="arrow-left"
              color="#f8f8f8"
              class="h-44px w-44px"
            ></SvgIcon>
          </div>
        )}
        <ul class="flex mx-2 pagination">
          {prev()}
          {pages.value}
          {next()}
        </ul>
        {currentPage.value >= totalPage ? (
          ''
        ) : (
          <div
            onClick={() => {
              currentPage.value++
            }}
          >
            <SvgIcon name="arrow-right" class="h-44px w-44px"></SvgIcon>
          </div>
        )}
      </div>
    )
  }
})
</script>

<style lang="postcss" scoped>
.pagination {
  li {
    @apply rounded-full bg-[#f8f8f8] h-44px mx-4px text-center text-[rgba(0,0,0,0.8)] leading-44px w-44px;
    &.active {
      @apply bg-[rgba(0,0,0,0.3)];
    }
  }
}
</style>