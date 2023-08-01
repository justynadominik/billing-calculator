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
  <FooterComponent></FooterComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FooterComponent } from './Footer'
import { ReviewComponent } from './Review'
import { RepositoryComponent } from './Repository'
import { ColdStorageComponent } from './ColdStorage'
import { TranslateComponent } from './Translate'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

import { onMounted } from "vue";
import { onActivated } from "vue";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const { count, name, doubleCount } = storeToRefs(useCounterStore());

onMounted(() => {
  createChart();
});

function createChart() {
  const root = am5.Root.new("chartdiv");
  let chart = root.container.children.push(
    am5xy.XYChart.new(root, {})
  );

  let yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    })
  );

  let xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      renderer: am5xy.AxisRendererX.new(root, {}),
      baseInterval: {
        timeUnit: "day",
        count: 1
      }
    })
  );

  let series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date"
    })
  );
  let data = [];
  let visits = 10;
  for (let i = 1; i < 30; i++) {
    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    data.push({ date: new Date(2023, 8, i).getTime(), value: visits });
  }
  series.data.setAll(data);
}

const showReviewComponent = ref(false);
const showRepoComponent = ref(false);
const showColdStorageComponent = ref(false);
const showTranslateComponent = ref(false);

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