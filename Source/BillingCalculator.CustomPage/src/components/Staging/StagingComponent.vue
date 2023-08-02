<template>
    <rwc-category category-title="Staging" collapsible>
        <span>
            <span class = "span1"></span>
            <static-text class="static-text3">Billable File Size</static-text>
            <input label="Billable File Size" edit-mode v-model="inputBillableFileSizeStaging">
        </span>
    </rwc-category>
</template>

<script setup lang="ts">
import { useBillableData } from "../../stores/counter";
import { ref, watch } from "vue";

const { changeStagingBillableFileSize } = useBillableData();

const inputBillableFileSizeStaging = ref(0);

watch(inputBillableFileSizeStaging, (newValue: number) => {
    changeStagingBillableFileSize(newValue);
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