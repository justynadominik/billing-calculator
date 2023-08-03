<template>
    <rwc-category :category-title="'Translate - ' + calcResult.translateResult.amount +  ' $'" collapsible>
        <static-text class="input-label" >Billable Units</static-text>
        <input class="input1" label="Billable Units" style="margin-left: 0rem; margin-bottom: 1rem;" edit-mode v-model="data.translateData.dataInGb">
    </rwc-category>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import "@/components/components-styles.scss";
import {storeToRefs} from "pinia";
import {useBillableData} from "@/stores/counter";
import {calculationResult} from "@/stores/calculationResult";

const { calcResult } = storeToRefs(calculationResult());

const { data } = storeToRefs(useBillableData());

</script>