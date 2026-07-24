import { computed, defineComponent, onMounted, reactive, ref, useAttrs, useSlots, watch } from 'vue'
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
    const attrs = useAttrs()
    const slots = useSlots()
    const fieldProps = reactive({
      userId: '',
      userName: '',
      userMobile: '',
    })
    const loading = ref(false)
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
      if (props.modelValue) {
        fieldProps.userId = props.modelValue
        getPeopleFromNaponen(fieldProps.userId).then((res: any) => {
          if (props.modelValue === 'oss') {
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
      () => props.modelValue,
      () => {
        initPeople()
      },
    )

    const onLoadPeople = (userId?: string) => {
      // 加载状态结束
      loading.value = true
      getPeople(userId).then((res: any) => {
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
    onMounted(() => {
      initPeople()
      onLoadPeople()
    })
    const onPeopleClear = () => {
      fieldProps.userId = ''
      fieldProps.userName = ''
      fieldProps.userMobile = ''
      emit('update:modelValue', fieldProps.userId) // 更新prop的值
      emit('clear')
      emit('change', fieldProps.userId)
    }
    const onPeopleChange = (value: any) => {
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
          // fieldProps.userName = people.userName
        }
        emit('update:modelValue', fieldProps.userId) // 更新prop的值
        emit('change', fieldProps.userId)
      }
    }
    return () =>
      !props.isLabel ? (
        <Select
          {...attrs}
          {...props}
          modelValue={fieldProps.userId}
          loading={loading.value}
          onSearch={onLoadPeople}
          filterable
          filterOption={false}
          v-slots={slots}
          onChange={onPeopleChange}
          onClear={onPeopleClear}
        >
          {peopleListSelected.value.map((item) => {
            return (
              <Option style="display:none" value={item.userId}>
                {item.userName}
              </Option>
            )
          })}
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
