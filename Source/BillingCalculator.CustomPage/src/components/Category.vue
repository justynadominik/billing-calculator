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
          <Line :data="chartData" :options="chartOptions" />
        </span>
        <br>
        <p>Hey there, my name is {{ name }}</p>
        <p>Count x 2: {{ doubleCount }}</p>
        <p>Count: {{ count }}</p>
        <br>
        <button class="increase" @click="increment()">Increase +</button>
        <button class="decrease" @click="decrement()">Decrease -</button>
        <button @click="changeName()">Change Name</button>
      </rwc-category>
      <rwc-category category-title="Review" collapsible>
        <span>
            <span class = "span1"></span>
            <rwc-text-input-field label="Billable File Size" value="" edit-mode ></rwc-text-input-field>
            <span class = "span1"></span>
            <rwc-text-input-field label="Text Only Documents" value="" edit-mode ></rwc-text-input-field>
        </span>
        <div class="static-text">
            <b>Billable File Size</b>
        </div>
            <rwc-slider max="27" step="3" length="300px" orientation="horizontal" style="padding-top:50px; padding-bottom: 50px;"></rwc-slider>
      </rwc-category>
      <rwc-category category-title="Repository" collapsible>
        <span>
            <span class = "span1"></span>
            <rwc-text-input-field label="Billable File Size" value="" edit-mode ></rwc-text-input-field>
            <span class = "span1"></span>
            <rwc-text-input-field label="Linked File Size" value="" edit-mode ></rwc-text-input-field>
            <span class = "span1"></span>
            <rwc-text-input-field label="Text Only Documents" value="" edit-mode ></rwc-text-input-field>
        </span>
      </rwc-category>
      <rwc-category category-title="Cold Storage" collapsible>
        <span>
            <span class = "span1"></span>
            <rwc-text-input-field label="Billable File Size" value="" edit-mode ></rwc-text-input-field>
        </span>
      </rwc-category>
      <rwc-category category-title="Translate" collapsible>
        <span>
            ???????
        </span>
      </rwc-category>
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
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const { count, name, doubleCount } = storeToRefs(useCounterStore());
const { increment, decrement, changeName } = useCounterStore();

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

<style scoped>
.span1{
    background: inherit;
    width: 3rem;
    display: inline-block;
    height: 1.5rem;
    padding: 0;
    vertical-align: middle;
    display: inline-block;
}

.static-text{
    height: 3rem;
	margin-top: 15px;
	margin-left: 60px;
    font-family: "Roboto", arial, helvetica, sans-serif;
	font-weight: 700;
	float: left;
  font-size: 14px;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
}
</style>