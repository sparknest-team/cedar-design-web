import type { ExtractPropTypes, PropType } from 'vue';
export declare const resultStatuses: readonly ["info", "success", "warning", "danger", "403", "404", "500"];
export type ResultStatus = (typeof resultStatuses)[number];
export declare const resultProps: {
    /** 结果页显示的状态。 */
    status: {
        type: PropType<ResultStatus>;
        default: string;
        validator: (value: unknown) => value is ResultStatus;
    };
    /** 标题内容。 */
    title: StringConstructor;
    /** 子标题内容。 */
    subtitle: StringConstructor;
};
export type ResultProps = ExtractPropTypes<typeof resultProps>;
