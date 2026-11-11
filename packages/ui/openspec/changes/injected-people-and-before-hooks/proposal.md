# Injected people services and familiar before hooks

User request, 2026-10-25: allow application-provided reusable asynchronous people search/resolve/chat services, with avatars and mobile read-mode chat actions. Transport, URLs, SDKs and business mapping remain outside the library. Explicit arrays override injected loaders; each component owns independent state. App-level injection and nested setup providers are supported.

Consolidate the unpublished closeGuard/confirmGuard/cancelGuard entries into existing beforeClose/beforeConfirm/beforeCancel. Accept boolean/Promise results and callback done without inspecting function.length. First completion wins. Synchronous void waits for done; Promise<void> allows completion. Keep Dialog's original argument order and button refs. Cancel pending tasks and isolate late results.

Also fix Search composition styling, verify field-model clear acceptance/rejection, add public useAsyncData examples, date string examples, SafeArea impact diagnostics and language-specific LLM indexes. Do not rename Table.pagination or broadly change every field's empty model without a reviewed per-model contract.

User confirmed emptyValue / empty-value on 2026-10-25. Apply model-safe overrides to clearable fields on both platforms; preserve omitted defaults, disabled selections, Form reset and semantic empty detection. English completion starts with touched components/examples, with the remaining pages tracked separately.


## 2026-10-26 review revision

Use existing setPropsDefaults with instance props, and application wrappers for scoped business defaults. Replace the unpublished provider/chat contract with generic renderActions and the actions slot. Request and resolve remain business function props. Add request to Select and AutoComplete; component-owned async state is the default integration path. Arrays keep priority, including empty arrays; automatic local filtering is disabled for request results unless explicitly overridden. Explain AbortSignal as optional cancellation, not an HTTP payload or server rollback.

Correct direct Form inheritance through the shared bridges, preserving explicit false overrides. Retain Table pagination configuration and its false external-layout option; group a synchronized horizontal rail with the sticky footer, and treat zero offsets as enabled. Provide source demos and runtime/browser validation. Nullable model expansion is discussed but is not included without a specific business model decision.


## 2026-10-27 user-directed refinement (final confirmed protocol)

Replace unpublished request function props with options/data accepting an array or a loader(query, { signal }) on selection fields. No separate request alias. PeopleSelect options loads candidates; independent reactive fallback-option supplies selected-value display. No resolve or selected-options API. Provide optional built-in phone/chat icons controlled by showPhone/showChat; call/chat handlers consume Promise results and report action-error. Handlers remain replaceable through static prop defaults/local props/custom actions. No implicit navigation or business SDK.

Every emptyValue property permits null. Publish null unchanged, normalize only editor display, preserve omitted defaults and ordinary empty-string entry. Include draft-only clear in popup editors, including Switch/Checkbox, committed on confirmation. Nullable model/events match runtime.

Dialog/Drawer/Popup/Popconfirm share first-completion-wins adaptation. All close/confirm/Switch change/field commit guards use (payload, done, context). Remove refs, callable-context and function.length inference. Synchronous void waits for done; a boolean or Promise settles a return-based hook.

Table pagination.container mounts the same managed footer externally via Teleport, sharing page state/slicing/events/sticky synchronized rail. Existing bool/object API and slots remain; no mandatory slot.


Async arrays are owned by the outer field presentation so popup unmounts do not discard candidates. Inner controls reuse a private owner matched by their props schema; nested unrelated fields never borrow the source. Reopening after a search restores the visible query and only reloads if the query changed. Arrays/functions can be switched without allowing stale results to overwrite local data.

The Table sticky demo owns a scrollable outer container and offers a page-scroll toggle. Table has no height/max-height/scroll.y configuration. Default/custom pagination and the synchronized horizontal rail stay in one managed footer, including external targets. Verify both modes in the real source components.
