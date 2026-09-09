import { ref } from "vue";

export function useLayoutScroll() {
  const scrollRef = ref<HTMLElement>();
  function scrollTo(options: ScrollToOptions): void;
  function scrollTo(x: number, y: number): void;
  function scrollTo(options: ScrollToOptions | number, y?: number) {
    if (typeof options === "number") scrollRef.value?.scrollTo(options, y ?? 0);
    else scrollRef.value?.scrollTo(options);
  }
  return { scrollRef, scrollTo };
}
