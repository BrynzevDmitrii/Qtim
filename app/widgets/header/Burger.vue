<template>
  <div class="burger" :class="{ 'burger--open': open }">
    <div class="burger__close" @click="$emit('close')">X</div>
    <div class="burger__item">Works</div>
    <div class="burger__item">About</div>
    <div class="burger__language-switcher">
      <NuxtImg src="./icons/uk.svg" alt="English" width="24" height="24" />
    </div>
    <button class="burger__btn-primary">Let's work</button>
  </div>
</template>
<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['close']);
</script>

<style scoped lang="scss">
@use '@/styles/colors.scss';
.burger {
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  padding: 20px;
  background-color: #6b6666;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  &--open {
    transform: translateX(0);
    opacity: 0.9;
  }

  &__item {
    font-size: 24px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  &__language-switcher {
    margin-bottom: 20px;
  }

  &__btn-primary {
    padding: 10px 20px;
    background-color: #007bff;
    color: var(--color-white);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
