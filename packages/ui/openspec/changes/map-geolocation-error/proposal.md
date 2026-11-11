## Why

A denied or unavailable geolocation request leaves the map in a permanent locating state, with no error notification and no retry.

## What Changes

- Notify the original location or related geocoder error through the Map error event and forward it through MapSelect.
- Release the locating state after failure and allow a retry.
- Retire pending location results when the map is deactivated or unmounted.
- Expose typed Map and MapSelect event tuples and document the error notification.
