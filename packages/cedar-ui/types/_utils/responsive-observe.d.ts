export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type BreakpointMap = Partial<Record<Breakpoint, string>>;
export type ScreenMap = Partial<Record<Breakpoint, boolean>>;
export declare const responsiveArray: Breakpoint[];
export declare const responsiveMap: BreakpointMap;
type SubscribeFunc = (screens: ScreenMap, breakpointChecked: Breakpoint) => void;
type MediaQueryResult = {
    matches: boolean;
};
type MediaQueryListener = (matches: MediaQueryResult) => void;
declare const responsiveObserve: {
    matchHandlers: {
        [key: string]: {
            mql: MediaQueryList;
            listener: MediaQueryListener;
        };
    };
    dispatch(pointMap: ScreenMap, breakpointChecked: Breakpoint): boolean;
    subscribe(func: SubscribeFunc): string;
    unsubscribe(token: string): void;
    unregister(): void;
    register(): void;
};
export default responsiveObserve;
