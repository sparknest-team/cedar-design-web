// https://github.com/feross/clipboard-copy/blob/master/index.js

export const clipboard = async (text: string, canFallback: () => boolean = () => true): Promise<boolean> => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err ?? new DOMException('The request is not allowed', 'NotAllowedError'))
    }
  }

  if (!canFallback()) return false

  const span = document.createElement('span')
  span.textContent = text

  span.style.whiteSpace = 'pre'

  document.body.appendChild(span)

  const selection = window.getSelection()
  const range = window.document.createRange()
  selection?.removeAllRanges()
  range.selectNode(span)
  selection?.addRange(range)

  try {
    return window.document.execCommand('copy')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`execCommand Error: ${err}`)
    return false
  } finally {
    selection?.removeAllRanges()
    window.document.body.removeChild(span)
  }
}
