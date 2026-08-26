import { type Ref } from 'vue';
export interface UseImagePreviewGroupOptions {
    images?: Ref<string[] | undefined>;
    open?: Ref<boolean | undefined>;
    defaultOpen?: boolean;
    current?: Ref<number | undefined>;
    defaultCurrent?: number;
    onOpenChange?: (open: boolean) => void;
    onCurrentChange?: (index: number) => void;
}
export declare function useImagePreviewGroupState(options: UseImagePreviewGroupOptions): {
    previewImages: import("vue").ComputedRef<string[]>;
    mergedOpen: import("vue").WritableComputedRef<boolean, boolean>;
    mergedCurrent: import("vue").WritableComputedRef<number, number>;
    registerImageUrl: (id: number, url: string, canPreview: boolean) => () => void;
    previewByImageId: (imageId: number) => void;
    open: (index?: number) => void;
    close: () => void;
    isDataMode: import("vue").ComputedRef<boolean>;
};
