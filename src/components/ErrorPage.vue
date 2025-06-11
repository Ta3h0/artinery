<!-- src/components/NotFound.vue -->
<template>
  <div class="not-found-page">
    <div class="content gridOn">
      <img src="/img/404-character.png" alt="404 캐릭터" class="character" />
      <div class="text">
        <h1>404</h1>
        <p style="font-weight: 500;">불편을 드려 대단히 죄송합니다.<br>오류가 생겼거나 현재 작업중인 페이지입니다.<br>빠른 시일내로 해결하도록 하겠습니다.<br>감사합니다.</p>
        <button @click="goHome">홈으로 가기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => router.push('/')
</script>

<style scoped>
.not-found-page {
  text-align: center;
  padding: 180px 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.character {
  max-width: 300px;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.text h1 {
  font-size: 96px;
  margin: 0;
  color: #FF4141;
  line-height: 1;
}

.text p {
  font-size: 18px;
  color: #767676;
  margin-top: 16px;
  margin-bottom: 40px;
}

.text button {
  padding: 12px 24px;
  font-size: 16px;
  background: #4154FF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background .3s;
}

.text button:hover {
  background: #2f3edd;
}

/* mobile */
@media (max-width: 600px) {
  .content {
    flex-direction: column;
    gap: 24px;
  }

  .text h1 {
    font-size: 72px;
  }

  .text p {
    font-size: 16px;
  }
}
</style>
