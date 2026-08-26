import _Upload from './upload';
declare const Upload: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
        defaultValue: {
            type: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
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
            type: import("vue").PropType<string | ((file: import("./interfaces").UploadFileItem) => string)>;
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "error" | "change" | "progress" | "update:modelValue" | "remove" | "preview" | "rejected" | "read" | "exceed")[], import("vue").PublicProps, {
        name: string | ((file: import("./interfaces").UploadFileItem) => string);
        readonly: boolean;
        disabled: boolean;
        multiple: boolean;
        defaultValue: import("./interfaces").UploadFileItem[];
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
        defaultValue: {
            type: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
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
            type: import("vue").PropType<string | ((file: import("./interfaces").UploadFileItem) => string)>;
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        name: string | ((file: import("./interfaces").UploadFileItem) => string);
        readonly: boolean;
        disabled: boolean;
        multiple: boolean;
        defaultValue: import("./interfaces").UploadFileItem[];
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
    defaultValue: {
        type: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
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
        type: import("vue").PropType<string | ((file: import("./interfaces").UploadFileItem) => string)>;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "error" | "change" | "progress" | "update:modelValue" | "remove" | "preview" | "rejected" | "read" | "exceed")[], "success" | "error" | "change" | "progress" | "update:modelValue" | "remove" | "preview" | "rejected" | "read" | "exceed", {
    name: string | ((file: import("./interfaces").UploadFileItem) => string);
    readonly: boolean;
    disabled: boolean;
    multiple: boolean;
    defaultValue: import("./interfaces").UploadFileItem[];
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type UploadInstance = InstanceType<typeof _Upload>;
export type { UploadBeforeRead, UploadBeforeRemove, UploadBeforeUpload, UploadCreateThumbnailUrl, UploadCustomRequest, UploadFileItem, UploadHeaders, UploadImageFit, UploadListType, UploadPublicMethods, UploadProgressEvent, UploadRejectedFile, UploadRequest, UploadStatus, } from './interfaces';
export { uploadProps } from './props';
export { useUploader } from './composables/use-uploader';
export declare const _UploadComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
        defaultValue: {
            type: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
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
            type: import("vue").PropType<string | ((file: import("./interfaces").UploadFileItem) => string)>;
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "error" | "change" | "progress" | "update:modelValue" | "remove" | "preview" | "rejected" | "read" | "exceed")[], import("vue").PublicProps, {
        name: string | ((file: import("./interfaces").UploadFileItem) => string);
        readonly: boolean;
        disabled: boolean;
        multiple: boolean;
        defaultValue: import("./interfaces").UploadFileItem[];
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
        defaultValue: {
            type: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
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
            type: import("vue").PropType<string | ((file: import("./interfaces").UploadFileItem) => string)>;
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        name: string | ((file: import("./interfaces").UploadFileItem) => string);
        readonly: boolean;
        disabled: boolean;
        multiple: boolean;
        defaultValue: import("./interfaces").UploadFileItem[];
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
    defaultValue: {
        type: import("vue").PropType<import("./interfaces").UploadFileItem[]>;
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
        type: import("vue").PropType<string | ((file: import("./interfaces").UploadFileItem) => string)>;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "error" | "change" | "progress" | "update:modelValue" | "remove" | "preview" | "rejected" | "read" | "exceed")[], "success" | "error" | "change" | "progress" | "update:modelValue" | "remove" | "preview" | "rejected" | "read" | "exceed", {
    name: string | ((file: import("./interfaces").UploadFileItem) => string);
    readonly: boolean;
    disabled: boolean;
    multiple: boolean;
    defaultValue: import("./interfaces").UploadFileItem[];
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export { Upload };
export default Upload;
