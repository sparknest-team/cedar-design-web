import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  useAttrs,
  useSlots,
  watch,
} from 'vue'
import { selectionEditorSurface } from '../_components/selected-options/context'
import { useFormItem } from '../_hooks/use-form-item'
import Select, { Option } from '../select'
import { peopleSelectProps } from './props'
import Empty from '../empty'
import { useFetch } from '../_utils/use-fetch'
import { useApi } from './useApi'
import { createNamespace } from '../_utils/global-config'

const { name } = createNamespace('people-select')

export default defineComponent({
  name,

  props: peopleSelectProps,

  emits: ['change', 'clear', 'update:modelValue'],

  setup(props, { emit }) {
    const localValue = ref(props.defaultValue)
    const value = computed(() => props.modelValue !== undefined ? props.modelValue : localValue.value)
    const editor = inject(selectionEditorSurface, undefined)
    const { mergedDisabled, mergedReadonly } = useFormItem({
      disabled: computed(() => props.disabled),
      readonly: computed(() => props.readonly),
    })
    function commitValue(next: string) {
      if (props.modelValue === undefined) localValue.value = next
      emit('update:modelValue', next)
    }
    const attrs = useAttrs()
    const slots = useSlots()
    const fieldProps = reactive({
      userId: '',
      userName: '',
      userMobile: '',
    })
    const loading = ref(false)
    const panelOpen = ref(false)
    let searchRequest = 0
    let detailRequest = 0
    onBeforeUnmount(() => {
      searchRequest += 1
      detailRequest += 1
    })
    watch(
      [mergedDisabled, mergedReadonly],
      () => {
        if (mergedDisabled.value || mergedReadonly.value) {
          searchRequest += 1
          loading.value = false
        }
      },
      { flush: 'sync' },
    )
    const peopleList = ref<Record<string, any>[]>([])
    const peopleListSelected = ref<Record<string, any>[]>([])
    const urlType_ = ref(props?.urlType)
    const { fetch } = useFetch(props.fetch)
    const { getPeople, getPeopleFromNaponen } = useApi(fetch, urlType_)
    const getNameText = computed(() => {
      let userName = fieldProps.userName
      if (fieldProps.userId && userName) {
        userName += `(${fieldProps.userId})`
      }
      if (props.isLabel) {
        return userName === '' ? props.defaultText : userName
      }
      return userName
    })
    const initPeople = () => {
      const detail = ++detailRequest
      if (value.value) {
        fieldProps.userId = value.value
        const selectedId = value.value
        getPeopleFromNaponen(fieldProps.userId).then((res: any) => {
          if (detail !== detailRequest || value.value !== selectedId) return
          if (value.value === 'oss') {
            fieldProps.userId = 'oss'
            fieldProps.userMobile = ''
            fieldProps.userName = 'OSS' + '（oss）'
            peopleListSelected.value.unshift(fieldProps)
            return
          }
          if (res.resultCode === 'success' && res.data.list && res.data.list.length) {
            const people = res.data.list[0]
            const name = people.cn_name || people.display_name
            const id = people.worker_user_id || people.user_id
            fieldProps.userId = id
            fieldProps.userMobile = people.mobile
            fieldProps.userName = name + '（' + id + '）'
            peopleListSelected.value.unshift(fieldProps)
          }
        })
      } else {
        fieldProps.userId = undefined as any
        fieldProps.userMobile = undefined as any
        fieldProps.userName = undefined as any
        peopleListSelected.value = []
      }
    }

    watch(
      () => value.value,
      () => {
        initPeople()
      },
    )

    const onLoadPeople = (userId?: string) => {
      if (mergedDisabled.value || mergedReadonly.value) return
      // 加载状态结束
      loading.value = true
      peopleList.value = []
      const request = ++searchRequest
      getPeople(userId).then((res: any) => {
        if (request !== searchRequest) return
        if (res.resultCode === 'success') {
          res.data.result_list.forEach((user: any) => {
            user.userId = user.user_id
            user.userName = user.display_name + '（' + user.user_id + '）'
            user.cn_name = user.name
            user.worker_user_id = user.user_id
          })
          peopleList.value = res.data.result_list
        }
        loading.value = false
      })
    }
    const onQueryChange = () => {
      if (!panelOpen.value || mergedDisabled.value || mergedReadonly.value) return
      searchRequest++
      peopleList.value = []
      loading.value = true
    }
    const onPanelChange = (visible: boolean) => {
      panelOpen.value = visible
      if (!visible) {
        searchRequest++
        loading.value = false
        peopleList.value = []
      } else if (!loading.value && !peopleList.value.length) {
        onLoadPeople()
      }
    }
    onMounted(() => {
      initPeople()
      onLoadPeople()
    })
    const onPeopleClear = () => {
      if (mergedDisabled.value || mergedReadonly.value) return
      detailRequest += 1
      fieldProps.userId = ''
      fieldProps.userName = ''
      fieldProps.userMobile = ''
      commitValue(fieldProps.userId) // 更新prop的值
      emit('clear')
      emit('change', fieldProps.userId)
      if (panelOpen.value) onLoadPeople()
    }
    const onPeopleChange = (value: any) => {
      if (mergedDisabled.value || mergedReadonly.value || loading.value) return
      detailRequest += 1
      peopleListSelected.value = []
      const people = peopleList.value.find((item) => item.userId === value)
      if (people) {
        peopleListSelected.value.unshift(people)
        if (people.userId === fieldProps.userId) {
          if (props.clearable) {
            fieldProps.userId = '' // 在initPeople中区分初始化与清空
            fieldProps.userName = ''
            fieldProps.userMobile = ''
          }
        } else {
          fieldProps.userId = people.worker_user_id
          fieldProps.userMobile = people.mobile
          fieldProps.userName = people.userName
        }
        commitValue(fieldProps.userId) // 更新prop的值
        emit('change', fieldProps.userId)
      }
    }
    return () =>
      !props.isLabel ? (
        <Select
          {...attrs}
          {...props}
          disabled={mergedDisabled.value}
          readonly={mergedReadonly.value}
          open={editor && !mergedDisabled.value && !mergedReadonly.value ? true : undefined}
          modelValue={fieldProps.userId}
          loading={loading.value}
          onSearch={onLoadPeople}
          onUpdate:inputValue={onQueryChange}
          onOpen-change={onPanelChange}
          filterable
          filterOption={false}
          showExtraOptions={false}
          fallbackOption={(value) => ({
            value,
            label: peopleListSelected.value.find((item) => item.userId === value)?.userName ?? String(value),
          })}
          v-slots={slots}
          onChange={onPeopleChange}
          onClear={onPeopleClear}
        >
          {peopleList.value.map((item) => {
            return <Option value={item.userId}>{item.userName}</Option>
          })}
          {peopleList.value?.length === 0 ? <Empty /> : <div></div>}
        </Select>
      ) : (
        <div>{fieldProps.userName}</div>
      )
  },
})
