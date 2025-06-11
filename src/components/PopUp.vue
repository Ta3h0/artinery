<template>
  <transition name="fade">
    <div class="popup-container" v-if="show">
      <img :src="imageSrc" alt="Popup Banner" class="popup-image" />
      <div class="popup-actions">
        <button class="btn-transparent font-weight-bold" @click="hideForToday">오늘 하루 안보기</button>
        <button class="btn-primary font-weight-bold" @click="closePopup">닫기</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Props
const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  storageKey: {
    type: String,
    default: 'popupHideDate'
  }
})

// Local state
const show = ref(false)

// Helper: 오늘 날짜 문자열 (YYYY-MM-DD)
function getToday() {
  const d = new Date()
  return d.toISOString().slice(0, 10)
}

// 닫기
function closePopup() {
  show.value = false
}

// 오늘 하루 숨기기
function hideForToday() {
  localStorage.setItem(props.storageKey, getToday())
  show.value = false
}

onMounted(() => {
  // Check localStorage
  const hideDate = localStorage.getItem(props.storageKey)
  if (hideDate !== getToday()) {
    show.value = true
  }
})
</script>

<style scoped>
.popup-container {
  position: fixed;
  left: 4%;
  bottom: 4%;
  background: #fff;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  width: 80%;
  max-width: 400px;
  z-index: 100;
  box-shadow: 5px 5px 20px #0000004f;
}

.popup-image {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
  flex: 1;
  object-fit: cover;
  display: block;
}

.popup-actions {
  display: flex;
  border-top: 1px solid #e0e0e0;
}

.popup-actions button {
  flex: 1;
  padding: 20px 0;
  font-size: 14px;
  cursor: pointer;
  border: none;
}

.btn-transparent {
  background: transparent;
  color: #ff4131;
  border-right: 1px solid #e0e0e0;
}

.btn-primary {
  background: #fff;
  color: #222;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
