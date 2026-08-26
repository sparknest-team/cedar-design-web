import { Ref } from 'vue';
declare const Theme: {
    Dark: "dark";
    Light: "light";
};
export declare const useTheme: (callback?: () => void) => {
    theme: Ref<"light" | "dark", "light" | "dark">;
    setTheme: (value: (typeof Theme)[keyof typeof Theme]) => void;
};
export {};
