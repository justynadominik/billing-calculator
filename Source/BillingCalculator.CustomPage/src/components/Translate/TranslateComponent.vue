<template>
    <rwc-category category-title="Translate" collapsible>
        <span class = "span1"></span>
        <static-text class="static-text3">Billable Units</static-text>
        <input label="Billable Units" edit-mode v-model="inputTranslate">
    </rwc-category>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const inputTranslate = ref(0);

    watch(inputTranslate, (newValue: number) => {
        //changeTranslateBillableUnits(newValue);
    }, { immediate: true })
</script>