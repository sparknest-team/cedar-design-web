# Validation

- Cedar: FormSection + existing layout contract, 17/17 passed.
- Maple: FormSection + existing layout contract, 17/17 passed.
- Tests cover public registration, visual scope, parent context identity, reactive horizontal/vertical/inline layout, label flex and disabled inheritance, validation/reset/submission, and unique accessible SSR IDs.
- Touched source/demo files passed targeted ESLint; the Maple gallery import order and formatting reported by the full lint run were corrected and rechecked.
- Maple full typecheck passed. Cedar full typecheck reports pre-existing readonly Console assignments in src/_utils/maple/test.ts:227,231; no errors were reported in the section implementation.
- API document structure: 11/11 passed. Targeted Form demo grouping and API normalization pass for both platforms/locales. The full grouping run also encounters unrelated nested-tabs cases missing from their existing manifests.
- Ego Lite task Space 44, using an isolated local Vite preview of actual source components: desktop control columns align inside/outside sections; header gap is 32px and post-divider gap is 24px on both platforms. At 390px, neither form nor page overflows horizontally. Actual textarea input succeeds on both platforms. Task Space and preview server closed after validation.
- Final preview: /Users/shuaimeng/.codex/visualizations/2026/11/16/01a1e35c-c083-7630-b71b-3ba11993bca0/form-section-cedar-maple.png

## Documentation integration follow-up

The original localhost:9991 form page initially rendered c-form-section as an unresolved HTML element. The site resolver now falls back to explicit public source exports for new components missing from an already loaded package registry. Theme bundling resolves esbuild through the Vite owned by VuePress rather than the UI test toolchain. Site resolver tests 7/7 and theme client tests 3/3 passed; explicit ESLint on the touched docs files passed. Restarted the old development service on its existing port. Verified the real documentation page: no unresolved tags, title 现场处置, turquoise marker, visible 1px header and end dividers, and full-width 830px end divider. Screenshot: /Users/shuaimeng/.codex/visualizations/2026/11/16/01a1e35c-c083-7630-b71b-3ba11993bca0/form-section-docs-fixed.png

## Variant and header action demos

- Both platforms expose `variant: line | plain | card`, defaulting to `line`. Card boundaries replace the optional end divider. Switching variants preserves field instances and values.
- Both locale docs include interactive style/marker/end-divider controls and a header-action example. Applying or clearing the section affects only its three fields and preserves the outside skill field.
- Cedar FormSection/layout tests: 18/18 passed. Maple FormSection/layout tests: 18/18 passed. Cedar shared demo locale tests: 10/10 passed.
- Full typechecks passed on both platforms. Targeted source/demo ESLint, API naming, component specs, and Form demo grouping/document normalization passed.
- Maple full lint was executed and reports an unrelated formatting issue in `packages/ui/src/_components/field-presentation/with-field-presentation.ts:259`; the FormSection files pass targeted lint.
- Ego Lite Space 51: Maple documentation and its actual 390px example iframe support all three styles without horizontal overflow. Style switching retains input. Applying and clearing the template updates only the section fields; an outside L4 value remains intact.
- Cedar documentation service recovered after a clean development-cache restart and cold compilation. Real page verification passed: plain has no heading line, card has a 1px border without duplicate dividers, and line has heading/end dividers. All switches retain the textarea draft. Apply/clear updates only the three section fields and preserves outside L4.
