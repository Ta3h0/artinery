<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { useRouter } from 'vue-router'
// JSON을 ESM으로 직접 가져옵니다
import artData from '../assets/data/artWork.json'

const props = defineProps({
  subtitle: String,
  title: String,
  tab: Boolean,
  dataSet: String
})
const router = useRouter()

const tabList = [
  { tabName: '서울', areaCode: 1 },
  { tabName: '경기/인천', areaCode: 2 },
  { tabName: '충청/강원', areaCode: 3 },
  { tabName: '대구/경북', areaCode: 4 },
  { tabName: '부산/경남', areaCode: 5 },
  { tabName: '광주/전라', areaCode: 6 },
  { tabName: '제주', areaCode: 7 },
]

const modules = [Pagination, Navigation]
const selectedTabIndex = ref(0)

// 전체 데이터는 JSON에서 바로
const allData = ref(artData.artWork)

// 탭 클릭
const goTab = (index) => {
  selectedTabIndex.value = index
}

// 예시 에러 이동
const goError = () => {
  router.push({ path: '/404' })
}

// 렌더링할 artWork 계산
const artWork = computed(() => {
  const data = allData.value
  if (props.dataSet === 'normal') {
    return data.slice(0, 20)
  }
  if (props.dataSet === 'deadLine') {
    return data
      .filter(item => item.deadLine <= 10)
      .sort((a, b) => a.deadLine - b.deadLine)
      .slice(0, 6)
  }
  if (props.dataSet === 'tab') {
    const code = tabList[selectedTabIndex.value].areaCode
    return data
      .filter(item => item.areaCode === code)
      .slice(0, 8)
  }
  return data.slice(0, 10)
})
</script>

<template>
  <div class="gridOn slideBar position-relative">
    <div class="titleLine mb-6">
      <h1 style="font-size: 30px; text-align: center;">{{ title }}</h1>
    </div>

    <div v-if="dataSet === 'tab'" class="tabMenu d-flex justify-center align-center flex-wrap mb-4">
      <div v-for="(t, i) in tabList" :key="i" class="tab c-pointer" :class="{ on: selectedTabIndex === i }"
        @click="goTab(i)">
        {{ t.tabName }}
      </div>
    </div>

    <Swiper :slidesPerView="5" :spaceBetween="24" :navigation="{ nextEl: '.nextBtn', prevEl: '.prevBtn' }"
      :modules="modules" class="mySwiper" :loop="true">
      <SwiperSlide v-for="(item, i) in artWork" :key="i" class="c-pointer" @click="goError">
        <img :src="item.imageSrc" alt="No Image" class="itemImage w-100 rounded" />
        <div class="textBox d-flex flex-column justify-end">
          <h1 class="mt-3 textLineOne titleText">{{ item.title }}</h1>
          <p class="mt-1 mb-2 textLineTwo t-size-3">{{ item.place }}</p>
          <div class="priceArea d-flex justify-space-between w-100">
            <p class="t-size-4 color-sub">{{ item.duration }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="btnArea d-flex justify-space-between align-center position-absolute"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1;">
      <button class="prevBtn largePrevBtn"></button>
      <button class="nextBtn largeNextBtn"></button>
    </div>
  </div>
</template>

    
<style scoped>
.tab {
  background-color: #f4f4f4;
  color: #767676;
  font-weight: 400;
  padding: 8px 20px;
  border-radius: 1000px;
  margin: 0 10px;
  transition: .3s;
}

.tab.on {
  background-color: #4154FF;
  color: white;
  font-weight: bold;
}

.textLineOne {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.textLineTwo {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.itemImage {
  display: block;
  background-color: #999;
}

.slideBar .prevBtn::after,
.slideBar .nextBtn::after {
  color: #767676 !important;
  background-color: #fff;
  padding: 12px;
  font-size: 20px !important;
  font-weight: 100;
  border: none !important;
  box-shadow: 2px 2px 30px 0 #0000002b
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
  width: 100%;
}

@media screen and (max-width: 1300px) {
  .btnArea {
    width: 95%;
  }
}
</style>