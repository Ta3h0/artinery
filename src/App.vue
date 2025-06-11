<script setup>
import HeaderVue from './Header/Header.vue'
import Footer from './Footer/Footer.vue';

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드럽게 이동
  });
}
function goBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' // 부드럽게 이동
  });
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid #d9d9d9;
}

.floatNav {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 100000px;
  z-index: 1;
}

.councelling {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fee500;
  border-radius: 50%;
}

.topBtnHover {
  opacity: .57;
  transition: .5s;
}

.topBtnHover:hover {
  opacity: 1;
}
</style>

<template>
  <div class="position-relative" style="min-height: 100vh;">
    <HeaderVue />
    <router-view></router-view>
    <div class="floatNav py-1">
      <ul class="pa-0 my-0 mx-auto">
        <li class="d-flex justify-center pa-2 topBtnHover"
          style="width: 40px; height: 40px; background-color: #fee500; border-radius: 50%;"><img src="/img/kakao.svg"
            alt="" class="w-100"></li>
        <li @click="goTop" class="d-flex justify-center pa-2 my-2 topBtnHover"
          style="width: 40px; height: 40px; background-color: #ffffff50; border-radius: 50%;"><img src="/img/up2.svg"
            alt="" class="w-100"></li>
        <li @click="goBottom" class="d-flex justify-center pa-2 topBtnHover"
          style="width: 40px; height: 40px; background-color: #ffffff50; border-radius: 50%;"><img src="/img/down.svg"
            alt="" class="w-100"></li>
      </ul>
    </div>
    <Footer />
  </div>
</template>