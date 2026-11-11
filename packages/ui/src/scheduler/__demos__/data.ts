import type { SchedulerEvent, SchedulerResource } from "../core";
export const resources: SchedulerResource[] = [
  { id: "design", label: "林夏 · 设计" },
  { id: "frontend", label: "陈舟 · 前端" },
  { id: "backend", label: "许然 · 后端" },
];
export function createEvents(): SchedulerEvent[] {
  return [
    {
      id: "review",
      title: "首页设计评审",
      start: "2026-09-09T09:00:00",
      end: "2026-09-09T10:30:00",
      resourceIds: ["design", "frontend"],
      description: "共同参加的日程，移动时所有参与人的时间一起改变。",
    },
    {
      id: "api",
      title: "接口联调",
      start: "2026-09-09T10:00:00",
      end: "2026-09-09T12:00:00",
      resourceIds: ["frontend", "backend"],
    },
    {
      id: "research",
      title: "用户访谈",
      start: "2026-09-10T14:00:00",
      end: "2026-09-10T16:00:00",
      resourceIds: ["design"],
    },
    {
      id: "release",
      title: "发布窗口",
      start: "2026-09-11",
      end: "2026-09-12",
      allDay: true,
      resourceIds: ["frontend", "backend"],
    },
    { id: "todo", title: "完善空状态交互", resourceIds: ["design"] },
  ];
}
