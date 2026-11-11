import type { SchedulerEvent } from "../core";
import { schedulerDate } from "../core";
const escape = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );
/** Standalone printable document; user content is escaped and no script is embedded. */
export function createSchedulerPrintHtml(
  events: readonly SchedulerEvent[],
  options: {
    title?: string;
    timeZone?: string;
    locale?: string;
    resourceLabels?: Record<string, string>;
  } = {},
): string {
  const title = escape(options.title ?? "Scheduler");
  const formatter = new Intl.DateTimeFormat(options.locale ?? "zh-CN", {
    timeZone: options.timeZone,
    dateStyle: "medium",
    timeStyle: "short",
  });
  const date = (event: SchedulerEvent, value: SchedulerEvent["start"]) =>
    value == null
      ? "—"
      : event.allDay
        ? String(value)
        : formatter.format(schedulerDate(value));
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>body{font:14px sans-serif;margin:24px}table{border-collapse:collapse;width:100%}th,td{border:1px solid #999;padding:8px;text-align:left;overflow-wrap:anywhere}tr{break-inside:avoid}thead{display:table-header-group}@page{size:landscape;margin:15mm}</style></head><body><h1>${title}</h1><table><thead><tr><th>日程 / Event</th><th>开始 / Start</th><th>结束（不含）/ End</th><th>资源 / Resources</th></tr></thead><tbody>${events.map((event) => `<tr><td>${escape(event.title)}</td><td>${escape(date(event, event.start))}</td><td>${escape(date(event, event.end))}</td><td>${escape((event.resourceIds ?? []).map((id) => options.resourceLabels?.[id] ?? id).join(", "))}</td></tr>`).join("")}</tbody></table></body></html>`;
}
