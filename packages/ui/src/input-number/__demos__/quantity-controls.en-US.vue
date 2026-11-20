<script setup lang="ts">
import { computed, onBeforeUnmount, ref, shallowRef } from "vue";

const copy = {
  quantityInput: "Quantity controls example",
  asyncInput: "Asynchronous quantity example",
  waiting: (value: unknown) => `Waiting to commit ${value ?? "empty"}`,
  cancelled: "Cancelled; old result ignored",
  approved: "Approved",
  rejected: "Rejected",
  failed: "Request failed; value preserved",
  requestError: "Quantity request failed",
  title: "Quantity controls and step direction",
  buttonsOnly: "Buttons only",
  disableIncrease: "Disable increase",
  disableDecrease: "Disable decrease",
  showIncrease: "Show increase",
  showDecrease: "Show decrease",
  longPress: "Long press",
  acceptedStep: "Accepted step",
  asyncTitle: "Approve, reject or cancel an asynchronous commit",
  asyncHint: "Step, type or clear the value, then choose an approval result below. Pending operations cannot overlap. External updates and disabling cancel the old request.",
  approve: "Approve",
  reject: "Reject",
  simulateFailure: "Simulate failure",
  externalValue: "Set external value to 10",
  enable: "Enable",
  disable: "Disable",
  committedValue: "Committed value"
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
      Quantity controls and step direction
    </h4>
    <c-space wrap>
      <c-checkbox v-model="disableInput" edit-mode="direct">Buttons only</c-checkbox>
      <c-checkbox v-model="disableIncrement" edit-mode="direct">Disable increase</c-checkbox>
      <c-checkbox v-model="disableDecrement" edit-mode="direct">Disable decrease</c-checkbox>
      <c-checkbox v-model="incrementButton" edit-mode="direct">Show increase</c-checkbox>
      <c-checkbox v-model="decrementButton" edit-mode="direct">Show decrease</c-checkbox>
      <c-checkbox v-model="press" edit-mode="direct">Long press</c-checkbox>
    </c-space>
    <c-input-number
      v-model="value"
      edit-mode="direct"
      mode="button"
      aria-label="Quantity controls example"
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
    <p role="status">Accepted step：{{ lastStep }}</p>
    <h4>
      Approve, reject or cancel an asynchronous commit
    </h4>
    <p>
      Step, type or clear the value, then choose an approval result below. Pending operations cannot overlap. External updates and disabling cancel the old request.
    </p>
    <c-input-number
      v-model="approved"
      edit-mode="direct"
      mode="button"
      clearable
      aria-label="Asynchronous quantity example"
      :before-commit="beforeCommit"
      loading-mode="line"
      :disabled="blocked"
    />
    <c-space wrap>
      <c-button :disabled="!pending" @click="decision?.(true)">Approve</c-button>
      <c-button :disabled="!pending" @click="decision?.(false)">Reject</c-button>
      <c-button :disabled="!pending" @click="fail?.()">Simulate failure</c-button>
      <c-button @click="approved = 10">Set external value to 10</c-button>
      <c-button @click="blocked = !blocked">{{
        blocked ? copy.enable : copy.disable
      }}</c-button>
    </c-space>
    <p role="status">
      {{ status }}；Committed value：{{ approved ?? "—" }}
    </p>
  </div>
</template>
