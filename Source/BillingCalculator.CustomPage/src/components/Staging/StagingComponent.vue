<template>
    <rwc-category :category-title="'Staging - ' + calcResult.stagingResult.amount + ' $'" collapsible>
        <span>
          <table>
            <tr>
              <td style="width: 25rem;">
                  <static-text class="input-label">Billable File Size</static-text>
                  <input class="input1" label="Billable File Size" edit-mode v-model="inputBillableFileSizeStaging">
              </td>
              <td style="width: 75rem;">
                <rwc-category class="breakdown-category" category-title="Billable File Size Breakdown" style="font-weight: 700;" collapsible collapsed reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" :value="stagingData[0].dataInGb" @change="stagingData[0].dataInGb = $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" :value="stagingData[1].dataInGb" @change="stagingData[1].dataInGb = $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" :value="stagingData[2].dataInGb" @change="stagingData[2].dataInGb = $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" :value="stagingData[3].dataInGb" @change="stagingData[0].dataInGb = $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" :value="stagingData[4].dataInGb" @change="stagingData[0].dataInGb = $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
            </table>
        </rwc-category>
              </td>
            </tr>
        </table>
        </span>
    </rwc-category>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBillableData } from "../../stores/counter";
import { ref, watch } from "vue";
import { usestagingStore } from "../../stores/staging";
import "@/components/components-styles.scss";
import {calculationResult} from "@/stores/calculationResult";

const { changeStagingBillableFileSize } = useBillableData();
const { stagingData } = storeToRefs(usestagingStore());
const { calcResult } = storeToRefs(calculationResult());

const inputBillableFileSizeStaging = ref(0);
const stepRef = ref(10);

watch(inputBillableFileSizeStaging, (newValue: number) => {
    changeStagingBillableFileSize(newValue);
    stepRef.value = Number(newValue) / 10;

    stagingData.value.forEach((element: any) => {
        element.dataInGb = Number(newValue);
    });
}, { immediate: true })
</script>

<style lang="scss">
</style>