<template>
  <nav
    class="
      flex
      transform
      top-24px
      left-[50%]
      w-[100%]
      z-1
      -translate-x-1/2
      absolute
      xl:w-[1280px]
    ">
    <div class="flex pr-[30px] w-[100%] justify-end">
      <ul
        class="
          flex
          font-tc font-bold
          mr-3
          text-[rgba(0,0,0,0.5)]
          navbar
          items-center
        ">
        <li>
          <router-link :to="{ name: 'index' }"> 首頁 </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'attractions' }"> 景點 </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'delicacy' }"> 美食 </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'accommodation' }"> 住宿 </router-link>
        </li>
      </ul>
      <img src="@/assets/svg/icon_member.svg" alt="" />
    </div>
  </nav>
</template>

<style lang="postcss">
.navbar li {
  @apply mx-6px relative;
  + li::before {
    content: '';
    width: 2px;
    height: 24px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: -8px;
  }
}
</style>
