export const isOverflow = (el: HTMLElement) => {
  if (el) {
    return el.scrollWidth > el.offsetWidth
  }
  return false
}
