import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TreeSelect from '..'
test('TreeSelect button references the actual tree alongside its combobox',async()=>{
 const owner=mount(TreeSelect,{attachTo:document.body,props:{editMode:'direct',data:[{value:'a',label:'Alpha'}],openTriggerTarget:'icon'}})
 try{const button=owner.get('[data-field-open-trigger]');expect(button.attributes('aria-haspopup')).toBe('tree');await button.trigger('click');await flushPromises();const input=owner.get('input[role="combobox"]');expect(button.attributes('aria-expanded')).toBe('true');expect(button.attributes('aria-controls')).toBe(input.attributes('aria-controls'));expect(document.getElementById(button.attributes('aria-controls')!)?.getAttribute('role')).toBe('tree')}finally{owner.unmount()}
})
