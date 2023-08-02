import { defineStore } from "pinia";
import { ref } from "vue";

export const useRepositoryStore = defineStore("repository", () => {
    const repoBillableFileSize1 = ref(0);
    const repoBillableFileSize2 = ref(0);
    const repoBillableFileSize3 = ref(0);
    const repoBillableFileSize4 = ref(0);
    const repoBillableFileSize5 = ref(0);

    const repoTextOnlyDocuments1 = ref(0);
    const repoTextOnlyDocuments2 = ref(0);
    const repoTextOnlyDocuments3 = ref(0);
    const repoTextOnlyDocuments4 = ref(0);
    const repoTextOnlyDocuments5 = ref(0);

    const repoLinkedFileSize1 = ref(0);
    const repoLinkedFileSize2 = ref(0);
    const repoLinkedFileSize3 = ref(0);
    const repoLinkedFileSize4 = ref(0);
    const repoLinkedFileSize5 = ref(0);

    function changeRepoBillableFileSize1(newValue: string) {
        repoBillableFileSize1.value = parseInt(newValue);
    }

    function changeRepoBillableFileSize2(newValue: string) {
        repoBillableFileSize2.value = parseInt(newValue);
    }

    function changeRepoBillableFileSize3(newValue: string) {
        repoBillableFileSize3.value = parseInt(newValue);
    }

    function changeRepoBillableFileSize4(newValue: string) {
        repoBillableFileSize4.value = parseInt(newValue)
    }

    function changeRepoBillableFileSize5(newValue: string) {
        repoTextOnlyDocuments1.value = parseInt(newValue)
    }

    function changeRepoTextOnlyDocuments1(newValue: string) {
        repoTextOnlyDocuments1.value = parseInt(newValue);
    }

    function changeRepoTextOnlyDocuments2(newValue: string) {
        repoTextOnlyDocuments2.value = parseInt(newValue);
    }

    function changeRepoTextOnlyDocuments3(newValue: string) {
        repoTextOnlyDocuments3.value = parseInt(newValue);
    }

    function changeRepoTextOnlyDocuments4(newValue: string) {
        repoTextOnlyDocuments4.value = parseInt(newValue)
    }

    function changeRepoTextOnlyDocuments5(newValue: string) {
        repoTextOnlyDocuments5.value = parseInt(newValue)
    }

    function changeRepoLinkedFileSize1(newValue: string) {
        repoLinkedFileSize1.value = parseInt(newValue);
    }

    function changeRepoLinkedFileSize2(newValue: string) {
        repoLinkedFileSize2.value = parseInt(newValue);
    }

    function changeRepoLinkedFileSize3(newValue: string) {
        repoLinkedFileSize3.value = parseInt(newValue);
    }

    function changeRepoLinkedFileSize4(newValue: string) {
        repoLinkedFileSize4.value = parseInt(newValue)
    }

    function changeRepoLinkedFileSize5(newValue: string) {
        repoLinkedFileSize5.value = parseInt(newValue)
    }

    return { repoBillableFileSize1: repoBillableFileSize1,
        repoBillableFileSize2: repoBillableFileSize2,
        repoBillableFileSize3: repoBillableFileSize3,
        repoBillableFileSize4: repoBillableFileSize4,
        repoBillableFileSize5: repoBillableFileSize5,
        changeRepoBillableFileSize1: changeRepoBillableFileSize1,
        changeRepoBillableFileSize2: changeRepoBillableFileSize2,
        changeRepoBillableFileSize3: changeRepoBillableFileSize3,
        changeRepoBillableFileSize4: changeRepoBillableFileSize4,
        changeRepoBillableFileSize5: changeRepoBillableFileSize5,
        repoTextOnlyDocuments1: repoTextOnlyDocuments1,
        repoTextOnlyDocuments2: repoTextOnlyDocuments2,
        repoTextOnlyDocuments3: repoTextOnlyDocuments3,
        repoTextOnlyDocuments4: repoTextOnlyDocuments4,
        repoTextOnlyDocuments5: repoTextOnlyDocuments5,
        changeRepoTextOnlyDocuments1,
        changeRepoTextOnlyDocuments2,
        changeRepoTextOnlyDocuments3,
        changeRepoTextOnlyDocuments4,
        changeRepoTextOnlyDocuments5,
        repoLinkedFileSize1: repoLinkedFileSize1,
        repoLinkedFileSize2: repoLinkedFileSize2,
        repoLinkedFileSize3: repoLinkedFileSize3,
        repoLinkedFileSize4: repoLinkedFileSize4,
        repoLinkedFileSize5: repoLinkedFileSize5,
        changeRepoLinkedFileSize1,
        changeRepoLinkedFileSize2,
        changeRepoLinkedFileSize3,
        changeRepoLinkedFileSize4,
        changeRepoLinkedFileSize5
    };
  }
);
