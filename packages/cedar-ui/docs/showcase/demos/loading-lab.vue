<script setup lang="ts">
import { computed, markRaw, onBeforeUnmount, reactive, ref } from 'vue'
import CButton from '../../../src/button'
import '../../../src/button/style'
import CSplitButton from '../../../src/split-button'
import '../../../src/split-button/style'
import CLink from '../../../src/link'
import '../../../src/link/style'
import CSwitch from '../../../src/switch'
import '../../../src/switch/style'
import CTag from '../../../src/tag'
import '../../../src/tag/style'
import CInput from '../../../src/input'
import '../../../src/input/style'
import CTextarea from '../../../src/textarea'
import '../../../src/textarea/style'
import CInputNumber from '../../../src/input-number'
import '../../../src/input-number/style'
import CSelect from '../../../src/select'
import '../../../src/select/style'
import CCascader from '../../../src/cascader'
import '../../../src/cascader/style'
import CAutoComplete from '../../../src/auto-complete'
import '../../../src/auto-complete/style'
import CDate from '../../../src/date'
import '../../../src/date/picker/style'
import CDateRange from '../../../src/date-range'
import CTime from '../../../src/time'
import '../../../src/time/picker/style'
import CTimeRange from '../../../src/time-range'
import CPeopleSelect from '../../../src/people-select'
import '../../../src/people-select/style'
import CSearch from '../../../src/search'
import '../../../src/search/style'
import CFieldDecorator from '../../../src/field-decorator'
import '../../../src/field-decorator/style'
import CTable from '../../../src/table'
import '../../../src/table/style'
import CList from '../../../src/list'
import '../../../src/list/style'
import CSkeleton from '../../../src/skeleton'
import '../../../src/skeleton/style'
import CLoading from '../../../src/loading'
import '../../../src/loading/style'
import CTreeSelect from '../../../src/tree-select'
import '../../../src/tree-select/style'
import CInputTag from '../../../src/input-tag'
import '../../../src/input-tag/style'
import CMention from '../../../src/mention'
import '../../../src/mention/style'
import CForm from '../../../src/form'
import '../../../src/form/style'
import { FormItem as CFormItem } from '../../../src/form'
import CDialog from '../../../src/dialog'
import '../../../src/dialog/style'
const cities = [{ label: '上海', value: 'shanghai' }, { label: '杭州', value: 'hangzhou' }]
const venues = [{ label: '上海', value: 'shanghai', children: [{ label: '设计中心', value: 'studio' }] }]
const fieldCards = [{ id: 'input', component: markRaw(CInput), title: '姓名', description: '查询报名信息', props: { defaultValue: '林小满', placeholder: '姓名' }, text: '', lockable: true },
{ id: 'textarea', component: markRaw(CTextarea), title: '备注', description: '保存报名备注', props: { defaultValue: '希望参加设计工作坊', placeholder: '备注' }, text: '', lockable: true },
{ id: 'input-number', component: markRaw(CInputNumber), title: '同行人数', description: '更新人数', props: { defaultValue: 2, min: 1 }, text: '', lockable: true },
{ id: 'select', component: markRaw(CSelect), title: '活动城市', description: '读取候选城市', props: { defaultValue: 'shanghai', options: cities, editMode: 'direct' }, text: '', lockable: true },
{ id: 'cascader', component: markRaw(CCascader), title: '活动场地', description: '读取级联场地', props: { options: venues, editMode: 'direct' }, text: '', lockable: true },
{ id: 'auto-complete', component: markRaw(CAutoComplete), title: '活动搜索', description: '查询匹配活动', props: { options: ['设计工作坊', '开发者交流'], placeholder: '搜索活动' }, text: '', lockable: true },
{ id: 'date', component: markRaw(CDate), title: '报名日期', description: '读取可选日期', props: { editMode: 'direct' }, text: '', lockable: true },
{ id: 'date-range', component: markRaw(CDateRange), title: '活动日期范围', description: '查询可用档期', props: { editMode: 'direct' }, text: '', lockable: true },
{ id: 'time', component: markRaw(CTime), title: '到场时间', description: '读取可用时间', props: { editMode: 'direct' }, text: '', lockable: true },
{ id: 'time-range', component: markRaw(CTimeRange), title: '参与时段', description: '查询可用时段', props: { editMode: 'direct' }, text: '', lockable: true },
{ id: 'people-select', component: markRaw(CPeopleSelect), title: '同行伙伴', description: '读取人员信息', props: { options: [{ label: '林小满', value: 'lin' }], editMode: 'direct' }, text: '', lockable: true },
{ id: 'search', component: markRaw(CSearch), title: '搜索报名', description: '查询报名记录', props: { placeholder: '输入姓名' }, text: '', lockable: true },
{ id: 'field-decorator', component: markRaw(CFieldDecorator), title: '通用字段容器', description: '观察容器的默认与底线反馈', props: {}, text: '容器内容', lockable: true },
{ id: 'tree-select', component: markRaw(CTreeSelect), title: '组织部门', description: '读取组织树', props: { options: [{ label: '设计部', value: 'design', children: [{ label: '体验组', value: 'ux' }] }], editMode: 'direct' }, text: '', lockable: true },
{ id: 'input-tag', component: markRaw(CInputTag), title: '活动标签', description: '保存标签', props: { defaultValue: ['设计', '交流'] }, text: '', lockable: true },
{ id: 'mention', component: markRaw(CMention), title: '邀请同伴', description: '查询提及候选', props: { options: [{ label: '林小满', value: 'lin' }] }, text: '', lockable: true }]
const actionCards = [{ id: 'button', component: markRaw(CButton), title: '提交报名', description: '业务控制按钮等待', props: {}, text: '提交报名', lockable: true },
{ id: 'split-button', component: markRaw(CSplitButton), title: '报名操作', description: '主按钮等待', props: {}, text: '保存报名', lockable: true },
{ id: 'link', component: markRaw(CLink), title: '查看报名详情', description: '链接等待', props: {}, text: '查看详情', lockable: true },
{ id: 'switch', component: markRaw(CSwitch), title: '接收短信', description: '开关保存', props: { defaultValue: true }, text: '', lockable: true },
{ id: 'tag', component: markRaw(CTag), title: '参与者身份', description: '标签状态更新', props: {}, text: '体验官', lockable: true }]
const groups = [{ title: '01 · 填写与数据选择', cards: fieldCards },
{ title: '02 · 提交与状态操作', cards: actionCards }]
const held = ref(false)
const lock = ref(false)
const line = ref(false)
const pending = reactive<Record<string, boolean>>({})
const completed = reactive<Record<string, boolean>>({})
const timers = new Map<string, ReturnType<typeof setTimeout>>()
const ids = [...fieldCards, ...actionCards].map(card => card.id).concat(['table', 'list', 'skeleton', 'loading'])

const busyCount = computed(() => ids.filter(id => isLoading(id)).length)
const status = ref('点击卡片上的「体验等待」，对照加载与恢复。')
function isLoading(id: string) { return held.value || Boolean(pending[id]) }
function run(id: string) {
  if (held.value || pending[id]) return
  pending[id] = true
  completed[id] = false
  status.value = `${id} 正在等待；2 秒后恢复。`
  timers.set(id, setTimeout(() => {
    pending[id] = false
    completed[id] = true
    timers.delete(id)
    status.value = `${id} 已完成，输入内容保留。`
  }, 2000))
}
function runAll() { held.value = false; ids.forEach(run) }
function reset() {
  held.value = false
  timers.forEach(timer => clearTimeout(timer))
  timers.clear()
  ids.forEach(id => { pending[id] = false; completed[id] = false })
  status.value = '已恢复全部加载状态，填写内容保留。'
}
const open = ref(false)
const allowClose = ref(true)
const guardStatus = ref('打开报名确认，关闭时等待 2 秒。')
const guardWaits = new Map<ReturnType<typeof setTimeout>, (allowed: boolean) => void>()
function beforeClose() {
  guardStatus.value = '正在检查报名状态…'
  return new Promise<boolean>(resolve => {
    const timer = setTimeout(() => {
      guardWaits.delete(timer)
      guardStatus.value = allowClose.value ? '检查通过，允许关闭。' : '本次未通过，弹层保留，可再次尝试。'
      resolve(allowClose.value)
    }, 2000)
    guardWaits.set(timer, resolve)
  })
}
onBeforeUnmount(() => { reset(); guardWaits.forEach((resolve, timer) => { clearTimeout(timer); resolve(false) }); guardWaits.clear() })
const columns = [{ title: '参与人', dataIndex: 'name' }, { title: '活动', dataIndex: 'event' }]
const rows = [{ key: '1', name: '林小满', event: '设计工作坊' }, { key: '2', name: '周青', event: '开发者交流' }]
</script>
<template>
  <div class="loading-lab">
    <header class="loading-lab__hero">
      <p class="loading-lab__eyebrow">LOADING / 活动报名工作台</p>
      <h2>让每一次等待都看得见</h2>
      <p>逐项填写报名信息，观察各组件如何表达等待；也可以保持全部加载，比较位置、尺寸与布局。</p>
      <CForm layout="vertical">
        <div class="loading-lab__controls">
          <CFormItem label="全部保持加载"><CSwitch v-model="held" aria-label="全部保持加载" /></CFormItem>
          <CFormItem label="等待时禁止编辑"><CSwitch v-model="lock" aria-label="等待时禁止编辑" /></CFormItem>
          <CFormItem label="文本字段使用底线"><CSwitch v-model="line" aria-label="文本字段使用底线" /></CFormItem>
        </div>
      </CForm>
      <div class="loading-lab__buttons"><CButton @click="runAll">全部等待 2 秒</CButton><CButton variant="outline" @click="reset">重置加载</CButton><span>{{ busyCount }} / {{ ids.length }} 项正在等待</span></div>
      <p role="status" aria-live="polite">{{ status }}</p>
      <small>所有等待均在本地模拟。loading 与 disabled 分别控制；切换底线只影响支持 loading-mode 的字段。</small>
    </header>
    <section v-for="group in groups" :key="group.title" class="loading-lab__section">
      <h3>{{ group.title }}</h3>
      <div class="loading-lab__grid">
        <article v-for="card in group.cards" :key="card.id" class="loading-lab__card" :data-loading-card="card.id">
          <div class="loading-lab__heading"><strong>{{ card.title }}</strong><code>{{ card.id }}</code></div>
          <p>{{ card.description }}</p>
          <div class="loading-lab__preview">
            <component v-if="card.text" :is="card.component" v-bind="card.id === 'split-button' ? { ...card.props, buttonProps: { loading: isLoading(card.id), disabled: lock && isLoading(card.id) } } : card.props" :loading="isLoading(card.id)" :disabled="lock && isLoading(card.id)" @change="run(card.id)">{{ card.text }}</component>
            <component v-else :is="card.component" v-bind="card.id === 'split-button' ? { ...card.props, buttonProps: { loading: isLoading(card.id), disabled: lock && isLoading(card.id) } } : card.props" :loading="isLoading(card.id)" :loading-mode="line ? 'line' : 'default'" :disabled="lock && isLoading(card.id)" @change="run(card.id)" />
          </div>
          <div class="loading-lab__footer"><CButton size="sm" variant="text" :disabled="isLoading(card.id)" @click="run(card.id)">体验等待</CButton><span>{{ isLoading(card.id) ? '等待中…' : completed[card.id] ? '已完成' : '就绪' }}</span></div>
        </article>
      </div>
    </section>
    <section class="loading-lab__section">
      <h3>03 · 内容区域</h3>
      <div class="loading-lab__grid">
        <article v-for="kind in ['table', 'list', 'skeleton', 'loading']" :key="kind" class="loading-lab__card" :data-loading-card="kind">
          <div class="loading-lab__heading"><strong>{{ {upload:'上传报名材料',table:'报名记录',list:'报名清单',skeleton:'初次读取占位',loading:'通用内容等待'}[kind] }}</strong><code>{{ kind }}</code></div>
          <div class="loading-lab__preview">
            
            <CTable v-if="kind === 'table'" :loading="isLoading(kind)" :columns="columns" :data="rows" :pagination="false" />
            <CList v-if="kind === 'list'" :loading="isLoading(kind)"><p>林小满 · 设计工作坊</p><p>周青 · 开发者交流</p></CList>
            <CSkeleton v-if="kind === 'skeleton'" :loading="isLoading(kind)"><p>报名信息已加载，可以继续填写。</p></CSkeleton>
            <CLoading v-if="kind === 'loading'" :loading="isLoading(kind)" tip="正在读取报名信息"><p class="loading-lab__placeholder">活动报名内容</p></CLoading>
          </div>
          <div class="loading-lab__footer"><CButton size="sm" variant="text" :disabled="isLoading(kind)" @click="run(kind)">体验等待</CButton><span>{{ isLoading(kind) ? '等待中…' : '就绪' }}</span></div>
        </article>
        
        
      </div>
    </section>
    <section class="loading-lab__section loading-lab__guard" data-loading-card="dialog">
      <h3>04 · 确认报名与关闭等待</h3>
      <p>关闭弹层时由 before-close 等待 2 秒。关闭检查不通过时保留弹层；可以切换后再次尝试。</p>
      <CForm layout="vertical"><CFormItem label="允许关闭"><CSwitch v-model="allowClose" aria-label="允许关闭" /></CFormItem></CForm>
      <CButton @click="open = true">打开报名确认</CButton>
      <CDialog v-model:open="open" title="确认报名" :before-close="beforeClose"><p>请确认活动报名信息。点击确认、取消或关闭，观察等待反馈。</p><CForm layout="vertical"><CFormItem label="允许关闭"><CSwitch v-model="allowClose" aria-label="弹层内允许关闭" /></CFormItem></CForm><p role="status">{{ guardStatus }}</p></CDialog>
      <p aria-live="polite">{{ guardStatus }}</p>
    </section>
  </div>
</template>
<style scoped>
.loading-lab { color: var(--c-sys-color-content-primary, inherit); min-width: 0; }
.loading-lab__hero, .loading-lab__guard { padding: 24px; border: 1px solid var(--c-sys-color-outline-default, #dce4e7); border-radius: 18px; background: var(--c-sys-color-surface-container, #f5f8f9); }
.loading-lab__eyebrow { letter-spacing: .12em; font-size: 12px; opacity: .7; }
.loading-lab__hero h2 { margin: 8px 0 12px; font-size: 28px; }
.loading-lab__controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
.loading-lab__buttons, .loading-lab__footer { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; }
.loading-lab__section { margin-block: 28px; }
.loading-lab__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.loading-lab__card { min-width: 0; padding: 20px; border: 1px solid var(--c-sys-color-outline-default, #dce4e7); border-radius: 14px; }
.loading-lab__card--wide { grid-column: 1 / -1; }
.loading-lab__heading { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; }
.loading-lab__heading code { font-size: 12px; opacity: .65; }
.loading-lab__card p { font-size: 13px; opacity: .8; }
.loading-lab__preview { min-height: 72px; padding-block: 18px; min-width: 0; overflow-wrap: anywhere; }
.loading-lab__footer { justify-content: space-between; font-size: 12px; }
.loading-lab__placeholder, .loading-lab__popup { padding: 24px; }
.loading-lab__popup { min-width: 0; max-width: 90vw; }
@media (max-width: 600px) { .loading-lab__grid { grid-template-columns: minmax(0, 1fr); } .loading-lab__hero, .loading-lab__card, .loading-lab__guard { padding: 16px; } .loading-lab__hero h2 { font-size: 24px; } }
</style>
