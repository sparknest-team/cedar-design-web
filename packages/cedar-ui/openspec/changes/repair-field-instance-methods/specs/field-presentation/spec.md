## ADDED Requirements
### Requirement: Existing public field methods survive presentation lifecycle
Existing Options methods and public methods explicitly declared by the field presentation adapter SHALL be callable through stable public proxies from initial mount. Calls SHALL resolve the current editor, never a disposed child. Disabled/read-only/reading deferred fields SHALL NOT open from imperative actions. Focus SHALL open an allowed editor, target editor content, and preserve requested arguments after initial panel focus. Queued work SHALL retire on close, mode change, deactivation or unmount.

#### Scenario: Verification reset begins a draft
- GIVEN a closed deferred VerificationCode with an existing value
- WHEN reset is called
- THEN the editor opens with an empty draft and no committed model/change notification occurs before final approval

#### Scenario: Options methods remain available
- GIVEN the public Cedar InputTag in direct mode
- WHEN its focus or blur method is called
- THEN its current native input receives or loses focus

#### Scenario: Safe inactive array actions
- GIVEN CheckboxGroup is closed, deactivated, or disposed
- WHEN a retained checkAll/inverseAll proxy is called
- THEN it returns a copy of the current committed array without invoking a stale UI instance or publishing changes

#### Scenario: Controlled activation
- GIVEN a cached deferred editor retains controlled open=true
- WHEN it reactivates and a new focus index is requested
- THEN readiness is signaled again and the current editor receives that index

Stateful queue/task methods require independent ownership contracts; Upload's unmounted queue methods remain tracked by UP02 and are not declared resolved by this focus/draft capability repair. Existing remote option refresh is owned by the public field and can retry while closed without opening an editor.
