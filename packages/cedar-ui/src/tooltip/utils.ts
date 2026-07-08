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

export function isTextOverflow(element) {
  const style = window.getComputedStyle(element)
  // 获取文本在canvas中画出的宽度
  const actualWidth = getActualWidthOfChars(element.textContent, style)
  // 获取文本在布局之后的真实宽度
  const boundingWidth = element.getBoundingClientRect().width
  return actualWidth > boundingWidth
}
