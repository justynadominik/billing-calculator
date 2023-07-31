import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("David");
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function changeName() {
    name.value = "Franklin";
  }

  return { count, name, doubleCount, increment, decrement, changeName };
});
