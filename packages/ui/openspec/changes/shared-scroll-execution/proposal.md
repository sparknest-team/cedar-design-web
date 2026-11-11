# Shared visual scroll execution boundaries

Both independent helpers reproduce nine scenarios: zero/negative/NaN/infinite duration queues RAF, iframe element/Window uses host RAF, consumed/completed callbacks write again, initial/dynamic owner reduced-motion preference is not consumed. Default300ms/easing/coordinates control passes.

Use actual ownerDocument.defaultView or target Window, clamp invalid/nonpositive duration to immediate target, query current owner preference before interpolation, and consume frame generation once. Preserve Promise resolution and caller duration; no global CSS token conversion, cancellation API or inter-call supersession added.

Maple consumers are Form validation scroll and IndexBar. Preserve overlapping Form work. Helper tests do not certify consumer unmount/deactivation cancellation, IndexBar clickedName/doubleRAF or retained commands. Cedar has no found named production call, without claiming bundle unreachability. Simulated media/iframe/RAF is not browser/OS evidence.
