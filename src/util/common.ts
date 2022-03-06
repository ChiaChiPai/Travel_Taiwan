import type { Router } from 'vue-router'

export const getImageUrl = (path: string) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}

export const getSearchQuery = (keyword: string, router: Router) => {
  router.push({
    name: router.currentRoute.value.name as string,
    query: {
      q: keyword
    }
  })
}
