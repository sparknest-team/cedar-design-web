import { Ref } from 'vue';
import type { Dayjs } from 'dayjs';
import { TimePickerProps } from '../../time-picker/types';
interface TimePickerValueProps {
    timePickerProps: Partial<TimePickerProps> | undefined;
    selectedValue: Dayjs | undefined;
}
export default function useTimePickerValue(props: TimePickerValueProps): [Ref<Dayjs>, (val: Dayjs | undefined) => void, () => void];
export {};
