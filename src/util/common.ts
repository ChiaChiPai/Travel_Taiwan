export const getImageUrl = (path: string) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}
