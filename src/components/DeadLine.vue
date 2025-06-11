<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

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

// 예약 페이지 이동
const goBook = (path) => {
  router.push({ path: "/404" })
}

// 렌더할 최종 데이터
const itemList = ref([])

onMounted(async () => {
  try {
    const res = await fetch('/assets/data/artWork.json')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const { artWork } = await res.json()

    const today = new Date()
    const MS_PER_DAY = 1000 * 60 * 60 * 24

    // 1) deadLine 계산
    artWork.forEach(item => {
      const [, end] = item.duration.split('~').map(s => s.trim())
      const endDate = new Date(end)
      const diffMs = endDate - today
      item.deadLine = Math.ceil(diffMs / MS_PER_DAY)
    })

    // 2) 중복 title 제거
    const unique = []
    const seen = new Set()
    artWork.forEach(item => {
      if (!seen.has(item.title)) {
        seen.add(item.title)
        unique.push(item)
      }
    })

    // 3) deadLine > 0 필터 → 오름차순 정렬 → 6개만
    itemList.value = unique
      .filter(item => item.deadLine > 0)
      .sort((a, b) => a.deadLine - b.deadLine)
      .slice(0, 6)

  } catch (err) {
    console.error('artWork.json 로드 실패:', err)
  }
})
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
        <div class="item d-flex align-center pa-6 rounded c-pointer" v-for="(item, i) in itemList" :key="item.title"
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
            <template v-if="item.badge && item.badge.length">
              <span v-for="badge in item.badge" :key="badge" :class="badge + 'Badge'" style="margin-right: 6px;">
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
  width: 100%;
  max-width: 120px;
}

.item:hover {
  border: 1px solid #4154ff96;
  box-shadow: 1px 1px 10px #4154ff11;
  transform: scale(1.02);
}
</style>
