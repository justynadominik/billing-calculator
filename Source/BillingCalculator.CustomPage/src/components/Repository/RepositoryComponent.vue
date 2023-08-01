<template>
    <rwc-category category-title="Repository" collapsible>
        <span>
            <span class = "span1"></span>
            <input label="Billable File Size" edit-mode v-model="inputBillableFileSizeRepo">
            <span class = "span1"></span>
            <input label="Linked File Size" edit-mode v-model="inputTextLinkedFileSizeRepo">
            <span class = "span1"></span>
            <input label="Text Only Documents" edit-mode v-model="inputTextOnlyDocumentsRepo">
        </span>
        <div class="div1">
            <rwc-category category-title="Bilable File Size Breakdown" collapsible defined reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="billableFileSize1" @click="changeBillableFileSize1($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" :value.bind="billableFileSize1" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="billableFileSize2" @click="changeBillableFileSize2($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" :value.bind="billableFileSize2" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="billableFileSize3" @click="changeBillableFileSize3($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" :value.bind="billableFileSize3" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="billableFileSize4" @click="changeBillableFileSize4($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" :value.bind="billableFileSize4" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="billableFileSize5" @click="changeBillableFileSize5($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" :value.bind="billableFileSize5" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
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
import { useRepositoryStore } from "../../stores/repository";

const { billableFileSize1, billableFileSize2, billableFileSize3, billableFileSize4, billableFileSize5 } = storeToRefs(useRepositoryStore());
const { changeBillableFileSize1, changeBillableFileSize2, changeBillableFileSize3, changeBillableFileSize4, changeBillableFileSize5 } = useRepositoryStore();
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
</style>