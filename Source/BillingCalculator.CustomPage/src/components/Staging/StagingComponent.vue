<template>
    <rwc-category category-title="Staging" collapsible>
        <span>
          <table>
            <tr>
              <td style="width: 25rem">
                <span class = "span1"></span>
                  <static-text class="static-text3">Billable File Size</static-text>
                  <input label="Billable File Size" edit-mode v-model="inputBillableFileSizeStaging">
              </td>
              <td>
                <rwc-category category-title="Billable File Size Breakdown" style="font-weight: 700;" collapsible collapsed reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="40rem" orientation="horizontal" value="inputBillableFileSizeStaging">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="40rem" orientation="horizontal" value="inputBillableFileSizeStaging">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="40rem" orientation="horizontal" value="inputBillableFileSizeStaging">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="40rem" orientation="horizontal" value="inputBillableFileSizeStaging">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" value="">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeStaging" :step="stepRef" length="40rem" orientation="horizontal" value="inputBillableFileSizeStaging">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field  class="nif1" label="GB" value="">
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

const { changeStagingBillableFileSize } = useBillableData();

const inputBillableFileSizeStaging = ref(0);
const stepRef = ref(10);

watch(inputBillableFileSizeStaging, (newValue: number) => {
    changeStagingBillableFileSize(newValue);
    stepRef.value = Number(newValue) / 10;
}, { immediate: true })
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