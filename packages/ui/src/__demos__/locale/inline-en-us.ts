import zhCN from "./inline-zh-cn";

const messages = {
  carouselInteractiveContentInline: {
    hint: "Drag the background; inputs retain normal editing.",
    current: "Current",
    changes: "Changes",
    slide: "Slide",
    placeholder: "Type here",
  },
  watermarkApiReviewMainInline: {
    darkSurface: "Dark surface",
    showWatermark: "Show watermark",
    watermarkText: "Watermark text",
    localSyntheticContent: "Local synthetic content",
    clickThrough: "Click through",
  },
  watermarkBasicInline: {
    darkSurface: "Dark surface",
    showWatermark: "Show watermark",
    watermarkText: "Watermark text",
    localSyntheticContent: "Local synthetic content",
    clickThrough: "Click through",
  },
  watermarkImageInline: {
    failLocalImage: "Fail local image",
    restoreImage: "Restore image",
  },
  themeProviderApiReviewMainInline: {
    toggleLocalVariables: "Toggle local variables",
    localColor: "Local color",
    nestedOverride: "Nested override",
    outsideRemainsUnchanged: "Outside remains unchanged",
  },
  themeProviderBasicInline: {
    toggleLocalVariables: "Toggle local variables",
    localColor: "Local color",
    nestedOverride: "Nested override",
    outsideRemainsUnchanged: "Outside remains unchanged",
  },
  themeProviderLocalThemeInline: {
    toggleLocalTheme: "Toggle local theme",
    outer: "Outer:",
    themedButton: "Themed button",
    openPopup: "Open popup",
    nestedLight: "Nested light",
    lightButton: "Light button",
    outsideIsUnchanged: "Outside is unchanged",
  },
  textareaAutoSizeInline: {
    firstLine: "First line",
    nativeThreeRows: "Native three rows",
    growWithContent: "Grow with content",
    fillSixLines: "Fill six lines",
    toggleRowLimit: "Toggle row limit:",
  },
  textareaEmptyPolicyInline: {
    toggleEmptyValue: "Toggle empty value",
    resetValues: "Reset values",
    direct: "Direct",
    deferred: "Deferred",
    changeThePolicyBeforeClearing:
      "Change the policy before clearing; deferred changes publish on confirm.",
  },
  tableApiReviewCTable7Inline: {
    name: "Name",
    score: "Score",
  },
  tableApiReviewCTableColumn1Inline: {
    name: "Name",
    score: "Score",
  },
  tableColumnReviewInline: {
    name: "Name",
    score: "Score",
  },
  statisticAnimationInline: {
    dynamicAnimation: "Dynamic animation",
    dynamicTarget: "Dynamic target",
    disableAnimation: "Disable animation",
    enableAnimation: "Enable animation",
    changeOrigin: "Change origin",
    changeDuration: "Change duration",
    from: "From:",
    duration: "Duration:",
  },
  splitButtonAsyncActionInline: {
    published: "Published",
  },
  spaceSplitWrappingInline: {
    wrap: "Wrap",
    direction: "Direction",
    reorder: "Reorder",
    draft: "Draft",
    draftsStayWithTheirItems: "Drafts stay with their items.",
    separatorsStayWithThePreceding: "Separators stay with the preceding item.",
  },
  sliderInteractionSessionInline: {
    sessionEnd: "Session end",
    lastProposal: "Last proposal:",
    restoreControls: "Restore controls",
    whileDraggingPressDR:
      "While dragging, press D, R or M to cancel by changing the configuration.",
  },
  selectLoadingInline: {
    beijing: "Beijing",
    shanghai: "Shanghai",
    guangzhou: "Guangzhou",
    loading: "Loading",
    default: "Default",
    line: "Line",
    multipleActions: "Multiple actions",
    loadingPausesSelectionClearingAnd:
      "Loading pauses selection, clearing and removal while search remains editable.",
  },
  searchNativeFormInline: {
    toggleWaiting: "Toggle waiting",
    toggleLoadingLayout: "Toggle loading layout",
    keywords: "Keywords",
    captureNativeForm: "Capture native form",
    readingPreview: "Reading preview",
    editInHistoryThenSubmit:
      "Edit in history, then submit one native keyword value.",
    editsUpdateImmediatelyNativeRequired:
      "Edits update immediately; native required validation belongs to this form.",
  },
  scrollbarLifecycleInline: {
    rememberHandle: "Remember handle",
    activate: "Activate",
    mount: "Mount",
    retainedScroll: "Retained scroll",
    origin: "Origin",
    scrollableContent: "Scrollable content",
  },
  scrollbarThumbLifecycleInline: {
    activate: "Activate",
    mount: "Mount",
    hoverWhileDraggingToDeactivate: "Hover while dragging to deactivate",
    scrollNotifications: "Scroll notifications",
    dragTheHorizontalVerticalThumb: "Drag the horizontal/vertical thumb",
  },
  radioAsyncOptionsInline: {
    manualResponses: "Manual responses",
  },
  notificationApiReviewMainInline: {
    review: "Review",
    triggerAgainAfterChangingControls: "Trigger again after changing controls",
    triggerAgainToApplyOptions: "Trigger again to apply options.",
  },
  notificationApiReviewServiceInline: {
    review: "Review",
    triggerAfterCombiningControls: "Trigger after combining controls",
    triggerAfterChangingControlsInspect:
      "Trigger after changing controls; inspect methods and results below.",
    trigger: "Trigger",
    updateHandle: "Update handle",
    closeHandle: "Close handle",
  },
  messageApiReviewServiceInline: {
    review: "Review",
    triggerAfterCombiningControls: "Trigger after combining controls",
    triggerAfterChangingControlsInspect:
      "Trigger after changing controls; inspect methods and results below.",
    trigger: "Trigger",
    updateHandle: "Update handle",
    closeHandle: "Close handle",
  },
  mentionAsyncFallbackRestoreInline: {
    saveAndReloadToResolve: "Save and reload to resolve names asynchronously.",
    saveAndReload: "Save and reload",
    edit: "Edit",
    read: "Read",
    loadingNames: "Loading names…",
    namesLoaded: "Names loaded",
    savedValue: "Saved value：",
  },
  mentionAsyncReadPrettyInline: {
    selectXiaomingSearchLisiThen:
      "Select @xiaoming, search @lisi, then switch to reading mode.",
    edit: "Edit",
    read: "Read",
    model: "Model：",
  },
  mentionAtomicMentionInline: {
    typeToSelectAPerson:
      "Type @ to select a person; Backspace removes a whole mention.",
    atomicMentions: "Atomic mentions",
    updateMockName: "Update mock name",
    withoutOptionsTypeXiaomingAnd:
      "Without options, type @xiaoming and press Enter to resolve the name.",
    fallbackOnly: "Fallback only",
  },
  mentionLoadingInline: {
    waitingForData: "Waiting for data",
    failedTypeToRetry: "Failed; type to retry",
    dataReceived: "Data received",
    manualLoading: "Manual loading",
    manualLoading2: "Manual loading",
    singleLine: "Single line",
    multipleLines: "Multiple lines",
    remoteCandidates: "Remote candidates",
    typeA: "Type @a",
    resolve: "Resolve",
    reject: "Reject",
    pendingEditingRemainsAvailable: "Pending; editing remains available",
    loadingDoesNotDisableEditing:
      "Loading does not disable editing or await notification handlers.",
  },
  mentionSearchOptionsInline: {
    localPeopleSearch: "Local people search",
    remotePeopleSearch: "Remote people search",
    automaticallyCommitTheOnlyMatching:
      "Automatically commit the only matching candidate.",
    commitSingleResult: "Commit single result",
    localValue: "Local value：",
    remoteValue: "Remote value：",
  },
  inputTagAsyncFallbackRestoreInline: {
    saveAndReloadToResolve: "Save and reload to resolve names asynchronously.",
    saveAndReload: "Save and reload",
    edit: "Edit",
    read: "Read",
    loadingNames: "Loading names…",
    namesLoaded: "Names loaded",
    savedValues: "Saved values：",
  },
  inputTagFallbackOptionInline: {
    loadMockTitles: "Load mock titles",
  },
  inputTagFormatLabelInline: {
    formatSelectedText: "Format selected text",
    customizeSelectedContent: "Customize selected content",
  },
  inputTagLinkTitleInline: {
    pasteOrTypeOneOf:
      "Paste or type one of the example URLs to resolve its title.",
    pasteOrTypeAURL: "Paste or type a URL",
    couldNotFetchTheTitle: "Could not fetch the title.",
    submit: "Submit",
  },
  inputTagLoadingInline: {
    loading: "Loading",
    example: "Example",
    loadingIsControlledByBusiness: "Loading is controlled by business state.",
  },
  inputTagSearchOptionsInline: {
    searchAccounts: "Search accounts",
    searchFailed: "Search failed",
    savedIDs: "Saved IDs:",
    singleAccount: "Single account",
    singleID: "Single ID:",
  },
  inputLoadingInline: {
    loading: "Loading",
    default: "Default",
    editableWhileLoading: "Editable while loading",
    line: "Line",
    loadingKeepsTheInputEditable: "Loading keeps the input editable.",
  },
  infiniteScrollSchedulerLifecycleInline: {
    switchTarget: "Switch target",
    activate: "Activate",
    newStatusCycle: "New status cycle",
    loads: "Loads",
    oldChecksMustNotReplay: ". Old checks must not replay",
    detector: "Detector",
  },
  imageApiReviewCImagePreview1Inline: {
    open: "Open",
    activate: "Activate",
    longPresses: "Long presses",
    switchSource: "Switch source",
    deactivate: "Deactivate",
  },
  imageApiReviewCImagePreviewAction1Inline: {
    open: "Open",
    activate: "Activate",
    longPresses: "Long presses",
    switchSource: "Switch source",
    deactivate: "Deactivate",
  },
  imageApiReviewServiceInline: {
    review: "Review",
    triggerAfterCombiningControls: "Trigger after combining controls",
    triggerAfterChangingControlsInspect:
      "Trigger after changing controls; inspect methods and results below.",
    trigger: "Trigger",
    updateHandle: "Update handle",
    closeHandle: "Close handle",
  },
  imageControllerLifecycleInline: {
    open: "Open",
    activate: "Activate",
    longPresses: "Long presses",
    switchSource: "Switch source",
    deactivate: "Deactivate",
  },
  imageTrackLifecycleInline: {
    open: "Open",
    activate: "Activate",
    loop: "Loop",
    replaceImages: "Replace images",
    current: "Current",
    replaceImages2: "Replace images",
    deactivate: "Deactivate",
  },
  formFieldIdentityInline: {
    bindA: "Bind A",
    bindB: "Bind B",
    unbind: "Unbind",
    noBoundField: "No bound field",
    resetCurrent: "Reset current",
    validateAndSubmit: "Validate and submit",
    theSameItemRetainsA:
      "The same item retains a separate initial value for each field.",
  },
  formSubmitInputsInline: {
    enterAllowed: "Enter allowed",
    submit: "Submit",
    resolveOldest: "Resolve oldest",
    editWhileWaitingThenResolve:
      "Edit while waiting, then resolve: submit again to validate the new input.",
  },
  fieldDecoratorApiReviewMainInline: {
    editFieldContent: "Edit field content",
  },
  fieldDecoratorControlSizesInline: {
    hoverOrFocusTruncatedText:
      "Hover or focus truncated text; tap on touch screens",
    reset: "Reset",
  },
  fieldDecoratorReviewFixtureInline: {
    editFieldContent: "Edit field content",
  },
  drawerApiReviewServiceInline: {
    review: "Review",
    triggerAfterCombiningControls: "Trigger after combining controls",
    triggerAfterChangingControlsInspect:
      "Trigger after changing controls; inspect methods and results below.",
    trigger: "Trigger",
    updateHandle: "Update handle",
    closeHandle: "Close handle",
  },
  drawerDividersInline: {
    dividers: "Dividers",
    dividersAreOffByDefault:
      "Dividers are off by default and can be enabled independently.",
  },
  dividerApiReviewMainInline: {
    before: "Before",
    after: "After",
  },
  dividerBasicInline: {
    before: "Before",
    after: "After",
  },
  dividerContentFlowInline: {
    minimumExplicitWidth: "Minimum explicit width",
    contentStaysInNormalFlow: "Content stays in normal flow",
    followingContent: "Following content",
    multilineContent: "Multiline content",
    aWrappingSectionTitleReserves:
      "A wrapping section title reserves its full height",
    customContent: "Custom content",
    firstLine: "First line",
    secondLine: "Second line",
    hairlineTakesPriorityAndHalves:
      "hairline takes priority and halves the theme width.",
  },
  dividerCustomInline: {
    slotTakesPriority: "Slot takes priority",
    customContent: "Custom content",
  },
  dividerLineAppearanceComparisonInline: {
    numberInset24Spacing16: "Number · inset=24, spacing=16",
    cssLengthInset2rem: "CSS length · inset=2rem",
    asymmetricInset832Spacing: "Asymmetric · inset=[8, 32], spacing=[12, 24]",
    verticalInset824Spacing: "Vertical · inset=[8, 24], spacing=[12, 20]",
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    double3px: "double · 3px",
    themeColor: "Theme color",
    thickness3px: "Thickness · 3px",
    halfOpacity05: "Half opacity · 0.5",
    zeroOpacityPreservesSpacing: "Zero opacity preserves spacing",
    hairlineOverridesThickness: "Hairline overrides thickness",
  },
  dividerWithTextInline: {
    start: "Start",
    center: "Center",
    end: "End",
  },
  dialogApiReviewServiceInline: {
    review: "Review",
    triggerAfterCombiningControls: "Trigger after combining controls",
    triggerAfterChangingControlsInspect:
      "Trigger after changing controls; inspect methods and results below.",
    trigger: "Trigger",
    updateHandle: "Update handle",
    closeHandle: "Close handle",
  },
  dialogDividersInline: {
    dividers: "Dividers",
    dividersAreOffByDefault:
      "Dividers are off by default and can be enabled independently.",
  },
  dialogDraggableInline: {
    openDragExample: "Open drag example",
    dragTitle: "Drag title",
    disableDrag: "Disable drag",
    enableDrag: "Enable drag",
    exitFullscreen: "Exit fullscreen",
    fullscreen: "Fullscreen",
    dragEnabled: "Drag enabled",
    dragStopped: "Drag stopped",
    dragTheTitlePressD:
      "Drag the title, press D to disable dragging or F for fullscreen, and reopen after closing.",
  },
  dialogServiceContainerInline: {
    notOpened: "Not opened",
    currentTarget: "Current target:",
    serviceDraft: "Service draft",
    moveToA: "Move to A",
    moveToB: "Move to B",
    serviceTarget: "Service target",
    opened: "Opened",
    openInA: "Open in A",
    targetA: "Target A",
    targetB: "Target B",
  },
  dateApiReviewCDatePicker1Inline: {
    popupContainer: "popup-container。",
  },
  dateEntryBoundaryInline: {
    popupContainer: "popup-container。",
  },
  countToDecimalFloorInline: {
    smallValue1234e7: "Small value: -1.234e-7",
    togglePrecision: "Toggle precision",
    largeValuePrecision23: "Large value, precision -23:",
    floorTowardNegativeInfinity: "Floor toward negative infinity:",
    changesFormattingWithoutReplay: "Changes formatting without replay.",
  },
  countToEasingReplayInline: {
    changeCurve: "Change curve",
    replay: "Replay",
    changingTheCurveAppliesOn: "Changing the curve applies on replay.",
  },
  countToZeroDurationInline: {
    toggleDuration: "Toggle duration",
    replay: "Replay",
  },
  checkboxAsyncOptionsInline: {
    manualResponses: "Manual responses",
  },
  cascaderLoadMoreInline: {
    expandRemoteGroupThenSettle: "Expand Remote group, then settle below",
    childrenReceived: "Children received",
    retryByExpandingAgain: "Retry by expanding again",
    dataReplacedOldCallbacksAre: "Data replaced; old callbacks are invalid",
    oldResponsesMustNotAdd: "Old responses must not add Stale child",
    expandRemoteGroup: "Expand remote group",
    resolve: "Resolve",
    retry: "Retry",
    replaceData: "Replace data",
    resolveOld: "Resolve old",
    loadmoreUsesACallbackIts:
      "loadMore uses a callback; its return value does not supply children.",
  },
  carouselApiReviewCCarousel2Inline: {
    widerCards: "Wider cards",
    text300pxViewport: "300px viewport",
    extraCard: "Extra card",
    empty: "Empty",
    reverseCards: "Reverse cards",
  },
  carouselAutoSizedInline: {
    widerCards: "Wider cards",
    text300pxViewport: "300px viewport",
    extraCard: "Extra card",
    empty: "Empty",
    reverseCards: "Reverse cards",
  },
  carouselControlledInline: {
    acceptChanges: "Accept changes",
  },
  carouselMultiSlidesInline: {
    acceptChanges: "Accept changes",
    loop: "Loop",
  },
  carouselSchedulerLifecycleInline: {
    autoplay: "Autoplay",
    activate: "Activate",
    mount: "Mount",
    current: "Current",
    changes: "; changes",
    slide: "Slide",
  },
  cardSchedulerLifecycleInline: {
    float: "Float",
    activate: "Activate",
    mount: "Mount",
    rippleWait: "Ripple wait",
    duration: "Duration",
    floatingLifecycle: "Floating lifecycle",
    cardContent: "Card content",
    collapse: "Collapse",
    deactivate: "Deactivate",
    unmount: "Unmount",
  },
  buttonControlledLoadingInline: {
    clickSaveToStart: "Click Save to start",
    saved: "Saved",
    simulatedFailure: "Simulated failure",
    save: "Save",
    failureRecovery: "Failure recovery",
    asyncClickHandlersOwnTheir: "Async click handlers own their loading state.",
  },
  buttonIconsInline: {
    iconOnly: "Icon only",
    iconAndText: "Icon and text",
    stacked: "Stacked",
  },
  buttonVariantsInline: {
    navy: "Navy",
    white: "White",
    lightGray: "Light gray",
    darkGray: "Dark gray",
  },
  backTopApiReviewCBackTop1Inline: {
    scrollDown: "Scroll down",
    switchTarget: "Switch target",
    activate: "Activate",
    retainedCommand: "Retained command",
  },
  backTopSchedulerLifecycleInline: {
    scrollDown: "Scroll down",
    switchTarget: "Switch target",
    activate: "Activate",
    retainedCommand: "Retained command",
  },
  formChangeSourceInline: {
    openAFieldEditAnd:
      "Open a field, edit and save to inspect its confirmation source.",
  },
} satisfies typeof zhCN;

export default messages;
