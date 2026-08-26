import type { Dayjs } from 'dayjs';
import { Cell, IsSameTime, Mode } from '../types';
interface CellClassNameProps {
    prefixCls: string;
    value?: Dayjs;
    rangeValues?: Array<Dayjs | undefined>;
    isSameTime: IsSameTime;
    mode?: Mode;
}
export default function useCellClassName(props: CellClassNameProps): {
    getCellClassName: (cellData: Cell, disabled: boolean) => (string | {
        [x: string]: boolean | undefined;
    } | undefined)[];
};
export {};
