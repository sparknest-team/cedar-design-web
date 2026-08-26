type __VLS_Props = {
    size?: string | number;
    strokeWidth?: number;
    strokeLinecap?: 'butt' | 'round' | 'square';
    strokeLinejoin?: 'bevel' | 'inherit' | 'miter' | 'round';
    rotate?: number;
    spin?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    strokeWidth: number;
    strokeLinecap: "butt" | "round" | "square";
    strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
