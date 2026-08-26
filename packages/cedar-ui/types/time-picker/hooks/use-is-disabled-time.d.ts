import type { Dayjs } from 'dayjs';
import { TimePickerProps } from '../types';
export default function useIsDisabledTime(props: {
    disabledHours: TimePickerProps['disabledHours'];
    disabledMinutes: TimePickerProps['disabledMinutes'];
    disabledSeconds: TimePickerProps['disabledSeconds'];
}): (value: Array<Dayjs | undefined> | Dayjs | undefined) => boolean;
