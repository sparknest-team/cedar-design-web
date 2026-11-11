# Remove ineffective Tag customization entries

## Why

Public token parity does not prove a token has a consumer. Fifteen Tag hover declarations have no CSS or runtime consumers; keeping them in public tables promises ineffective customization.

## What Changes

- Remove 13 preset icon-bg-hover tokens and icon-hover-size / icon-hover-bg-size from both libraries, name/value contracts and component tables.
- No compatibility aliases or replacement tokens during pre-release API convergence.
- Preserve custom-icon-bg-hover pending Cedar InputTag integration review: a cross-component mixin still references it, although its legacy selector is not proof of current DOM reachability.
- Add compiled Badge/Tag token-consumer checks and graph unit tests; document limits in menu guides.

## Limits

No global unused-token claim, runtime redesign, visual change or preset contrast redesign.
