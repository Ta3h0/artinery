<script setup>
import { useRouter } from 'vue-router';

// defineProps 올바른 사용법
const props = defineProps({
  imageSrc: String,
  routerPath: String
})
const router = useRouter();
const goError = () => {
  router.push({ path: "/404" });
}
</script>

<template>
  <div class="gridOn c-pointer" @click="goError()">
    <img :src="imageSrc" alt="아티너리 배너">
  </div>
</template>


<style scoped></style>
