<script setup lang="ts">
import { Category } from "./components";
import { onMounted } from "vue";
import { helloWorld, useS2 } from "./composables";

const hello = useS2(helloWorld);


onMounted(() => {
  hello.execute();
});

function handleRetry() {
  hello.execute();
}
</script>

<template>
  <Category></Category>
  <!-- <Modal>
    <div>Response: {{ hello.data.value?.message }}</div>
    <div>Loading: {{ hello.loading.value }}</div>

    <button :disabled="hello.loading.value">Click</button>

    <div>Error: {{ hello.error.value }}</div>
    <button class="rwa-button" @click="handleRetry">Retry</button>

    <template v-slot:actions>
      <button class="rwa-button">Delete</button>
      <button class="rwa-button secondary">Cancel</button>
    </template>
  </Modal> -->
</template>

<style scoped>
body{
  background-color: #f3f8fb;;
}
</style>
