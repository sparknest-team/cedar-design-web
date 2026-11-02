# Repair Table lazy ownership and manual slot loading

Cedar lazy child caches belong to the current raw node and key, and cell callbacks belong to a current request/lifecycle generation. Native-slot tables honor existing loading options and root busy state without replacing editable rows. Maple retains its native-table responsibilities.
