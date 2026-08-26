import _Breadcrumb from './breadcrumb';
import _BreadcrumbItem from './breadcrumb-item';
import { breadcrumbProps, breadcrumbItemProps } from './props';
declare const Breadcrumb: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        maxCount: {
            type: NumberConstructor;
            default: number;
        };
        routes: {
            type: import("vue").PropType<import("./types").BreadcrumbRoute[]>;
        };
        separator: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        separator: string | number;
        maxCount: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        maxCount: {
            type: NumberConstructor;
            default: number;
        };
        routes: {
            type: import("vue").PropType<import("./types").BreadcrumbRoute[]>;
        };
        separator: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        separator: string | number;
        maxCount: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    routes: {
        type: import("vue").PropType<import("./types").BreadcrumbRoute[]>;
    };
    separator: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    separator: string | number;
    maxCount: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        index: NumberConstructor;
        separator: {
            type: import("vue").PropType<string | number>;
        };
        droplist: {
            type: import("vue").PropType<import("./types").BreadcrumbRoute["children"]>;
        };
        dropdownProps: {
            type: import("vue").PropType<import("..").MenuProps>;
        };
        href: StringConstructor;
    }>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => true;
        select: (_route: import("./types").BreadcrumbRoute, _event?: Event) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        index: NumberConstructor;
        separator: {
            type: import("vue").PropType<string | number>;
        };
        droplist: {
            type: import("vue").PropType<import("./types").BreadcrumbRoute["children"]>;
        };
        dropdownProps: {
            type: import("vue").PropType<import("..").MenuProps>;
        };
        href: StringConstructor;
    }>> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
        onSelect?: ((_route: import("./types").BreadcrumbRoute, _event?: Event | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type BreadcrumbInstance = InstanceType<typeof _Breadcrumb>;
export type BreadcrumbItemInstance = InstanceType<typeof _BreadcrumbItem>;
export type { BreadcrumbRoute, BreadcrumbMoreIconSlotData } from './types';
export type { BreadcrumbProps, BreadcrumbItemProps } from './props';
export { breadcrumbProps, breadcrumbItemProps };
export { _BreadcrumbItem as BreadcrumbItem };
export { _Breadcrumb as Breadcrumb };
export declare const _BreadcrumbComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        maxCount: {
            type: NumberConstructor;
            default: number;
        };
        routes: {
            type: import("vue").PropType<import("./types").BreadcrumbRoute[]>;
        };
        separator: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        separator: string | number;
        maxCount: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        maxCount: {
            type: NumberConstructor;
            default: number;
        };
        routes: {
            type: import("vue").PropType<import("./types").BreadcrumbRoute[]>;
        };
        separator: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        separator: string | number;
        maxCount: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    routes: {
        type: import("vue").PropType<import("./types").BreadcrumbRoute[]>;
    };
    separator: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    separator: string | number;
    maxCount: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        index: NumberConstructor;
        separator: {
            type: import("vue").PropType<string | number>;
        };
        droplist: {
            type: import("vue").PropType<import("./types").BreadcrumbRoute["children"]>;
        };
        dropdownProps: {
            type: import("vue").PropType<import("..").MenuProps>;
        };
        href: StringConstructor;
    }>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => true;
        select: (_route: import("./types").BreadcrumbRoute, _event?: Event) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        index: NumberConstructor;
        separator: {
            type: import("vue").PropType<string | number>;
        };
        droplist: {
            type: import("vue").PropType<import("./types").BreadcrumbRoute["children"]>;
        };
        dropdownProps: {
            type: import("vue").PropType<import("..").MenuProps>;
        };
        href: StringConstructor;
    }>> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
        onSelect?: ((_route: import("./types").BreadcrumbRoute, _event?: Event | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export declare const _BreadcrumbItemComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    index: NumberConstructor;
    separator: {
        type: import("vue").PropType<string | number>;
    };
    droplist: {
        type: import("vue").PropType<import("./types").BreadcrumbRoute["children"]>;
    };
    dropdownProps: {
        type: import("vue").PropType<import("..").MenuProps>;
    };
    href: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => true;
    select: (_route: import("./types").BreadcrumbRoute, _event?: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    index: NumberConstructor;
    separator: {
        type: import("vue").PropType<string | number>;
    };
    droplist: {
        type: import("vue").PropType<import("./types").BreadcrumbRoute["children"]>;
    };
    dropdownProps: {
        type: import("vue").PropType<import("..").MenuProps>;
    };
    href: StringConstructor;
}>> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onSelect?: ((_route: import("./types").BreadcrumbRoute, _event?: Event | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default Breadcrumb;
