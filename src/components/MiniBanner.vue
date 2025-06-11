<template>
  <div class="gridOn d-flex flex-wrap justify-space-between align-center">
    <div class="bannerItem c-pointer" v-for="(item, i) in bannerItem" @click="goError()">
      <img :src="item.imageSrc" :alt="'이벤트배너' + (i + 1)">
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const bannerItem = [
  { imageSrc: "img/miniBanner1.png" },
  { imageSrc: "img/miniBanner2.png" },
  { imageSrc: "img/miniBanner3.png" },
  { imageSrc: "img/miniBanner4.png" },
  { imageSrc: "img/miniBanner5.png" },
  { imageSrc: "img/miniBanner6.png" },
]

const router = useRouter();

const goError = () => {
  router.push({ path: "/404" });
}
</script>

<style scoped>
.bannerItem {
  width: calc((100% / 3) - 16px);
}

.bannerItem:nth-child(4),
.bannerItem:nth-child(5),
.bannerItem:nth-child(6) {
  margin-top: 24px;
}
</style>