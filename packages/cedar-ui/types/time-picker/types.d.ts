import type { Dayjs } from 'dayjs';
export type TimeValue = Date | string | number;
export interface BasePanelProps {
    disableConfirm: boolean;
    use12Hours: boolean;
    step?: {
        hour?: number;
        minute?: number;
        second?: number;
    };
    disabledHours?: () => number[];
    disabledMinutes?: (selectedHour?: number) => number[];
    disabledSeconds?: (selectedHour?: number, selectedMinute?: number) => number[];
    hideDisabledOptions: boolean;
}
export interface PanelProps extends Omit<BasePanelProps, 'disableConfirm'> {
    value?: Dayjs;
    defaultValue?: Dayjs;
    format: string;
    visible: boolean;
    hideFooter: boolean;
    isRange: boolean;
    disabled: boolean;
}
export interface RangePanelProps extends Omit<PanelProps, 'value'> {
    value?: Array<Dayjs | undefined>;
}
export interface TimePickerProps extends BasePanelProps {
    type: 'time' | 'time-range';
    modelValue?: TimeValue | TimeValue[];
    defaultValue?: TimeValue | TimeValue[];
    placeholder?: string | string[];
    disabled: boolean;
    clearable: boolean;
    readonly: boolean;
    error: boolean;
    format?: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    placement: 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';
    open: boolean | undefined;
    defaultOpen: boolean;
    triggerProps?: Record<string, unknown>;
    unmountOnClose: boolean;
}
export interface TimeListItem {
    value: number | string;
    label: string;
    disabled?: boolean;
    selected?: boolean;
}
export type TimeList = TimeListItem[];
