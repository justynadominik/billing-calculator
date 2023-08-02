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
              <rwc-category category-title="Bilable File Size Breakdown" collapsible defined reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" max="3000" step="100" length="300px" orientation="horizontal" :value="repoBillableFileSize1" @click="changeRepoBillableFileSize1($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoBillableFileSize1">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoBillableFileSize2" @click="changeRepoBillableFileSize2($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoBillableFileSize2">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoBillableFileSize3" @click="changeRepoBillableFileSize3($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoBillableFileSize3">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoBillableFileSize4" @click="changeRepoBillableFileSize4($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoBillableFileSize4">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoBillableFileSize5" @click="changeRepoBillableFileSize5($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoBillableFileSize5">
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
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoLinkedFileSize1" @click="changeRepoLinkedFileSize1($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoLinkedFileSize1">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoLinkedFileSize2" @click="changeRepoLinkedFileSize2($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoLinkedFileSize2">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoLinkedFileSize3" @click="changeRepoLinkedFileSize3($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoLinkedFileSize3">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoLinkedFileSize4" @click="changeRepoLinkedFileSize4($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoLinkedFileSize4">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text1">File Size</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoLinkedFileSize5" @click="changeRepoLinkedFileSize5($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="GB" :value.bind="repoLinkedFileSize5">
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
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoTextOnlyDocuments1" @click="changeRepoTextOnlyDocuments1($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value.bind="repoTextOnlyDocuments1">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoTextOnlyDocuments2" @click="changeRepoTextOnlyDocuments2($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value.bind="repoTextOnlyDocuments2">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoTextOnlyDocuments3" @click="changeRepoTextOnlyDocuments3($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value.bind="repoTextOnlyDocuments3">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoTextOnlyDocuments4" @click="changeRepoTextOnlyDocuments4($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value.bind="repoTextOnlyDocuments4">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text2">Documents Count</static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal" :value="repoTextOnlyDocuments5" @click="changeRepoTextOnlyDocuments5($event.target.value)">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif1" label="COUNT" :value.bind="repoTextOnlyDocuments5">
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

const { repoBillableFileSize1, repoBillableFileSize2, repoBillableFileSize3, repoBillableFileSize4, repoBillableFileSize5 } = storeToRefs(useRepositoryStore());
const { changeRepoBillableFileSize1, changeRepoBillableFileSize2, changeRepoBillableFileSize3, changeRepoBillableFileSize4, changeRepoBillableFileSize5 } = useRepositoryStore();
const { repoLinkedFileSize1, repoLinkedFileSize2, repoLinkedFileSize3, repoLinkedFileSize4, repoLinkedFileSize5 } = storeToRefs(useRepositoryStore());
const { changeRepoLinkedFileSize1, changeRepoLinkedFileSize2, changeRepoLinkedFileSize3, changeRepoLinkedFileSize4, changeRepoLinkedFileSize5 } = useRepositoryStore();
const { repoTextOnlyDocuments1, repoTextOnlyDocuments2, repoTextOnlyDocuments3, repoTextOnlyDocuments4, repoTextOnlyDocuments5 } = storeToRefs(useRepositoryStore());
const { changeRepoTextOnlyDocuments1, changeRepoTextOnlyDocuments2, changeRepoTextOnlyDocuments3, changeRepoTextOnlyDocuments4, changeRepoTextOnlyDocuments5 } = useRepositoryStore();

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

.static-text1{
    height: 3rem;
	margin-top: 10px;
	margin-left: 89px;
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