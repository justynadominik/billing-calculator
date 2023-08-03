<template>
    <rwc-category category-title="Repository" collapsible>
        <span>
          <table>
            <tr>
              <td style="width: 25rem;">
            <static-text class="input-label">Billable File Size</static-text>
            <input class="input1" label="Billable File Size" edit-mode v-model="inputBillableFileSizeRepo">
            </td>
            <td style="width: 75rem;">
              <rwc-category class="breakdown-category" category-title="Bilable File Size Breakdown" style="font-weight: 700;" collapsible collapsed reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" :step="stepRef" length="35rem" orientation="horizontal"  :value="repoData[0].totalBilliableFileSizeInGB" @change="repoData[0].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[0].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" :step="stepRef" length="35rem" orientation="horizontal" :value="repoData[1].totalBilliableFileSizeInGB" @change="repoData[1].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[1].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" :step="stepRef" length="35rem" orientation="horizontal" :value="repoData[2].totalBilliableFileSizeInGB" @change="repoData[2].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[2].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" :step="stepRef" length="35rem" orientation="horizontal" :value="repoData[3].totalBilliableFileSizeInGB" @change="repoData[3].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[3].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputBillableFileSizeRepo" :step="stepRef" length="35rem" orientation="horizontal" :value="repoData[4].totalBilliableFileSizeInGB" @change="repoData[4].totalBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[4].totalBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
            </table>
          </rwc-category>
          </td>
          </tr>
          <tr>
            <td style="width: 25rem;">
            <static-text class="input-label">Linked File Size</static-text>
            <input class="input1" test-label="Linked File Size" edit-mode v-model="inputTextLinkedFileSizeRepo">
            </td>
            <td style="width: 75rem;">
              <rwc-category class="breakdown-category" category-title="Linked File Size Breakdown" style="font-weight: 700;" collapsible collapsed reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" :step="stepRefLink" length="35rem" orientation="horizontal" :value="repoData[0].linkedBilliableFileSizeInGB" @change="repoData[0].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[0].linkedBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" :step="stepRefLink" length="35rem" orientation="horizontal" :value="repoData[1].linkedBilliableFileSizeInGB" @change="repoData[1].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[1].linkedBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" :step="stepRefLink" length="35rem" orientation="horizontal" :value="repoData[2].linkedBilliableFileSizeInGB" @change="repoData[2].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[2].linkedBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" :step="stepRefLink" length="35rem" orientation="horizontal" :value="repoData[3].linkedBilliableFileSizeInGB" @change="repoData[3].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[3].linkedBilliableFileSizeInGB">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-file-size">File Size</static-text>
                    <rwc-slider class="slider-style" :max="inputTextLinkedFileSizeRepo" :step="stepRefLink" length="35rem" orientation="horizontal" :value="repoData[4].linkedBilliableFileSizeInGB" @change="repoData[4].linkedBilliableFileSizeInGB =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="GB" :value="repoData[4].linkedBilliableFileSizeInGB">
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
            <input class="input1" label="Text Only Documents" edit-mode v-model="inputTextOnlyDocumentsRepo">
            </td>
            <td style="width: 75rem;">
              <rwc-category  class="breakdown-category" category-title="Text Only Documents Breakdown" style="font-weight: 700;" collapsible collapsed reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text-category-doc-count">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" :step="stepRefText" length="35rem" orientation="horizontal" :value="repoData[0].textOnlyDocumentsCount" @change="repoData[0].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="COUNT" :value="repoData[0].textOnlyDocumentsCount">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-doc-count">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" :step="stepRefText" length="35rem" orientation="horizontal" :value="repoData[1].textOnlyDocumentsCount" @change="repoData[1].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="COUNT" :value="repoData[1].textOnlyDocumentsCount">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-doc-count">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" :step="stepRefText" length="35rem" orientation="horizontal" :value="repoData[2].textOnlyDocumentsCount" @change="repoData[2].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="COUNT" :value="repoData[2].textOnlyDocumentsCount">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-doc-count">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" :step="stepRefText" length="35rem" orientation="horizontal" :value="repoData[3].textOnlyDocumentsCount" @change="repoData[3].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="COUNT" :value="repoData[3].textOnlyDocumentsCount">
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text-category-doc-count">Documents Count</static-text>
                    <rwc-slider class="slider-style" :max="inputTextOnlyDocumentsRepo" :step="stepRefText" length="35rem" orientation="horizontal" :value="repoData[4].textOnlyDocumentsCount" @change="repoData[4].textOnlyDocumentsCount =  $event.target.value">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field class="nif-units" label="COUNT" :value="repoData[4].textOnlyDocumentsCount">
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
import "@/components/components-styles.scss";

const { repoData } = storeToRefs(useRepositoryStore());
const { changeRepoBillableFileSize, changeRepoLinkedFileSize, changeRepoTextOnlyDocument } = useBillableData();

const inputBillableFileSizeRepo = ref(0);
const inputTextOnlyDocumentsRepo = ref(0);
const inputTextLinkedFileSizeRepo = ref(0);

const stepRef = ref(10);
const stepRefLink = ref(10);
const stepRefText = ref(10);

watch(inputBillableFileSizeRepo, (newValue: number) => {
    changeRepoBillableFileSize(newValue);
    stepRef.value = Number(newValue) / 10;
}, { immediate: true })

watch(inputTextOnlyDocumentsRepo, (newValue: number) => {
    changeRepoTextOnlyDocument(newValue);
    stepRefText.value = Number(newValue) / 10;
}, { immediate: true })

watch(inputTextLinkedFileSizeRepo, (newValue: number) => {
    changeRepoLinkedFileSize(newValue);
    stepRefLink.value = Number(newValue) / 10;
}, { immediate: true })

</script>

<style lang="scss">
</style>