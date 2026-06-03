<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-content__lets-work">
        <p>Is there a project?</p>
        <h2>Let’s work together</h2>
      </div>
      <div class="footer-content__contacts">
        <div class="footer-content__contacts-info">
          <p>For all questions</p>
          <a :href="'tel:' + tel">{{ tel }}</a>
          <a :href="'mailto:' + email">{{ email }}</a>
        </div>
        <div class="footer-content__contacts-info">
          <p>Office in Russia</p>
          <div class="footer-content__contacts-info-address">{{ address }}</div>
          <NuxtImg src="./icons/location-icon.svg" alt="English" width="32" height="32" />
        </div>
        <div class="footer-content__contacts-info">
          <p>Office in Dubai</p>
          <div class="footer-content__contacts-info-address">{{ address }}</div>
          <NuxtImg src="./icons/location-icon.svg" alt="English" width="32" height="32" />
        </div>
      </div>
      <div class="footer-content__bottom">
        <div class="footer-content__bottom-social">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.link"
            class="footer-content__bottom-social-link"
          >
            {{ social.name }}
          </NuxtLink>
        </div>
        <div class="footer-content__bottom-go">
          <NuxtImg src="./icons/footer-elips.svg" alt="Go to top" width="358" height="179" />
          <div>Go</div>
        </div>
        <div class="footer-content__bottom-privaces">
          <NuxtLink
            v-for="item in privaces"
            :key="item.name"
            :to="item.link"
            class="footer-content__bottom-social-link"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps({
  // Здесь можно определить пропсы, если они понадобятся в будущем
});
const tel = '+7 (920) 278—00—68';
const email = 'qtim@agency.com';
const address = '139 Ruben Station Lake Drew, NM 52678';

const socials = [
  { name: 'Facebook', link: 'javascript:void(0)' },
  { name: 'Instagram', link: 'javascript:void(0)' },
  { name: 'Telegram', link: 'javascript:void(0)' },
];

const privaces = [
  { name: 'Behance', link: 'javascript:void(0)' },
  { name: 'Linkedn', link: 'javascript:void(0)' },
  { name: 'Privacy Policy', link: 'javascript:void(0)' },
];
</script>

<style scoped lang="scss">
@use '@/styles/colors.scss';
.footer {
  background: var(--color-lilac);
  padding: 140px 0 0;
}

.footer-content {
  max-width: 1217px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: space-between;
}

.footer-content__lets-work {
  max-width: 495px;
}

.footer-content__lets-work p {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--color-black);
}

.footer-content__lets-work h2 {
  margin: 56px 0 0;
  font-size: 112px;
  font-weight: 400;
  text-decoration: underline;
  color: var(--color-black);
  text-underline-position: from-font;
  text-decoration-thickness: 1px;
}

.footer-content__contacts {
  margin-top: 54px;
  flex: 0 0 152px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.footer-content__contacts-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-content__contacts-info p {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  color: var(--color-black);
}

.footer-content__contacts-info a,
.footer-content__contacts-info-address {
  display: block;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--color-black);
}

.footer-content__bottom {
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 40px;
  flex-wrap: wrap;
  padding-top: 32px;
}

.footer-content__bottom-social,
.footer-content__bottom-privaces {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  margin-bottom: 30px;
  text-decoration: underline;
  text-underline-position: under;
  font-size: 16px;
  font-weight: 400;
}

.footer-content__bottom-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(17, 17, 17, 0.85);
  font-size: 0.92rem;
  transition:
    color 0.2s,
    opacity 0.2s;
}

.footer-content__bottom-social-link:hover {
  color: #111;
  opacity: 1;
}

.footer-content__bottom-go {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 358px;
  height: 179px;
}

.footer-content__bottom-go div {
  position: absolute;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  pointer-events: none;
  bottom: 30px;
}

@media (max-width: 768px) {
  .footer {
    padding: 48px 20px 24px;
  }

  .footer-content {
    gap: 40px;
  }

  .footer-content__lets-work h2 {
    font-size: 3rem;
  }

  .footer-content__bottom,
  .footer-content__bottom-social,
  .footer-content__bottom-privaces {
    gap: 16px;
    justify-content: flex-start;
  }

  .footer-content__bottom-go {
    display: none;
  }
}
</style>
