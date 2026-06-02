<template>
  <div class="pagination">
    <button
      v-if="count > 1"
      class="pagination__btn pagination__navigation-btn"
      @click="$emit('update:page', props.currentPage - 1)"
    >
      <NuxtImg
        class="pagination__btn-prev"
        src="./icons/right-arrow.svg"
        alt="left-arrow"
        width="5"
        height="10"
      />
    </button>
    <div class="pagination">
      <button
        :class="['pagination__btn', { 'pagination__btn--active': i === props.currentPage }]"
        v-for="i in qertyPagination"
        :key="i"
        @click="$emit('update:page', i)"
      >
        {{ i }}
      </button>
    </div>
    <button
      v-if="props.currentPage < props.totalPages"
      class="pagination__btn pagination__navigation-btn"
      :disabled="props.currentPage >= props.totalPages"
      @click="$emit('update:page', props.currentPage + 1)"
    >
      <NuxtImg src="./icons/right-arrow.svg" alt="right-arrow" width="5" height="10" />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentPage: number;
  totalPages: number;
}
const props = defineProps<Props>();
const COUNT_SECTION_PAGINATIONS = 5;
let count = ref(1);

const qertyPagination = computed(() => {
  if (props.totalPages > COUNT_SECTION_PAGINATIONS) {
    return Array.from({ length: COUNT_SECTION_PAGINATIONS }, (_, i) => {
      const page = (count.value - 1) * COUNT_SECTION_PAGINATIONS + i + 1;
      return page <= props.totalPages ? page : null;
    }).filter(Boolean) as number[];
  } else {
    return props.totalPages;
  }
});

watch(
  () => props.currentPage,
  (newPage) => {
    count.value = Math.ceil(newPage / COUNT_SECTION_PAGINATIONS);
  },
);

defineEmits<{
  'update:page': [page: number];
}>();
</script>

<style scoped>
@import "@/styles/colors.scss";
.pagination {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  margin: 50px 0 140px 0;
}

.pagination__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: rgba(243, 243, 243, 1);
  color: var(--color-black);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
}

.pagination__btn--active {
  background: var(--color-black);
  color: rgba(255, 255, 255, 1);
}

.pagination__btn:hover:not(:disabled) {
  background: rgba(232, 232, 232, 1);
  color: var(--color-black);
}

.pagination__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination__navigation-btn {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(243, 243, 243, 1);
}

.pagination__btn-prev {
  transform: rotate(180deg);
}

.pagination__info {
  font-size: 14px;
  color: #666;
  min-width: 150px;
  text-align: center;
}
</style>
