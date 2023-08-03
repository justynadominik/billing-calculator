<template>
    <rwc-category category-title="Translate" collapsible>
        <static-text class="input-label" >Billable Units</static-text>
        <input class="input1" label="Billable Units" style="margin-left: 0rem; margin-bottom: 1rem;" edit-mode v-model="inputTranslate">
    </rwc-category>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import "@/components/components-styles.scss";

const inputTranslate = ref(0);

    watch(inputTranslate, (newValue: number) => {
        //changeTranslateBillableUnits(newValue);
    }, { immediate: true })
</script>