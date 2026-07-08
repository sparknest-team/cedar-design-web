/**
 * 校验一个属性是否存在/为开启状态
 * @param {any} attr
 * @return {boolean} 若存在有效的设置，则返回 true（空字符串等同于有效设置）
 */
export function validAttr(attr: any) {
  return !(attr === undefined || attr === null || attr === false)
}
