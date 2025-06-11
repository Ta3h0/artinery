<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

import { ref, onMounted, onBeforeUnmount } from 'vue';

const miniItem = [
  { miniImg: 'img/miniHeaderBanner1.png' },
  { miniImg: 'img/miniHeaderBanner2.png' },
  { miniImg: 'img/miniHeaderBanner3.png' },
  { miniImg: 'img/miniHeaderBanner4.png' },
  { miniImg: 'img/miniHeaderBanner5.png' },
];

const currentIndex = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % miniItem.length;
  }, 3000);//테스트햣
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.searchIcon {
  width: 13px;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
}

.rank {
  height: 36px;
  overflow: hidden;
  position: relative;
}

.rank-inner {
  transition: transform 0.5s ease-in-out;
  transform: translateY(calc(-36px * var(--current-index)));
}

.rank li {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.logo {
  max-width: 210px
}
</style>

<template>
  <div class="d-flex align-center py-6 logobar">
    <div class="logo c-pointer mr-5" @click="router.push({ path: '/' })">
      <img src="/img/LogoType1.svg" alt="No Logo image">
    </div>
    <div class="searchSection d-flex align-center">
      <div class="searchBox position-relative">
        <input type="text" placeholder="작품명을 검색하세요" />
        <img src="/img/Search.svg" alt="No Icon" class="searchIcon">
      </div>

      <ul class="rank pa-0 ml-6">
        <div class="rank-inner" :style="{ '--current-index': currentIndex }">
          <li v-for="(item, i) in miniItem" :key="i">
            <img :src="item.miniImg" alt="No banner" class="h-100" />
          </li>
        </div>
      </ul>
    </div>


  </div>
</template>