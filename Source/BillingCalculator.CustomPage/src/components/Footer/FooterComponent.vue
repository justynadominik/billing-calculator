<template>
    <div class = "cost">
        <rwc-text-input-field label="Estimaded cost $" :value="total" disabled ></rwc-text-input-field>
        <span class = "span"></span>
    </div>
    <div>
        <span class="rwa-button-group left-aligned">
            <button class="rwa-button">Save</button>
            <button class="rwa-button" click.delegate="">Share</button>
        </span>
    </div>
</template>

<script setup lang="ts">
import { CalculationService, BillingDataInput } from "../../calculator/CalculatorService"
import { storeToRefs } from "pinia";
import { useBillableData } from "../../stores/counter";
import {ref, watch} from "vue";
import "@/components/components-styles.scss";

const total = ref(0);
const { data } = storeToRefs(useBillableData());

watch(data, () => {
    const calculationService = new CalculationService();
    const temp = calculationService.calculate(data.value);
    total.value = temp.totalCost()
})

</script>

<style lang="scss">
.cost{
    padding-top:20px
}
</style>
