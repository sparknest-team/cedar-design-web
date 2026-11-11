# Finalize replaced imperative image previews

## Why

Upload retains owned Object URLs while previews remain visible. The imperative Image singleton discarded replaced instances without notifying their onClosed callback, retaining those leases until Upload unmounted.

## Changes

Both libraries independently implement an instance-bound, once-only terminal callback for normal closure and replacement. Hosts and singleton references are cleared before notification. Old handles cannot affect new instances. A preview opened synchronously inside onClosed supersedes the outer call, which returns undefined.

## Non-goals

No redesign of Image rendering, global shared instances between libraries, or new public callbacks.
