<template>
  <header class="header">
    <div class="header-left">
      <NuxtLink to="/" class="logo">QTIM</NuxtLink>
    </div>

    <div class="header-right">
      <div v-if="isMobile">
        <div v-if="!isMenuOpen" class="header-burger" @click="toggleMenu">
          <span></span>
        </div>
      </div>

      <template v-else>
        <nav class="nav">
          <div class="nav-item">Works</div>
          <div class="nav-item">About</div>
        </nav>
        <button class="language-switcher" aria-label="Switch language">
          <NuxtImg src="./icons/uk.svg" alt="English" width="24" height="24" />
        </button>
        <button class="btn-primary">Let's work</button>
      </template>
    </div>
  </header>

  <BurgerMenu v-if="isMenuOpen" @close="isMenuOpen = false" :open="isMenuOpen" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import BurgerMenu from './Burger.vue';

const isMobile = ref(false);
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
});
</script>

<style scoped lang="scss">
@use '@/styles/colors.scss';
.header {
  width: 100%;
  height: 121px;
  margin: 0 auto;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-black);
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 48px;
  align-items: center;
}

.nav-item {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-black);
  text-decoration: none;
}

.nav-item:hover {
  cursor: pointer;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 32px;
}

.header-burger {
  display: none;
}

.btn-primary {
  background: var(--color-black);
  color: var(--color-white);
  border: none;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 40px;
  cursor: pointer;
  white-space: nowrap;
}

.language-switcher {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .header {
    padding: 0 30px;
    height: auto;
    min-height: 90px;
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .header-left {
    gap: 24px;
  }

  .header-burger {
    display: block;
    width: 24px;
    height: 18px;
    position: relative;
    cursor: pointer;
  }

  .header-burger::before,
  .header-burger::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-black);
  }

  .header-burger::before {
    top: 0;
  }

  .header-burger::after {
    bottom: 0;
  }

  .header-burger span {
    position: absolute;
    top: 9px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-black);
  }
}
</style>
