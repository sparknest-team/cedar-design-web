# Export Cedar language packs

Cedar's internationalization guide points at an unpublished internal path and the English pack is absent from normal builds. Export the built-in Chinese and English packs as `cedarZhCN` and `cedarEnUS` from the locale and package root entries, preserving explicit registration and existing locale scope behavior. Verify generated runtime and type declarations as consumer imports.
