export declare function usePlatform(): {
    isTouchPrimary: import("vue").Ref<boolean, boolean>;
    isFinePointer: import("vue").Ref<boolean, boolean>;
    defaults: import("vue").ComputedRef<{
        closable: boolean;
        maskClosable: boolean;
        wheelZoom: boolean;
        keyboard: boolean;
        closeOnImageTap: boolean;
    }>;
};
