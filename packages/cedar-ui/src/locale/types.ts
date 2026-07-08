export interface ArcoCalendarLang {
  formatYear: string
  formatMonth: string
  today: string
  view: {
    month: string
    year: string
    week: string
    day: string
  }
  month: {
    long: {
      January: string
      February: string
      March: string
      April: string
      May: string
      June: string
      July: string
      August: string
      September: string
      October: string
      November: string
      December: string
    }
    short: {
      January: string
      February: string
      March: string
      April: string
      May: string
      June: string
      July: string
      August: string
      September: string
      October: string
      November: string
      December: string
    }
  }
  week: {
    long: {
      self: string
      monday: string
      tuesday: string
      wednesday: string
      thursday: string
      friday: string
      saturday: string
      sunday: string
    }
    short: {
      self: string
      monday: string
      tuesday: string
      wednesday: string
      thursday: string
      friday: string
      saturday: string
      sunday: string
    }
  }
}

export interface ValidateMessage {
  required: string
  type: {
    string: string
    number: string
    boolean: string
    array: string
    object: string
    url: string
    email: string
    ip: string
  }
  number: {
    min: string
    max: string
    equal: string
    range: string
    positive: string
    negative: string
  }
  array: {
    length: string
    minLength: string
    maxLength: string
    includes: string
    deepEqual: string
    empty: string
  }
  string: {
    minLength: string
    maxLength: string
    length: string
    match: string
    uppercase: string
    lowercase: string
  }
  object: {
    deepEqual: string
    hasKeys: string
    empty: string
  }
  boolean: {
    true: string
    false: string
  }
}

export interface ArcoLang {
  locale: string
  common: {
    placeholderSelect: string
    placeholderInput: string
    placeholderStart: string
    placeholderEnd: string
    dateFormat: {
      datetime: string
    }
  }
  layoutForm: {
    collapseMore: string
    expandMore: string
    lastWeek: string
    lastMonth: string
    lastThreeMonths: string
  }
  map: {
    searchPlaceholder: string
    title: string
    noData: string
    dragAndSelectTips: string
  }
  formFilter: {
    rememberMe: string
    expandMore: string
    collapseMore: string
  }
  selectTransfer: {
    freezeToTop: string
    freezeToBottom: string
    unfreeze: string
    deleteItem: string
  }
  empty: {
    description: string
  }
  calendar: ArcoCalendarLang
  drawer: {
    okText: string
    cancelText: string
  }
  popconfirm: {
    okText: string
    cancelText: string
  }
  modal: {
    okText: string
    cancelText: string
  }
  pagination: {
    goto: string
    page: string
    countPerPage: string
    total: string
  }
  table: {
    okText: string
    resetText: string
    // new
    customColumnsConfig: string
    selectAll: string
    selected: string
    placeholderInputKeyword: string
    clear: string
  }
  upload: {
    start: string
    cancel: string
    delete: string
    retry: string
    buttonText: string
    preview: string
    drag: string
    dragHover: string
    error: string
    // new
    click: string
  }
  datePicker: {
    view: ArcoCalendarLang['view']
    month: ArcoCalendarLang['month']
    week: ArcoCalendarLang['week']
    placeholder: {
      date: string
      week: string
      month: string
      year: string
      quarter: string
      time: string
    }
    rangePlaceholder: {
      date: [string, string]
      week: [string, string]
      month: [string, string]
      year: [string, string]
      quarter: [string, string]
      time: [string, string]
    }
    selectTime: string
    today: string
    now: string
    ok: string
  }
  image: {
    loading: string
  }
  imagePreview: {
    fullScreen: string
    rotateRight: string
    rotateLeft: string
    zoomIn: string
    zoomOut: string
    originalSize: string
  }
  typography: {
    copied: string
    copy: string
    expand: string
    collapse: string
    edit: string
  }

  form?: {
    validateMessages: ValidateMessage
  }
  colorPicker: {
    history: string
    preset: string
    empty: string
  }
}

export type ArcoI18nMessages = Record<string, ArcoLang>
