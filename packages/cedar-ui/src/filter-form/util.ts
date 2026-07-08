import type { IRenderComponent } from '../../layout-form/src/RenderComponent'

export function findValues(items, searchValues) {
  const foundValues = new Set()

  // Recursive function to navigate through the array and its nested children
  function traverse(elements) {
    for (const element of elements) {
      // Check if the current element's value is one of the search values
      if (searchValues.includes(element.value)) {
        foundValues.add(element.value)
      }
      // If there are children, recurse into them
      if (element.children) {
        traverse(element.children)
      }
    }
  }

  // Start the recursion with the initial items array
  traverse(items)

  // Return the found values as an array
  return Array.from(foundValues)
}

export function setCascaderValue(value: any, item: IRenderComponent) {
  let v
  if (item.props.multiple) {
    if (value?.length) {
      v = findValues(item.props.options, value)
    }
  } else {
    if (typeof value !== 'undefined') {
      v = findValues(item.props.options, [value])
      if (v.length === 0) {
        v = undefined
      } else {
        v = v[0]
      }
    }
  }
  return v
}

export function findSelectValues(items, searchValues) {
  const foundValues = new Set()

  for (const element of items) {
    // Check if the current element's value is one of the search values
    if (searchValues.includes(element.value)) {
      foundValues.add(element.value)
    }
  }

  // Return the found values as an array
  return Array.from(foundValues)
}

export function setSelectDefaultValue(value: any, item: IRenderComponent, options: any[]) {
  let v
  if (item.props.multiple) {
    if (options.length) {
      v = [options[0].value]
    }
  } else {
    if (options.length) {
      v = options[0].value
    }
  }
  return v
}

export function setSelectValue(
  value: any,
  item: IRenderComponent,
  fieldConfig: {
    remember: boolean
    removeIfNotInOptions: boolean
    required: boolean
  },
  options: any[],
) {
  const options_ = item.props.options || options || []
  let v
  // 多选
  if (item.props.multiple) {
    if (value?.length) {
      if (!fieldConfig.removeIfNotInOptions) {
        return value
      }
      v = findSelectValues(options_, value)
      if (v.length === 0) {
        if (fieldConfig.required) {
          v = setSelectDefaultValue(value, item, options_)
        } else {
          v = undefined
        }
      }
    } else {
      if (fieldConfig.required) {
        v = setSelectDefaultValue(value, item, options_)
      }
    }
    // 单选
  } else {
    if (typeof value !== 'undefined') {
      if (!fieldConfig.removeIfNotInOptions) {
        return value
      }
      v = findSelectValues(options_, [value])
      if (v.length === 0) {
        if (fieldConfig.required) {
          v = setSelectDefaultValue(value, item, options_)
          // 单选
          v = v[0]
        }
      } else {
        // 单选
        v = v[0]
      }
    } else {
      if (fieldConfig.required) {
        v = setSelectDefaultValue(value, item, options_)
      }
    }
  }
  return v
}
