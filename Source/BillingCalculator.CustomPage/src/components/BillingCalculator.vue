<template>
  <rwc-category category-title="The Billing Calculator">
    <p>Count: {{ data }}</p>
    <br>
    <span class="rwa-button-group left-aligned">
      <span class="span1"></span>
      <button class="rwa-button" @click="toggleComponent('review')">Review</button>
      <span class="span1"></span>
      <button class="rwa-button" @click="toggleComponent('repository')">Repository</button>
      <span class="span1"></span>
      <button class="rwa-button" @click="toggleComponent('coldStorage')">Cold Storage</button>
      <span class="span1"></span>
      <button class="rwa-button" @click="toggleComponent('translate')">Translate</button>
      <span class="span1"></span>
      <button class="rwa-button" @click="toggleComponent('staging')">Staging</button>
      <span class="span1"></span>
    </span>
  </rwc-category>
  <rwc-category category-title="Chart">
    <div id="chartdiv" class="chart"></div>
  </rwc-category>
  <div v-if="showRepoComponent">
    <RepositoryComponent></RepositoryComponent>
  </div>
  <div v-if="showReviewComponent">
    <ReviewComponent></ReviewComponent>
  </div>
  <div v-if="showColdStorageComponent">
    <ColdStorageComponent></ColdStorageComponent>
  </div>
  <div v-if="showTranslateComponent">
    <TranslateComponent></TranslateComponent>
  </div>
  <div v-if="showStagingComponent">
    <StagingComponent></StagingComponent>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FooterComponent } from './Footer'
import { ReviewComponent } from './Review'
import { RepositoryComponent } from './Repository'
import { ColdStorageComponent } from './ColdStorage'
import { TranslateComponent } from './Translate'
import { StagingComponent } from './Staging'
import {ChartConfiguration} from './ChartConfiguration'

import { onMounted, watch } from "vue";
import { onActivated } from "vue";
import { useBillableData } from "../stores/counter";
import { storeToRefs } from "pinia";
import { useRepositoryStore } from "../stores/repository";
import { useReviewStore } from "../stores/review";

const { data } = storeToRefs(useBillableData());

const { repoBillableFileSize1, repoBillableFileSize2, repoBillableFileSize3, repoBillableFileSize4, repoBillableFileSize5 } = storeToRefs(useRepositoryStore());
const { reviewBillableFileSize1, reviewBillableFileSize2, reviewBillableFileSize3, reviewBillableFileSize4, reviewBillableFileSize5 } = storeToRefs(useReviewStore());

let chartConfig : ChartConfiguration;
onMounted(() => {
  chartConfig = new ChartConfiguration;
});

watch(repoBillableFileSize1, ()=> chartConfig.updateRepo(0,repoBillableFileSize1.value));
watch(repoBillableFileSize2, ()=> chartConfig.updateRepo(1,repoBillableFileSize2.value));
watch(repoBillableFileSize3, ()=> chartConfig.updateRepo(2,repoBillableFileSize3.value));
watch(repoBillableFileSize4, ()=> chartConfig.updateRepo(3,repoBillableFileSize4.value));
watch(repoBillableFileSize5, ()=> chartConfig.updateRepo(4,repoBillableFileSize5.value));

watch(reviewBillableFileSize1, ()=> chartConfig.updateReview(0,reviewBillableFileSize1.value));
watch(reviewBillableFileSize2, ()=> chartConfig.updateReview(1,reviewBillableFileSize2.value));
watch(reviewBillableFileSize3, ()=> chartConfig.updateReview(2,reviewBillableFileSize3.value));
watch(reviewBillableFileSize4, ()=> chartConfig.updateReview(3,reviewBillableFileSize4.value));
watch(reviewBillableFileSize5, ()=> chartConfig.updateReview(4,reviewBillableFileSize5.value));


const showReviewComponent = ref(false);
const showRepoComponent = ref(false);
const showColdStorageComponent = ref(false);
const showTranslateComponent = ref(false);
const showStagingComponent = ref(false)

const toggleComponent = (component: string) => {
  if (component === 'review') {
    showReviewComponent.value = !showReviewComponent.value;
  }
  if (component === 'repository') {
    showRepoComponent.value = !showRepoComponent.value;
  }
  if (component === 'coldStorage') {
    showColdStorageComponent.value = !showColdStorageComponent.value;
  }
  if (component === 'translate') {
    showTranslateComponent.value = !showTranslateComponent.value;
  }
  if (component === 'staging') {
    showStagingComponent.value = !showStagingComponent.value;
  }
}
</script>

<style lang="scss">
.span1 {
  background: inherit;
  width: 3rem;
  display: inline-block;
  height: 1.5rem;
  padding: 0;
  vertical-align: middle;
  display: inline-block;
}
.chart{
  width: 100%;
  height: 250px;
}
</style>