<template>
    <rwc-category category-title="Repository" collapsible>
        <span>
          <table>
            <tr>
              <td style="width: 25rem">
            <span class = "span1"></span>
            <static-text class="static-text3">Billable File Size</static-text>
            <input label="Billable File Size" edit-mode v-model="inputBillableFileSizeRepo">
            </td>
            <td>
              <rwc-category category-title="Bilable File Size Breakdown" collapsible colapsed reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" step="100" length="40rem" orientation="horizontal"  :value="repoData[0].totalBilliableFileSizeInGB" @change="repoData[0].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[0].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[1].totalBilliableFileSizeInGB" @change="repoData[1].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[1].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[2].totalBilliableFileSizeInGB" @change="repoData[2].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[2].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[3].totalBilliableFileSizeInGB" @change="repoData[3].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[3].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[4].totalBilliableFileSizeInGB" @change="repoData[4].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[4].totalBilliableFileSizeInGB">
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
            <static-text class="static-text3">Linked File Size</static-text>
            <input test-label="Linked File Size" edit-mode v-model="inputTextLinkedFileSizeRepo">
            </td>
            <td>
              <rwc-category category-title="Linked File Size Breakdown" collapsible collapced reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[0].linkedBilliableFileSizeInGB" @change="repoData[0].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[0].linkedBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[1].linkedBilliableFileSizeInGB" @change="repoData[1].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[1].linkedBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[2].linkedBilliableFileSizeInGB" @change="repoData[2].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[2].linkedBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[3].linkedBilliableFileSizeInGB" @change="repoData[3].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[3].linkedBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[4].linkedBilliableFileSizeInGB" @change="repoData[4].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value="repoData[4].linkedBilliableFileSizeInGB">
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
            <input label="Text Only Documents" edit-mode v-model="inputTextOnlyDocumentsRepo">
            </td>
            <td>
              <rwc-category category-title="Text Only Documents Breakdown" collapsible collapced reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[0].textOnlyDocumentsCount" @change="repoData[0].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value="repoData[0].textOnlyDocumentsCount">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[1].textOnlyDocumentsCount" @change="repoData[1].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value="repoData[1].textOnlyDocumentsCount">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[2].textOnlyDocumentsCount" @change="repoData[2].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value="repoData[2].textOnlyDocumentsCount">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[3].textOnlyDocumentsCount" @change="repoData[3].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value="repoData[3].textOnlyDocumentsCount">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" step="5" length="40rem" orientation="horizontal" :value="repoData[4].textOnlyDocumentsCount" @change="repoData[4].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value="repoData[4].textOnlyDocumentsCount">
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
import { useRepositoryStore } from "../../stores/repository";

const { repoData } = storeToRefs(useRepositoryStore());
const { changeRepoBillableFileSize, changeRepoLinkedFileSize, changeRepoTextOnlyDocument } = useBillableData();

const inputBillableFileSizeRepo = ref(0);
const inputTextOnlyDocumentsRepo = ref(0);
const inputTextLinkedFileSizeRepo = ref(0);

watch(inputBillableFileSizeRepo, (newValue: number) => {
    changeRepoBillableFileSize(newValue);
}, { immediate: true })

watch(inputTextOnlyDocumentsRepo, (newValue: number) => {
    changeRepoTextOnlyDocument(newValue);
}, { immediate: true })

watch(inputTextLinkedFileSizeRepo, (newValue: number) => {
    changeRepoLinkedFileSize(newValue);
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
	font-weight: 700;
	float: left;
    font-size: 13.5px;
    opacity: 0.9;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
}

.static-text1{
    height: 3rem;
	margin-top: 10px;
	margin-left: 80px;
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
	margin-left: 25px;
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

.div1{
    white-space: "nowrap";
    margin-top: 20px;
    margin-bottom: 0px;
    border-top: 1px outset gray;
    text-align: center;
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