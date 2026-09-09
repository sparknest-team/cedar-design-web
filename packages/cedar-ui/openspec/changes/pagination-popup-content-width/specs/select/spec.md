# Select popup width

Both libraries SHALL expose autoFitPopupWidth: boolean, default true. Menu presentation SHALL pass it to Trigger. False removes the trigger-width constraint so menu content determines width. Pagination SHALL set it to false while keeping its own trigger compact. Other Select usage retains the previous matching-width default. Existing Cedar triggerProps overrides remain compatible.
