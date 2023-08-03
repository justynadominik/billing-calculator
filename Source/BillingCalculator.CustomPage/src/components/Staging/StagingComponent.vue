<template>
    <rwc-category category-title="Staging" collapsible>
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
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" value="inputBillableFileSizeStaging">
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
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" value="inputBillableFileSizeStaging">
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
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" value="inputBillableFileSizeStaging">
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
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" value="inputBillableFileSizeStaging">
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
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="35rem" orientation="horizontal" value="inputBillableFileSizeStaging">
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
import { useBillableData } from "../../stores/counter";
import { ref, watch } from "vue";
import "@/components/components-styles.scss";

const { changeStagingBillableFileSize } = useBillableData();

const inputBillableFileSizeStaging = ref(0);
const stepRef = ref(10);

watch(inputBillableFileSizeStaging, (newValue: number) => {
    changeStagingBillableFileSize(newValue);
    stepRef.value = Number(newValue) / 10;
}, { immediate: true })
</script>

<style lang="scss">
</style>