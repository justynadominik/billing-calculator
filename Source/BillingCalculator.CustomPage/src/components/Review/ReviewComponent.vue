<template>
    <rwc-category category-title="Review" collapsible>
        <span>
            <span class = "span1"></span>
            <input label="Billable File Size" edit-mode v-model="inputBillableFileSizeReview">
            <span class = "span1"></span>
            <input label="Text Only Documents" edit-mode v-model="inputTextOnlyDocumentsReview">
        </span>
        <div class="div1">
            <rwc-category category-title="Bilable File Size Breakdown" collapsible defined reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="300px" orientation="horizontal" :value="reviewData[0].dataInGb" @change="reviewData[0].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="reviewData[0].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="300px" orientation="horizontal" :value="reviewData[1].dataInGb" @change="reviewData[1].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="reviewData[1].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="300px" orientation="horizontal" :value="reviewData[2].dataInGb" @change="reviewData[2].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="reviewData[2].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="300px" orientation="horizontal" :value="reviewData[3].dataInGb" @change="reviewData[3].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="reviewData[3].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeReview" step="5" length="300px" orientation="horizontal" :value="reviewData[4].dataInGb" @change="reviewData[4].dataInGb =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field  class="nif1" label="GB" :value="reviewData[4].dataInGb">
                    </rwc-number-input-field>
                  </td>
                </tr>
            </table>
        </rwc-category>
        <rwc-category category-title="Text Only Documents Breakdown" collapsible collapced reduced-spacing>
        <table>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="300px" orientation="horizontal" :value="reviewData[0].textOnlyDocumentsCount" @change="reviewData[0].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[0].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="300px" orientation="horizontal" :value="reviewData[1].textOnlyDocumentsCount" @change="reviewData[1].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[1].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="300px" orientation="horizontal" :value="reviewData[2].textOnlyDocumentsCount" @change="reviewData[2].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[2].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="300px" orientation="horizontal" :value="reviewData[3].textOnlyDocumentsCount" @change="reviewData[3].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[3].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsReview" step="5" length="300px" orientation="horizontal" :value="reviewData[4].textOnlyDocumentsCount" @change="reviewData[4].textOnlyDocumentsCount =  $event.target.value">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" :value="reviewData[4].textOnlyDocumentsCount">
                </rwc-number-input-field>
              </td>
            </tr>
        </table>
    </rwc-category>
        </div>
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
    display: inline-block;
}

.static-text{
    height: 3rem;
	margin-top: 10px;
	margin-left: 85px;
    margin-right: 25px;
    font-family: "Roboto", arial, helvetica, sans-serif;
	font-weight: 700;
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
	margin-left: 56px;
    margin-right: 25px;
    font-family: "Roboto", arial, helvetica, sans-serif;
	font-weight: 700;
	float: left;
    font-size: 13.5px;
    opacity: 0.9;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
}

.div1{
    white-space: "nowrap";
    margin-top: 20px;
    margin-bottom: 0px;
    border-top: 1px outset gray;
    text-align: center;
}

.slider-style{
    margin-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.nif1{
    margin-left: 40px;
    padding-right: 0px;
    margin-right: -3px;
    border-spacing: 0px;
}
</style>