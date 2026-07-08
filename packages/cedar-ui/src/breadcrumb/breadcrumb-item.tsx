import { computed, defineComponent, ref } from 'vue'
import { createNamespace } from '../_utils/global-config'
import IconMore from '../icon/icon-more'
import IconDown from '../icon/icon-down'
import IconObliqueLine from '../icon/icon-oblique-line'
import { useBreadcrumb } from './provide'
import { breadcrumbItemProps } from './props'
import Dropdown, { Doption } from '../dropdown'


const { name, n, classes } = createNamespace('breadcrumb-item')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: breadcrumbItemProps,
  /**
   * @zh 自定义分隔符
   * @slot separator
   */
  /**
   * @zh 自定义下拉菜单
   * @slot droplist
   */
  setup(props, { slots, attrs }) {
    const { index, breadcrumb, bindBreadcrumb } = useBreadcrumb()
    const dropdownVisible = ref(false)

    bindBreadcrumb?.(null)

    const total = computed(() => breadcrumb?.length?.value ?? 0)
    const maxCount = computed(() => breadcrumb?.maxCount?.value ?? 0)
    const needHide = computed(() => breadcrumb?.needHide?.value ?? false)
    const itemIndex = computed(() => index?.value ?? 0)

    const show = computed(() => {
      if (needHide.value) {
        if (itemIndex.value > 1 && itemIndex.value <= total.value - maxCount.value) {
          return false
        }
      }
      return true
    })

    const displayMore = computed(() => (needHide.value ? itemIndex.value === 1 : false))

    const showSeparator = computed(() => (breadcrumb ? itemIndex.value < total.value - 1 : true))

    const handleVisibleChange = (visible: boolean) => {
      dropdownVisible.value = visible
    }

    const renderSeparator = () => {
      if (!showSeparator.value) return null
      const separatorElement =
        slots.separator?.() ??
        props.separator ??
        breadcrumb?.slots?.separator?.() ??
        breadcrumb?.separator?.value ?? <IconObliqueLine />
      return (
        <div aria-hidden="true" class={n('separator')}>
          {separatorElement}
        </div>
      )
    }

    const renderItem = () => (
      <div
        role="listitem"
        class={classes(n(), [props.droplist || slots.droplist, n('--with-dropdown')])}
        {...(displayMore.value ? { 'aria-label': 'ellipses of breadcrumb items' } : undefined)}
        {...attrs}
      >
        {displayMore.value ? (breadcrumb?.slots?.['more-icon']?.() ?? <IconMore />) : slots.default?.()}
        {(props.droplist || slots.droplist) && (
          <span
            aria-hidden
            class={classes(n('dropdown-icon'), [dropdownVisible.value, n('--dropdown-icon-active')])}
          >
            <IconDown />
          </span>
        )}
      </div>
    )

    const renderDropdownContent = () =>
      slots.droplist?.() ?? props.droplist?.map((item) => <Doption value={item.path}>{item.label}</Doption>)

    const renderDropdown = () => (
      <Dropdown
        v-slots={{ content: renderDropdownContent }}
        popupVisible={dropdownVisible.value}
        onPopupVisibleChange={handleVisibleChange}
        {...props.dropdownProps}
      >
        {renderItem()}
      </Dropdown>
    )

    return () => {
      if (!show.value) return null
      return (
        <>
          {slots.droplist || props.droplist ? renderDropdown() : renderItem()}
          {renderSeparator()}
        </>
      )
    }
  },
})
