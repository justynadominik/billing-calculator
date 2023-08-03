<template>
  <rwc-category category-title="The Billing Calculator">
    <span class="rwa-button-group left-aligned">
      <span class="span"></span>
      <button :class="[ isActiveReview ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('review')">Review</button>
      <span class="span"></span>
      <button :class="[ isActiveRepo ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('repository')">Repository</button>
      <span class="span"></span>
      <button :class="[ isActiveColdStorage ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('coldStorage')">Cold Storage</button>
      <span class="span"></span>
      <button :class="[ isActiveTranslate ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('translate')">Translate</button>
      <span class="span"></span>
      <button :class="[ isActiveStaging ? 'rwa-button' : 'rwa-button secondary' ]" @click="toggleComponent('staging')">Staging</button>
      <span class="span"></span>
    </span>
  </rwc-category>
  <rwc-category category-title="Chart">
    <div class="row">
      <div id="chartdiv" class="chart column1"/>

      <div class="column2">
        <PieChart/>
      </div>

    </div>
  </rwc-category>
  <rwc-category category-title="Summary">
    <rwc-text-input-field label="Estimaded cost $" :value="total" disabled style="font-size: 19; margin-bottom: 1rem ;" ></rwc-text-input-field>
  </rwc-category>
  <div v-if="showReviewComponent">
    <ReviewComponent></ReviewComponent>
  </div>
  <div v-if="showRepoComponent">
    <RepositoryComponent></RepositoryComponent>
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
import PieChart from "../components/PieChart.vue";
import {calculationResult} from "../stores/calculationResult";

const { data } = storeToRefs(useBillableData());
const { calcResult} = storeToRefs(calculationResult());
const {changeResult } = calculationResult();

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
watch(data.value, recalculate);

function recalculate() {
  const calculationService = new CalculationService();
  const result = calculationService.calculateForMonth(
      [
        [{
          reviewData: reviewData.value[0],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[0],
          stagingData: new StagingCalculationInput(0,0),
          translateData : data.value.translateData
        }, 1],
        [{
          reviewData: reviewData.value[1],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[1],
          stagingData: new StagingCalculationInput(0,0),
          translateData : data.value.translateData
        }, 2],
        [{
          reviewData: reviewData.value[2],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[2],
          stagingData: new StagingCalculationInput(0,0),
          translateData : data.value.translateData
        }, 3],
        [{
          reviewData: reviewData.value[3],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[3],
          stagingData: new StagingCalculationInput(0,0),
          translateData : data.value.translateData

        }, 4],
        [{
          reviewData: reviewData.value[4],
          coldStorageData: new ColdStorageCalculationInput(0,0,0),
          repoData: repoData.value[4],
          stagingData: new StagingCalculationInput(0,0),
          translateData : data.value.translateData
        }, 5],
      ]);

      chartConfig.updateRepo(repoData.value);
      chartConfig.updateReview(reviewData.value, result.peekDay-1);
      //chartConfig.updateCold()

  total.value = result.totalCost();
  changeResult(result);
  console.log('changed' + result.totalCost());
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
.span {
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

.column1 {
  float: left;
  width: 70%;
}

.column2 {
  float: left;
  width: 30%;
}

.row {
  display: flex;
}
</style>