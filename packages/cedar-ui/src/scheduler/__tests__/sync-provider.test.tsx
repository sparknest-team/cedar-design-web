import { test, expect, vi } from "vitest";
import { createSchedulerMemoryProvider } from "../adapters/sync";
const event = {
  id: "a",
  title: "A",
  start: "2026-09-22T09:00:00Z",
  end: "2026-09-22T10:00:00Z",
};
test("provider revisions reject concurrent writes and subscriptions detach snapshots", async () => {
  const source = createSchedulerMemoryProvider([event]);
  const listener = vi.fn();
  const stop = source.subscribe!(listener);
  const changed = await source.commit(
    [{ type: "update", event: { ...event, title: "B" } }],
    0,
    "editor",
  );
  expect(changed.revision).toBe(1);
  expect(listener.mock.calls[0][1]).toBe("editor");
  changed.events[0].title = "tampered";
  await expect(
    source.commit([{ type: "update", event }], 0),
  ).rejects.toMatchObject({ code: "stale" });
  const loaded = await source.load(
    { start: new Date("2026-09-22"), end: new Date("2026-09-23") },
    new AbortController().signal,
  );
  expect(loaded.events[0].title).toBe("B");
  stop();
  await source.commit([{ type: "update", event }], 1);
  expect(listener).toHaveBeenCalledTimes(1);
});
