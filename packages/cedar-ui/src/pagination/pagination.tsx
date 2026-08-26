import { computed, defineComponent, reactive, ref, toRefs, watch } from 'vue'
import type { Data } from '../_utils/types'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import Pager from './page-item.vue'
import StepPager from './page-item-step.vue'
import EllipsisPager from './page-item-ellipsis.vue'
import PageJumper from './page-jumper.vue'
import PageOptions from './page-options.vue'
import { useI18n } from '../locale'
import { isNumber } from '../_utils/is'
import type { PageItemType } from './types'
import { useSize } from '../_hooks/use-size'
import { paginationProps } from './props'


const { name } = createNamespace('pagination')

export default defineComponent({
  name,
  props: paginationProps,
  emits: {
    'update:current': (current: number) => true,
    'update:pageSize': (pageSize: number) => true,
    /**
     * @zh 页码改变时触发
     * @en Triggered when page number changes
     * @param {number} current
     */
    change: (current: number) => true,
    /**
     * @zh 数据条数改变时触发
     * @en Triggered when the number of data items changes
     * @param {number} pageSize
     */
    pageSizeChange: (pageSize: number) => true,
  },
  /**
   * @zh 分页按钮
   * @en Page item
   * @version 2.9.0
   * @slot page-item
   * @binding {number} page The page number of the paging button
   */
  /**
   * @zh 分页按钮（步）
   * @en Page item (step)
   * @version 2.9.0
   * @slot page-item-step
   * @binding {'previous'|'next'} type The type of page item step
   */
  /**
   * @zh 分页按钮（省略）
   * @en Page item (ellipsis)
   * @version 2.9.0
   * @slot page-item-ellipsis
   */
  /**
   * @zh 总数
   * @en Total
   * @version 2.9.0
   * @slot total
   * @binding {number} total
   */
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('pagination')
    const { t } = useI18n()
    const { disabled, pageItemStyle, activePageItemStyle, size } = toRefs(props)
    const { mergedSize } = useSize(size)

    const _current = ref(props.defaultCurrent)
    const _pageSize = ref(props.defaultPageSize)
    const computedCurrent = computed(() => props.current ?? _current.value)
    const computedPageSize = computed(() => props.pageSize ?? _pageSize.value)

    const pages = computed(() => Math.ceil((props.total ?? 0) / computedPageSize.value))

    const handleClick = (page: number) => {
      // when pageJumper blur and input.value is undefined, page is illegal
      if (page !== computedCurrent.value && isNumber(page) && !props.disabled) {
        _current.value = page
        emit('update:current', page)
        emit('change', page)
      }
    }

    const handlePageSizeChange = (pageSize: number) => {
      _pageSize.value = pageSize
      emit('update:pageSize', pageSize)
      emit('pageSizeChange', pageSize)
    }

    const pagerProps = reactive({
      current: computedCurrent,
      pages,
      disabled,
      style: pageItemStyle,
      activeStyle: activePageItemStyle,
      onClick: handleClick,
    })

    const getPageItemElement = (type: PageItemType, props: Data = {}) => {
      if (type === 'more') {
        return <EllipsisPager v-slots={{ default: slots['page-item-ellipsis'] }} {...props} {...pagerProps} />
      }
      if (type === 'previous') {
        return <StepPager v-slots={{ default: slots['page-item-step'] }} type="previous" {...props} {...pagerProps} />
      }
      if (type === 'next') {
        return <StepPager v-slots={{ default: slots['page-item-step'] }} type="next" {...props} {...pagerProps} />
      }

      return <Pager v-slots={{ default: slots['page-item'] }} {...props} {...pagerProps} />
    }

    const pageList = computed(() => {
      const pageList: Array<JSX.Element | JSX.Element[]> = []

      if (pages.value < props.baseSize + props.bufferSize * 2) {
        for (let i = 1; i <= pages.value; i++) {
          pageList.push(getPageItemElement('page', { key: i, pageNumber: i }))
        }
      } else {
        let left = 1
        let right = pages.value
        let hasLeftEllipsis = false
        let hasRightEllipsis = false

        if (computedCurrent.value > 2 + props.bufferSize) {
          hasLeftEllipsis = true
          left = Math.min(computedCurrent.value - props.bufferSize, pages.value - 2 * props.bufferSize)
        }
        if (computedCurrent.value < pages.value - (props.bufferSize + 1)) {
          hasRightEllipsis = true
          right = Math.max(computedCurrent.value + props.bufferSize, 2 * props.bufferSize + 1)
        }

        if (hasLeftEllipsis) {
          pageList.push(getPageItemElement('page', { key: 1, pageNumber: 1 }))
          pageList.push(
            getPageItemElement('more', {
              key: 'left-ellipsis-pager',
              step: -(props.bufferSize * 2 + 1),
            }),
          )
        }

        for (let i = left; i <= right; i++) {
          pageList.push(getPageItemElement('page', { key: i, pageNumber: i }))
        }

        if (hasRightEllipsis) {
          pageList.push(
            getPageItemElement('more', {
              key: 'right-ellipsis-pager',
              step: props.bufferSize * 2 + 1,
            }),
          )
          pageList.push(
            getPageItemElement('page', {
              key: pages.value,
              pageNumber: pages.value,
            }),
          )
        }
      }

      return pageList
    })

    const renderPager = () => {
      if (props.simple) {
        return (
          <span class={`${prefixCls}-simple`}>
            {getPageItemElement('previous', { simple: true })}
            <PageJumper
              disabled={props.disabled}
              current={computedCurrent.value}
              size={mergedSize.value}
              pages={pages.value}
              simple
              onChange={handleClick}
            />
            {getPageItemElement('next', { simple: true })}
          </span>
        )
      }

      return (
        <ul class={`${prefixCls}-list`}>
          {getPageItemElement('previous', { simple: true })}
          {pageList.value}
          {props.showMore &&
            getPageItemElement('more', {
              key: 'more',
              step: props.bufferSize * 2 + 1,
            })}
          {getPageItemElement('next', { simple: true })}
        </ul>
      )
    }

    // When the number of data items changes, recalculate the page number
    watch(computedPageSize, (curPageSize, prePageSize) => {
      if (props.autoAdjust && curPageSize !== prePageSize && computedCurrent.value > 1) {
        const index = prePageSize * (computedCurrent.value - 1) + 1
        const newPage = Math.ceil(index / curPageSize)
        if (newPage !== computedCurrent.value) {
          _current.value = newPage
          emit('update:current', newPage)
          emit('change', newPage)
        }
      }
    })

    watch(pages, (curPages, prePages) => {
      if (props.autoAdjust && curPages !== prePages && computedCurrent.value > 1 && computedCurrent.value > curPages) {
        const newCurrent = Math.max(curPages, 1)
        _current.value = newCurrent
        emit('update:current', newCurrent)
        emit('change', newCurrent)
      }
    })

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-simple`]: props.simple,
        [`${prefixCls}-disabled`]: props.disabled,
      },
    ])

    return () => {
      if (props.hideOnSinglePage && pages.value <= 1) {
        return null
      }

      return (
        <div class={cls.value}>
          {props.showTotal && (
            <span class={`${prefixCls}-total`}>
              {slots.total?.({ total: props.total }) ?? t('pagination.total', props.total)}
            </span>
          )}
          {renderPager()}
          {props.showPageSize && (
            <PageOptions
              disabled={props.disabled}
              sizeOptions={props.pageSizeOptions}
              pageSize={computedPageSize.value}
              size={mergedSize.value}
              onChange={handlePageSizeChange}
              selectProps={props.pageSizeProps}
            />
          )}
          {!props.simple && props.showJumper && (
            <PageJumper
              v-slots={{
                'jumper-prepend': slots['jumper-prepend'],
                'jumper-append': slots['jumper-append'],
              }}
              disabled={props.disabled}
              current={computedCurrent.value}
              pages={pages.value}
              size={mergedSize.value}
              onChange={handleClick}
            />
          )}
        </div>
      )
    }
  },
})
