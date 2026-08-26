import type { BreadcrumbRoute } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    index: NumberConstructor;
    separator: {
        type: import("vue").PropType<string | number>;
    };
    droplist: {
        type: import("vue").PropType<BreadcrumbRoute["children"]>;
    };
    dropdownProps: {
        type: import("vue").PropType<import("..").MenuProps>;
    };
    href: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => true;
    select: (_route: BreadcrumbRoute, _event?: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    index: NumberConstructor;
    separator: {
        type: import("vue").PropType<string | number>;
    };
    droplist: {
        type: import("vue").PropType<BreadcrumbRoute["children"]>;
    };
    dropdownProps: {
        type: import("vue").PropType<import("..").MenuProps>;
    };
    href: StringConstructor;
}>> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onSelect?: ((_route: BreadcrumbRoute, _event?: Event | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
