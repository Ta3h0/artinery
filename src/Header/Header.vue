<script setup>
import { ref } from 'vue'
import LogoBarVue from './LogoBar.vue'
import TopBarVue from './TopBar.vue'
import HeaderMenu from './HeaderMenu.vue'
import PcMenu from './PcMenu.vue'

const showPcMenu = ref(false)
const overBurger = ref(false)
const overDepth = ref(false)
const overPcMenu = ref(false)

// 상태 변경 함수
const updateShow = () => {
  showPcMenu.value = overBurger.value || overDepth.value || overPcMenu.value
}

// HeaderMenu 이벤트 핸들러
const burgerEnter = () => { overBurger.value = true; updateShow() }
const burgerLeave = () => { overBurger.value = false; updateShow() }

const depthEnter = () => { overDepth.value = true; updateShow() }
const depthLeave = () => { overDepth.value = false; updateShow() }

// LogoBar 또는 로그인/내예약 위 진입 시 강제 닫기
const forceClose = () => {
  overBurger.value = false
  overDepth.value = false
  overPcMenu.value = false
  updateShow()
}

// PcMenu 영역 이벤트
const pcMenuEnter = () => { overPcMenu.value = true; updateShow() }
const pcMenuLeave = () => { overPcMenu.value = false; updateShow() }
</script>

<template>
  <div class="header" style="border-bottom:1px solid #d9d9d9">

    <div class="gridOn header-main">
      <!-- LogoBar 진입 시 강제 닫기 -->
      <div @mouseenter="forceClose">
        <LogoBarVue />
      </div>

      <!-- HeaderMenu에 이벤트 바인딩 -->
      <HeaderMenu @burger-enter="burgerEnter" @burger-leave="burgerLeave" @depth-enter="depthEnter"
        @depth-leave="depthLeave" @close-menu="forceClose" />
    </div>

    <!-- PcMenu: showPcMenu 상태, 호버 감지 -->
    <div class="pcMenuPannel" v-show="showPcMenu" @mouseenter="pcMenuEnter" @mouseleave="pcMenuLeave">
      <PcMenu />
    </div>
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: white;
}

/* PcMenu 절대 배치: 헤더 바로 아래 */
.header .pcMenuPannel {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
}
</style>
