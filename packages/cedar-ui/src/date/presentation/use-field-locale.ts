import { useI18n } from '../../locale'

export function useDateFieldLocale() {
  const { t } = useI18n()
  return {
    placeholder: (range: boolean, type = 'date') => t('datePicker.' + (range ? 'rangePlaceholder.' : 'placeholder.') + type),
    nextDay: () => t('datePicker.nextDay'),
  }
}
