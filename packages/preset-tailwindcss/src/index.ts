export interface PresetCedarOptions {
  screens?: boolean | PresetCedarScreens;
  fontSize?: boolean | PresetCedarFontSize;
  colors?: boolean | PresetCedarColors;
}

export interface PresetCedarScreens {
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
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

function getScreens(options: PresetCedarOptions = {}) {
  const { screens = true } = options;

  if (!screens) {
    return;
  }

  const defaultScreens: PresetCedarScreens = {
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1920px",
  };

  if (screens === true) {
    return defaultScreens;
  }

  return {
    ...defaultScreens,
    ...screens,
  };
}

function getFontSize(options: PresetCedarOptions = {}) {
  const { fontSize = true } = options;

  if (!fontSize) {
    return;
  }

  const defaultFontSize: PresetCedarFontSize = {
    xs: "var(--c-font-size-xs)",
    sm: "var(--c-font-size-sm)",
    md: "var(--c-font-size-md)",
    lg: "var(--c-font-size-lg)",
  };

  if (fontSize === true) {
    return defaultFontSize;
  }

  return {
    ...defaultFontSize,
    ...fontSize,
  };
}

function getColors(options: PresetCedarOptions = {}) {
  const { colors = true } = options;

  if (!colors) {
    return;
  }

  const defaultColors: Omit<PresetCedarColors, "body" | "disabled"> = {
    primary: "var(--c-color-primary)",
    info: "var(--c-color-info)",
    warning: "var(--c-color-warning)",
    danger: "var(--c-color-danger)",
    success: "var(--c-color-success)",
  };

  if (colors === true) {
    return defaultColors;
  }

  const { body: _body, disabled: _disabled, ...customColors } = colors;
  return { ...defaultColors, ...customColors };
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

export function presetCedar(options: PresetCedarOptions = {}) {
  const body = getBody(options);
  const disabled = getDisabled(options);

  return {
    prefix: "c-",
    theme: {
      extend: {
        colors: getColors(options),
        backgroundColor: body || disabled ? { body, disabled } : undefined,
        textColor: disabled ? { disabled } : undefined,
        screens: getScreens(options),
        fontSize: getFontSize(options),
        spacing: getSpacing(),
      },
    },
  };
}
