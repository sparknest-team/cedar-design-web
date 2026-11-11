import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TreeSelect from '..'
import SelectionField from '../../_components/selection-field/SelectionField.vue'
import FieldPresentation from '../../_components/field-presentation/FieldPresentation.vue'
for (const action of ['clear','remove'] as const) test(`TreeSelect pauses ${action} while loading without disabling search`,async()=>{
 const owner=mount(TreeSelect,{props:{editMode:'direct',multiple:true,defaultValue:['a'],data:[{value:'a',label:'Alpha'}],filterable:true,clearable:true}})
 try{const field=owner.findComponent(SelectionField),key=field.props('items')[0].key;await owner.setProps({loading:true});expect(field.find('[class*="field-decorator__clear-btn"]').exists()).toBe(false);expect(field.find('[class*="tag__close-btn"]').exists()).toBe(false);field.vm.$emit('clear',new MouseEvent('click'));field.vm.$emit('remove',key);await field.get('input').trigger('keydown',{key:'Backspace'});await flushPromises();expect(owner.emitted('clear')).toBeUndefined();expect(owner.emitted('update:modelValue')).toBeUndefined();expect((field.get('input').element as HTMLInputElement).disabled).toBe(false);expect((field.get('input').element as HTMLInputElement).readOnly).toBe(false);await field.get('input').setValue('search');expect((field.get('input').element as HTMLInputElement).value).toBe('search');await owner.setProps({loading:false});if(action==='clear')field.vm.$emit('clear',new MouseEvent('click'));else field.vm.$emit('remove',key);await flushPromises();expect(owner.emitted('update:modelValue')).toEqual([[[]]])}finally{owner.unmount()}
})
test('TreeSelect deferred footer cannot clear a loading draft',async()=>{
 const owner=mount(TreeSelect,{props:{editMode:'click',open:true,multiple:true,defaultValue:['a'],data:[{value:'a',label:'Alpha'}],loading:true,clearable:true}})
 try{await flushPromises();const host=owner.findComponent(FieldPresentation);expect(host.props('clearable')).toBe(false);host.vm.$emit('clear');await owner.setProps({loading:false});await (host.props('commit') as ()=>Promise<boolean>)();expect(owner.emitted('update:modelValue')).toBeUndefined()}finally{owner.unmount()}
})
test('TreeSelect also protects existing values during a data request',async()=>{
 let resolve!:(data:{value:string;label:string}[])=>void;const owner=mount(TreeSelect,{props:{editMode:'direct',multiple:true,defaultValue:['a'],data:[{value:'a',label:'Alpha'}],clearable:true}})
 try{const field=owner.findComponent(SelectionField),key=field.props('items')[0].key;await owner.setProps({data:()=>new Promise(done=>{resolve=done})});await flushPromises();expect(field.props('loading')).toBe(true);field.vm.$emit('clear',new MouseEvent('click'));field.vm.$emit('remove',key);await flushPromises();expect(owner.emitted('update:modelValue')).toBeUndefined();expect(owner.emitted('clear')).toBeUndefined();resolve([{value:'a',label:'Alpha'}]);await flushPromises();field.vm.$emit('clear',new MouseEvent('click'));await flushPromises();expect(owner.emitted('update:modelValue')).toEqual([[[]]])}finally{owner.unmount()}
})
