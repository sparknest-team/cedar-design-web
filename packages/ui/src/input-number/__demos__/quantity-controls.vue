<script setup lang="ts">
import { computed, onBeforeUnmount, ref, shallowRef } from "vue";

const copy = {
  quantityInput: "数量控制示例",
  asyncInput: "异步数量示例",
  waiting: (value: unknown) => `等待提交 ${value ?? "空值"}`,
  cancelled: "已取消，旧结果不再生效",
  approved: "已允许",
  rejected: "已拒绝",
  failed: "请求失败，保留原值",
  requestError: "数量提交失败",
  title: "数量控制与步进方向",
  buttonsOnly: "禁止手输",
  disableIncrease: "禁用增加",
  disableDecrease: "禁用减少",
  showIncrease: "显示增加",
  showDecrease: "显示减少",
  longPress: "开启长按",
  acceptedStep: "已接受的步进",
  asyncTitle: "异步允许、拒绝与取消提交",
  asyncHint: "加减、输入或清空后，在下方手动选择审批结果。等待时不能重复提交；外部回填或禁用会取消旧请求。",
  approve: "允许本次变更",
  reject: "拒绝本次变更",
  simulateFailure: "模拟失败",
  externalValue: "外部回填 10",
  enable: "恢复可用",
  disable: "禁用控件",
  committedValue: "已提交值"
};
const value = ref<number | null | undefined>(2);
const disableInput = ref(true);
const disableIncrement = ref(false);
const disableDecrement = ref(false);
const incrementButton = ref(true);
const decrementButton = ref(true);
const press = ref(true);
const lastStep = ref("—");
function handleStep(next: number, direction: string) {
  lastStep.value = `${direction}: ${next}`;
}
const approved = ref<number | null | undefined>(2);
const blocked = ref(false);
const pending = ref(false);
const statusKey = ref<
  "waiting" | "cancelled" | "approved" | "rejected" | "failed"
>();
const proposedValue = shallowRef<unknown>();
const status = computed(() => {
  if (!statusKey.value) return "—";
  return statusKey.value === "waiting"
    ? copy.waiting(proposedValue.value)
    : copy[statusKey.value];
});
const decision = shallowRef<((allowed: boolean) => void) | undefined>();
const fail = shallowRef<(() => void) | undefined>();
function beforeCommit(
  { value: next }: { value: unknown },
  _done: (allow?: boolean) => void,
  { signal }: { signal: AbortSignal },
) {
  pending.value = true;
  proposedValue.value = next;
  statusKey.value = "waiting";
  return new Promise<void | false>((resolve, reject) => {
    const cleanup = () => {
      signal.removeEventListener("abort", cancel);
      pending.value = false;
      decision.value = undefined;
      fail.value = undefined;
    };
    const cancel = () => {
      cleanup();
      statusKey.value = "cancelled";
      resolve(false);
    };
    signal.addEventListener("abort", cancel, { once: true });
    decision.value = (allowed) => {
      cleanup();
      statusKey.value = allowed ? "approved" : "rejected";
      resolve(allowed ? undefined : false);
    };
    fail.value = () => {
      cleanup();
      statusKey.value = "failed";
      reject(new Error(copy.requestError));
    };
  });
}
onBeforeUnmount(() => decision.value?.(false));
</script>

<template>
  <div class="quantity-controls-demo">
    <h4>
      数量控制与步进方向
    </h4>
    <c-space wrap>
      <c-checkbox v-model="disableInput" edit-mode="direct">禁止手输</c-checkbox>
      <c-checkbox v-model="disableIncrement" edit-mode="direct">禁用增加</c-checkbox>
      <c-checkbox v-model="disableDecrement" edit-mode="direct">禁用减少</c-checkbox>
      <c-checkbox v-model="incrementButton" edit-mode="direct">显示增加</c-checkbox>
      <c-checkbox v-model="decrementButton" edit-mode="direct">显示减少</c-checkbox>
      <c-checkbox v-model="press" edit-mode="direct">开启长按</c-checkbox>
    </c-space>
    <c-input-number
      v-model="value"
      edit-mode="direct"
      mode="button"
      aria-label="数量控制示例"
      :disable-input="disableInput"
      :disable-increment="disableIncrement"
      :disable-decrement="disableDecrement"
      :increment-button="incrementButton"
      :decrement-button="decrementButton"
      :press="press"
      :min="0"
      :max="10"
      @step="handleStep"
    />
    <p role="status">已接受的步进：{{ lastStep }}</p>
    <h4>
      异步允许、拒绝与取消提交
    </h4>
    <p>
      加减、输入或清空后，在下方手动选择审批结果。等待时不能重复提交；外部回填或禁用会取消旧请求。
    </p>
    <c-input-number
      v-model="approved"
      edit-mode="direct"
      mode="button"
      clearable
      aria-label="异步数量示例"
      :before-commit="beforeCommit"
      loading-mode="line"
      :disabled="blocked"
    />
    <c-space wrap>
      <c-button :disabled="!pending" @click="decision?.(true)">允许本次变更</c-button>
      <c-button :disabled="!pending" @click="decision?.(false)">拒绝本次变更</c-button>
      <c-button :disabled="!pending" @click="fail?.()">模拟失败</c-button>
      <c-button @click="approved = 10">外部回填 10</c-button>
      <c-button @click="blocked = !blocked">{{
        blocked ? copy.enable : copy.disable
      }}</c-button>
    </c-space>
    <p role="status">
      {{ status }}；已提交值：{{ approved ?? "—" }}
    </p>
  </div>
</template>
