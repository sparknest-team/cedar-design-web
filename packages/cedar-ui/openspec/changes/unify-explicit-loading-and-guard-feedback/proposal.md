# Explicit loading and consistent before-hook feedback

## Scope
Loading is opt-in for fields with an input surface; it is not part of the universal field presentation props. Keep it on InputTag/Mention and existing decorated fields, plus Maple Popup/SwipeCell/TabBar/Table. Checkbox/CheckboxGroup, Radio/RadioGroup, Slider, Rate, VerificationCode, Color, Transfer and Upload do not expose generic loading. Scheduler removes its external loading prop and loading slot; business code owns data-loading placeholders and readonly. Upload retains per-file progress and explicit hook feedback. Message keeps loading as an existing message status, not a boolean prop.

## Contract
Ordinary emits never drive pending. Explicit before hooks may own internal pending, ORed with external loading for feedback. Busy guards reject duplicate same-operation submissions; false or failure restores the previous state. Deactivation, reset and obsolete operations cannot clear a newer operation's feedback or commit stale results. TabBar preserves its existing latest-target behavior; Upload preserves independent per-file concurrency.

## Implementation
One shared PendingFeedback visual placed inside existing native roots, common field presentation loading, shared guard lifecycle cancellation, and a count-based tracker for Upload beforeAdd/beforeRead/beforeUpload/beforeRemove. Keep existing hook signatures. SwipeCell reports hook failures through guard-error instead of rejecting close(); TabBar adds guard-error. Other error events remain unchanged. Do not add loading to static layout components.
