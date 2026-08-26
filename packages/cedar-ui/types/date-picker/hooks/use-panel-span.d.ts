import { Mode } from '../types';
interface PanelSpanProps {
    mode: Mode;
}
export default function usePanelSpan(props: PanelSpanProps): {
    span: import("vue").ComputedRef<number>;
    superSpan: import("vue").ComputedRef<number>;
};
export {};
