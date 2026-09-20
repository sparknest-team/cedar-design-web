import Danger from "./Danger.vue";
import Empty from "./Empty.vue";
import Forbidden from "./403";
import Info from "./Info.vue";
import NotFound from "./404";
import Question from "./Question.vue";
import ServerError from "./500";
import Success from "./Success.vue";
import Warning from "./Warning.vue";
import type { ResultStatus } from "./props";

export const resultStatusComponents: Record<ResultStatus, object> = {
  info: Info,
  success: Success,
  warning: Warning,
  danger: Danger,
  question: Question,
  empty: Empty,
  "403": Forbidden,
  "404": NotFound,
  "500": ServerError,
};
