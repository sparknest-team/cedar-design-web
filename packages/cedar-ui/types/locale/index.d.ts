import type { CedarI18nMessages, CedarLang } from './types';
/**
 * 添加地区语言包。添加过后的语言包可以通过 `useLocale` 使用
 * @param messages 需要添加的地区语言数据
 * @param options
 */
export declare const addI18nMessages: (messages: CedarI18nMessages, options?: {
    overwrite?: boolean;
}) => void;
/**
 * 切换地区语言。仅在未提供ConfigProvider时生效。
 * @param locale
 */
export declare const useLocale: (locale: string) => void;
/**
 * 获取当前的地区语言
 */
export declare const getLocale: () => string;
export declare const useI18n: () => {
    i18nMessage: import("vue").ComputedRef<CedarLang>;
    locale: import("vue").ComputedRef<string>;
    t: (key: string, ...args: any[]) => string;
};
