import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { Skeleton, SkeletonLine, SkeletonShape } from "../index";

describe("Skeleton", () => {
  test("switches from the skeleton template to actual content", async () => {
    const wrapper = mount(Skeleton, {
      props: { animation: true },
      slots: { template: "Loading", default: "Loaded" },
    });

    expect(wrapper.classes()).toContain("c-skeleton--animation");
    expect(wrapper.text()).toBe("Loading");

    await wrapper.setProps({ loading: false });
    expect(wrapper.text()).toBe("Loaded");
  });

  test("renders the built-in skeleton and reacts to its props", async () => {
    const wrapper = mount(Skeleton, {
      props: { title: true, avatar: true, rows: 2, rowsWidth: [120, "50%"] },
    });

    expect(wrapper.attributes("aria-busy")).toBe("true");
    expect(wrapper.find(".c-skeleton__title").exists()).toBe(true);
    expect(wrapper.find(".c-skeleton__avatar").exists()).toBe(true);
    expect(wrapper.findAll(".c-skeleton__row")).toHaveLength(2);
    expect(
      wrapper.findAll(".c-skeleton__row")[0].attributes("style"),
    ).toContain("width: 120px");

    await wrapper.setProps({ rows: 1, loading: false });
    expect(wrapper.find(".c-skeleton__content").exists()).toBe(false);
    expect(wrapper.attributes("aria-busy")).toBe("false");
  });

  test("renders configured lines", () => {
    const wrapper = mount(SkeletonLine, {
      props: { rows: 2, widths: [120, "50%"], lineHeight: 16, lineSpacing: 8 },
    });
    const rows = wrapper.findAll(".c-skeleton-line__row");

    expect(rows).toHaveLength(2);
    expect(wrapper.classes()).toContain("c-skeleton-line");
    expect(rows[0].attributes("style")).toContain("width: 120px");
    expect(rows[1].attributes("style")).toContain("width: 50%");
    expect(rows[1].attributes("style")).toContain("margin-top: 8px");
  });

  test("renders configured shape", () => {
    const wrapper = mount(SkeletonShape, {
      props: { shape: "circle", size: "lg" },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        "c-skeleton-shape--circle",
        "c-skeleton-shape--lg",
      ]),
    );
  });
});
