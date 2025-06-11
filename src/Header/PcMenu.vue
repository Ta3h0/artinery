<template>
  <div class="menu-section" style="border-top: 1px solid #d9d9d9;">
    <div class="gridOn menu-inner px-5 py-12">
      <div class="left">
        <!-- 1. 지역별 전시 -->
        <div class="menu-group">
          <h4 class="menu-title" @click="goPage('/location')">지역별 전시</h4>
          <ul class="submenu">
            <li class="submenu-item" @click="goPage('/location')">서울</li>
            <li class="submenu-item" @click="goPage('/location')">경기/인천</li>
            <li class="submenu-item" @click="goPage('/location')">충청/강원</li>
            <li class="submenu-item" @click="goPage('/location')">대구/경북</li>
            <li class="submenu-item" @click="goPage('/location')">부산/경남</li>
            <li class="submenu-item" @click="goPage('/location')">광주/전라</li>
            <li class="submenu-item" @click="goPage('/location')">제주</li>
          </ul>
        </div>

        <!-- 2. 핫한 전시 -->
        <div class="menu-group">
          <h4 class="menu-title" @click="goPage('/location')">핫한 전시</h4>
          <ul class="submenu">
            <li class="submenu-item" @click="goPage('/location')">20대</li>
            <li class="submenu-item" @click="goPage('/location')">30대</li>
            <li class="submenu-item" @click="goPage('/location')">40대</li>
            <li class="submenu-item" @click="goPage('/location')">데이트</li>
            <li class="submenu-item" @click="goPage('/location')">여성</li>
            <li class="submenu-item" @click="goPage('/location')">남성</li>
          </ul>
        </div>

        <!-- 3. 커뮤니티 -->
        <div class="menu-group">
          <h4 class="menu-title" @click="goPage('/location')">커뮤니티</h4>
          <ul class="submenu">
            <li class="submenu-item" @click="goPage('/location')">공지사항</li>
            <li class="submenu-item" @click="goPage('/location')">아티매거진</li>
            <li class="submenu-item" @click="goPage('/location')">후기</li>
            <li class="submenu-item" @click="goPage('/location')">자유게시판</li>
            <li class="submenu-item" @click="goPage('/location')">Q&A</li>
          </ul>
        </div>

        <!-- 4. 큐레이션 + 오픈 예정 -->
        <div>
          <div class="h-50">
            <h4 class="menu-title c-pointer" @click="goPage('/location')">큐레이션</h4>
          </div>
          <div class="h-50">
            <h4 class="menu-title c-pointer" @click="goPage('/location')">오픈 예정</h4>
          </div>
        </div>
      </div>

      <div class="right">
        <!-- 5. 전시 포스터 이미지 카드 2개 -->
        <div class="image-card">
          <img src="/img/gwFour.jpg" alt="전시 포스터 1" @click="goPage('/location')" class="c-pointer" />
        </div>
        <div class="image-card ml-6">
          <img src="/img/dgThree.jpg" alt="전시 포스터 2" @click="goPage('/location')" class="c-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goPage = (routerPath) => {
  router.push({ path: routerPath });
}
</script>

<style scoped>
.menu-section {
  background: #fafafaf2;
  backdrop-filter: blur(3px);
  box-shadow: 0px 10px 20px 0px #00000025;
}

/* gridOn 전역 적용 가정 */
.menu-inner {
  display: flex;
  justify-content: space-between;
}

/* 메뉴 그룹 */
.menu-group {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* 타이틀 (16px, bold) */
.menu-title {
  font-size: 16px;
  font-weight: bold;
  color: #222;
  cursor: pointer;
}

/* 서브메뉴 (14px, normal, 세로 나열) */
.submenu {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  color: #767676;
  cursor: pointer;
}

.submenu-item {
  padding: 8px 0;
  cursor: pointer;
}

.left,
.right {
  display: flex;
}

.left {
  width: calc(50% - 12px);
  justify-content: space-between;
}

.left .menu-group {
  padding-right: 50px;
}

.right {
  width: calc(50% - 12px);
  justify-content: end;
}

.image-card {
  border-radius: 12px;
  max-width: 210px;
}

.image-card img {
  aspect-ratio: 3 / 4;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background-color: #222;
  display: block;
}
</style>
