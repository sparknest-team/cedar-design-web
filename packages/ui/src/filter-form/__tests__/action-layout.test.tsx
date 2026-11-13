import { mount } from "@vue/test-utils";
import { defineComponent, h, nextTick } from "vue";
import { afterEach, expect, test, vi } from "vitest";
import FilterForm from "../FilterForm.vue";

const Control = defineComponent({ setup: () => () => h("input") });
const owners: ReturnType<typeof mount>[] = [];
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount());
  vi.restoreAllMocks();
});

function fixture(props = {}) {
  let gridWidth = 1280;
  let actionsWidth = 80;
  let frames: FrameRequestCallback[] = [];
  vi.spyOn(document.defaultView!, "requestAnimationFrame").mockImplementation((callback) => {
    frames.push(callback);
    return frames.length;
  });
  vi.spyOn(document.defaultView!, "cancelAnimationFrame").mockImplementation(() => {});
  const original = HTMLElement.prototype.getBoundingClientRect;
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
    function () {
      const rect = original.call(this);
      const width = this.classList.contains("c-grid")
        ? gridWidth
        : this.classList.contains("c-filter-form__action-slot")
          ? actionsWidth
          : this.classList.contains("c-filter-form__collapse")
            ? 60
            : rect.width;
      return {
        ...rect,
        width,
        height: 32,
        toJSON: () => ({ width, height: 32 }),
      };
    },
  );
  const owner = mount(FilterForm, {
    attachTo: document.body,
    props: {
      cols: 6,
      fields: Array.from({ length: 8 }, (_, i) => ({
        component: Control,
        field: `f${i}`,
      })),
      ...props,
    },
    slots: { actions: '<button type="button">Reset</button>' },
  });
  owners.push(owner);
  (owner.get(".c-grid").element as HTMLElement).style.columnGap = "16px";
  (
    owner.get(".c-filter-form__actions").element as HTMLElement
  ).style.columnGap = "8px";
  const flush = async () => {
    for (let i = 0; i < 4; i++) {
      await nextTick();
      const pending = frames;
      frames = [];
      pending.forEach((callback) => callback(0));
    }
  };
  return {
    owner,
    flush,
    visibleFields: () =>
      owner
        .findAll(".c-grid > .c-grid-item")
        .slice(0, -1)
        .filter(
          (item) => (item.element as HTMLElement).style.display !== "none",
        ).length,
    resize: async (width: number, actionWidth: number) => {
      gridWidth = width;
      actionsWidth = actionWidth;
      document.defaultView!.dispatchEvent(new Event("resize"));
      await flush();
    },
  };
}

test("collapsed fields use the remaining columns and adapt to container and action widths", async () => {
  const { owner, flush, visibleFields, resize } = fixture();
  await flush();
  expect(visibleFields()).toBe(5);
  await resize(1280, 260);
  expect(visibleFields()).toBe(4);
  await resize(620, 260);
  expect(visibleFields()).toBe(2);
  await resize(1280, 80);
  expect(visibleFields()).toBe(5);
  await owner.get(".c-filter-form__collapse").trigger("click");
  expect(visibleFields()).toBe(8);
});

test("measured action reservation respects grid overrides and multi-column fields", async () => {
  const { owner, flush, visibleFields } = fixture({
    cols: 3,
    gridProps: { cols: 6 },
    fields: [2, 2, 1, 1, 1].map((span, i) => ({
      component: Control,
      field: `f${i}`,
      gridItemProps: { span },
    })),
  });
  await flush();
  expect(visibleFields()).toBe(3);
  await owner.setProps({ gridProps: { cols: 4 } });
  await flush();
  expect(visibleFields()).toBe(1);
});


test("one and two columns retain an independent action row", async () => {
  const { owner, flush, visibleFields } = fixture({ cols: 2 });
  await flush();
  expect(visibleFields()).toBe(2);
  await owner.setProps({ cols: 1 });
  await flush();
  expect(visibleFields()).toBe(1);
});

test("four-column filters show three fields when collapsed and keep actions at the end when expanded", async () => {
  const { owner, flush, visibleFields, resize } = fixture({
    cols: 4,
    fields: Array.from({ length: 10 }, (_, i) => ({
      component: Control,
      field: `f${i}`,
    })),
  });
  await flush();
  const actionItem = () => owner.findAll(".c-grid > .c-grid-item").at(-1)!;
  expect(visibleFields()).toBe(3);
  expect((actionItem().element as HTMLElement).style.gridColumn).toBe("4 / span 1");
  await owner.get(".c-filter-form__collapse").trigger("click");
  await flush();
  expect(visibleFields()).toBe(10);
  expect((actionItem().element as HTMLElement).style.gridColumn).toBe("4 / span 1");
  expect(owner.get(".c-filter-form__collapse").attributes("aria-expanded")).toBe("true");
  // Longer actions reserve more space without reducing expanded field columns.
  await resize(620, 260);
  expect(visibleFields()).toBe(10);
  expect((actionItem().element as HTMLElement).style.gridColumn).toBe("2 / span 3");
  await owner.get(".c-filter-form__collapse").trigger("click");
  await flush();
  expect(visibleFields()).toBe(1);
});
