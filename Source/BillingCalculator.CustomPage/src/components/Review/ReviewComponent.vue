<template>
    <rwc-category category-title="Review" collapsible>
        <span>
          <table>
            <tr>
              <td style="width: 25rem;">
                  <static-text class="input-label">Billable File Size</static-text>
                  <input class="input1" label="Billable File Size" edit-mode v-model="inputBillableFileSizeReview">
              </td>
              <td style="width: 75rem;">
                <rwc-category class="breakdown-category" category-title="Billable File Size Breakdown" collapsible collapsed reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" :step="stepRef" length="35rem" orientation="horizontal" :value="reviewData[0].dataInGb" @change="reviewData[0].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="reviewData[0].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" :step="stepRef" length="35rem" orientation="horizontal" :value="reviewData[1].dataInGb" @change="reviewData[1].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="reviewData[1].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" :step="stepRef" length="35rem" orientation="horizontal" :value="reviewData[2].dataInGb" @change="reviewData[2].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="reviewData[2].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" :step="stepRef" length="35rem" orientation="horizontal" :value="reviewData[3].dataInGb" @change="reviewData[3].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="reviewData[3].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" :step="stepRef" length="35rem" orientation="horizontal" :value="reviewData[4].dataInGb" @change="reviewData[4].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="reviewData[4].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
            </table>
        </rwc-category>
              </td>
            </tr>
            <tr>
              <td style="width: 25rem;">
                  <static-text class="input-label">Text Only Documents</static-text>
                  <input class="input1" label="Text Only Documents" edit-mode v-model="inputTextOnlyDocumentsReview">
              </td>
              <td style="width: 75rem;">
                <rwc-category class="breakdown-category" category-title="Text Only Documents Breakdown" collapsible collapsed reduced-spacing>
        <table>
            <tr>
              <td>
                <static-text class="static-text-category-doc-count">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" :step="stepRefText" length="35rem" orientation="horizontal" :value="reviewData[0].textOnlyDocumentsCount" @change="reviewData[0].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif-units" label="COUNT" :value="reviewData[0].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text-category-doc-count">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" :step="stepRefText" length="35rem" orientation="horizontal" :value="reviewData[1].textOnlyDocumentsCount" @change="reviewData[1].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif-units" label="COUNT" :value="reviewData[1].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text-category-doc-count">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" :step="stepRefText" length="35rem" orientation="horizontal" :value="reviewData[2].textOnlyDocumentsCount" @change="reviewData[2].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif-units" label="COUNT" :value="reviewData[2].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text-category-doc-count">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" :step="stepRefText" length="35rem" orientation="horizontal" :value="reviewData[3].textOnlyDocumentsCount" @change="reviewData[3].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif-units" label="COUNT" :value="reviewData[3].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text-category-doc-count">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" :step="stepRefText" length="35rem" orientation="horizontal" :value="reviewData[4].textOnlyDocumentsCount" @change="reviewData[4].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif-units" label="COUNT" :value="reviewData[4].textOnlyDocumentsCount">
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
import { useReviewStore } from "../../stores/review";
import "@/components/components-styles.scss";

const { changeReviewBillableFileSize, changeReviewTextOnlyDocument } = useBillableData();
const { reviewData } = storeToRefs(useReviewStore());

const inputBillableFileSizeReview = ref(0);
const inputTextOnlyDocumentsReview = ref(0);

const stepRef = ref(10);
const stepRefText = ref(10);

watch(inputBillableFileSizeReview, (newValue: number) => {
    changeReviewBillableFileSize(newValue);
    stepRef.value = Number(newValue) / 10;

    reviewData.value.forEach((element: any) => {
        element.dataInGb = Number(newValue);
    });
}, { immediate: true })

watch(inputTextOnlyDocumentsReview, (newValue: number) => {
    changeReviewTextOnlyDocument(newValue);
    stepRefText.value = Number(newValue) / 10;

    reviewData.value.forEach((element: any) => {
      element.textOnlyDocumentsCount = Number(newValue);
    });
}, { immediate: true })

</script>

<style lang="scss">
</style>