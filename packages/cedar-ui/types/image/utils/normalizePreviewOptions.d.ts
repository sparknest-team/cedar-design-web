import type { ImagePreviewOptions, UserImagePreviewOptions } from '../types.unified';
/** Normalize preview options to the canonical public field names. */
export declare function normalizePreviewOptions(options?: UserImagePreviewOptions, defaultOptions?: ImagePreviewOptions): ImagePreviewOptions;
