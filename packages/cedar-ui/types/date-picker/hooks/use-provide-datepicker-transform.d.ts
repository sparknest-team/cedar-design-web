import { BasePickerProps } from '../types';
interface DatePickerTransform {
    locale?: BasePickerProps['locale'];
}
export default function useDatePickerTransform(props: DatePickerTransform): (key: string, ...args: any[]) => string;
export {};
