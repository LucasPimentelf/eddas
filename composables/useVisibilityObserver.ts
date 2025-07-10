import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';

export function useVisibilityObserver(targetSection: Ref<HTMLElement | null>) {
  const isVisible = ref(false);

  const checkVisibility = () => {
    if (!targetSection.value || isVisible.value) return;

    const rect = targetSection.value.getBoundingClientRect();
    const inViewport =
      rect.top < window.innerHeight &&
      rect.bottom > 0;

    isVisible.value = inViewport;
  };

  onMounted(() => {
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility(); // initial check
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", checkVisibility);
    window.removeEventListener("resize", checkVisibility);
  });

  return {
    isVisible
  };
}