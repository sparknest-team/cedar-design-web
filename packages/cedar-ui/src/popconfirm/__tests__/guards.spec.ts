import { flushPromises, mount } from "@vue/test-utils";
import { afterEach, expect, test, vi } from "vitest";
import Popconfirm from "..";
const owners: ReturnType<typeof mount>[] = [];
afterEach(() => owners.splice(0).forEach((owner) => owner.unmount()));
function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((done) => {
    resolve = done;
  });
  return { promise, resolve };
}
function setup(props: Record<string, any> = {}) {
  const owner = mount(Popconfirm, {
    props: { defaultOpen: true, ...props },
    global: {
      stubs: {
        CTrigger: { template: '<div><slot/><slot name="content"/></div>' },
        teleport: true,
      },
    },
  });
  owners.push(owner);
  return owner;
}
for (const action of ["confirm", "cancel"]) {
  for (const result of [true, false, undefined]) {
    test(`${action} before hook ${String(result)} uses return-value completion`, async () => {
      const modern = vi.fn(async () => result);
      const owner = setup({
        [action === "confirm" ? "beforeConfirm" : "beforeCancel"]: modern,
      });
      await (owner.vm as any)[
        action === "confirm" ? "handleConfirm" : "handleCancel"
      ]();
      await flushPromises();
      expect(modern).toHaveBeenCalledTimes(1);
      expect(owner.emitted(action)?.length ?? 0).toBe(result === false ? 0 : 1);
    });
  }
}
test("pending guard ignores repeated confirm/cancel; external close and reopening invalidate old results", async () => {
  const task = deferred<boolean>();
  let signal!: AbortSignal;
  const modern = vi.fn((_payload, _done, { signal: input }) => {
    signal = input;
    return task.promise;
  });
  const owner = setup({ open: true, beforeConfirm: modern });
  const pending = (owner.vm as any).handleConfirm();
  await (owner.vm as any).handleConfirm();
  await (owner.vm as any).handleCancel();
  expect(modern).toHaveBeenCalledTimes(1);
  await owner.setProps({ open: false });
  await pending;
  expect(signal.aborted).toBe(true);
  await owner.setProps({ open: true });
  task.resolve(true);
  await flushPromises();
  expect(owner.emitted("confirm")).toBeUndefined();
});
test("new and legacy rejections emit guard-error and allow retry without unhandled errors", async () => {
  const cause = new Error("failed");
  const owner = setup({ beforeConfirm: () => Promise.reject(cause) });
  await (owner.vm as any).handleConfirm();
  expect(owner.emitted("guard-error")?.[0]).toEqual([cause, "confirm"]);
  await owner.setProps({ beforeConfirm: () => Promise.reject(cause) });
  await (owner.vm as any).handleConfirm();
  expect(owner.emitted("guard-error")).toHaveLength(2);
  await owner.setProps({ beforeConfirm: () => Promise.resolve() });
  await (owner.vm as any).handleConfirm();
  expect(owner.emitted("confirm")).toHaveLength(1);
});
test("callback completion competes with returned Promise only once", async () => {
  const owner = setup({
    beforeConfirm: (_payload: unknown, done: (allowed?: boolean) => void) => {
      done(false);
      done(true);
      return Promise.resolve(true);
    },
  });
  await (owner.vm as any).handleConfirm();
  expect(owner.emitted("confirm")).toBeUndefined();
  await owner.setProps({
    beforeConfirm: (_payload: unknown, done: (allowed?: boolean) => void) => {
      setTimeout(() => done(), 0);
    },
  });
  await (owner.vm as any).handleConfirm();
  expect(owner.emitted("confirm")).toHaveLength(1);
});
test("unmount aborts a new guard and suppresses late actions", async () => {
  const task = deferred<boolean>();
  let signal!: AbortSignal;
  const owner = setup({
    beforeCancel: (_payload: unknown, _done: unknown, { signal: input }: { signal: AbortSignal }) => {
      signal = input;
      return task.promise;
    },
  });
  const pending = (owner.vm as any).handleCancel();
  owner.unmount();
  await pending;
  expect(signal.aborted).toBe(true);
  task.resolve(true);
  await flushPromises();
  expect(owner.emitted("cancel")).toBeUndefined();
});

test("cancel supports delayed done(false), exceptions, and Promise<void>", async () => {
  const cause = new Error("cancel");
  const owner = setup({
    beforeCancel: (_payload: unknown, done: (allowed?: boolean) => void) => {
      setTimeout(() => done(false), 0);
    },
  });
  await (owner.vm as any).handleCancel();
  expect(owner.emitted("cancel")).toBeUndefined();
  await owner.setProps({
    beforeCancel: () => {
      throw cause;
    },
  });
  await (owner.vm as any).handleCancel();
  expect(owner.emitted("guard-error")?.[0]).toEqual([cause, "cancel"]);
  await owner.setProps({ beforeCancel: async () => undefined });
  await (owner.vm as any).handleCancel();
  expect(owner.emitted("cancel")).toHaveLength(1);
});
