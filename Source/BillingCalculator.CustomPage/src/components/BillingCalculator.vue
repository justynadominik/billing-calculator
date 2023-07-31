<template>
  <rwc-category category-title="The Billing Calculator" >
      <span class="rwa-button-group left-aligned">
          <span class = "span1"></span>
          <button class="rwa-button" @click="toggleComponent('review')">Review</button>
          <!-- <button class="rwa-button" click.delegate="addCategory(review)">Review</button> -->
          <span class="span1"></span>
          <!-- <button class="rwa-button" click.delegate="addCategory(repository)">Repository</button>
          <span class="span1"></span>
          <button class="rwa-button" click.delegate="addCategory(cold storage)">Cold Storage</button>
          <span class="span1"></span>
          <button class="rwa-button" click.delegate="addCategory(translate)">Translate</button>
          <span class="span1"></span> -->
      </span>
  </rwc-category>
  <rwc-category category-title="Chart" >
      <span>
        <Line :data="chartData" :options="chartOptions" />
      </span>
  </rwc-category>
  <div v-if="showReviewComponent">
    <ReviewTab></ReviewTab>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from './ChartConfig.js'
import { ref } from 'vue'
import { Footer }  from './Footer'
import { ReviewTab }  from './Review'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const showReviewComponent = ref(false);

const toggleComponent = (component: string) => {
  if(component === 'review'){
    showReviewComponent.value = !showReviewComponent.value;
  }
}

const chartData = ref({
    labels: [ 'January', 'February', 'March'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 20, 12]
      }
    ]
  })
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false
  })
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