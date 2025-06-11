<script setup>
import { ref } from 'vue'
import StarIcons from './StarIcons.vue';

const itemList = ref([
  {
    name: "Vers l'état de fruit",
    title: "과일이 전하는 은유의 언어",
    content: "갤러리로윤에서 만난 ‘Vers l'état de fruit’ 전시는 과일의 형태와 질감을 해체·재구성하여 감각을 자극했습니다. 각기 다른 과일이 지닌 색채와 윤기를 마주하며, 일상 속 익숙한 대상이 어떻게 시적으로 확장되는지 체험할 수 있었습니다. 작가는 과일의 이미지 뒤에 숨겨진 시간과 기억을 시각적으로 풀어내어 관객에게 새로운 사유의 순간을 선사했어요.",
    userName: "ta3h0_",
    star: 4.5,
    img: 'img/seoulFour.jpg',
    userImg: 'user.svg'
  },
  {
    name: "멍멍야옹야옹짹짹짹",
    title: "동물의 목소리로 그려낸 동화 속 풍경",
    content: "충주문화회관 어린이관에서 열린 ‘멍멍야옹야옹짹짹짹’ 전시는 어린 시절의 동심을 불러일으키는 동물 오브제와 인터랙티브 사운드를 결합했습니다. 강아지의 짖음과 고양이의 울음, 새의 지저귐이 어우러져 전시장 전체가 살아 숨 쉬었어요. 관객이 직접 버튼을 눌러 소리를 재생할 때마다 공간은 작은 동화 속으로 변모했습니다.",
    userName: "hajin5756",
    star: 4.0,
    img: 'img/gwFive.jpg',
    userImg: 'user.svg'
  },
  {
    name: "타타라타트(Tattarrattat)",
    title: "회문의 미학이 깃든 공간 연출",
    content: "제주 새탕라움에서 열린 ‘Tattarrattat’ 전시는 회문(回文)이라는 단어의 대칭 구조에서 영감을 받아 설치와 미디어 아트를 선보였습니다. 대칭과 반복이 만들어내는 리듬감은 작품과 관객 간의 경계를 허물고, 공간 자체를 하나의 거울처럼 느끼게 했어요. 마지막 방의 완전한 대칭 구조는 마치 시간의 균형을 마주한 듯한 깊은 여운을 남겼습니다.",
    userName: "spectacle",
    star: 3.5,
    img: 'img/jjOne.jpg',
    userImg: 'user.svg'
  },
  {
    name: "이이남의 산수극장",
    title: "전통 회화를 무대에 옮긴 색채 연극",
    content: "국립아시아문화전당에서 만난 ‘이이남의 산수극장’은 전통 산수화의 대담한 색채를 현대적인 설치로 재탄생시킨 프로젝트입니다. 벽면을 가득 채운 붉은 산과 파란 물결 사이를 걷다 보면, 마치 살아 움직이는 회화 속을 여행하는 듯한 몰입감을 맛볼 수 있었습니다. 과감한 색 대비가 주는 시각적 충격이 인상적이었어요.",
    userName: "qltwkfn1594",
    star: 5.0,
    img: 'img/gjFour.jpg',
    userImg: 'user.svg'
  },
])

const maskedUser = (name) => {
  if (!name) return '';
  return name.slice(0, 3) + '***';
}
</script>
<template>
  <div class="gridOn">
    <h2 class="reviewTitle">관람후기</h2>
    <div class="reviewGrid">
      <div class="reviewItem" v-for="(item, idx) in itemList" :key="idx">
        <div class="reviewImage">
          <!-- 임시 썸네일: 나중에 image 항목 있으면 수정 -->
          <img :src="item.img" alt="썸네일" />
        </div>
        <div class="reviewContent">
          <div class="reviewCategory">{{ item.name }}</div>
          <div class="reviewTitleMain">
            {{ item.title }}
          </div>
          <div class="reviewText max-line-4">{{ item.content }}</div>
          <div class="reviewUser">
            <img :src="item.userImg" alt="프로필 사진"
              style="width: 25px; height: 25px; border-radius: 50%; border: 1px solid #d9d9d9;">
            <span class="userId">{{ maskedUser(item.userName) }}</span>
            <span class="starBox">
              <StarIcons :star="item.star" />
            </span>
            <span class="score">/ {{ item.star }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviewTitle {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  text-align: center;
  margin-bottom: 36px;
}

.reviewGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 60px;
}

.reviewItem {
  display: flex;
  align-items: flex-start;
  gap: 28px;
  align-items: center;
}

.reviewImage img {
  width: auto;
  height: 210px;
  border-radius: 16px;
  object-fit: cover;
  background: #eee;
  aspect-ratio: 3 / 4;
}

.reviewContent {
  flex: 1;
}

.reviewCategory {
  font-size: 14px;
  color: #767676;
  margin-bottom: 3px;
}

.reviewTitleMain {
  color: #222;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.reviewText {
  color: #767676;
  font-size: 15px;
  margin-bottom: 18px;
  word-break: keep-all;
  line-height: 1.6;
}

.reviewUser {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #222;
  font-weight: bold;
}

.userId {
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
}

.score {
  font-size: 17px;
  color: #222;
  font-weight: bold;
}

.starBox {
  display: flex;
  align-items: center;
  margin-left: 3px;
}
</style>