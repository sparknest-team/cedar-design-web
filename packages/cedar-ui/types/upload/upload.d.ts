import type { UploadFileItem } from './interfaces';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<UploadFileItem[]>;
    defaultValue: {
        type: import("vue").PropType<UploadFileItem[]>;
        default: () => never[];
    };
    accept: StringConstructor;
    capture: import("vue").PropType<import("./interfaces").UploadCapture>;
    multiple: BooleanConstructor;
    directory: BooleanConstructor;
    draggable: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    action: StringConstructor;
    method: {
        type: StringConstructor;
        default: string;
    };
    headers: import("vue").PropType<import("./interfaces").UploadHeaders>;
    data: import("vue").PropType<import("./interfaces").UploadData>;
    name: {
        type: import("vue").PropType<string | ((file: UploadFileItem) => string)>;
        default: string;
    };
    withCredentials: BooleanConstructor;
    customRequest: import("vue").PropType<import("./interfaces").UploadCustomRequest>;
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxFiles: NumberConstructor;
    maxFileSize: NumberConstructor;
    maxTotalSize: NumberConstructor;
    listType: {
        type: import("vue").PropType<import("./interfaces").UploadListType>;
        default: string;
    };
    imageFit: {
        type: import("vue").PropType<import("./interfaces").UploadImageFit>;
        default: string;
    };
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    showUploadButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRemoveButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRetryButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPreviewButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDownloadButton: BooleanConstructor;
    resolveType: {
        type: import("vue").PropType<import("./interfaces").UploadResolveType>;
        default: string;
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    createThumbnailUrl: import("vue").PropType<import("./interfaces").UploadCreateThumbnailUrl>;
    beforeAdd: import("vue").PropType<(files: File[]) => File[] | Promise<File[]>>;
    beforeRead: import("vue").PropType<import("./interfaces").UploadBeforeRead>;
    beforeUpload: import("vue").PropType<import("./interfaces").UploadBeforeUpload>;
    beforeRemove: import("vue").PropType<import("./interfaces").UploadBeforeRemove>;
    isSuccessResponse: import("vue").PropType<import("./interfaces").UploadIsSuccessResponse>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "error" | "change" | "progress" | "update:modelValue" | "remove" | "preview" | "rejected" | "read" | "exceed")[], "success" | "error" | "change" | "progress" | "update:modelValue" | "remove" | "preview" | "rejected" | "read" | "exceed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<UploadFileItem[]>;
    defaultValue: {
        type: import("vue").PropType<UploadFileItem[]>;
        default: () => never[];
    };
    accept: StringConstructor;
    capture: import("vue").PropType<import("./interfaces").UploadCapture>;
    multiple: BooleanConstructor;
    directory: BooleanConstructor;
    draggable: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    action: StringConstructor;
    method: {
        type: StringConstructor;
        default: string;
    };
    headers: import("vue").PropType<import("./interfaces").UploadHeaders>;
    data: import("vue").PropType<import("./interfaces").UploadData>;
    name: {
        type: import("vue").PropType<string | ((file: UploadFileItem) => string)>;
        default: string;
    };
    withCredentials: BooleanConstructor;
    customRequest: import("vue").PropType<import("./interfaces").UploadCustomRequest>;
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxFiles: NumberConstructor;
    maxFileSize: NumberConstructor;
    maxTotalSize: NumberConstructor;
    listType: {
        type: import("vue").PropType<import("./interfaces").UploadListType>;
        default: string;
    };
    imageFit: {
        type: import("vue").PropType<import("./interfaces").UploadImageFit>;
        default: string;
    };
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    showUploadButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRemoveButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRetryButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPreviewButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDownloadButton: BooleanConstructor;
    resolveType: {
        type: import("vue").PropType<import("./interfaces").UploadResolveType>;
        default: string;
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    createThumbnailUrl: import("vue").PropType<import("./interfaces").UploadCreateThumbnailUrl>;
    beforeAdd: import("vue").PropType<(files: File[]) => File[] | Promise<File[]>>;
    beforeRead: import("vue").PropType<import("./interfaces").UploadBeforeRead>;
    beforeUpload: import("vue").PropType<import("./interfaces").UploadBeforeUpload>;
    beforeRemove: import("vue").PropType<import("./interfaces").UploadBeforeRemove>;
    isSuccessResponse: import("vue").PropType<import("./interfaces").UploadIsSuccessResponse>;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
    onSuccess?: ((...args: any[]) => any) | undefined;
    onPreview?: ((...args: any[]) => any) | undefined;
    onRejected?: ((...args: any[]) => any) | undefined;
    onRead?: ((...args: any[]) => any) | undefined;
    onExceed?: ((...args: any[]) => any) | undefined;
}>, {
    name: string | ((file: UploadFileItem) => string);
    readonly: boolean;
    disabled: boolean;
    multiple: boolean;
    defaultValue: UploadFileItem[];
    draggable: boolean;
    preview: boolean;
    method: string;
    directory: boolean;
    withCredentials: boolean;
    autoUpload: boolean;
    listType: import("./interfaces").UploadListType;
    imageFit: import("./interfaces").UploadImageFit;
    showFileList: boolean;
    showUploadButton: boolean;
    showRemoveButton: boolean;
    showRetryButton: boolean;
    showCancelButton: boolean;
    showPreviewButton: boolean;
    showDownloadButton: boolean;
    resolveType: import("./interfaces").UploadResolveType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
