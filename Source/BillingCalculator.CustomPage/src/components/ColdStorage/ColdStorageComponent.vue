<template>
    <rwc-category category-title="Cold Storage" collapsible>
        <span>
            <span class = "span1"></span>
            <input label="Billable File Size" edit-mode v-model="inputBillableFileSizeColdStorage">
        </span>
    </rwc-category>
</template>

<script setup lang="ts">
import { useBillableData } from "../../stores/counter";
import { ref, watch } from "vue";

const { changeColdStorageBillableFileSize } = useBillableData();

const inputBillableFileSizeColdStorage = ref(0);

watch(inputBillableFileSizeColdStorage, (newValue: number) => {
    changeColdStorageBillableFileSize(newValue);
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