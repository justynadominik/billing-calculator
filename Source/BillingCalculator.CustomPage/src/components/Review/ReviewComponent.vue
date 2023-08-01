<template>
    <rwc-category category-title="Review" collapsible>
        <span>
            <span class = "span1"></span>
            <input label="Billable File Size" edit-mode v-model="inputBillableFileSizeReview">
            <span class = "span1"></span>
            <input label="Text Only Documents" edit-mode v-model="inputTextOnlyDocumentsReview">
        </span>
        <div class="div1">
            <BillableFileSizeBreakdown />
            <TextOnlyDocumentsBreakdown />
        </div>
    </rwc-category>
</template>

<script setup lang="ts">
import { useBillableData } from "../../stores/counter";
import { ref, watch } from "vue";
import TextOnlyDocumentsBreakdown from "../Breakdown/TextOnlyDocumentsBreakdown.vue";
import BillableFileSizeBreakdown from "../Breakdown/BillableFileSizeBreakdown.vue";

const { changeReviewBillableFileSize, changeReviewTextOnlyDocument } = useBillableData();

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
</style>