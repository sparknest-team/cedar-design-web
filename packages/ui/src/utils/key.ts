export function base64ToString(base64String: string) {
  // 从Base64解码，然后进行URI解码
  return decodeURIComponent(
    Array.from(atob(base64String))
      .map((char) => {
        return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2)
      })
      .join(''),
  )
}

export function stringToBase64(inputString: string | number | boolean) {
  // 对字符串进行UTF-8编码然后转换为Base64字符串
  return btoa(
    encodeURIComponent(inputString).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode(Number('0x' + p1))
    }),
  )
}
