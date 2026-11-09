# Textarea auto-size box model and row bounds

Convert measured border-box geometry into the native textarea's CSS height units. Copy individual border widths/styles into measurement, include vertical padding and asymmetric borders once, and let explicit row limits override theme minimum heights. Preserve unbounded auto-size theme behavior and restore native/platform resize when auto-size is disabled. Validate Mention, Scheduler, Map and Form consumers that embed Textarea or reuse measurement styles. Supply the existing auto-size demo on both platforms.
