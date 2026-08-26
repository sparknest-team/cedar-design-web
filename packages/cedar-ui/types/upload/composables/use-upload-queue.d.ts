import type { UploadFileItem, UploadStatus } from '../interfaces';
export declare function useUploadQueue(options: {
    modelValue?: () => UploadFileItem[] | undefined;
    defaultValue?: () => UploadFileItem[] | undefined;
    onChange?: (files: UploadFileItem[], file: UploadFileItem) => void;
    onUpdateModelValue?: (files: UploadFileItem[]) => void;
}): {
    fileList: import("vue").ComputedRef<UploadFileItem[]>;
    append: (files: UploadFileItem[]) => void;
    patch: (uid: string, patcher: Partial<UploadFileItem> | ((file: UploadFileItem) => Partial<UploadFileItem>)) => void;
    remove: (file: UploadFileItem) => void;
    reset: () => void;
    clearByStatus: (status: UploadStatus) => void;
    getFiles: (status?: UploadStatus) => UploadFileItem[];
};
