<template>
  <rwc-category category-title="The Billing Calculator" >
      <span class="rwa-button-group left-aligned">
          <span class = "span1"></span>
          <button class="rwa-button" @click="toggleComponent('review')">Review</button>
          <span class="span1"></span>
          <button class="rwa-button" @click="toggleComponent('repository')">Repository</button>
          <span class="span1"></span>
          <button class="rwa-button" @click="toggleComponent('coldStorage')">Cold Storage</button>
          <span class="span1"></span>
          <button class="rwa-button" @click="toggleComponent('translate')">Translate</button>
          <span class="span1"></span>
      </span>
  </rwc-category>
  <rwc-category category-title="Chart" >
      <div id="chartdiv"></div>
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
  <FooterComponent></FooterComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FooterComponent } from './Footer'
import { ReviewComponent } from './Review'
import { RepositoryComponent } from './Repository'
import { ColdStorageComponent } from './ColdStorage'
import { TranslateComponent } from './Translate'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { onMounted } from "vue";
import { onActivated } from "vue";

onMounted(() => {
  createChart();
});

function createChart(){
  let chart = am4core.create(
  "chartdiv",
  am4charts.XYChart
);

chart.data = [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czech Republic",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}, {
  "country": "Belgium",
  "litres": 60
}, {
  "country": "The Netherlands",
  "litres": 50
}];
}

const showReviewComponent = ref(false);
const showRepoComponent = ref(false);
const showColdStorageComponent = ref(false);
const showTranslateComponent = ref(false);

const toggleComponent = (component: string) => {
  if(component === 'review'){
    showReviewComponent.value = !showReviewComponent.value;
  }
  if(component === 'repository'){
    showRepoComponent.value = !showRepoComponent.value;
  }
  if(component === 'coldStorage'){
    showColdStorageComponent.value = !showColdStorageComponent.value;
  }
  if(component === 'translate'){
    showTranslateComponent.value = !showTranslateComponent.value;
  }
}
</script>

<style lang="scss">
.span1{
    background: inherit;
    width: 3rem;
    display: inline-block;
    height: 1.5rem;
    padding: 0;
    vertical-align: middle;
    display: inline-block;
}
</style>