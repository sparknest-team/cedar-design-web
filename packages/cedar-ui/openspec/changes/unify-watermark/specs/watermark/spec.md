# Watermark contract

Watermark SHALL independently own a non-interactive visual layer while its default slot remains normal page content. Text supports one or multiple lines; an image takes precedence and falls back to text after a reported image failure. Explicit size overrides automatic text measurement.

The common Props SHALL be content, image, width, height, gap, offset, rotate, font, zIndex, alpha, antiTamper, grayscale, repeat, staggered and fullscreen with the defaults recorded in the design. Values SHALL update the generated layer without requiring a manual method call.

The generated tile SHALL preserve CSS-pixel dimensions across device pixel ratios, include the rotated mark's complete bounds, and implement real alternating-row staggering. Old asynchronous image results SHALL NOT replace a newer render.

When antiTamper is enabled, removal or modification of the owned layer SHALL restore it without reacting to unrelated DOM mutations or recursively reacting to internal writes. When disabled, no tamper observer SHALL be active.

Fullscreen mode SHALL attach the visual layer to the document body and cover the viewport without moving the default slot. Local mode SHALL attach it to the component wrapper. Both modes SHALL be pointer-transparent and aria-hidden.

SSR SHALL NOT access browser globals. Deactivation and unmount SHALL cancel scheduled/asynchronous work, disconnect observers and remove owned DOM. Activation SHALL rebuild from current Props.

The public method SHALL be redraw. The component SHALL emit error for image or canvas failures. There SHALL be no watermark-content slot and no resize compatibility method.
