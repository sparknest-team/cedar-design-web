export declare const KEYBOARD_KEY: {
    ENTER: string;
    ESC: string;
    BACKSPACE: string;
    TAB: string;
    SPACE: string;
    ARROW_UP: string;
    ARROW_DOWN: string;
    ARROW_LEFT: string;
    ARROW_RIGHT: string;
};
export interface CodeKey {
    /** Keyboard key */
    key: string;
    /** Ctrl / ⌃ */
    ctrl?: boolean;
    /** Shift key */
    shift?: boolean;
    /** Alt / ⌥ */
    alt?: boolean;
    /** meta ⌘ / ⊞ */
    meta?: boolean;
}
export declare const getKeyDownHandler: (codeKeyMap: Map<CodeKey | string, (e: Event) => void>) => (event: KeyboardEvent) => void;
