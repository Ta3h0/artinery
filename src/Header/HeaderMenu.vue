<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 부모에게 상황별 이벤트만 emit
const emit = defineEmits([
  'burger-enter', 'burger-leave',
  'depth-enter', 'depth-leave',
  'close-menu'
])

// burgerMenu
const onBurgerEnter = () => emit('burger-enter')
const onBurgerLeave = () => emit('burger-leave')
const onBurgerClick = () => emit('burger-enter')

// depthMenu
const onDepthEnter = () => emit('depth-enter')
const onDepthLeave = () => emit('depth-leave')

// login / reserve -> 강제 닫기
const onCloseMenu = () => emit('close-menu')

const goError = () => {
  router.push({ path: "/404" });
}
</script>

<template>
  <div class="headerMenu d-flex justify-space-between align-center">
    <div class="menuSection d-flex">

      <div class="burgerMenu c-pointer pr-7 pb-4 d-flex flex-column justify-center" @mouseenter="onBurgerEnter"
        @mouseleave="onBurgerLeave" @click="onBurgerClick">
        <span class="menuOne"></span>
        <span class="menuTwo my-1"></span>
        <span class="menuThree"></span>
      </div>

      <ul class="depthMenu pa-0 ma-0 d-flex align-center pb-4" @mouseenter="onDepthEnter" @mouseleave="onDepthLeave">
        <li class="mr-4 c-point" @click="goError()">홈</li>
        <li class="mr-4 c-point" @click="goError()">지역별 전시</li>
        <li class="mr-4 c-point" @click="goError()">핫한 전시</li>
        <li class="mr-4 c-point" @click="goError()">커뮤니티</li>
        <li class="mr-4 line"></li>
        <li class="mr-4 c-point" @click="goError()">큐레이션</li>
        <li class="mr-4 c-point hot" @click="goError()">오픈예정</li>
      </ul>
    </div>

    <div class="userTab d-flex pb-4">
      <a href="#" class="d-flex align-center mx-3" @mouseenter="onCloseMenu" @click="router.push({ path: '/login' })">
        <img src="/img/user.svg" alt="No Icon" style="width: 20px;" />
        <h1 class="ml-2" style="font-size: 14px;">로그인</h1>
      </a>
      <a href="#" class="d-flex align-center mx-3" @mouseenter="onCloseMenu" @click="goError()">
        <img src="/img/Ticket.svg" alt="No Icon" style="width: 20px;" />
        <h1 class="ml-2" style="font-size: 14px;">내 예약</h1>
      </a>
    </div>
  </div>
</template>

<style scoped>
.menuOne,
.menuTwo,
.menuThree {
  width: 18px;
  height: 2px;
  display: block;
  background-color: black;
  border-radius: 1000px;
}

.hot {
  font-weight: 600;
  color: red;
}

.line {
  display: block;
  width: 1.5px;
  height: 70%;
  background-color: #d9d9d9;
  border-radius: 1000px;
}
</style>
