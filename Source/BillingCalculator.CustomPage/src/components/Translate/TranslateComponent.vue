<template>
    <rwc-category :category-title="'Translate - ' + calcResult.translateResult.amount +  ' $'" collapsible>
        <table>
            <tr>
                <td style="width: 25rem;">
                    <static-text class="input-label" >Billable Units</static-text>
                    <input class="input1" label="Billable Units" edit-mode v-model="data.translateData.dataInGb">
                </td>
                <td style="width: 75rem;">
                </td>
            </tr>
        </table>
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