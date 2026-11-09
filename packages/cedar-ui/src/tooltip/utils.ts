export function isPureTextElement(element) {
  return element.childElementCount === 0 && element.textContent.trim() !== ''
}

export function getActualWidthOfChars(text: string, options = { fontSize: '14px', fontFamily: 'Microsoft YaHei' }) {
  const { fontSize, fontFamily } = options
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.font = `${fontSize} ${fontFamily}`
  return ctx.measureText(text).width
}

export function isTextOverflow(element: HTMLElement) {
  return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight
}
