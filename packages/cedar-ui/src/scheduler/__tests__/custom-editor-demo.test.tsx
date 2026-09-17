import { test, expect } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import Demo from '../__demos__/custom-editor.vue';
import Scheduler from '../index';
import Editor from '../components/SchedulerEditor.vue';
import Input from '../../input';
import DatePicker from '../../date';
import Textarea from '../../textarea';
import Form, { FormItem } from '../../form';
import Button from '../../button';
import Checkbox from '../../checkbox';
import Space from '../../space';
import Alert from '../../alert';

test('real custom editor demo preserves typed draft through submission', async () => {
  const wrapper = mount(Demo, { global: { components: Object.fromEntries([Scheduler, Input, DatePicker, Textarea, Form, FormItem, Button, Checkbox, Space, Alert].map((item) => [item.name!, item])) } });
  try {
    await wrapper.get('.c-scheduler__event-button').trigger('click');
    await flushPromises();
    const editor = wrapper.getComponent(Editor);
    await editor.getComponent(Input).get('input').setValue('Updated through custom form');
    expect(editor.getComponent(Input).props('modelValue')).toBe('Updated through custom form');
    await editor.getComponent(Form).trigger('submit');
    await flushPromises();
    expect(wrapper.getComponent(Scheduler).props('modelValue')?.[0].title).toBe('Updated through custom form');
  } finally { wrapper.unmount(); document.body.innerHTML = ''; }
});
