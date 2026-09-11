# Scheduler range data source

Add an independently exported Vue composable for loading only the visible event window. Keep Scheduler's existing v-model and persistence hooks unchanged, and keep scheduler/core free of Vue and network dependencies.

The first iteration supports exact-range resource-scoped requests, abort/race protection, bounded TTL/LRU caching, manual refresh, error state and disposal. No event pagination, server adapter, automatic persistence or virtualization is implied.
