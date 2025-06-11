<script setup>
const menuList = [
  {menuName: "오늘 출발", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "BEST", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "NEW -10%", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "PREMIUM", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "SALE ~60%", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "세트", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "아우터", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "상의", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "하의", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "슈즈", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "악세사리", menuIcon: "1.jpg", menuSrc: ""},
  {menuName: "코디", menuIcon: "1.jpg", menuSrc: ""},
]
</script>

<template>
<ul class="d-flex justify-space-between menuPannel pa-0 mx-auto mt-10 mb-15">
  <li v-for="(item, i) in menuList" class="menuList c-pointer">
    <img :src="/img/ + item.menuIcon" alt="No Icon" />
    <p class="mb-0 pa-0 mt-1 " style="font-size: 14px">{{ item.menuName }}</p>
  </li>
</ul>
</template>

<style scoped>
  .menuPannel {
    width: calc(100% - 40px);
    max-width: 675px;
    flex-wrap: wrap;
  }
  .menuPannel li {
    margin: 12px 0;
    width: 100px;
    height: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .menuList img {
    height: 55px;
  }
</style>
