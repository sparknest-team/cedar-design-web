import { test, expect } from "vitest";
import { getEventSummaryPosition as position } from "../__demos__/event-summary-position";
const viewport = { left: 0, top: 0, right: 1000, bottom: 800 };
test("side top alignment first, then opposite side and bottom alignment", () => {
  expect(
    position(
      { left: 200, right: 300, top: 100, bottom: 300 },
      { width: 360, height: 220 },
      viewport,
    ),
  ).toMatchObject({ placement: "right-start", x: 310, y: 100 });
  expect(
    position(
      { left: 700, right: 800, top: 100, bottom: 300 },
      { width: 360, height: 220 },
      viewport,
    ),
  ).toMatchObject({ placement: "left-start", x: 330, y: 100 });
  expect(
    position(
      { left: 200, right: 300, top: 650, bottom: 750 },
      { width: 360, height: 220 },
      viewport,
    ),
  ).toMatchObject({ placement: "right-end", x: 310, y: 530 });
});
test("tall cards clamp inside viewport; narrow sides switch above or below", () => {
  expect(
    position(
      { left: 200, right: 300, top: 200, bottom: 700 },
      { width: 360, height: 780 },
      viewport,
    ),
  ).toMatchObject({ y: 8, height: 780 });
  const narrow = { left: 0, top: 0, right: 400, bottom: 800 };
  expect(
    position(
      { left: 150, right: 250, top: 100, bottom: 200 },
      { width: 360, height: 200 },
      narrow,
    ),
  ).toMatchObject({ placement: "bottom-start", x: 32, y: 210 });
  expect(
    position(
      { left: 150, right: 250, top: 600, bottom: 700 },
      { width: 360, height: 200 },
      narrow,
    ),
  ).toMatchObject({ placement: "top-start", y: 390 });
});
test("oversize content and visual viewport offsets remain bounded", () => {
  const r = position(
    { left: 40, right: 100, top: 50, bottom: 120 },
    { width: 900, height: 1600 },
    { left: 20, top: 30, right: 320, bottom: 530 },
  );
  expect(r).toMatchObject({ x: 28, y: 38, width: 284, height: 484 });
});
