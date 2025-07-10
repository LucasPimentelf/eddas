import { defineStore } from "pinia";
import { ref } from "vue";

export const firstStore = defineStore("firstStore", () => {
  const clickCount = ref(0);
  const increment = () => clickCount.value++;
  const decrement = () => clickCount.value--;

  return {
    clickCount,
    increment,
    decrement
  };
});