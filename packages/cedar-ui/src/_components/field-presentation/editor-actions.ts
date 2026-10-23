import type { InjectionKey, ShallowRef, VNodeChild } from 'vue'

/** The editor host owns one footer; a field can contribute its auxiliary actions. */
export const editorAuxiliaryActions: InjectionKey<ShallowRef<(() => VNodeChild) | undefined>> = Symbol('editor-auxiliary-actions')
