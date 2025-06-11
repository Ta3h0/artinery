<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router';

const store = useStore()
const socialLogins = computed(() => store.state.auth.socialLoginList)

const router = useRouter();

const goError = () => {
  router.push({ path: "/404" });
}


</script>


<template>
  <div class="socialLogin">
    <button v-if="socialLogins.includes('kakao')" class="py-4 w-100 kakao" @click="goError()">
      <img src="img/kakao.svg" alt="No Icon" style="height: 20px; width: auto;">
      <p class="ml-2">카카오 로그인</p>
    </button>
    <button v-if="socialLogins.includes('naver')" class="py-4 w-100 naver" @click="goError()">
      <img src="img/naver.svg" alt="No Icon" style="height: 20px; width: auto;">
      <p class="ml-2">네이버 로그인</p>
    </button>
    <button v-if="socialLogins.includes('google')" class="py-4 w-100 google" @click="goError()">
      <img src="img/google.svg" alt="No Icon" style="height: 20px; width: auto;">
      <p class="ml-2">구글 로그인</p>
    </button>
  </div>
</template>

<style scoped>
.socialLogin p {
  font-size: 14px;
}

.naver {
  background-color: #2db400;
  color: white;
}

.google {
  background-color: #d9d9d9;
}

.kakao {
  background-color: #fee500;
}

.naver,
.kakao,
.google {
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 6px 0;
}
</style>
