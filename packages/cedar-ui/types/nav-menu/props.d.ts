import { PropType } from 'vue';
export declare const navMenuProps: {
    /** 菜单风格 */
    theme: {
        type: PropType<"light" | "dark">;
    };
    mode: {
        type: PropType<"vertical" | "horizontal" | "pop" | "popButton">;
        default: string;
    };
};
