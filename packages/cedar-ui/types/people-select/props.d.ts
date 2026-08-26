import type { ExtractPropTypes, PropType } from 'vue';
export declare const peopleSelectProps: {
    /**
     *
     */
    fetch: PropType<{
        get: any;
        post: any;
    }>;
    name: {
        type: StringConstructor;
    };
    defaultText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    isLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
    };
    urlType: {
        type: StringConstructor;
        default: string;
    };
};
export type PeopleSelectProps = ExtractPropTypes<typeof peopleSelectProps>;
