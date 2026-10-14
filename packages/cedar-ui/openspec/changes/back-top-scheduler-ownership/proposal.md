# BackTop measurement and animation ownership

Preserve both dirty independent source copies and existing props/defaults/ARIA/teleport/horizontal position. Visibility measurement is separate from JS scroll duration/easing. Invalidate detached listeners and canceled/consumed frames across rebinding/deactivation/disposal; recheck request ownership after user easing before writes/rescheduling. Request/cancel RAF and performance origin belong to the actual target window.

Initial14 scoped cases per copy had10 failures/4 controls. A measurement replay probe needed mounted-watch settlement; treat that adjustment separately. Existing tests now patch actual owner RAF/clock. Final14 scoped/full30 each pass using controlled queues/simulated iframe, not native browser/OS/document-adoption acceptance. No cancel API/CSS token added.
