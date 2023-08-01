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
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
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
import { useBillableData } from "../../stores/counter";
import { ref, watch } from "vue";

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
</style>