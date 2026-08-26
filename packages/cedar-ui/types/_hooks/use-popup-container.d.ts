import { ComputedRef } from 'vue';
interface PopupContainerProps {
    popupContainer: string | HTMLElement | undefined;
}
export default function usePopupContainer(defaultPopupContainer: HTMLElement | undefined, props: PopupContainerProps): ComputedRef<HTMLElement | undefined>;
export {};
