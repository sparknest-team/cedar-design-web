import { computed } from 'vue'
import { useI18n } from '../locale'

export function usePeopleTexts() {
 const {t}=useI18n()
 return {
 call: computed(()=>t('peopleSelect.call')),
 chat: computed(()=>t('peopleSelect.chat')),
 }
}
