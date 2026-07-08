export function getStorageData(storageKey: string | undefined) {
  if (!storageKey) {
    throw new Error('storageKey must be set')
  }
  let value = {} as any
  const storedValue = localStorage.getItem(storageKey)
  if (storedValue && storedValue !== 'undefined') {
    value = JSON.parse(storedValue)
  } else {
    const sessionValue = sessionStorage.getItem(storageKey)
    if (sessionValue && sessionValue !== 'undefined') {
      value = JSON.parse(sessionValue)
    }
  }
  return value
}
