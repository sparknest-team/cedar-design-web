# Notification service and reduced motion

clear releases both visible items and logical IDs; immediate same-ID re-add is a new item with its own Vue identity and full display timer. Updating a still-active logical ID retains its identity. Internal item keys are not public API. clear remains silent (does not add onClose callbacks).

The component style entry must honor prefers-reduced-motion locally for opacity, left/right enter/appear/leave transitions and starting transforms. Keep default CSS tokens unchanged, do not rely on a global short-duration fallback, and preserve static visibility/layout and business display duration. This is Cedar-only; Maple has no counterpart.
