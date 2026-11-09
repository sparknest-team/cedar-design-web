// https://github.com/scttcper/tinycolor
export const hsvToRgb = (h: number, s: number, v: number) => {
  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const mod = i % 6
  const r = [v, q, p, p, t, v][mod]
  const g = [t, v, v, q, p, p][mod]
  const b = [p, p, t, v, v, q][mod]

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

export const rgbToHsv = (r: number, g: number, b: number) => {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  const v = max
  const d = max - min
  const s = max === 0 ? 0 : d / max

  if (max === min) {
    h = 0
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
      default:
        break
    }

    h /= 6
  }

  return { h, s, v }
}

// <http://www.w3.org/TR/css3-values/#integers>
const CSS_INTEGER = '[-\\+]?\\d+%?'

// <http://www.w3.org/TR/css3-values/#number-value>
const CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'

// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
const CSS_UNIT = `(?:${CSS_NUMBER})|(?:${CSS_INTEGER})`

// Accept a single parenthesized function with comma- or space-separated channels.
const RGB_SEPARATOR = '(?:\\s*,\\s*|\\s+)'
const rgbChannels = (count: number) => Array(count).fill(`(${CSS_UNIT})`).join(RGB_SEPARATOR)

const matchers = {
  rgb: new RegExp(`^rgb\\(\\s*${rgbChannels(3)}\\s*\\)$`),
  rgba: new RegExp(`^rgba\\(\\s*${rgbChannels(4)}\\s*\\)$`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
}

export const parseIntFromHex = (val: string): number => {
  return parseInt(val, 16)
}

export const convertHexToDecimal = (h: string): number => {
  return parseIntFromHex(h) / 255
}

const parseChannel = (value: string, max: number) => {
  const parsed = parseFloat(value)
  return Math.min(max, Math.max(0, value.endsWith('%') ? parsed * max / 100 : parsed))
}

export const formatInputToRgb = (color: string): { r: number; g: number; b: number; a?: number } | false => {
  color = color.trim().toLowerCase()
  let match = matchers.rgb.exec(color)
  if (match) {
    return {
      r: parseChannel(match[1], 255),
      g: parseChannel(match[2], 255),
      b: parseChannel(match[3], 255),
    }
  }

  match = matchers.rgba.exec(color)
  if (match) {
    return {
      r: parseChannel(match[1], 255),
      g: parseChannel(match[2], 255),
      b: parseChannel(match[3], 255),
      a: parseChannel(match[4], 1),
    }
  }

  match = matchers.hex8.exec(color)
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
    }
  }

  match = matchers.hex6.exec(color)
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
    }
  }

  match = matchers.hex4.exec(color)
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
    }
  }

  match = matchers.hex3.exec(color)
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
    }
  }

  return false
}

export const formatInputToHSVA = (color: string) => {
  const rgba = formatInputToRgb(color)
  if (rgba) {
    const hsv = rgbToHsv(rgba.r, rgba.g, rgba.b)
    return {
      ...hsv,
      a: rgba.a ?? 1,
    }
  }
  return {
    h: 0,
    s: 1,
    v: 1,
    a: 1,
  }
}

export const hexToRgb = (color: string): any => {
  color = color.trim().toLowerCase()
  if (color.length === 0) {
    return false
  }

  let match = matchers.hex6.exec(color)
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
    }
  }

  match = matchers.hex3.exec(color)
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
    }
  }

  return false
}

export const rgbToHex = (r: number, g: number, b: number) => {
  const hex = [
    Math.round(r).toString(16).padStart(2, '0'),
    Math.round(g).toString(16).padStart(2, '0'),
    Math.round(b).toString(16).padStart(2, '0'),
  ]

  return hex.join('').toUpperCase()
}

export const rgbaToHex = (r: number, g: number, b: number, a: number) => {
  const hex = [
    Math.round(r).toString(16).padStart(2, '0'),
    Math.round(g).toString(16).padStart(2, '0'),
    Math.round(b).toString(16).padStart(2, '0'),
    Math.round(a * 255)
      .toString(16)
      .padStart(2, '0'),
  ]

  return hex.join('').toUpperCase()
}
