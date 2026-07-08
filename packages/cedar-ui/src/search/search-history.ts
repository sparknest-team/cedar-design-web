export function searchHistoryLocal(max: number) {
  const maxLength = max

  function search(element, list: string[]) {
    const index = list.indexOf(element)
    if (index !== -1) {
      // 如果元素已存在，将其移到顶部
      list.splice(index, 1)
      list.unshift(element)
    } else {
      // 如果元素不存在，添加到顶部
      list.unshift(element)
    }
  }

  function push(element, list: string[]) {
    search(element, list)
    if (list.length > maxLength) {
      list.pop() // 移除最后一个元素以保持数组长度不超过限制
    }
    return list
  }

  return {
    push,
  }
}

export function searchHistory(storageKey: string, max: number) {
  const list: string[] = loadlist()
  const maxLength = max

  function search(element) {
    const index = list.indexOf(element)
    if (index !== -1) {
      // 如果元素已存在，将其移到顶部
      list.splice(index, 1)
      list.unshift(element)
    } else {
      // 如果元素不存在，添加到顶部
      list.unshift(element)
    }
  }

  function push(element) {
    if (!storageKey) {
      return
    }
    search(element)
    if (list.length > maxLength) {
      list.pop() // 移除最后一个元素以保持数组长度不超过限制
    }
    savelist()
  }

  function getlist() {
    return list
  }

  function loadlist() {
    const storedlist = localStorage.getItem(storageKey)
    return storedlist ? JSON.parse(storedlist) : []
  }

  function savelist() {
    localStorage.setItem(storageKey, JSON.stringify(list))
  }

  return {
    push,
    getlist,
  }
}
