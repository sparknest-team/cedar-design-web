import type { UploadRejectedFile } from '../interfaces';
export declare function useFilePicker(options: {
    accept?: () => string | undefined;
    directory?: () => boolean;
    disabled?: () => boolean;
    onFiles: (files: File[], rejected: UploadRejectedFile[], event?: Event) => void;
}): {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    dragOver: import("vue").Ref<boolean, boolean>;
    chooseFile: () => void;
    handleInputChange: (event: Event) => void;
    handleDragOver: (event: DragEvent) => void;
    handleDragLeave: () => void;
    handleDrop: (event: DragEvent) => void;
};
