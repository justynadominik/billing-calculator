import { defineStore } from "pinia";
import { ref } from "vue";

export const useRepositoryStore = defineStore("repository", () => {
    const repoBillableFileSize1 = ref(0);
    const repoBillableFileSize2 = ref(0);
    const repoBillableFileSize3 = ref(0);
    const repoBillableFileSize4 = ref(0);
    const repoBillableFileSize5 = ref(0);

    function changeBillableFileSize1(newValue: string) {
        repoBillableFileSize1.value = parseInt(newValue);
    }

    function changeBillableFileSize2(newValue: string) {
        repoBillableFileSize2.value = parseInt(newValue);
    }

    function changeBillableFileSize3(newValue: string) {
        repoBillableFileSize3.value = parseInt(newValue);
    }

    function changeBillableFileSize4(newValue: string) {
        repoBillableFileSize4.value = parseInt(newValue)
    }

    function changeBillableFileSize5(newValue: string) {
        repoBillableFileSize5.value = parseInt(newValue)
    }

    return { repoBillableFileSize1: repoBillableFileSize1, repoBillableFileSize2: repoBillableFileSize2, repoBillableFileSize3: repoBillableFileSize3, repoBillableFileSize4: repoBillableFileSize4, repoBillableFileSize5: repoBillableFileSize5,
        changeBillableFileSize1, changeBillableFileSize2, changeBillableFileSize3, changeBillableFileSize4, changeBillableFileSize5 };
  });
