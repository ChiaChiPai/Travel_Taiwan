<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'png'
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 0
  },
  classString: {
    type: String,
    default: ''
  }
})

const getImageUrl = (size: number) =>
  new URL(
    `../assets/images/${size}x/${props.name}@${size}x.${props.type}`,
    import.meta.url
  ).href
</script>

<template>
  <img
    :srcset="`${getImageUrl(1)} 1x, ${getImageUrl(2)} 2x, ${getImageUrl(3)} 3x`"
    :src="getImageUrl(1)"
    :alt="alt"
    :width="width"
    :height="height"
    :class="classString" />
</template>
