<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'
import { ref, onMounted } from 'vue'

const { subtitle, title } = defineProps({
  subtitle: String,
  title: String
})

const modules = [ Navigation, EffectCoverflow]

const itemList = [
  {
    itemName: "락시크 워싱 절개 레더 자켓",
    itemText: "최근 유행하고 있는 락시크 스타일의 레더 자켓에 자연스럽고 부드러운 워싱과 절개를 추가하여",
    itemImage: "bannerBgOne.jpg",
    itemPrice: "62,900원",
    originPrice: "95,000원",
    discountPer: "21%"
  },
  {
    itemName: "락시크 워싱 절",
    itemText: "최근 유행하고 있는 락시크 스타일의 레더 자켓에 자연스럽고 부드러운 워싱과 절개를 추가하여",
    itemImage: "bannerBgOne.jpg",
    itemPrice: "40,000원",
    originPrice: "95,000원",
    discountPer: "21%"
  },
  {
    itemName: "락시크 워더 자켓",
    itemText: "최근 유행하고 있는 락시크 스타일의 레더 자켓에 자연스럽고 부드러운 워싱과 절개를 추가하여",
    itemImage: "bannerBgOne.jpg",
    itemPrice: "24,700원",
    originPrice: "95,000원",
    discountPer: "21%"
  },
  {
    itemName: "절개 레더 자켓",
    itemText: "최근 유행하고 있는 락시크 스타일의 레더 자켓에 자연스럽고 부드러운 워싱과 절개를 추가하여",
    itemImage: "bannerBgOne.jpg",
    itemPrice: "14,900원",
    originPrice: "95,000원",
    discountPer: "21%"
  },
  {
    itemName: "락시크 워더 자켓",
    itemText: "최근 유행하고 있는 락시크 스타일의 레더 자켓에 자연스럽고 부드러운 워싱과 절개를 추가하여",
    itemImage: "bannerBgOne.jpg",
    itemPrice: "55,500원",
    originPrice: "95,000원",
    discountPer: "21%"
  },
  {
    itemName: "락시크 워싱 절개켓",
    itemText: "최근 유행하고 있는 락시크 스타일의 레더 자켓에 자연스럽고 부드러운 워싱과 절개를 추가하여",
    itemImage: "bannerBgOne.jpg",
    itemPrice: "8500원",
    originPrice: "95,000원",
    discountPer: "21%"
  },
  {
    itemName: "더 자켓",
    itemText: "최근 유행하고 있는 락시크 스타일의 레더 자켓에 자연스럽고 부드러운 워싱과 절개를 추가하여",
    itemImage: "bannerBgOne.jpg",
    itemPrice: "85,3500원",
    originPrice: "95,000원",
    discountPer: "21%"
  },
  {
    itemName: "크 워개 레더 자",
    itemText: "최근 유행하고 있는 락시크 스타일의 레더 자켓에 자연스럽고 부드러운 워싱과 절개를 추가하여",
    itemImage: "bannerBgOne.jpg",
    itemPrice: "85,500원",
    originPrice: "952,000원",
    discountPer: "21%"
  },

]

const activeIndex = ref(0)
const swiperRef = ref(null)

const onSwiper = (swiper) => {
  swiperRef.value = swiper
  activeIndex.value = swiper.realIndex
}

const onSlideChange = () => {
  if (swiperRef.value) {
    activeIndex.value = swiperRef.value.realIndex
  }
}
</script>

<template>
  <div class="bg-black py-15 text-white">
    <div class="gridOn">
      <div class="titleLine mb-6">
        <span class="d-block mb-1 text-[18px]">{{ subtitle }}</span>
        <h1 class="text-[25px]">{{ title }}</h1>
      </div>

      <swiper
        :modules="modules"
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="4"
        :initialSlide="1"
        :loop="true"
        :navigation="{
          nextEl: '.nextBtn',
          prevEl: '.prevBtn'
        }"
        :coverflowEffect="{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        class="mySwiper5 px-6 pt-10"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, i) in itemList" :key="i">
          <img :src="'img/' + item.itemImage" alt="상품 이미지"/>
          <h4 class="text-center mt-5 font-bold">{{ item.itemName }}</h4>
        </swiper-slide>
      </swiper>

      <div class="d-flex justify-center align-center mt-3">
        <button class="prevBtn"></button>
        <h4 class="text-center mx-5 font-bold" style="font-size: 20px;">
          {{ itemList[activeIndex]?.itemPrice || '' }}
        </h4>
        <button class="nextBtn"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mySwiper5 img {
  width: 100%;
  height: auto;
  max-height: 360px;
  display: block;
}

.mySwiper5 h4 {
  display: none;
}

.mySwiper5:deep(.swiper-slide-active h4) {
  display: block;
}

.mySwiper5:deep(.swiper-slide) {
  opacity: .5;
}

.mySwiper5:deep(.swiper-slide-active) {
  opacity: 1;
}

.nextBtn::after, .prevBtn::after {
  font-weight: 900;
    color: #000 !important;
    background-color: #ffffff30;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 22px !important;
}

.nextBtn::after {
  font-family: swiper-icons;
  content: 'next';
}
.prevBtn::after {
  font-family: swiper-icons;
  content: 'prev';
}
</style>
