<script setup>
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from "@amcharts/amcharts5/percent";

import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { shallowRef, onMounted, watch } from 'vue';
import { storeToRefs } from "pinia";
import { calculationResult } from "@/stores/calculationResult";

let root;
const chartdiv = shallowRef(null);

const { calcResult } = storeToRefs(calculationResult());

let series;
let legend;

watch(calcResult, () => {


  series.data.setAll([{
    metric: "Repo",
    amount: calcResult.value.repoResult.amount
  }, {
    metric: "Review",
    amount: calcResult.value.reviewResult.amount
  }, {
    metric: "Cold storage",
    amount: 0
  },
    {
      metric: "Translate",
      amount: calcResult.value.translateResult.amount
    },
    {
      metric: "Staging",
      amount: calcResult.value.stagingResult.amount
    }
  ]);

  legend.data.setAll(series.dataItems);
});

onMounted(() => {
  root = am5.Root.new(chartdiv.value);


  root.setThemes([am5themes_Animated.new(root)]);

  let chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      radius: am5.percent(50),
      layout: root.verticalLayout
    })
  );
  chart.children.unshift(am5.Label.new(root, {
    text: "Cost $",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    x: am5.percent(50),
    centerX: am5.percent(50),
    paddingTop: 0,
    paddingBottom: 0
  }));

  series = chart.series.push(
    am5percent.PieSeries.new(root, {
      name: "Series",
      categoryField: "metric",
      valueField: "amount"
    })
  );

  /*series.data.setAll([{
    metric: "Repo",
    amount: 1
  }, {
    metric: "Review",
    amount: 1
  }, {
    metric: "Cold storage",
    amount: 1
  }]);*/

  series.labels.template.set("forceHidden", true);


 legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.percent(50),
    x: am5.percent(50),
    layout: root.horizontalLayout
  }));

  //legend.data.setAll(series.dataItems);

});
</script>

<template>
  <div class="pieChart" ref="chartdiv"></div>
</template>

<style scoped>
.pieChart {
  height: 100%;
}
</style>
