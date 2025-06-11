<script setup>
import MainBannerOne from './Components/MainBannerOne.vue';
import DeadLine from './Components/DeadLine.vue';
import SlideBar from './components/SlideBar.vue';
import MiniBanner from './components/MiniBanner.vue';
import MiddleBanner from './components/MiddleBanner.vue';
import MainOverView from './components/MainOverView.vue';
import MainReview from './components/MainReview.vue';
import PopUp from './components/PopUp.vue';



</script>

<template>
  <div>
    <MainBannerOne />
    <section>
      <MiniBanner />
    </section>
    <section>
      <SlideBar title="실시간 인기 작품" dataSet="normal" />
    </section>
    <section>
      <DeadLine highlight="마감임박" title="작품" dataSet="deadLine" />
    </section>
    <section>
      <MiddleBanner imageSrc="/img/testBanner.jpg" routerPath="/event" />
    </section>
    <section>
      <SlideBar title="이번 주 뭐 보지?" dataSet="tab" />
    </section>
    <section>
      <MainOverView title='아티 매거진' />
    </section>
    <section>
      <MiddleBanner imageSrc="/img/testBanner.jpg" routerPath="/event" />
    </section>
    <section>
      <MainReview title='관람 후기' />
    </section>

    <PopUp class="popup" imageSrc="/img/popUp.jpg" />
  </div>
</template>

<style scoped></style>