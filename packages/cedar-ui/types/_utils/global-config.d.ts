import type { App, Component, Plugin } from 'vue';
import type { CedarOptions } from './types';
export declare const getComponentPrefix: (options?: CedarOptions) => string;
/**
 * Resolve the public registration name without duplicating Cedar's runtime
 * component prefix. Namespace-created components are already named `CButton`;
 * legacy components may still expose an unprefixed name such as `Button`.
 */
export declare const getComponentName: (options: CedarOptions | undefined, componentName: string | undefined) => string;
export declare const setGlobalConfig: (app: App, options?: CedarOptions) => void;
export type CedarComponentWithInstall<T> = T & Plugin;
export interface WithInstallOptions<InstallOptions = CedarOptions> {
    components?: Component[];
    resolveName?: (component: Component, options?: InstallOptions) => string | undefined;
    setup?: (app: App, options?: InstallOptions) => void;
}
/** Attach Vue's standard plugin installer while preserving Cedar prefixes. */
export declare function withInstall<T extends Component>(component: T, target?: undefined, config?: WithInstallOptions<CedarOptions>): CedarComponentWithInstall<T>;
export declare function withInstall<T>(component: Component, target: T, config?: WithInstallOptions<CedarOptions>): CedarComponentWithInstall<T>;
export declare const getPrefixCls: (componentName?: string) => string;
export declare const createNamespace: (componentName: string) => {
    name: string;
    readonly prefix: string;
    readonly cssVarPrefix: string;
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
};
export declare function formatElevation(elevation: number | boolean | string, defaultLevel?: number): string | null;
