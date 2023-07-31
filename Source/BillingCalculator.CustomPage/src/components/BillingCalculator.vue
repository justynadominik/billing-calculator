<script lang="ts">
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
import  { component1 }  from './Footer'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return chartConfig
  }
}
</script>

<template>
    <rwc-category category-title="The Billing Calculator" >
        <span class="rwa-button-group left-aligned">
            <span class = "span1"></span>
            <button class="rwa-button" click.delegate="addCategory(review)">Review</button>
            <span class="span1"></span>
            <button class="rwa-button" click.delegate="addCategory(repository)">Repository</button>
            <span class="span1"></span>
            <button class="rwa-button" click.delegate="addCategory(cold storage)">Cold Storage</button>
            <span class="span1"></span>
            <button class="rwa-button" click.delegate="addCategory(translate)">Translate</button>
            <span class="span1"></span>
        </span>
    </rwc-category>
    <rwc-category category-title="Chart" >
        <span>
          <Line :data="data" :options="options" />
        </span>
    </rwc-category>
    <router-view/>
    <component1></component1>
</template>



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