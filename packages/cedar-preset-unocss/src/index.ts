import { type Preset, presetUno, type Rule } from "unocss";

export interface PresetCedarOptions {
  breakpoints?:
    | boolean
    | {
        sm?: string | number;
        md?: string | number;
        lg?: string | number;
        xl?: string | number;
      };
  fontSize?: boolean | PresetCedarFontSize;
  colors?: boolean | PresetCedarColors;
}

export interface PresetCedarFontSize {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
}

export interface PresetCedarColors {
  body?: string;
  primary?: string;
  info?: string;
  warning?: string;
  danger?: string;
  success?: string;
  disabled?: string;
}

function getSpacing() {
  return Object.fromEntries(
    Array.from({ length: 201 }, (_, value) => [String(value), `${value}px`]),
  );
}

function getBreakpoints(options: PresetCedarOptions = {}) {
  const { breakpoints = true } = options;

  if (!breakpoints) return;

  const defaults = { sm: "768px", md: "992px", lg: "1200px", xl: "1920px" };
  return breakpoints === true ? defaults : { ...defaults, ...breakpoints };
}

function getFontSize(options: PresetCedarOptions = {}) {
  const { fontSize = true } = options;

  if (!fontSize) return;

  const defaults: PresetCedarFontSize = {
    xs: "var(--c-font-size-xs)",
    sm: "var(--c-font-size-sm)",
    md: "var(--c-font-size-md)",
    lg: "var(--c-font-size-lg)",
  };

  return fontSize === true ? defaults : { ...defaults, ...fontSize };
}

function getColors(options: PresetCedarOptions = {}) {
  const { colors = true } = options;

  if (!colors) return;

  const defaults: Omit<PresetCedarColors, "body" | "disabled"> = {
    primary: "var(--c-color-primary)",
    info: "var(--c-color-info)",
    warning: "var(--c-color-warning)",
    danger: "var(--c-color-danger)",
    success: "var(--c-color-success)",
  };

  if (colors === true) return defaults;

  const { body: _body, disabled: _disabled, ...customColors } = colors;
  return { ...defaults, ...customColors };
}

function getDisabled(options: PresetCedarOptions = {}) {
  const { colors = true } = options;
  if (!colors) return;
  return colors === true
    ? "var(--c-color-disabled)"
    : (colors.disabled ?? "var(--c-color-disabled)");
}

function getBody(options: PresetCedarOptions = {}) {
  const { colors = true } = options;
  if (!colors) return;
  return colors === true
    ? "var(--c-color-body)"
    : (colors.body ?? "var(--c-color-body)");
}

export function presetCedar(options: PresetCedarOptions = {}): Preset[] {
  const body = getBody(options);
  const disabled = getDisabled(options);
  const rules: Rule[] = [];

  if (body) rules.push(["c-bg-body", { "background-color": body }]);
  if (disabled) {
    rules.push(["c-bg-disabled", { "background-color": disabled }]);
    rules.push(["c-text-disabled", { color: disabled }]);
  }

  return [
    presetUno({ prefix: "c-" }),
    {
      name: "@cedar-design/preset-unocss",
      blocklist: [/^(?:[\w-]+:)*c-shadow(?:-.+)?$/],
      theme: {
        colors: getColors(options),
        fontSize: getFontSize(options),
        breakpoints: getBreakpoints(options),
        spacing: getSpacing(),
      },
      rules,
    },
  ];
}
