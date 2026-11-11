# Thumb drag lifecycle

Own mouse listeners and gesture writes by session/node/axis/window. Cancel on normal end, contextmenu, blur, geometry changes, suspension and disposal; old deliveries cannot drive/end a new gesture. Preserve public mouse protocol, CSS variables and active offset/track semantics. Three independent copies and actual parent composition verified separately from native browser/OS.
