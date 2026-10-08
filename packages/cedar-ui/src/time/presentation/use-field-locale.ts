import { useI18n } from '../../locale'

export function useTimeFieldLocale() {
  const { t } = useI18n()
  return {
    placeholder: (range: boolean) => t('datePicker.' + (range ? 'rangePlaceholder.' : 'placeholder.') + 'time'),
    nextDay: () => t('datePicker.nextDay'),
  }
}
