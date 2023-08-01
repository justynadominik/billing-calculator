<template>
    <div class = "cost">
        <rwc-text-input-field label="Estimaded cost $" value="0" disabled ></rwc-text-input-field>
        <span class = "span1"></span>
    </div>
    <div>
        <span class="rwa-button-group left-aligned">
            <button class="rwa-button" @click="onSave()">Save</button>
            <button class="rwa-button" click.delegate="">Share</button>
        </span>
    </div>
</template>

<script setup lang="ts">
import { CalculationService, BillingDataInput } from "../../calculator/CalculatorService"
import { storeToRefs } from "pinia";
import { useBillableData } from "../../stores/counter";

function onSave() {
    const calculatoionService = new CalculationService();
    const { data } = storeToRefs(useBillableData());
    const temp = calculatoionService.calculate(data.value);
    console.log(temp);
}

</script>

<style lang="scss">
.cost{
    padding-top:20px
}
.span1{
    background: inherit;
    width: 3rem;
    display: inline-block;
    height: 1.5rem;
    padding-bottom: 20px;
    vertical-align: middle;
    display: inline-block;
}
</style>
