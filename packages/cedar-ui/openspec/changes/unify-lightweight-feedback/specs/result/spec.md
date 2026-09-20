## ADDED Requirements

### Requirement: Unified Result contract
Cedar and Maple SHALL expose the same Result Props (`status`, `title`, `subtitle`, `imageSize`, `animation`) and slots (`icon`, `title`, `subtitle`, `extra`, `default`). `image` and `footer` SHALL NOT remain in the public API.

#### Scenario: Default status rendering
Given no status is supplied, Result SHALL render the `info` graphic. Given any supported status (`info`, `success`, `warning`, `danger`, `question`, `empty`, `403`, `404`, `500`), it SHALL render a non-empty status graphic in the common image container.

#### Scenario: Invalid status
Given an unsupported status value, the runtime Prop validator SHALL reject it and the TypeScript public type SHALL not accept it.

#### Scenario: Text content and slots
Result SHALL render title and subtitle containers when their respective Prop or slot exists. Slot content SHALL replace the Prop text while preserving the component-owned layout container.

#### Scenario: Action and detail areas
Given both `extra` and `default` slots, Result SHALL render the action area before the additional-detail area, after the status graphic, title and subtitle.

#### Scenario: Custom status graphic
Given an `icon` slot, Result SHALL use it instead of every built-in status graphic and SHALL expose the normalized image size as a slot Prop without forcing dimensions on the custom content.

### Requirement: Result graphic sizing and motion
All built-in Result graphics SHALL derive their outer dimensions from `imageSize` and their internal stroke dimensions proportionally. String sizes SHALL retain their CSS unit and numeric sizes SHALL use pixels. Graphic animation SHALL follow the `animation` Prop and the user's reduced-motion preference.

#### Scenario: Custom image size
Given `imageSize=100` or `imageSize="100px"`, every built-in status graphic SHALL use the same 100px outer size and proportional internal geometry.

#### Scenario: Disabled animation
Given `animation=false`, built-in status graphics SHALL render their final static state without starting CSS or SVG animation.

#### Scenario: Reduced motion
Given `animation=true` and `prefers-reduced-motion: reduce`, built-in status graphics SHALL render without motion.

#### Scenario: Result SSR
Rendering any Result status during SSR SHALL be deterministic and SHALL NOT access browser globals.
