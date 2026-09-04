import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Image from "../image.vue";
import ImagePreviewGroup from "../preview-group.vue";
import ImagePreview from "../preview.vue";
import Overlay from "../../overlay/overlay.vue";
import { imagePreviewGroupProps } from "../groupProps";
import { imagePreviewProps } from "../previewProps";
import { imageProps } from "../props";
import { normalizePreviewOptions } from "../utils/normalizePreviewOptions";
import { imagePreview, previewImage, ImagePreviewAction } from "../index";

describe("image api contract", () => {
  it("exports the unified family API", () => {
    expect(imagePreview).toBe(previewImage);
    expect(ImagePreviewAction).toBeTruthy();
  });
  it("uses only canonical Image props", () => {
    for (const key of [
      "objectFit",
      "objectPosition",
      "fallbackSrc",
      "previewDisabled",
      "previewProps",
    ])
      expect(imageProps).toHaveProperty(key);
    for (const key of [
      "fit",
      "position",
      "preview",
      "loadingSrc",
      "errorSrc",
      "renderToBody",
    ])
      expect(imageProps).not.toHaveProperty(key);
  });

  it("keeps collection state exclusively on ImagePreviewGroup", () => {
    for (const key of ["images", "current", "defaultCurrent", "loop"]) {
      expect(imagePreviewProps).not.toHaveProperty(key);
      expect(imagePreviewGroupProps).toHaveProperty(key);
    }
    expect(imagePreviewGroupProps).not.toHaveProperty("previewProps");
    expect(imagePreviewProps).not.toHaveProperty("closeOnImageTap");
    expect(imagePreviewProps).not.toHaveProperty("maskClosable");
    expect(imagePreviewProps).toHaveProperty("overlayClosable");
  });

  it("supports single-image transforms", async () => {
    const wrapper = mount(ImagePreview, {
      props: {
        src: "a.jpg",
        defaultOpen: true,
        popupContainer: false,
      },
    });
    expect(wrapper.findComponent(Overlay).props()).toMatchObject({
      overlayClosable: true,
      unmountOnClose: false,
    });
    wrapper.vm.zoomTo(2);
    wrapper.vm.rotateRight();
    expect([wrapper.vm.scale, wrapper.vm.rotate]).toEqual([2, 90]);
    expect(wrapper.vm.mergedActions).not.toContain("prev");
    expect(wrapper.vm.mergedActions).not.toContain("next");
    await wrapper.find(".c-image-preview-close-btn").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
    wrapper.unmount();
  });

  it("keeps the preview open on image click and closes outside the image", async () => {
    const wrapper = mount(ImagePreview, {
      props: {
        src: "a.jpg",
        defaultOpen: true,
        popupContainer: false,
        imagePreventDefault: true,
      },
    });
    const image = wrapper.find("[data-image-preview-image]");
    const stage = wrapper.find("[data-image-preview-stage]");
    await image.trigger("pointerdown", {
      button: 0,
      pointerId: 1,
      pointerType: "mouse",
      clientX: 20,
      clientY: 20,
    });
    await image.trigger("pointerup", {
      button: 0,
      pointerId: 1,
      pointerType: "mouse",
      clientX: 20,
      clientY: 20,
    });
    await stage.trigger("click");
    expect(wrapper.vm.mergedOpen).toBe(true);
    await stage.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.mergedOpen).toBe(false);
    wrapper.unmount();
  });

  it("honors Image previewProps.overlayClosable", async () => {
    const closableWrapper = mount(Image, {
      props: {
        src: "a.jpg",
        defaultPreviewOpen: true,
        previewProps: { overlayClosable: true },
        popupContainer: false,
      },
    });
    await closableWrapper.find("[data-image-preview-image]").trigger("click");
    await closableWrapper.vm.$nextTick();
    expect(closableWrapper.emitted("update:previewOpen")).toBeUndefined();
    expect(closableWrapper.findComponent(ImagePreview).vm.mergedOpen).toBe(
      true,
    );
    await closableWrapper
      .find(".c-image-preview-img-container")
      .trigger("click");
    await closableWrapper.vm.$nextTick();
    expect(closableWrapper.emitted("update:previewOpen")?.at(-1)).toEqual([
      false,
    ]);
    closableWrapper.unmount();

    const persistentWrapper = mount(Image, {
      props: {
        src: "a.jpg",
        defaultPreviewOpen: true,
        previewProps: { overlayClosable: false },
        popupContainer: false,
      },
    });
    await persistentWrapper
      .find(".c-image-preview-img-container")
      .trigger("click");
    await persistentWrapper.vm.$nextTick();
    expect(
      persistentWrapper.findComponent(Overlay).props("overlayClosable"),
    ).toBe(false);
    expect(persistentWrapper.emitted("update:previewOpen")).toBeUndefined();
    expect(persistentWrapper.findComponent(ImagePreview).vm.mergedOpen).toBe(
      true,
    );
    persistentWrapper.unmount();
  });

  it("delegates Escape closing to Overlay exactly once", async () => {
    const wrapper = mount(ImagePreview, {
      props: { src: "a.jpg", defaultOpen: true, popupContainer: false },
    });
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("keyEscape")).toHaveLength(1);
    expect(wrapper.emitted("update:open")).toEqual([[false]]);
    wrapper.unmount();
  });

  it("closes a group only when clicking outside its images", async () => {
    const wrapper = mount(ImagePreviewGroup, {
      props: {
        images: ["a.jpg", "b.jpg"],
        defaultOpen: true,
        popupContainer: false,
        imagePreventDefault: true,
      },
    });
    await wrapper.find("[data-image-preview-image]").trigger("click");
    expect(wrapper.vm.mergedOpen).toBe(true);
    await wrapper.find(".c-image-preview-img-container").trigger("click");
    expect(wrapper.vm.mergedOpen).toBe(false);
    wrapper.unmount();
  });

  it("lets ImagePreviewGroup own navigation", async () => {
    vi.useFakeTimers();
    const wrapper = mount(ImagePreviewGroup, {
      props: {
        images: ["a.jpg", "b.jpg"],
        defaultOpen: true,
        popupContainer: false,
      },
    });
    expect(wrapper.findComponent(ImagePreview).props("src")).toBe("a.jpg");
    expect(
      wrapper.find(".c-image-preview-arrow-left").attributes("disabled"),
    ).toBeDefined();
    const nextArrow = wrapper.find(".c-image-preview-arrow-right");
    await nextArrow.trigger("pointerdown", {
      button: 0,
      pointerId: 1,
      pointerType: "touch",
      clientX: 0,
      clientY: 0,
    });
    await nextArrow.trigger("pointerup", {
      button: 0,
      pointerId: 1,
      pointerType: "touch",
      clientX: 0,
      clientY: 0,
    });
    await nextArrow.trigger("click");
    await wrapper.vm.$nextTick();
    vi.advanceTimersByTime(321);
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ImagePreview).props("src")).toBe("b.jpg");
    expect(wrapper.findAll(".c-image-preview-slide")).toHaveLength(2);
    expect(
      wrapper.find(".c-image-preview-track").attributes("style"),
    ).toContain("calc(-100% + 0px)");
    expect(wrapper.vm.mergedOpen).toBe(true);
    expect(wrapper.findComponent(ImagePreview).vm.mergedOpen).toBe(true);
    expect(wrapper.emitted("change")?.at(-1)).toEqual([1, 0]);

    const stage = wrapper.find("[data-image-preview-stage]");
    await stage.trigger("pointerdown", {
      button: 0,
      pointerId: 2,
      pointerType: "touch",
      clientX: 100,
      clientY: 20,
    });
    await stage.trigger("pointermove", {
      button: 0,
      pointerId: 2,
      pointerType: "touch",
      clientX: 164,
      clientY: 20,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ImagePreview).vm.translateX).toBe(64);
    expect(wrapper.findComponent(ImagePreview).vm.moving).toBe(true);
    expect(
      wrapper.find(".c-image-preview-track").attributes("style"),
    ).toContain("calc(-100% + 64px)");
    await stage.trigger("pointerup", {
      button: 0,
      pointerId: 2,
      pointerType: "touch",
      clientX: 164,
      clientY: 20,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ImagePreview).props("src")).toBe("a.jpg");
    expect(
      wrapper.find(".c-image-preview-track").attributes("style"),
    ).toContain("calc(0% + 0px)");
    expect(wrapper.findComponent(ImagePreview).vm.translateX).toBe(0);
    expect(wrapper.findComponent(ImagePreview).vm.moving).toBe(false);
    expect(wrapper.emitted("change")?.at(-1)).toEqual([0, 1]);
    wrapper.vm.zoomTo(2);
    expect(wrapper.findComponent(ImagePreview).vm.scale).toBe(2);
    wrapper.vm.rotateRight();
    expect(wrapper.findComponent(ImagePreview).vm.rotate).toBe(90);
    wrapper.unmount();
    vi.useRealTimers();
  });

  it("recenters loop clones without an animated jump", async () => {
    vi.useFakeTimers();
    const wrapper = mount(ImagePreviewGroup, {
      props: {
        images: ["a.jpg", "b.jpg"],
        defaultCurrent: 1,
        defaultOpen: true,
        loop: true,
        defaultScale: 1.25,
        popupContainer: false,
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll(".c-image-preview-slide")).toHaveLength(6);
    expect(
      wrapper
        .findAll("[data-image-preview-image]")
        .every((image) => image.attributes("style").includes("scale(1.25)")),
    ).toBe(true);
    wrapper.vm.next();
    await wrapper.vm.$nextTick();
    expect(
      wrapper.find(".c-image-preview-track").attributes("style"),
    ).toContain("calc(-400% + 0px)");
    await wrapper
      .find(".c-image-preview-track")
      .trigger("transitionend", { propertyName: "transform" });
    await wrapper.vm.$nextTick();
    expect(
      wrapper.find(".c-image-preview-track").attributes("style"),
    ).toContain("calc(-200% + 0px)");
    expect(wrapper.find(".c-image-preview-track").classes()).toContain(
      "c-image-preview-track-instant",
    );
    expect(
      wrapper
        .findAll("[data-image-preview-image]")
        .every((image) => image.attributes("style").includes("scale(1.25)")),
    ).toBe(true);
    wrapper.unmount();
    vi.useRealTimers();
  });

  it("does not treat cancelled group gestures as a double tap", async () => {
    vi.useFakeTimers();
    const wrapper = mount(ImagePreviewGroup, {
      props: {
        images: ["a.jpg", "b.jpg"],
        defaultOpen: true,
        loop: true,
        popupContainer: false,
      },
    });
    const stage = wrapper.find("[data-image-preview-stage]");
    for (const pointerId of [10, 11]) {
      await stage.trigger("pointerdown", {
        button: 0,
        pointerId,
        pointerType: "touch",
        clientX: 40,
        clientY: 40,
      });
      await stage.trigger("pointercancel", {
        pointerId,
        pointerType: "touch",
        clientX: 40,
        clientY: 40,
      });
    }
    vi.advanceTimersByTime(321);
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ImagePreview).vm.scale).toBe(1);
    expect(wrapper.vm.mergedOpen).toBe(true);
    wrapper.unmount();
    vi.useRealTimers();
  });

  it("does not zoom when navigation arrows emit a double click", async () => {
    const wrapper = mount(ImagePreviewGroup, {
      props: {
        images: ["a.jpg", "b.jpg"],
        defaultOpen: true,
        loop: true,
        popupContainer: false,
      },
    });
    const nextArrow = wrapper.find(".c-image-preview-arrow-right");
    await nextArrow.trigger("click");
    await nextArrow.trigger("click");
    await nextArrow.trigger("dblclick");
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ImagePreview).vm.scale).toBe(1);
    expect(wrapper.vm.mergedCurrent).toBe(0);
    wrapper.unmount();
  });

  it("opens embedded preview from Image", async () => {
    const wrapper = mount(Image, {
      props: { src: "a.jpg", popupContainer: false },
    });
    wrapper.vm.onImgLoaded(new Event("load"));
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isLoaded).toBe(true);
    expect(wrapper.vm.mergePreview).toBe(true);
    await wrapper.find("img").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:previewOpen")?.at(-1)).toEqual([true]);
    await wrapper
      .findComponent(ImagePreview)
      .find(".c-image-preview-close-btn")
      .trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:previewOpen")?.at(-1)).toEqual([false]);
    wrapper.unmount();
  });

  it("normalizes imperative inputs", () => {
    expect(normalizePreviewOptions("a.jpg")).toEqual(
      expect.objectContaining({ images: ["a.jpg"] }),
    );
    expect(normalizePreviewOptions(["a.jpg", "b.jpg"])).toEqual(
      expect.objectContaining({ images: ["a.jpg", "b.jpg"] }),
    );
  });
});
