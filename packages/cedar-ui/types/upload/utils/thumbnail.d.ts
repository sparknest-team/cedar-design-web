import type { UploadCreateThumbnailUrl, UploadFileItem, UploadResolveType } from '../interfaces';
export declare function resolveThumbnailUrl(options: {
    file: File;
    fileItem: UploadFileItem;
    resolveType: UploadResolveType;
    createThumbnailUrl?: UploadCreateThumbnailUrl;
}): Promise<string | undefined>;
export declare function revokeThumbnailUrl(file: UploadFileItem): void;
