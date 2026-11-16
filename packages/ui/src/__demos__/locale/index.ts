import { computed } from "vue";
import { getLocale } from "../../locale";
import zhCN from "./zh-cn";
import enUS from "./en-us";

const messages: Record<string, typeof zhCN> = { "zh-CN": zhCN, "en-US": enUS };

/** 示例与文档顶部切换同步，文案独立于组件库公共语言包。 */
export function useDemoLocale<K extends keyof typeof zhCN>(scope: K) {
  return computed(() => (messages[getLocale()] ?? zhCN)[scope]);
}

export const formatDemoDate = (
  value: Date,
  options?: Intl.DateTimeFormatOptions,
) => value.toLocaleDateString(getLocale(), options);

export const formatDemoTime = (
  value: Date,
  options?: Intl.DateTimeFormatOptions,
) => value.toLocaleTimeString(getLocale(), options);

export const formatDemoDateTime = (
  value: Date,
  options?: Intl.DateTimeFormatOptions,
) => value.toLocaleString(getLocale(), options);

export const formatDemoNumber = (
  value: number,
  options?: Intl.NumberFormatOptions,
) => value.toLocaleString(getLocale(), options);
