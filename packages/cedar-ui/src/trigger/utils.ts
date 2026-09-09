import type { CSSProperties } from 'vue'
import type { TriggerPosition } from '../_utils/constant'
import { isArray } from '../_utils/is'
import type { TriggerPopupTranslate } from './types'
import { getPlacementOffset } from './geometry'
export { getTransformOrigin } from './geometry'

const getViewPortSize = (view: Window | null | undefined) => {
  const viewport = view?.visualViewport
  return { width: viewport?.width ?? view?.innerWidth ?? 0, height: viewport?.height ?? view?.innerHeight ?? 0,
    left: viewport?.offsetLeft ?? 0, top: viewport?.offsetTop ?? 0 }
}

export interface ElementRect {
  top: number
  bottom: number
  left: number
  right: number
  width: number
  height: number
}

interface ScrollRect {
  top: number
  bottom: number
  left: number
  right: number
  scrollTop: number
  scrollBottom: number
  scrollLeft: number
  scrollRight: number
  width: number
  height: number
}

type BasePosition = 'top' | 'left' | 'bottom' | 'right'

interface PositionOffset {
  left: number
  top: number
}

const getBoundaryPosition = (position: TriggerPosition): BasePosition => {
  switch (position) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return 'top'
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      return 'bottom'
    case 'left':
    case 'left-start':
    case 'left-end':
      return 'left'
    case 'right':
    case 'right-start':
    case 'right-end':
      return 'right'
    default:
      return 'top'
  }
}

const changePosition = (position: TriggerPosition, direction: BasePosition): TriggerPosition => {
  switch (direction) {
    case 'top':
      switch (position) {
        case 'bottom':
          return 'top'
        case 'bottom-start':
          return 'top-start'
        case 'bottom-end':
          return 'top-end'
        default:
          return position
      }
    case 'bottom':
      switch (position) {
        case 'top':
          return 'bottom'
        case 'top-start':
          return 'bottom-start'
        case 'top-end':
          return 'bottom-end'
        default:
          return position
      }
    case 'left':
      switch (position) {
        case 'right':
          return 'left'
        case 'right-start':
          return 'left-start'
        case 'right-end':
          return 'left-end'
        default:
          return position
      }
    case 'right':
      switch (position) {
        case 'left':
          return 'right'
        case 'left-start':
          return 'right-start'
        case 'left-end':
          return 'right-end'
        default:
          return position
      }
    default:
      return position
  }
}

const getFitPosition = (
  position: TriggerPosition,
  popupPosition: PositionOffset,
  {
    containerRect,
    triggerRect,
    popupRect,
    offset,
    translate,
    scaleX = 1,
    scaleY = 1,
    view = typeof window === 'undefined' ? undefined : window,
  }: {
    containerRect: DOMRect
    triggerRect: ScrollRect
    popupRect: ScrollRect
    offset: number
    translate: TriggerPopupTranslate
    scaleX?: number
    scaleY?: number
    view?: Window | null
  },
) => {
  const direction = getBoundaryPosition(position)
  const viewport = getViewPortSize(view)
  containerRect = { ...containerRect, left: containerRect.left - viewport.left / scaleX, top: containerRect.top - viewport.top / scaleY } as DOMRect
  const viewPortSize = { width: viewport.width / scaleX, height: viewport.height / scaleY }

  // Boundary value of pop-up box and window
  const viewPortBoundary = {
    top: containerRect.top + popupPosition.top,
    // prettier-ignore
    bottom: viewPortSize.height - (containerRect.top + popupPosition.top + popupRect.height),
    left: containerRect.left + popupPosition.left,
    // prettier-ignore
    right: viewPortSize.width - (containerRect.left + popupPosition.left + popupRect.width),
  }

  let finalPosition = position
  if (direction === 'top' && viewPortBoundary.top < 0) {
    if (triggerRect.top - viewport.top / scaleY > popupRect.height) {
      // Adjust the pop-up box to snap to the top of the window
      popupPosition.top = -containerRect.top
    } else {
      const fitPosition = getPopupOffset(changePosition(position, 'bottom'), triggerRect, popupRect, {
        offset,
        translate,
      })
      // prettier-ignore
      if (viewPortSize.height - (containerRect.top + fitPosition.top + popupRect.height) > 0) {
        finalPosition = changePosition(position, 'bottom');
        Object.assign(popupPosition, fitPosition);
      }
    }
  }
  if (direction === 'bottom' && viewPortBoundary.bottom < 0) {
    if (viewPortSize.height - (triggerRect.bottom - viewport.top / scaleY) > popupRect.height) {
      // Adjust the pop-up box to snap to the bottom of the window
      // prettier-ignore
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    } else {
      const fitPosition = getPopupOffset(changePosition(position, 'top'), triggerRect, popupRect, {
        offset,
        translate,
      })
      if (containerRect.top + fitPosition.top > 0) {
        finalPosition = changePosition(position, 'top')
        Object.assign(popupPosition, fitPosition)
      }
    }
  }
  if (direction === 'left' && viewPortBoundary.left < 0) {
    if (triggerRect.left - viewport.left / scaleX > popupRect.width) {
      // Adjust the pop-up box to snap to the left side of the window
      popupPosition.left = -containerRect.left
    } else {
      const fitPosition = getPopupOffset(changePosition(position, 'right'), triggerRect, popupRect, {
        offset,
        translate,
      })
      // prettier-ignore
      if (viewPortSize.width - (containerRect.left + fitPosition.left + popupRect.width) > 0) {
        finalPosition = changePosition(position, 'right');
        Object.assign(popupPosition, fitPosition);
      }
    }
  }
  if (direction === 'right' && viewPortBoundary.right < 0) {
    if (viewPortSize.width - (triggerRect.right - viewport.left / scaleX) > popupRect.width) {
      // Adjust the pop-up box to snap to the right side of the window
      // prettier-ignore
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    } else {
      const fitPosition = getPopupOffset(changePosition(position, 'left'), triggerRect, popupRect, {
        offset,
        translate,
      })
      if (containerRect.left + fitPosition.left > 0) {
        finalPosition = changePosition(position, 'left')
        Object.assign(popupPosition, fitPosition)
      }
    }
  }

  viewPortBoundary.left = containerRect.left + popupPosition.left
  viewPortBoundary.right = viewPortSize.width - (containerRect.left + popupPosition.left + popupRect.width)
  viewPortBoundary.top = containerRect.top + popupPosition.top
  viewPortBoundary.bottom = viewPortSize.height - (containerRect.top + popupPosition.top + popupRect.height)

  if (direction === 'top' || direction === 'bottom') {
    if (viewPortBoundary.left < 0) {
      popupPosition.left = -containerRect.left
    } else if (viewPortBoundary.right < 0) {
      // prettier-ignore
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    }
  }
  if (direction === 'left' || direction === 'right') {
    if (viewPortBoundary.top < 0) {
      popupPosition.top = -containerRect.top
    } else if (viewPortBoundary.bottom < 0) {
      // prettier-ignore
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    }
  }

  return {
    popupPosition,
    position: finalPosition,
  }
}

const getPopupOffset = (
  position: TriggerPosition,
  triggerRect: ScrollRect,
  popupRect: ScrollRect,
  {
    offset = 0,
    translate = [0, 0],
  }: {
    offset?: number
    translate?: TriggerPopupTranslate
  } = {},
): PositionOffset => {
  const resolved = (isArray(translate) ? translate : translate[position]) ?? [0, 0]
  return getPlacementOffset(position, triggerRect, popupRect, offset, resolved)
}

export const getPopupStyle = (
  position: TriggerPosition,
  containerRect: DOMRect,
  triggerRect: ScrollRect,
  popupRect: ScrollRect,
  {
    offset = 0,
    translate = [0, 0],
    customStyle = {},
    autoFitPosition = false,
    scaleX = 1,
    scaleY = 1,
    view = typeof window === 'undefined' ? undefined : window,
  }: {
    offset?: number
    translate?: TriggerPopupTranslate
    customStyle?: CSSProperties
    autoFitPosition?: boolean
    scaleX?: number
    scaleY?: number
    view?: Window | null
  } = {},
): { style: CSSProperties; position: TriggerPosition } => {
  let finalPosition = position
  let popupPosition = getPopupOffset(position, triggerRect, popupRect, {
    offset,
    translate,
  })

  if (autoFitPosition) {
    const result = getFitPosition(position, popupPosition, {
      containerRect,
      scaleX,
      scaleY,
      view,
      popupRect,
      triggerRect,
      offset,
      translate,
    })
    popupPosition = result.popupPosition
    finalPosition = result.position
  }

  const style = {
    left: `${popupPosition.left}px`,
    top: `${popupPosition.top}px`,
    ...customStyle,
  }

  return {
    style,
    position: finalPosition,
  }
}

export const isScrollElement = (element: HTMLElement | SVGElement) => {
  return 'offsetHeight' in element && (element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth)
}

export const getScrollElements = (container: HTMLElement | SVGElement | undefined) => {
  const scrollElements: HTMLElement[] = []
  let element: HTMLElement | SVGElement | undefined = container
  while (element && element !== document.documentElement) {
    if (isScrollElement(element)) {
      if ('offsetHeight' in element) scrollElements.push(element)
    }
    element = element.parentElement ?? undefined
  }
  return scrollElements
}
