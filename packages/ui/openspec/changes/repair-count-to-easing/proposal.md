# Read current CountTo easing at reset

Use an options property getter so each existing useMotion context construction snapshots the current prop, rather than its initial setup value. Preserve active-run and pause/resume curve snapshots; clearing selects linear. No new callback prop or composable API.
