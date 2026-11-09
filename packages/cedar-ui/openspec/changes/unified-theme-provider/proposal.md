# Unified ThemeProvider

Replace StyleProvider with ThemeProvider on Cedar and Maple, carrying theme, style-vars, tag, installation and typed defaults. One subtree rule governs application roots, nested scopes and library portals; providers never take implicit document ownership. Retire the StyleProvider export/subpath and imperative setStyleVars document mutator; migrate application roots to reactive ThemeProvider props. Remove ConfigProvider.theme, CedarTheme/cedarThemes and its document lifecycle hook. No compatibility aliases remain. Existing Themes presets and generic StyleVars/StyleVarName types remain available through the new module.

ThemeProvider.theme additionally accepts a preset StyleVars object. A preset is part of the theme baseline rather than style-vars overrides, so an explicit nested light/dark theme can replace it while genuine user overrides continue to inherit.
