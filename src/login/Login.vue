<script setup>
import { useRouter } from 'vue-router';
import SocialTab from './SocialTab.vue';

const router = useRouter();

const goError = () => {
  router.push({ path: "/404" });
}
</script>


<template>
  <div class="px-4 loginBox mx-auto">
    <img src="img/LogoType3.svg" alt="logo" class="d-block mb-12 mt-12 px-12">

    <div class="loginInput mb-5">
      <input type="text" placeholder="아이디" class="w-100 d-block inputArea py-3">
      <input type="password" placeholder="비밀번호" class="w-100 d-block inputArea py-3">
      <a @click="goError()" style="font-weight: 900; font-size: 13px;" class="text-end d-block text-grey">아이디 / 비밀번호
        찾기</a>
    </div>

    <div class="loginBtn mb-5">
      <button class="w-100 d-block btnArea py-4 signIn" @click="goError()">
        로그인
      </button>
      <button class="w-100 d-block btnArea py-4 signUp" @click="goError()">
        회원가입
      </button>
    </div>

    <div class="position-relative text-center mb-5">
      <span class="bg-white py-1 px-2 text-grey" style="font-size:13px; font-weight:900;">간편 로그인</span>
      <span class="d-block w-100 position-absolute bg-grey"
        style="height: 1px; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: -1;"></span>
    </div>
    <SocialTab />
  </div>
</template>

<style scoped>
.loginBox {
  max-width: 400px;
  width: 100%;
}

.inputArea::placeholder {
  font-size: 14px;
}

.inputArea {
  border: 1px solid #d9d9d9 !important;
  margin: 6px 0;
  border-radius: 8px !important;
}

.signUp {
  border: 1px solid #d9d9d9;
  color: #222;
}

.signIn {
  color: white;
  border: 1px solid #222;
  background-color: #222;
}

.signIn,
.signUp {
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  margin: 6px 0;
}
</style>
