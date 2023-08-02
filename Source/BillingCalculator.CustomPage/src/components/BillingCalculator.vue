<template>
  <rwc-category category-title="The Billing Calculator">
    <span class="rwa-button-group left-aligned">
      <span class="span1"></span>
      <button :class="[ isActiveReview ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('review')">Review</button>
      <span class="span1"></span>
      <button :class="[ isActiveRepo ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('repository')">Repository</button>
      <span class="span1"></span>
      <button :class="[ isActiveColdStorage ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('coldStorage')">Cold Storage</button>
      <span class="span1"></span>
      <button :class="[ isActiveTranslate ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('translate')">Translate</button>
      <span class="span1"></span>
      <button :class="[ isActiveStaging ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('staging')">Staging</button>
      <span class="span1"></span>
    </span>
  </rwc-category>
  <rwc-category category-title="Chart">
    <div id="chartdiv" class="chart"></div>
  </rwc-category>

  <rwc-text-input-field label="Estimaded cost $" :value="total" disabled ></rwc-text-input-field>

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
import {BillingDataInput, CalculationService} from "../calculator/CalculatorService";
import {ReviewCalculationInput} from "../calculator/ReviewCalculator";
import {RepositoryCalculationInput} from "../calculator/RepositoryCalculator";
import {ColdStorageCalculationInput} from "../calculator/ColdStorageCalculator";
import {StagingCalculationInput} from "../calculator/StagingCalculator";
import {TranslateCalculatorInput} from "../calculator/TranslateCalculator";

const { data } = storeToRefs(useBillableData());

const { repoBillableFileSize1, repoBillableFileSize2, repoBillableFileSize3, repoBillableFileSize4, repoBillableFileSize5 , repoData } = storeToRefs(useRepositoryStore());
const { reviewBillableFileSize1, reviewBillableFileSize2, reviewBillableFileSize3, reviewBillableFileSize4, reviewBillableFileSize5, reviewData} = storeToRefs(useReviewStore());

const total = ref(0);

watch(data.value, () => {
  const calculationService = new CalculationService();
  const temp = calculationService.calculate(data.value);
  //total.value = temp.totalCost()
})

watch(reviewData.value, recalculate
)

function recalculate() {
  const calculationService = new CalculationService();
  const result = calculationService.calculateForMonth(
      [
        [{
          reviewData: reviewData.value[0],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[0],
          stagingData: new StagingCalculationInput(0,0),
          translateData : new TranslateCalculatorInput(0)
        }, 1],
        [{
          reviewData: reviewData.value[1],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[1],
          stagingData: new StagingCalculationInput(0,0),
          translateData : new TranslateCalculatorInput(0)
        }, 2],
        [{
          reviewData: reviewData.value[2],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[2],
          stagingData: new StagingCalculationInput(0,0),
          translateData : new TranslateCalculatorInput(0)
        }, 3],
        [{
          reviewData: reviewData.value[3],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[3],
          stagingData: new StagingCalculationInput(0,0),
          translateData : new TranslateCalculatorInput(0)

        }, 4],
        [{
          reviewData: reviewData.value[4],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[4],
          stagingData: new StagingCalculationInput(0,0),
          translateData : new TranslateCalculatorInput(0)
        }, 5],
      ]);

  total.value = result.totalCost();
}


let chartConfig : ChartConfiguration;
onMounted(() => {
  chartConfig = new ChartConfiguration;
});

watch(repoBillableFileSize1, ()=> chartConfig.updateRepo(0,repoBillableFileSize1.value));
watch(repoBillableFileSize2, ()=> chartConfig.updateRepo(1,repoBillableFileSize2.value));
watch(repoBillableFileSize3, ()=> chartConfig.updateRepo(2,repoBillableFileSize3.value));
watch(repoBillableFileSize4, ()=> chartConfig.updateRepo(3,repoBillableFileSize4.value));
watch(repoBillableFileSize5, ()=> chartConfig.updateRepo(4,repoBillableFileSize5.value));

watch(reviewBillableFileSize1, ()=> { chartConfig.updateReview(0,reviewBillableFileSize1.value); calculate()});
watch(reviewBillableFileSize2, ()=> chartConfig.updateReview(1,reviewBillableFileSize2.value));
watch(reviewBillableFileSize3, ()=> chartConfig.updateReview(2,reviewBillableFileSize3.value));
watch(reviewBillableFileSize4, ()=> chartConfig.updateReview(3,reviewBillableFileSize4.value));
watch(reviewBillableFileSize5, ()=> chartConfig.updateReview(4,reviewBillableFileSize5.value));


function calculate() {
  /*const calculationService = new CalculationService();

  let repoBillable = [repoBillableFileSize1.value, repoBillableFileSize2.value, repoBillableFileSize3.value, repoBillableFileSize4.value, repoBillableFileSize5.value]

  let input : [calculationInput: BillingDataInput, day: number][] = []
  for (let i = 0; i < 5; i++) {
    input.push(,i+1)
  }


  const temp = calculationService.calculateForMonth()*/
}


const showReviewComponent = ref(false);
const showRepoComponent = ref(false);
const showColdStorageComponent = ref(false);
const showTranslateComponent = ref(false);
const showStagingComponent = ref(false)
const isActiveReview = ref(true);
const isActiveRepo = ref(true);
const isActiveColdStorage = ref(true);
const isActiveTranslate = ref(true);
const isActiveStaging = ref(true);

const toggleComponent = (component: string) => {
  if (component === 'review') {
    showReviewComponent.value = !showReviewComponent.value;
    isActiveReview.value = !isActiveReview.value;
  }
  if (component === 'repository') {
    showRepoComponent.value = !showRepoComponent.value;
    isActiveRepo.value = !isActiveRepo.value;
  }
  if (component === 'coldStorage') {
    showColdStorageComponent.value = !showColdStorageComponent.value;
    isActiveColdStorage.value = !isActiveColdStorage.value;
  }
  if (component === 'translate') {
    showTranslateComponent.value = !showTranslateComponent.value;
    isActiveTranslate.value = !isActiveTranslate.value;
  }
  if (component === 'staging') {
    showStagingComponent.value = !showStagingComponent.value;
    isActiveStaging.value = !isActiveStaging.value;
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