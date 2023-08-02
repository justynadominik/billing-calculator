<template>
  <rwc-category category-title="The Billing Calculator">
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
import {ReviewCalculationInput} from "@/calculator/ReviewCalculator";
import {RepositoryCalculationInput} from "@/calculator/RepositoryCalculator";
import {ColdStorageCalculationInput} from "@/calculator/ColdStorageCalculator";
import {StagingCalculationInput} from "@/calculator/StagingCalculator";
import {TranslateCalculatorInput} from "@/calculator/TranslateCalculator";

const { data } = storeToRefs(useBillableData());

const { repoData } = storeToRefs(useRepositoryStore());
const { reviewData} = storeToRefs(useReviewStore());

const total = ref(0);

watch(data.value, () => {
  const calculationService = new CalculationService();
  const temp = calculationService.calculate(data.value);
  //total.value = temp.totalCost()
})

let chartConfig : ChartConfiguration;
onMounted(() => {
  chartConfig = new ChartConfiguration;
});

watch(reviewData.value, recalculate);
watch(repoData.value, recalculate);

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

      chartConfig.updateRepo(repoData.value);
      chartConfig.updateReview(reviewData.value, result.peekDay-1);

  total.value = result.totalCost();
}

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