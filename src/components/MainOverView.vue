<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String
})

const router = useRouter();

const goError = () => {
  router.push({ path: "/404" });
}

const magazineList = [
  { title: "도시의 일상에 깃든 축제: 소피 폰 헬러만 展이 전하는 색채의 울림", imageSrc: "img/seoulOneBanner.jpg", slug: "" },
  { title: "라이브의 진동, ‘머피’가 건네는 록(樂)의 감각", imageSrc: "img/seoulThreeBanner.jpg", slug: "" },
  { title: "경계의 유희, ‘Fence-go-round’로 엮어낸 일상의 회전목마", imageSrc: "img/seoulFiveBanner.jpg", slug: "" },
  { title: "집의 모든 순간을 담다: ‘All Day House’가 펼치는 공간의 기록", imageSrc: "img/gwFourBanner.jpg", slug: "" },
  { title: "새벽 빛 속으로 초대합니다: ‘아침정원’이 전하는 첫 햇살의 이야기", imageSrc: "img/icOneBanner.jpg", slug: "" },
]


const thisImage = ref("img/seoulOneBanner.jpg");

const currentIdx = ref(0);

const changeImg = (i) => {
  thisImage.value = magazineList[i].imageSrc;
  currentIdx.value = i;
};

</script>

<template>
  <div class="gridOn">
    <div class="titleLine mb-6 text-center">
      <h1 style="font-size: 30px;">{{ props.title }}</h1>
    </div>
    <div class="overView d-flex justify-space-between">

      <div class="imagePannel position-relative">
        <img :src="thisImage" class="w-100 h-100 d-block bg-black c-pointer" alt="No Image" style="border-radius: 12px;"
          @click="goError()" />
      </div>

      <div class="itemPannel d-flex flex-column justify-center">
        <div class="itemTitle c-pointer d-flex w-100 justify-space-between align-center px-5 py-7 color-sub"
          v-for="(item, i) in magazineList" :key="i" @mouseenter="changeImg(i)" :class="{
            on: currentIdx === i,
            'prev-on': currentIdx - 1 === i
          }" @click="goError()">
          {{ item.title }} <img src="img/rightArrow.svg" alt="바로가기" style="width: auto !important;" />
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.imagePannel {
  width: calc(50% - 12px);
}

.imagePannel img {
  transition: .3s;
  max-height: 395px;
}

.itemPannel {
  width: calc(50% - 12px);
}

.itemTitle {
  position: relative;
  border-bottom: 1px solid #d9d9d9;

}

.itemTitle.on {
  font-weight: bold;
  color: #222;
  border-bottom: 1px solid #fff;
  transition: .3s
}

.itemTitle img {
  opacity: 0;
  transition: .3s;
}

.itemTitle.on img {
  opacity: 1;
}

/* 가상선택자로 박스 border 표시 */
.itemTitle.on::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  z-index: 0;
  transition: opacity .3s;
  opacity: 1;
  width: 100%;
  height: 100%;
}

/* 기본 상태에서는 ::before를 숨김 */
.itemTitle::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid transparent;
  border-radius: 12px;
  z-index: 0;
  transition: opacity .3s;
  opacity: 0;
  width: 100%;
  height: 100%;
}

.itemTitle.prev-on {
  border-bottom: 1px solid #fff;
  transition: .3s;
}
</style>
