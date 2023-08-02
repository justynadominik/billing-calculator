<template>
    <rwc-category category-title="Review" collapsible>
        <span>
          <table>
            <tr>
              <td style="width: 25rem">
                <span class = "span1"></span>
                  <static-text class="static-text3">Billable File Size</static-text>
                  <input label="Billable File Size" edit-mode v-model="inputBillableFileSizeReview">
              </td>
              <td>
                <rwc-category category-title="Billable File Size Breakdown" style="font-weight: 700;" collapsible collapced reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[0].dataInGb" @change="reviewData[0].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="reviewData[0].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[1].dataInGb" @change="reviewData[1].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="reviewData[1].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[2].dataInGb" @change="reviewData[2].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="reviewData[2].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="40rem" orientation="horizontal" :value="reviewData[3].dataInGb" @change="reviewData[3].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="reviewData[3].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[4].dataInGb" @change="reviewData[4].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field  class="nif1" label="GB" :value="reviewData[4].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
            </table>
        </rwc-category>
              </td>
            </tr>
            <tr>
              <td style="width: 25rem">
                <span class = "span1"></span>
                  <static-text class="static-text3">Text Only Documents</static-text>
                  <input label="Text Only Documents" edit-mode v-model="inputTextOnlyDocumentsReview">
              </td>
              <td>
                <rwc-category category-title="Text Only Documents Breakdown" style="font-weight: 700;" collapsible collapced reduced-spacing>
        <table>
            <tr>
              <td>
                <static-text class="static-text2">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[0].textOnlyDocumentsCount" @change="reviewData[0].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[0].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[1].textOnlyDocumentsCount" @change="reviewData[1].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[1].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[2].textOnlyDocumentsCount" @change="reviewData[2].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[2].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[3].textOnlyDocumentsCount" @change="reviewData[3].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[3].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2">Documents Count</static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="40rem" orientation="horizontal" :value="reviewData[4].textOnlyDocumentsCount" @change="reviewData[4].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[4].textOnlyDocumentsCount">
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

const { changeReviewBillableFileSize, changeReviewTextOnlyDocument } = useBillableData();
const { reviewData } = storeToRefs(useReviewStore());

const inputBillableFileSizeReview = ref(0);
const inputTextOnlyDocumentsReview = ref(0);

watch(inputBillableFileSizeReview, (newValue: number) => {
    changeReviewBillableFileSize(newValue);
}, { immediate: true })

watch(inputTextOnlyDocumentsReview, (newValue: number) => {
    changeReviewTextOnlyDocument(newValue);
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
}

.static-text{
    height: 3rem;
	margin-top: 10px;
	margin-left: 80px;
    margin-right: 25px;
    font-family: "Roboto", arial, helvetica, sans-serif;
	font-weight: 100;
	float: left;
    font-size: 13.5px;
    opacity: 0.9;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
}

.static-text2{
    height: 3rem;
	margin-top: 10px;
	margin-left: 25px;
    margin-right: 25px;
    font-family: "Roboto", arial, helvetica, sans-serif;
	font-weight: 100;
	float: left;
    font-size: 13.5px;
    opacity: 0.9;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
}

.static-text3{
    height: 3rem;
	margin-top: 0px;
	margin-left: 5px;
    margin-right: 25px;
    font-family: "Roboto", arial, helvetica, sans-serif;
	font-weight: 700;
	float: left;
    font-size: 14px;
    opacity: 0.9;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
}

.slider-style{
    margin-right: 5px;
    padding-left: 5px;
    padding-top: 0px;
    padding-bottom: 10px;
}

.nif1{
    margin-left: 40px;
    padding-right: 0px;
    margin-right: -3px;
    border-spacing: 0px;
}
</style>