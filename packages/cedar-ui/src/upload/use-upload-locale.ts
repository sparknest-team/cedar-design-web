import { computed } from 'vue'
import { useI18n } from '../locale'
export function useUploadLocale() {
  const { t } = useI18n()
  return computed(() => ({ upload: t('upload.buttonText'), dropFiles: t('upload.drag'), preview: t('upload.preview'),
    download: t('upload.download'), cancel: t('upload.cancel'), retry: t('upload.retry'), remove: t('upload.delete'), close: t('upload.close') }))
}

