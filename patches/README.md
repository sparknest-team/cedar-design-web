# Dependency patches

- `vitest@0.22.1.patch`: Vitest 0.22.1 creates a Tinypool worker pool but leaves its `close()` implementation empty. Destroy the pool during shutdown so its worker and message port do not keep the process alive until the teardown timeout. Remove this patch when upgrading to a Vitest version that closes its pool, and verify both one-shot and watch runs.
