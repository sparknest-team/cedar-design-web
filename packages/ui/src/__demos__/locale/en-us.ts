import inlineMessages from "./inline-en-us";
import comparisonMessages from "./comparison-en-us";
import type { DemoMessages } from "./zh-cn";

const messages = {
  ...inlineMessages,
  ...comparisonMessages,
  section: {
    text: {
      event: "Event type",
      level: "Event level",
      tags: "Tags",
      remote: "Remote SOP",
      section: "Onsite handling",
      onsite: "Onsite SOP",
      safety: "Safety notice",
      points: "Key points",
      skill: "Skill level",
      certificates: "Certificates",
      review: "Review",
      abnormal: "Multiple anomalies",
    },
    variantLabel: "Section style",
    optionsLabel: "Display options",
    variants: {
      line: "Divider",
      plain: "Title only",
      card: "Bordered card",
    },
    markerLabel: "Title marker",
    endLabel: "End divider",
    styleHint:
      "Switching styles preserves your entries. A card uses its border to mark the section boundary.",
    actionsDescription:
      "Use a template to fill this section. Clearing it preserves the skill level outside the section.",
    applyTemplate: "Use template",
    clearSection: "Clear",
    applied: "Onsite handling template applied.",
    cleared: "Onsite fields cleared. The skill level is unchanged.",
    templateSop: "Standard onsite review SOP",
    templateSafety:
      "Read the onsite safety notice and confirm working conditions.",
    templatePoints: "Review the onsite checklist and record the outcome.",
    lowVoltage: "Low voltage",
    entryPermit: "Entry permit",
    workAtHeight: "Work at height",
    highVoltage: "High voltage",
    levelThree: "Level 3",
  },
  layout: {
    editModes: {
      direct: "Direct",
      click: "Single click",
      dblclick: "Double click",
    },
    initialModel: {
      name: "Alex",
      department: "Product design",
      notes: "Review progress every Wednesday and confirm the weekly plan.",
    },
    labels: {
      layout: "Form layout",
      itemLayout: "Notes layout",
      mode: "Edit mode",
      readPretty: "Read only display (readPretty)",
      contentAlign: "Content alignment",
      inherit: "Inherit",
      hint: "Switch between direct, click and dblclick editing and toggle readPretty independently. Switch content-align to compare value alignment; Notes can also override the form layout.",
      modeDescription: {
        direct: "Edit values directly in the form.",
        click: "Click a value to edit it in a popover; confirm to save.",
        dblclick:
          "Double-click a value to edit it in a popover; confirm to save.",
        readPretty:
          "Show saved values as text. Compare alignment and wrapping with the labels.",
      },
      description: {
        vertical:
          "Labels appear above controls, with each field on its own row.",
        horizontal:
          "Labels appear beside controls, with each field on its own row.",
        inline:
          "Fields flow alongside one another and wrap when space runs out.",
      },
      name: "Name",
      department: "Team",
      notes: "Notes",
      placeholder: "Enter a value",
      help: "Help stays below the control as the layout changes.",
      model: "Current values",
    },
  },
  labelWidthComparison: {
    labels: {
      strategy: "Label width strategy",
      auto: "Measured labels",
      columns: "Responsive columns",
      fixed: "Fixed width",
      name: "Name",
      department: "Department",
      contact: "Contact details",
      extra: "Show extra field",
      edit: "Change the longest label",
      hint: "Switch label sizing with the same model. Responsive columns stack below 576px; fixed labels use 6rem, with an 8rem override on the contact field.",
      model: "Current model",
    },
  },
  columnSizingPlayground: {
    labels: {
      fit: "Distribute space to flexible columns",
      grouped: "Grouped headers",
      resizable: "Resize columns",
      narrow: "Narrow container",
      priority: "Priority",
      name: "Task",
      owner: "Owner",
      status: "Status",
      task: "Task information",
      people: "People and status",
      hint: "fixed uses computed column widths; auto lets cell content affect widths. Resizing is available only in fixed mode. Turning fit off still fills the container, but distributes space across all data columns.",
      drag: "Drag a column boundary to resize it.",
      auto: "auto mode hides resize handles.",
    },
    inspectionTask: "Inspect charging equipment",
    active: "Active",
    longTask:
      "Compare a longer task name and observe how auto layout changes column widths",
    done: "Done",
  },
  defaultValue: {
    uncontrolledInput: "Uncontrolled input",
    controlledInput: "Controlled input",
    uncontrolledHint:
      "1. Uncontrolled: defaultValue supplies the initial text. Typing updates the component itself; the seed below stays unchanged.",
    lastUpdate: "last emitted value",
    none: "(none)",
    changeDefault: "Change defaultValue only",
    remount: "Remount input",
    uncontrolledSteps:
      "Try typing, then change defaultValue: the current text stays. Remount to read the latest defaultValue. Initialization never emits update:modelValue.",
    controlledHint:
      "2. Controlled: v-model is the source of truth. Its initial empty string takes precedence over defaultValue.",
    updateParent: "Update parent value",
    clearParent: "Clear parent value",
    formHint:
      "For a form, initialize the bound field in the parent. defaultValue does not write an initial value into the parent form.",
  },
  quantityControls: {
    quantityInput: "Quantity controls example",
    asyncInput: "Asynchronous quantity example",
    waiting: (value: unknown) => `Waiting to commit ${value ?? "empty"}`,
    cancelled: "Cancelled; old result ignored",
    approved: "Approved",
    rejected: "Rejected",
    failed: "Request failed; value preserved",
    requestError: "Quantity request failed",
    title: "Quantity controls and step direction",
    buttonsOnly: "Buttons only",
    disableIncrease: "Disable increase",
    disableDecrease: "Disable decrease",
    showIncrease: "Show increase",
    showDecrease: "Show decrease",
    longPress: "Long press",
    acceptedStep: "Accepted step",
    asyncTitle: "Approve, reject or cancel an asynchronous commit",
    asyncHint:
      "Step, type or clear the value, then choose an approval result below. Pending operations cannot overlap. External updates and disabling cancel the old request.",
    approve: "Approve",
    reject: "Reject",
    simulateFailure: "Simulate failure",
    externalValue: "Set external value to 10",
    enable: "Enable",
    disable: "Disable",
    committedValue: "Committed value",
  },
  selectionDataFlow: {
    hangzhou: "Hangzhou",
    shanghai: "Shanghai",
    beijing: "Beijing (disabled)",
    reset: "Reset both forms and logs",
    hint: "Each field starts empty. Open it and inspect the highlighted candidate: highlighting does not select a city. Change the switch to remount both fields.",
    inlineTitle: "Selection commits immediately",
    cityPlaceholder: "Choose a city",
    inlineHint:
      "Move with arrow keys, then press Enter, or click a city. Closing without selecting leaves the form unchanged.",
    noEvents: "No component events yet.",
    panelTitle: "Confirm commits the draft",
    panelPlaceholder: "Choose a city, then confirm",
    committedValue: "Committed form value",
    panelHint:
      "Choose a city in the editor: the selection mark is a draft. Confirm saves it; cancel or Escape discards it. Highlighting a candidate alone is not a draft selection.",
    logsHint:
      "Logs are newest first. open-change only changes panel visibility; update:modelValue is the event that writes the form value.",
  },
  lifecycle: {
    switchName: "Switch name",
    toggleActive: "Toggle active",
    toggleDuration: "Toggle duration",
    hint: "Inactive changes commit on activation without replay. Duration changes cancel the old phase; zero shows the latest name immediately.",
  },
} satisfies DemoMessages;

export default messages;
