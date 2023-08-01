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
          <BillableFileSizeBreakdown />
          <LinkedFileSizeBreakdown />
          <TextOnlyDocumentsBreakdown />
        </div>
    </rwc-category>
</template>

<script setup lang="ts">
import { useBillableData } from "../../stores/counter";
import { ref, watch } from "vue";
import BillableFileSizeBreakdown from "../Breakdown/BillableFileSizeBreakdown.vue";
import LinkedFileSizeBreakdown from "../Breakdown/LinkedFileSizeBreakdown.vue";
import TextOnlyDocumentsBreakdown from "../Breakdown/TextOnlyDocumentsBreakdown.vue";

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