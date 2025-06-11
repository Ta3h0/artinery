<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// ESM으로 JSON을 직접 불러옵니다
import artData from '../assets/data/artWork.json'

// props
const props = defineProps({
  highlight: String,
  title: String,
  dataSet: String
})
const router = useRouter()

// badge 한글 매핑
const badgeTextMap = {
  hot: '인기',
  only: '독점판매',
  sale: '파격할인'
}

// 예약 페이지 이동 (예시)
const goBook = (path) => {
  router.push({ path: '/404' })
}

// 남은 일수 계산용 상수
const MS_PER_DAY = 1000 * 60 * 60 * 24

// 1) duration으로부터 deadLine 계산
const withDeadline = artData.artWork.map(item => {
  const [start, end] = item.duration.split('~').map(s => s.trim())
  const diff = new Date(end) - new Date()
  return {
    ...item,
    deadLine: Math.ceil(diff / MS_PER_DAY)
  }
})

// 2) 중복 title 제거
const unique = []
const seen = new Set()
withDeadline.forEach(item => {
  if (!seen.has(item.title)) {
    seen.add(item.title)
    unique.push(item)
  }
})

// 3) deadLine > 0 필터 → 오름차순 정렬 → 상위 6개
const itemList = ref(
  unique
    .filter(item => item.deadLine > 0)
    .sort((a, b) => a.deadLine - b.deadLine)
    .slice(0, 6)
)
</script>

<template>
  <div class="gridOn">
    <div class="titleLine mb-6 text-center">
      <h1 style="font-size: 30px;">
        <span style="font-size: 30px; font-weight: bold; color: #FF4141;">
          {{ props.highlight }}&nbsp;
        </span>
        {{ props.title }}
      </h1>
    </div>

    <div class="pannel">
      <div class="line d-flex justify-space-between align-center flex-wrap">
        <div class="item d-flex align-center pa-6 rounded c-pointer" v-for="item in itemList" :key="item.title"
          @click="goBook(item.booking)">
          <img :src="item.imageSrc" alt="작품 포스터" class="mr-3" />
          <div class="content w-100">
            <span style="color: #FF4141; font-size: 18px;" class="font-weight-bold d-block">
              D-{{ item.deadLine }}
            </span>
            <h4 class="mb-1 max-line-2" style="font-size: 18px;">
              {{ item.title }}
            </h4>
            <p style="color: #767676;">
              {{ item.location }}
            </p>
            <template v-if="item.badge?.length">
              <span v-for="badge in item.badge" :key="badge" :class="['badgeArea', badge + 'Badge']"
                style="margin-right: 6px;">
                {{ badgeTextMap[badge] || badge }}
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.item {
  width: calc((100% / 3) - 14px);
  margin-bottom: 24px;
  border: 1px solid #d9d9d9;
  transition: .3s;
}

.item img {
  aspect-ratio: 3 / 4;
  width: 30%;
  max-width: 120px;
}

.item:hover {
  border: 1px solid #4154ff96;
  box-shadow: 1px 1px 10px #4154ff11;
  transform: scale(1.02);
}

.badgeArea {
  display: block,
}

@media screen and (max-width: 1100px) {
  .badgeArea {
    display: none;
  }
}
</style>
