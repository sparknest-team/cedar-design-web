export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export interface ImagePreviewProps {
    /** 预览是否打开 */
    open?: boolean;
    defaultOpen?: boolean;
    src?: string;
    images?: string[];
    current?: number;
    closable?: boolean;
    maskClosable?: boolean;
    loop?: boolean;
    zoom?: number | string;
    wheelZoom?: boolean;
    keyboard?: boolean;
    actionsLayout?: string[];
    popupContainer?: string | HTMLElement;
    lockScroll?: boolean;
    escToClose?: boolean;
    imagePreventDefault?: boolean;
    indicator?: boolean;
    renderToBody?: boolean;
    defaultScale?: number;
    zoomRate?: number;
    inGroup?: boolean;
    groupArrowProps?: Record<string, any>;
    onChange?: (index: number) => void;
    onClose?: () => void;
    onLongPress?: (index: number) => void;
    onOpenChange?: (open: boolean) => void;
}
export interface ImageProps {
    src?: string;
    previewSrc?: string;
    width?: string | number;
    height?: string | number;
    fit?: ImageFit;
    position?: string;
    radius?: string | number;
    alt?: string;
    title?: string;
    description?: string;
    lazy?: boolean;
    loading?: string;
    error?: string;
    showLoader?: boolean;
    ripple?: boolean;
    block?: boolean;
    preview?: boolean;
    previewOpen?: boolean;
    defaultPreviewOpen?: boolean;
    previewProps?: Partial<ImagePreviewProps>;
    hideFooter?: boolean | 'never';
    footerPosition?: 'inner' | 'outer';
    footerClass?: string | string[] | Record<string, any>;
    renderToBody?: boolean;
}
export interface ImagePreviewGroupProps extends Omit<ImagePreviewProps, 'src' | 'onClose'> {
    images?: string[];
    defaultCurrent?: number;
    previewProps?: Partial<ImagePreviewProps>;
}
export interface ImagePreviewOptions extends ImagePreviewProps {
    onOpen?: () => void;
    onOpened?: () => void;
    onClosed?: () => void;
    onKeyEscape?: () => void;
}
export type UserImagePreviewOptions = ImagePreviewOptions | string | string[];
export interface ImageUrlRecord {
    url: string;
    canPreview: boolean;
}
export interface PreviewGroupContext {
    registerImageUrl: (id: number, url: string, canPreview: boolean) => () => void;
    preview: (imageId: number) => void;
}
