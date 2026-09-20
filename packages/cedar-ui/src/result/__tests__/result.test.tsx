import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { Result } from "../index";

describe("Result", () => {
  test("renders status, title and subtitle", () => {
    const wrapper = mount(Result, {
      props: {
        status: "success",
        title: "Saved",
        subtitle: "All changes are live",
      },
    });

    expect(wrapper.find(".c-result__success").exists()).toBe(true);
    expect(wrapper.get(".c-result__title").text()).toBe("Saved");
    expect(wrapper.get(".c-result__subtitle").text()).toBe(
      "All changes are live",
    );
  });

  test("uses the shared danger status vocabulary", () => {
    const wrapper = mount(Result, { props: { status: "danger" } });

    expect(wrapper.find(".c-result__danger").exists()).toBe(true);
  });

  test("renders content slots", () => {
    const wrapper = mount(Result, {
      slots: { default: "Details", extra: "Retry" },
    });

    expect(wrapper.get(".c-result__content").text()).toBe("Details");
    expect(wrapper.get(".c-result__extra").text()).toBe("Retry");
  });

  test("supports image size, animation and custom icon slots", () => {
    const sized = mount(Result, {
      props: { status: "empty", imageSize: 100, animation: false },
    });
    expect(sized.get(".c-result__image").attributes("style")).toContain(
      "--c-result-image-size: 100px",
    );
    expect(sized.get(".c-result__image").classes()).not.toContain(
      "c-result--animated",
    );

    const custom = mount(Result, {
      props: { imageSize: "6rem" },
      slots: { icon: ({ size }: { size?: string }) => `custom ${size}` },
    });
    expect(custom.get(".c-result__image-container").text()).toBe("custom 6rem");
    expect(custom.find(".c-result__image").exists()).toBe(false);
  });

  test("renders all result statuses", () => {
    for (const status of [
      "info",
      "success",
      "warning",
      "danger",
      "question",
      "empty",
      "403",
      "404",
      "500",
    ] as const) {
      const wrapper = mount(Result, { props: { status } });
      expect(wrapper.get(`.c-result__${status}`).find("svg").exists()).toBe(
        true,
      );
      wrapper.unmount();
    }
  });
});
