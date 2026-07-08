import {
  __export
} from "./chunk-G3PMV62Z.js";

// ../../node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs
var mitt_exports = {};
__export(mitt_exports, {
  default: () => mitt_default
});
function mitt_default(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}

// ../../node_modules/.pnpm/rattail@1.0.17/node_modules/rattail/lib/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key3, value) => key3 in obj ? __defProp(obj, key3, { enumerable: true, configurable: true, writable: true, value }) : obj[key3] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export2 = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key3 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key3) && key3 !== except)
        __defProp(to, key3, { get: () => from[key3], enumerable: !(desc = __getOwnPropDesc(from, key3)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var src_exports = {};
__export2(src_exports, {
  NOOP: () => NOOP,
  assert: () => assert,
  at: () => at,
  baseRound: () => baseRound,
  call: () => call,
  camelize: () => camelize,
  cancelAnimationFrame: () => cancelAnimationFrame,
  ceil: () => ceil,
  chunk: () => chunk,
  clamp: () => clamp,
  clampArrayRange: () => clampArrayRange,
  classes: () => classes,
  cloneDeep: () => cloneDeep,
  cloneDeepWith: () => cloneDeepWith,
  copyText: () => copyText,
  createNamespaceFn: () => createNamespaceFn,
  createStorage: () => createStorage,
  debounce: () => debounce,
  delay: () => delay,
  difference: () => difference,
  differenceWith: () => differenceWith,
  doubleRaf: () => doubleRaf,
  download: () => download,
  ensurePrefix: () => ensurePrefix,
  ensureSuffix: () => ensureSuffix,
  find: () => find,
  floor: () => floor,
  genNumberKey: () => genNumberKey,
  genStringKey: () => genStringKey,
  getAllParentScroller: () => getAllParentScroller,
  getGlobalThis: () => getGlobalThis,
  getParentScroller: () => getParentScroller,
  getRect: () => getRect,
  getScrollLeft: () => getScrollLeft,
  getScrollTop: () => getScrollTop,
  getStyle: () => getStyle,
  groupBy: () => groupBy,
  hasOwn: () => hasOwn,
  inBrowser: () => inBrowser,
  inMobile: () => inMobile,
  inViewport: () => inViewport,
  intersection: () => intersection,
  intersectionWith: () => intersectionWith,
  isArray: () => isArray,
  isArrayBuffer: () => isArrayBuffer,
  isBlob: () => isBlob,
  isBoolean: () => isBoolean,
  isDOMException: () => isDOMException,
  isDataView: () => isDataView,
  isDate: () => isDate,
  isEmpty: () => isEmpty,
  isEmptyPlainObject: () => isEmptyPlainObject,
  isEqual: () => isEqual,
  isEqualWith: () => isEqualWith,
  isError: () => isError,
  isFile: () => isFile,
  isFunction: () => isFunction,
  isMap: () => isMap,
  isNonEmptyArray: () => isNonEmptyArray,
  isNullish: () => isNullish,
  isNumber: () => isNumber,
  isNumeric: () => isNumeric,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  isPrimitive: () => isPrimitive,
  isPromise: () => isPromise,
  isRegExp: () => isRegExp,
  isSet: () => isSet,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isTruthy: () => isTruthy,
  isTypedArray: () => isTypedArray,
  isWeakMap: () => isWeakMap,
  isWeakSet: () => isWeakSet,
  isWindow: () => isWindow,
  kebabCase: () => kebabCase,
  localStorage: () => localStorage,
  lowerFirst: () => lowerFirst,
  mapObject: () => mapObject,
  maxBy: () => maxBy,
  mean: () => mean,
  meanBy: () => meanBy,
  merge: () => merge,
  mergeWith: () => mergeWith,
  minBy: () => minBy,
  mitt: () => mitt_default,
  motion: () => motion,
  normalizeToArray: () => normalizeToArray,
  objectToString: () => objectToString,
  omit: () => omit,
  omitBy: () => omitBy,
  once: () => once,
  pascalCase: () => pascalCase,
  pick: () => pick,
  pickBy: () => pickBy,
  prettyJSONObject: () => prettyJSONObject,
  preventDefault: () => preventDefault,
  promiseWithResolvers: () => promiseWithResolvers,
  raf: () => raf,
  randomColor: () => randomColor,
  randomNumber: () => randomNumber,
  randomString: () => randomString,
  removeArrayBlank: () => removeArrayBlank,
  removeArrayEmpty: () => removeArrayEmpty,
  removeItem: () => removeItem,
  requestAnimationFrame: () => requestAnimationFrame,
  round: () => round,
  sample: () => sample,
  sessionStorage: () => sessionStorage,
  shuffle: () => shuffle,
  slash: () => slash,
  sum: () => sum,
  sumBy: () => sumBy,
  sumHash: () => sumHash,
  supportTouch: () => supportTouch,
  throttle: () => throttle,
  times: () => times,
  toArrayBuffer: () => toArrayBuffer,
  toDataURL: () => toDataURL,
  toNumber: () => toNumber,
  toRawType: () => toRawType,
  toText: () => toText,
  toTypeString: () => toTypeString,
  toggleItem: () => toggleItem,
  tryParseJSON: () => tryParseJSON,
  uniq: () => uniq,
  uniqBy: () => uniqBy,
  upperFirst: () => upperFirst,
  xor: () => xor,
  xorWith: () => xorWith
});
function at(arr, index) {
  if (!arr.length) {
    return;
  }
  if (index < 0) {
    index += arr.length;
  }
  return arr[index];
}
function clamp(num, min, max) {
  return Math.min(max, Math.max(min, num));
}
function clampArrayRange(index, arr) {
  return clamp(index, 0, arr.length - 1);
}
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
function randomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function times(num, fn) {
  return Array.from({ length: num }, (_, index) => fn(index));
}
function inBrowser() {
  return typeof window !== "undefined";
}
function getGlobalThis() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (inBrowser()) {
    return window;
  }
  return typeof global !== "undefined" ? global : self;
}
var { hasOwnProperty } = Object.prototype;
function hasOwn(val, key3) {
  return hasOwnProperty.call(val, key3);
}
function inMobile() {
  return inBrowser() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function isArray(val) {
  return Array.isArray(val);
}
var objectToString = Object.prototype.toString;
function toTypeString(value) {
  return objectToString.call(value);
}
function toRawType(value) {
  return toTypeString(value).slice(8, -1);
}
function isArrayBuffer(val) {
  return toRawType(val) === "ArrayBuffer";
}
function isBoolean(val) {
  return typeof val === "boolean";
}
function isDataView(val) {
  return toRawType(val) === "DataView";
}
function isDate(val) {
  return toRawType(val) === "Date";
}
function isDOMException(val) {
  return toRawType(val) === "DOMException";
}
function isEmpty(val) {
  return val === void 0 || val === null || val === "" || isArray(val) && !val.length;
}
function isMap(val) {
  return toRawType(val) === "Map";
}
function isPlainObject(val) {
  return toRawType(val) === "Object";
}
function isSet(val) {
  return toRawType(val) === "Set";
}
function isObject(val) {
  return typeof val === "object" && val !== null;
}
function isRegExp(val) {
  return toRawType(val) === "RegExp";
}
function isError(val) {
  return toRawType(val) === "Error";
}
function isTypedArray(val) {
  return [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ].includes(toRawType(val));
}
function isEqualWith(value, other, fn) {
  const valueStack = /* @__PURE__ */ new WeakMap();
  const otherStack = /* @__PURE__ */ new WeakMap();
  function baseIsEqual(value2, other2, valueStack2, otherStack2) {
    const customEqual = fn(value2, other2);
    if (customEqual === true) {
      return true;
    }
    if (value2 === other2) {
      return true;
    }
    if (value2 !== value2 && other2 !== other2) {
      return true;
    }
    if (!isObject(value2) || !isObject(other2)) {
      return value2 === other2;
    }
    if (value2.constructor !== other2.constructor) {
      return false;
    }
    if (toRawType(value2) === "String" && toRawType(other2) === "String" || toRawType(value2) === "Number" && toRawType(other2) === "Number" || toRawType(value2) === "Boolean" && toRawType(other2) === "Boolean" || toRawType(value2) === "BigInt" && toRawType(other2) === "BigInt" || toRawType(value2) === "Symbol" && toRawType(other2) === "Symbol") {
      return value2.valueOf() === other2.valueOf();
    }
    if (isDate(value2) && isDate(other2)) {
      return value2.getTime() === other2.getTime();
    }
    if (isRegExp(value2) && isRegExp(other2)) {
      return value2.source === other2.source && value2.flags === other2.flags;
    }
    if (isError(value2) && isError(other2)) {
      return value2.name === other2.name && value2.message === other2.message && value2.cause === other2.cause;
    }
    if (isDOMException(value2) && isDOMException(other2)) {
      return value2.name === other2.name && value2.message === other2.message;
    }
    if (isTypedArray(value2) && isTypedArray(other2) || isDataView(value2) && isDataView(other2)) {
      if (value2.byteLength !== other2.byteLength) {
        return false;
      }
      const valueTypedArray = new Uint8Array(value2.buffer);
      const otherTypedArray = new Uint8Array(other2.buffer);
      return valueTypedArray.every((v, i) => v === otherTypedArray[i]);
    }
    if (isArrayBuffer(value2) && isArrayBuffer(other2)) {
      if (value2.byteLength !== other2.byteLength) {
        return false;
      }
      const valueTypedArray = new Uint8Array(value2);
      const otherTypedArray = new Uint8Array(other2);
      return valueTypedArray.every((v, i) => v === otherTypedArray[i]);
    }
    if (valueStack2.get(value2) === other2 && otherStack2.get(other2) === value2) {
      return true;
    }
    valueStack2.set(value2, other2);
    otherStack2.set(other2, value2);
    if (isMap(value2) && isMap(other2) || isSet(value2) && isSet(other2)) {
      if (value2.size !== other2.size) {
        return false;
      }
      const valueArray = [...value2];
      const otherArray = [...other2];
      const result = valueArray.every((v, i) => baseIsEqual(v, otherArray[i], valueStack2, otherStack2));
      valueStack2.delete(value2);
      otherStack2.delete(other2);
      return result;
    }
    if (isArray(value2) && isArray(other2)) {
      if (value2.length !== other2.length) {
        return false;
      }
      const result = value2.every((v, i) => baseIsEqual(v, other2[i], valueStack2, otherStack2));
      valueStack2.delete(value2);
      otherStack2.delete(other2);
      return result;
    }
    if (isPlainObject(value2) && isPlainObject(other2)) {
      const valueOwnKeys = [...Object.keys(value2), ...Object.getOwnPropertySymbols(value2)];
      const otherOwnKeys = [...Object.keys(other2), ...Object.getOwnPropertySymbols(other2)];
      if (valueOwnKeys.length !== otherOwnKeys.length) {
        return false;
      }
      const result = valueOwnKeys.every(
        (k) => baseIsEqual(value2[k], other2[k], valueStack2, otherStack2)
      );
      valueStack2.delete(value2);
      otherStack2.delete(other2);
      return result;
    }
    return false;
  }
  return baseIsEqual(value, other, valueStack, otherStack);
}
function isEqual(value, other) {
  return isEqualWith(value, other, () => void 0);
}
function isFunction(val) {
  return typeof val === "function";
}
function isNonEmptyArray(val) {
  return isArray(val) && !!val.length;
}
function isNullish(val) {
  return val == null;
}
function isNumber(val) {
  return typeof val === "number";
}
function isString(val) {
  return typeof val === "string";
}
function isNumeric(val) {
  return isNumber(val) || isString(val) && /^[-+]?\d+$/.test(val);
}
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isSymbol(val) {
  return typeof val === "symbol";
}
function isTruthy(v) {
  return Boolean(v);
}
function isWeakMap(val) {
  return toRawType(val) === "WeakMap";
}
function isWeakSet(val) {
  return toRawType(val) === "WeakSet";
}
function isWindow(val) {
  return val === window;
}
function supportTouch() {
  return inBrowser() && "ontouchstart" in window;
}
function isFile(val) {
  return toRawType(val) === "File";
}
function isBlob(val) {
  return toRawType(val) === "Blob";
}
function isPrimitive(val) {
  return val == null || typeof val !== "object" && typeof val !== "function";
}
function isEmptyPlainObject(val) {
  return isPlainObject(val) && Object.keys(val).length === 0 && Object.getOwnPropertySymbols(val).length === 0;
}
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
function toNumber(val) {
  if (val == null) {
    return 0;
  }
  if (isString(val)) {
    val = parseFloat(val);
    val = Number.isNaN(val) ? 0 : val;
    return val;
  }
  if (isBoolean(val)) {
    return Number(val);
  }
  return val;
}
var key = 0;
function genNumberKey() {
  return key++;
}
function chunk(arr, size = 1) {
  size = clamp(size, 1, arr.length);
  const result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
}
function removeItem(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
function toggleItem(arr, item) {
  arr.includes(item) ? removeItem(arr, item) : arr.push(item);
  return arr;
}
function uniq(arr) {
  return [...new Set(arr)];
}
function uniqBy(arr, fn) {
  return arr.reduce((ret, i) => {
    const index = ret.findIndex((j) => fn(i, j));
    if (index === -1) {
      ret.push(i);
    }
    return ret;
  }, []);
}
function find(arr, fn, from = "start") {
  let i = from === "start" ? 0 : arr.length - 1;
  while (arr.length > 0 && i >= 0 && i <= arr.length - 1) {
    const flag = fn(arr[i], i, arr);
    if (flag) {
      return [arr[i], i];
    }
    from === "start" ? i++ : i--;
  }
  return [null, -1];
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function removeArrayBlank(arr) {
  return arr.filter((item) => item != null);
}
function removeArrayEmpty(arr) {
  return arr.filter((item) => item != null && item !== "");
}
function normalizeToArray(value) {
  return isArray(value) ? value : [value];
}
function differenceWith(arr, ...values) {
  const fn = at(values, -1);
  const targets = values.slice(0, -1).reduce((targets2, value) => [...targets2, ...value], []);
  return arr.filter((item) => !targets.some((value) => fn(item, value)));
}
function difference(arr, ...values) {
  return differenceWith(arr, ...values, (a, b) => a === b);
}
function intersectionWith(...values) {
  const fn = at(values, -1);
  const targets = values.slice(0, -1);
  if (targets.length === 0) {
    return [];
  }
  if (targets.length === 1) {
    return uniqBy(targets[0], fn);
  }
  function baseIntersectionWith(arr1, arr2) {
    return arr1.filter((item) => arr2.some((value) => fn(item, value)));
  }
  return uniqBy(
    targets.reduce((result, target) => baseIntersectionWith(result, target)),
    fn
  );
}
function intersection(...values) {
  return intersectionWith(...values, (a, b) => a === b);
}
function groupBy(arr, fn) {
  return arr.reduce(
    (result, item) => {
      var _a;
      const key3 = fn(item);
      ((_a = result[key3]) != null ? _a : result[key3] = []).push(item);
      return result;
    },
    {}
  );
}
function xorWith(...values) {
  const fn = at(values, -1);
  const targets = values.slice(0, -1);
  return uniqBy(
    targets.reduce((result, target) => {
      return [...differenceWith(result, target, fn), ...differenceWith(target, result, fn)];
    }),
    fn
  );
}
function xor(...values) {
  return xorWith(...values, (a, b) => a === b);
}
function pick(object, keys) {
  return keys.reduce(
    (result, key3) => {
      result[key3] = object[key3];
      return result;
    },
    {}
  );
}
function pickBy(object, fn) {
  const ownKeys = [...Object.keys(object), ...Object.getOwnPropertySymbols(object)];
  return ownKeys.reduce((result, key3) => {
    const value = object[key3];
    if (fn(value, key3)) {
      result[key3] = value;
    }
    return result;
  }, {});
}
function omit(object, keys) {
  const ownKeys = [...Object.keys(object), ...Object.getOwnPropertySymbols(object)];
  return ownKeys.reduce(
    (result, key3) => {
      if (!keys.includes(key3)) {
        result[key3] = object[key3];
      }
      return result;
    },
    {}
  );
}
function omitBy(object, fn) {
  const ownKeys = [...Object.keys(object), ...Object.getOwnPropertySymbols(object)];
  return ownKeys.reduce((result, key3) => {
    const value = object[key3];
    if (!fn(value, key3)) {
      result[key3] = value;
    }
    return result;
  }, {});
}
function mapObject(object, fn) {
  return Object.entries(object).reduce(
    (result, [key3, value]) => {
      const entry = fn(key3, value);
      if (isArray(entry)) {
        const [newKey, newValue] = entry;
        result[newKey] = newValue;
      }
      return result;
    },
    {}
  );
}
function promiseWithResolvers() {
  let resolve;
  let reject;
  const promise = new Promise((_resolver, _reject) => {
    resolve = _resolver;
    reject = _reject;
  });
  return { promise, resolve, reject };
}
var util_exports = {};
__export2(util_exports, {
  cancelAnimationFrame: () => cancelAnimationFrame,
  classes: () => classes,
  copyText: () => copyText,
  createNamespaceFn: () => createNamespaceFn,
  createStorage: () => createStorage,
  doubleRaf: () => doubleRaf,
  download: () => download,
  getAllParentScroller: () => getAllParentScroller,
  getParentScroller: () => getParentScroller,
  getRect: () => getRect,
  getScrollLeft: () => getScrollLeft,
  getScrollTop: () => getScrollTop,
  getStyle: () => getStyle,
  inViewport: () => inViewport,
  localStorage: () => localStorage,
  mitt: () => mitt_default,
  motion: () => motion,
  prettyJSONObject: () => prettyJSONObject,
  preventDefault: () => preventDefault,
  raf: () => raf,
  requestAnimationFrame: () => requestAnimationFrame,
  sessionStorage: () => sessionStorage,
  tryParseJSON: () => tryParseJSON
});
function cancelAnimationFrame(handle) {
  const globalThis2 = getGlobalThis();
  globalThis2.cancelAnimationFrame ? globalThis2.cancelAnimationFrame(handle) : globalThis2.clearTimeout(handle);
}
function classes(...classes2) {
  return classes2.map((className) => {
    if (isArray(className)) {
      const [condition, truthy, falsy = null] = className;
      return condition ? truthy : falsy;
    }
    return className;
  });
}
function copyText(value) {
  if (!value) {
    return;
  }
  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
function camelize(s) {
  s = s.replace(/-(\w)/g, (_, p) => p.toUpperCase());
  return s.replace(s.charAt(0), s.charAt(0).toLowerCase());
}
function ensurePrefix(s, prefix) {
  return s.startsWith(prefix) ? s : prefix + s;
}
function ensureSuffix(s, suffix) {
  return s.endsWith(suffix) ? s : s + suffix;
}
var key2 = 0;
function genStringKey() {
  return `generated-key-${key2++}`;
}
function kebabCase(s) {
  const ret = s.replace(/([A-Z])/g, " $1").trim();
  return ret.split(" ").join("-").toLowerCase();
}
function pascalCase(s) {
  return camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase());
}
function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}
function upperFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function randomColor() {
  const letters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function randomString(length = 10) {
  let str = baseRandomString();
  while (str.length < length) {
    str += baseRandomString();
  }
  function baseRandomString() {
    return Math.random().toString(36).slice(2);
  }
  return str.slice(0, length);
}
function slash(path) {
  const isExtendedLengthPath = path.startsWith("\\\\?\\");
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, "/");
}
function createNamespaceFn(namespace) {
  return (name) => {
    const componentName = `${namespace}-${name}`;
    const createBEM = (suffix) => {
      if (!suffix) {
        return componentName;
      }
      if (suffix[0] === "$") {
        return suffix.replace("$", namespace);
      }
      return suffix.startsWith("--") ? `${componentName}${suffix}` : `${componentName}__${suffix}`;
    };
    return {
      name: pascalCase(componentName),
      n: createBEM,
      classes
    };
  };
}
function requestAnimationFrame(fn) {
  const globalThis2 = getGlobalThis();
  return globalThis2.requestAnimationFrame ? globalThis2.requestAnimationFrame(fn) : globalThis2.setTimeout(fn);
}
function doubleRaf() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}
function getStyle(element) {
  return window.getComputedStyle(element);
}
function getParentScroller(el) {
  let element = el;
  while (element) {
    if (!element.parentNode) {
      break;
    }
    element = element.parentNode;
    if (element === document.body || element === document.documentElement) {
      break;
    }
    const scrollRE = /(scroll|auto)/;
    const { overflowY, overflow } = getStyle(element);
    if (scrollRE.test(overflowY) || scrollRE.test(overflow)) {
      return element;
    }
  }
  return window;
}
function getAllParentScroller(el) {
  const allParentScroller = [];
  let element = el;
  while (!isWindow(element)) {
    element = getParentScroller(element);
    allParentScroller.push(element);
  }
  return allParentScroller;
}
function getRect(element) {
  if (isWindow(element)) {
    const width = element.innerWidth;
    const height = element.innerHeight;
    const rect = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height
    };
    return __spreadProps(__spreadValues({}, rect), {
      toJSON: () => rect
    });
  }
  return element.getBoundingClientRect();
}
function getScrollLeft(element) {
  const left = "scrollLeft" in element ? element.scrollLeft : element.scrollX;
  return Math.max(left, 0);
}
function getScrollTop(element) {
  const top = "scrollTop" in element ? element.scrollTop : element.scrollY;
  return Math.max(top, 0);
}
function inViewport(element) {
  const { top, bottom, left, right } = getRect(element);
  const { width, height } = getRect(window);
  const xInViewport = left <= width && right >= 0;
  const yInViewport = top <= height && bottom >= 0;
  return xInViewport && yInViewport;
}
function prettyJSONObject(jsonObject) {
  return JSON.stringify(jsonObject, null, 2);
}
function preventDefault(event) {
  if (event.cancelable === false) {
    return;
  }
  event.preventDefault();
}
function raf() {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve);
  });
}
function createStorage(storage) {
  return __spreadProps(__spreadValues({}, storage), {
    set(key3, value) {
      if (value == null) {
        return;
      }
      if (!isString(value)) {
        value = JSON.stringify(value);
      }
      storage.setItem(key3, value);
    },
    get(key3) {
      const data = storage.getItem(key3);
      try {
        return JSON.parse(data);
      } catch (err) {
        return data;
      }
    },
    remove(key3) {
      storage.removeItem(key3);
    }
  });
}
var sessionStorage = createStorage(getGlobalThis().sessionStorage);
var localStorage = createStorage(getGlobalThis().localStorage);
function tryParseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return void 0;
  }
}
function download(val, filename = "file") {
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = isString(val) ? val : URL.createObjectURL(val);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}
function motion(options) {
  const {
    from,
    to,
    duration = 300,
    frame = () => {
    },
    timingFunction = (value2) => value2,
    onStateChange = () => {
    }
  } = options;
  let state = "pending";
  let value = from;
  const distance = to - from;
  let ticker = void 0;
  let startTime = void 0;
  let pausedTime = void 0;
  let sleepTime = 0;
  function start() {
    if (state === "running" || state === "finished") {
      return;
    }
    setState("running");
    const now = performance.now();
    startTime = startTime != null ? startTime : now;
    sleepTime += pausedTime != null ? now - pausedTime : 0;
    pausedTime = void 0;
    tick();
    function tick() {
      ticker = requestAnimationFrame(() => {
        const now2 = performance.now();
        const executionTime = now2 - startTime - sleepTime;
        const progress = clamp(executionTime / duration, 0, 1);
        value = distance * timingFunction(progress) + from;
        if (progress >= 1) {
          setState("finished");
          frame({ value: to, done: true });
          return;
        }
        frame({ value, done: false });
        tick();
      });
    }
  }
  function pause() {
    if (state !== "running") {
      return;
    }
    cancelAnimationFrame(ticker);
    setState("paused");
    pausedTime = performance.now();
  }
  function reset() {
    cancelAnimationFrame(ticker);
    setState("pending");
    value = from;
    ticker = void 0;
    startTime = void 0;
    pausedTime = void 0;
    sleepTime = 0;
  }
  function getState() {
    return state;
  }
  function setState(_state) {
    state = _state;
    onStateChange(_state);
  }
  return {
    start,
    pause,
    reset,
    getState
  };
}
__reExport(util_exports, mitt_exports);
__reExport(src_exports, util_exports);
function call(fn, ...args) {
  if (isArray(fn)) {
    return fn.map((f) => f(...args));
  }
  if (fn) {
    return fn(...args);
  }
}
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, args);
    return result;
  };
}
function debounce(fn, delay2 = 0) {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay2);
  };
}
function throttle(fn, delay2 = 200) {
  let timer;
  let start = 0;
  return function loop(...args) {
    const now = performance.now();
    const elapsed = now - start;
    if (!start) {
      start = now;
    }
    if (timer) {
      clearTimeout(timer);
    }
    if (elapsed >= delay2) {
      fn.apply(this, args);
      start = now;
    } else {
      timer = setTimeout(() => {
        loop.apply(this, args);
      }, delay2 - elapsed);
    }
  };
}
function NOOP() {
}
function cloneDeepWith(value, fn) {
  const cache = /* @__PURE__ */ new WeakMap();
  function baseCloneDeep(value2, cache2) {
    const customResult = fn(value2);
    if (customResult !== void 0) {
      return customResult;
    }
    if (!isObject(value2)) {
      return value2;
    }
    if (cache2.has(value2)) {
      return cache2.get(value2);
    }
    if (isDate(value2)) {
      return new Date(value2);
    }
    if (isRegExp(value2)) {
      return new RegExp(value2);
    }
    if (isMap(value2)) {
      const result = /* @__PURE__ */ new Map();
      cache2.set(value2, result);
      value2.forEach((val, key3) => {
        result.set(baseCloneDeep(key3, cache2), baseCloneDeep(val, cache2));
      });
      return result;
    }
    if (isSet(value2)) {
      const result = /* @__PURE__ */ new Set();
      cache2.set(value2, result);
      value2.forEach((val) => {
        result.add(baseCloneDeep(val, cache2));
      });
      return result;
    }
    if (toRawType(value2) === "String" || toRawType(value2) === "Number" || toRawType(value2) === "Boolean") {
      return newConstructor(value2, value2.valueOf());
    }
    if (isWeakMap(value2) || isWeakSet(value2) || isError(value2) || isDOMException(value2)) {
      return {};
    }
    if (isTypedArray(value2)) {
      return newConstructor(value2, baseCloneArrayBuffer(value2.buffer), value2.byteOffset, value2.length);
    }
    if (isDataView(value2)) {
      return newConstructor(value2, baseCloneArrayBuffer(value2.buffer), value2.byteOffset, value2.byteLength);
    }
    if (isArrayBuffer(value2)) {
      return baseCloneArrayBuffer(value2);
    }
    if (isArray(value2)) {
      const result = [];
      cache2.set(value2, result);
      value2.forEach((value3, index) => {
        result[index] = baseCloneDeep(value3, cache2);
      });
      return result;
    }
    if (isPlainObject(value2)) {
      const result = Object.create(Reflect.getPrototypeOf(value2));
      cache2.set(value2, result);
      const ownKeys = [...Object.keys(value2), ...Object.getOwnPropertySymbols(value2)];
      ownKeys.forEach((key3) => {
        result[key3] = baseCloneDeep(value2[key3], cache2);
      });
      return result;
    }
    return value2;
  }
  function baseCloneArrayBuffer(value2) {
    const result = new ArrayBuffer(value2.byteLength);
    new Uint8Array(result).set(new Uint8Array(value2));
    return result;
  }
  function newConstructor(value2, ...args) {
    return new value2.constructor(...args);
  }
  return baseCloneDeep(value, cache);
}
function cloneDeep(value) {
  return cloneDeepWith(value, () => void 0);
}
function mergeWith(object, ...sources) {
  const fn = at(sources, -1);
  const targets = [object, ...sources.slice(0, -1)];
  let len = targets.length - 1;
  let result = targets[len];
  while (len) {
    result = baseMergeWith(targets[len - 1], result, fn);
    len--;
  }
  function baseMergeWith(object2, source, fn2) {
    function baseMerge(target, src) {
      for (const key3 in src) {
        if (hasOwn(src, key3)) {
          const srcValue = src[key3];
          const targetValue = target[key3];
          const customResult = fn2(targetValue, srcValue, key3, object2, source);
          if (customResult !== void 0) {
            target[key3] = customResult;
          } else if (isObject(srcValue)) {
            if (isObject(targetValue)) {
              target[key3] = baseMerge(targetValue, srcValue);
            } else {
              target[key3] = baseMerge(isArray(srcValue) ? [] : {}, srcValue);
            }
          } else {
            target[key3] = srcValue;
          }
        }
      }
      return target;
    }
    return baseMerge(object2, source);
  }
  return result;
}
function merge(object, ...sources) {
  return mergeWith(object, ...sources, () => void 0);
}
function toArrayBuffer(file) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsArrayBuffer(file);
  });
}
function toDataURL(file) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  });
}
function toText(file) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsText(file);
  });
}
function maxBy(arr, fn) {
  if (!arr.length) {
    return;
  }
  return arr.reduce((result, item) => fn(result) > fn(item) ? result : item, arr[0]);
}
function minBy(arr, fn) {
  if (!arr.length) {
    return;
  }
  return arr.reduce((result, item) => fn(result) < fn(item) ? result : item, arr[0]);
}
function sum(arr) {
  return arr.reduce((ret, val) => ret + val, 0);
}
function sumBy(arr, fn) {
  return arr.reduce((ret, val) => ret + fn(val), 0);
}
function sumHash(value) {
  function sum2(hash, value2) {
    for (let i = 0; i < value2.length; i++) {
      const chr = value2.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash < 0 ? hash * -2 : hash;
  }
  function baseSumHash(hash, value2, key3, seen) {
    hash = sum2(hash, key3);
    hash = sum2(hash, toTypeString(value2));
    hash = sum2(hash, typeof value2);
    if (value2 === null) {
      return sum2(hash, "null");
    }
    if (value2 === void 0) {
      return sum2(hash, "undefined");
    }
    if (isObject(value2) || isFunction(value2)) {
      if (seen.includes(value2)) {
        return sum2(hash, `[Circular]${key3}`);
      }
      seen.push(value2);
      hash = Object.keys(value2).sort().reduce((hash2, key4) => baseSumHash(hash2, value2[key4], key4, seen), hash);
      if (isFunction(value2.valueOf)) {
        return sum2(hash, String(value2.valueOf()));
      }
      return hash;
    }
    return sum2(hash, value2.toString());
  }
  return baseSumHash(0, value, "", []).toString(16).padStart(8, "0");
}
function mean(arr) {
  return sum(arr) / arr.length;
}
function meanBy(arr, fn) {
  return sumBy(arr, fn) / arr.length;
}
function sample(arr) {
  if (!arr.length) {
    return;
  }
  return arr[randomNumber(0, arr.length - 1)];
}
function round(val, precision = 0) {
  return baseRound(val, precision, Math.round);
}
function baseRound(val, precision = 0, fn) {
  precision = clamp(precision, -292, 292);
  if (!precision) {
    return fn(val);
  }
  const value = fn(`${val}e${precision}`);
  return +`${value}e${-precision}`;
}
function floor(val, precision = 0) {
  return baseRound(val, precision, Math.floor);
}
function ceil(val, precision = 0) {
  return baseRound(val, precision, Math.ceil);
}
export {
  NOOP,
  assert,
  at,
  baseRound,
  call,
  camelize,
  cancelAnimationFrame,
  ceil,
  chunk,
  clamp,
  clampArrayRange,
  classes,
  cloneDeep,
  cloneDeepWith,
  copyText,
  createNamespaceFn,
  createStorage,
  debounce,
  delay,
  difference,
  differenceWith,
  doubleRaf,
  download,
  ensurePrefix,
  ensureSuffix,
  find,
  floor,
  genNumberKey,
  genStringKey,
  getAllParentScroller,
  getGlobalThis,
  getParentScroller,
  getRect,
  getScrollLeft,
  getScrollTop,
  getStyle,
  groupBy,
  hasOwn,
  inBrowser,
  inMobile,
  inViewport,
  intersection,
  intersectionWith,
  isArray,
  isArrayBuffer,
  isBlob,
  isBoolean,
  isDOMException,
  isDataView,
  isDate,
  isEmpty,
  isEmptyPlainObject,
  isEqual,
  isEqualWith,
  isError,
  isFile,
  isFunction,
  isMap,
  isNonEmptyArray,
  isNullish,
  isNumber,
  isNumeric,
  isObject,
  isPlainObject,
  isPrimitive,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isTruthy,
  isTypedArray,
  isWeakMap,
  isWeakSet,
  isWindow,
  kebabCase,
  localStorage,
  lowerFirst,
  mapObject,
  maxBy,
  mean,
  meanBy,
  merge,
  mergeWith,
  minBy,
  mitt_default as mitt,
  motion,
  normalizeToArray,
  objectToString,
  omit,
  omitBy,
  once,
  pascalCase,
  pick,
  pickBy,
  prettyJSONObject,
  preventDefault,
  promiseWithResolvers,
  raf,
  randomColor,
  randomNumber,
  randomString,
  removeArrayBlank,
  removeArrayEmpty,
  removeItem,
  requestAnimationFrame,
  round,
  sample,
  sessionStorage,
  shuffle,
  slash,
  sum,
  sumBy,
  sumHash,
  supportTouch,
  throttle,
  times,
  toArrayBuffer,
  toDataURL,
  toNumber,
  toRawType,
  toText,
  toTypeString,
  toggleItem,
  tryParseJSON,
  uniq,
  uniqBy,
  upperFirst,
  xor,
  xorWith
};
//# sourceMappingURL=rattail.js.map
