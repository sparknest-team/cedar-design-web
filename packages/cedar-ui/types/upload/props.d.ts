import type { PropType } from 'vue';
import type { UploadBeforeRead, UploadBeforeRemove, UploadBeforeUpload, UploadCapture, UploadCreateThumbnailUrl, UploadCustomRequest, UploadData, UploadFileItem, UploadHeaders, UploadImageFit, UploadIsSuccessResponse, UploadListType, UploadResolveType } from './interfaces';
export declare const uploadProps: {
    modelValue: PropType<UploadFileItem[]>;
    defaultValue: {
        type: PropType<UploadFileItem[]>;
        default: () => never[];
    };
    accept: StringConstructor;
    capture: PropType<UploadCapture>;
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
    headers: PropType<UploadHeaders>;
    data: PropType<UploadData>;
    name: {
        type: PropType<string | ((file: UploadFileItem) => string)>;
        default: string;
    };
    withCredentials: BooleanConstructor;
    customRequest: PropType<UploadCustomRequest>;
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxFiles: NumberConstructor;
    maxFileSize: NumberConstructor;
    maxTotalSize: NumberConstructor;
    listType: {
        type: PropType<UploadListType>;
        default: string;
    };
    imageFit: {
        type: PropType<UploadImageFit>;
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
        type: PropType<UploadResolveType>;
        default: string;
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    createThumbnailUrl: PropType<UploadCreateThumbnailUrl>;
    beforeAdd: PropType<(files: File[]) => File[] | Promise<File[]>>;
    beforeRead: PropType<UploadBeforeRead>;
    beforeUpload: PropType<UploadBeforeUpload>;
    beforeRemove: PropType<UploadBeforeRemove>;
    isSuccessResponse: PropType<UploadIsSuccessResponse>;
};
export type UploadProps = typeof uploadProps;
