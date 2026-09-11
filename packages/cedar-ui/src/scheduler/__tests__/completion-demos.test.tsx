import {test,expect} from 'vitest';
import {mount,flushPromises} from '@vue/test-utils';
import Scheduler from '../index';
import Button from '../../button';import Space from '../../space';import Alert from '../../alert';import Tag from '../../tag';import Textarea from '../../textarea';
import Interaction from '../__demos__/interaction-completion.vue';
import Assignment from '../__demos__/assignment-load.vue';
import Independent from '../__demos__/independent-assignments.vue';
import Planning from '../__demos__/advanced-planning.vue';
import Zoned from '../__demos__/zoned-recurrence.vue';
import Integration from '../__demos__/calendar-integration.vue';
const global={components:Object.fromEntries([Scheduler,Button,Space,Alert,Tag,Textarea].map(c=>[c.name!,c]))};
test.each([Interaction,Assignment,Independent,Planning,Zoned,Integration])('completion demo renders the shared Scheduler without runtime errors',async Demo=>{
 const w=mount(Demo,{global});try{await flushPromises();expect(w.findComponent(Scheduler).exists()).toBe(true);expect(w.text().length).toBeGreaterThan(20);}finally{w.unmount();}
});
test('calendar demo exports/imports text and receives a simulated remote revision',async()=>{
 const w=mount(Integration,{global});
 const click=async(text:string)=>{await w.findAll('button').find(b=>b.text()===text)!.trigger('click');await flushPromises();};
 try{await click('导出 ICS 文本');expect(w.getComponent(Textarea).props('modelValue')).toContain('BEGIN:VCALENDAR');await click('导入 ICS 文本');expect(w.text()).toContain('版本 1');await click('模拟远端更新');expect(w.text()).toContain('版本 2');}finally{w.unmount();}
});
