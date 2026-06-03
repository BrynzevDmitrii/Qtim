<template>
  <div class="skeleton-rectangle" :style="(widthClass, heightClass)"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: '40px',
  },
  width: {
    type: String,
    default: '100%',
  },
});

const widthClass = `width: ${props.width};`;
const heightClass = `height: ${props.height};`;
</script>

<style>
.skeleton-rectangle {
  background: linear-gradient(
    to right,
    #f0f0f0 0%,
    #e0e0e0 20%,
    #f0f0f0 40%,
    #f0f0f0 60%,
    #e0e0e0 80%,
    #f0f0f0 100%
  );
  background-size: 200% 200%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

@keyframes skeleton-loading {
  0% {
    background-position: -46.4% 0;
  }
  100% {
    background-position: 46.4% 0;
  }
}
</style>
