<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { useRouter } from 'vue-router'
// JSON을 ESM으로 직접 불러옵니다
import artData from '../assets/data/artWork.json'

const router = useRouter()
const modules = [Pagination, Navigation, Autoplay]

const goBook = (path) => {
  return router.push({ path: `/404` })
}

// artWork를 JSON에서 바로 초기화 (첫 10개)
const artWork = ref(artData.artWork.slice(0, 10))

// Swiper 인스턴스 참조
const swiperRef = ref(null)
const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

onMounted(async () => {
  // 렌더링이 끝나면 Swiper 갱신 및 autoplay 재시작
  await nextTick()
  if (swiperRef.value) {
    swiperRef.value.update()
    swiperRef.value.autoplay.start()
  }
})
</script>

<template>
  <div class="position-relative">
    <Swiper @swiper="onSwiper" :modules="modules" :slidesPerView="4" :centeredSlides="true" :spaceBetween="20"
      :loop="true" :speed="600" :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{ el: '.custom-pagination', type: 'progressbar' }"
      :navigation="{ nextEl: '.nextBtn', prevEl: '.prevBtn' }" class="mySwiper px-5">
      <SwiperSlide v-for="(item, i) in artWork" :key="item.slug || i" class="swiper-slide-main">
        <img :src="item.imageSrc" alt="No Image" class="bannerImage" />
        <div class="itemContent position-absolute w-100 h-50 d-flex justify-end flex-column px-6 py-9"
          style="bottom: 0; left: 0; z-index: 0; box-sizing: border-box;">
          <h1 class="max-line-1" style="font-size: 25px;">
            {{ item.title }}
          </h1>
          <p class="mb-4 d-flex align-center">
            <v-icon size="14" class="mr-1">mdi-map-marker-outline</v-icon>
            {{ item.place }}
          </p>
          <span style="font-size: 14px;">{{ item.duration }}</span>
        </div>
        <div
          class="reserveBtn c-pointer d-flex justify-center align-center py-4 px-10 rounded position-absolute font-weight-bold"
          style="top: 50%; left: 50%; font-size: 20px; background-color: white; color: #4154FF;"
          @click="goBook(item.booking)">
          예매하기
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="btnArea d-flex justify-end align-center">
      <div class="custom-pagination"
        style="width: calc(100% - 95px); top: 50%; transform: translateY(-50%); height: 4px;"></div>
      <div class="d-flex align-center">
        <button class="prevBtn largePrevBtn"></button>
        <span style="display: block; width: 2px; height: 15px; background-color: #d9d9d9;"></span>
        <button class="nextBtn largeNextBtn"></button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.mySwiper {
  padding: 40px 0;
}

.bannerImage {
  width: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 3 / 4;
}

.swiper-slide {
  aspect-ratio: 3 / 4;
}

.itemContent {
  background: #000;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 17%, rgba(0, 0, 0, 0) 100%);
  color: white;
}

.swiper-slide-main {
  position: relative;
  background-color: #d9d9d9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* 은은한 그림자 */
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.swiper-slide-prev .textBox2,
.swiper-slide-next .textBox2,
.swiper-slide-active .textBox2 {
  width: 100%;
  height: 27%;
  display: flex;
  position: absolute;
  bottom: 0%;
  left: 0;
  background: #000000;
  background: #000000;
  background: #000000;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 57%, rgba(0, 0, 0, 0.22) 90%, rgba(255, 255, 255, 0) 98%);
  opacity: 1;
}

.nextBtn::after,
.prevBtn::after {
  font-weight: 900;
  color: #101010de !important;
  background-color: #ffffff;
  font-size: 22px !important;
  border: none;
  box-shadow: none;
}

.nextBtn::after {
  font-family: swiper-icons;
  content: 'next';
}

.prevBtn::after {
  font-family: swiper-icons;
  content: 'prev';
}

.btnArea {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(25% * 3 - 34px);
  z-index: 1;
}

.custom-pagination {
  background-color: #d9d9d9 !important;
}

.custom-pagination:deep(.swiper-pagination-progressbar-fill) {
  background-color: #222 !important;
}

.reserveBtn {
  opacity: 0;
  transition: .5s;
  transform: translate(-50%, 0);
  pointer-events: none;
  visibility: hidden;
}

.swiper-slide-main:hover>.reserveBtn {
  transform: translate(-50%, -50%);
  opacity: 1;
  display: flex;
  pointer-events: auto;
  visibility: visible;
}
</style>