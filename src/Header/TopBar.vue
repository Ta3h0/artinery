<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const topBarMessage = [
  '신규 가입시 조건없이 5,000원 할인 쿠폰 100% 지급!',
  '지금 가입하고 다양한 혜택을 누려보세요!',
  '한정 기간 동안 특별 할인 이벤트 진행 중!'
];

const currentIndex = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % topBarMessage.length;
  }, 7000); // 1초 간격으로 슬라이드 전환
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.topBar {
  height: 36px;
  overflow: hidden;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
}

.message-container {
  height: 36px;
  transition: transform 0.5s ease-in-out;
  transform: translateY(calc(-36px * var(--current-index)));
}
</style>

<template>
  <div class="topBar">
    <div
      class="message-container"
      :style="{'--current-index': currentIndex}"
    >
      <div v-for="(message, index) in topBarMessage" :key="index" style="height: 36px; display: flex; align-items: center; justify-content: center;">
        {{ message }}
      </div>
    </div>
  </div>
</template>

