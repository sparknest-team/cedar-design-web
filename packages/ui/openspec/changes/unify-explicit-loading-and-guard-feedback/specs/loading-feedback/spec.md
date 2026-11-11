## ADDED Requirements

### Requirement: Explicit component loading
Only input-surface fields and components with a dedicated asynchronous interaction SHALL expose loading independently of ordinary events. Universal field presentation SHALL NOT add loading to every field. Checkbox/CheckboxGroup, Radio/RadioGroup, Slider, Rate, VerificationCode, Color, Transfer, Upload and Scheduler SHALL NOT expose a generic loading prop. Scheduler SHALL NOT expose a loading slot. Shared field rendering SHALL avoid duplicate indicators. External loading SHALL not implicitly mutate field values or disabled/readonly. Popup/SwipeCell/TabBar loading SHALL suspend the corresponding close/switch action; Table loading SHALL only display feedback.

#### Scenario: manually controlled state
- WHEN loading is enabled then disabled
- THEN feedback appears then disappears without calling any business callback.

### Requirement: Before-hook pending feedback
Before-hook waits SHALL expose aria-busy and visible feedback. Guard rejection and error SHALL recover. Obsolete or deactivated operations SHALL not commit or clear newer feedback. Upload SHALL preserve independent concurrent operations, with aggregate feedback until all current hooks settle.

#### Scenario: old operation completes after a new operation
- WHEN an old wait is cancelled and a new wait begins
- THEN settlement of the old wait SHALL not remove new feedback.
