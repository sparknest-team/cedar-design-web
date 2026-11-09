# Repair Map controlled values and geocoding

Map and MapSelect must propose independent model values instead of mutating parent objects. MapSelect must reflect the current model, discard stale geocoding work, and report current geocoding failures. The map SDK remains unavailable and its lifecycle is a separate acceptance boundary.
