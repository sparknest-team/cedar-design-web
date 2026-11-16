<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
import { computed, onBeforeUnmount, ref, shallowRef } from "vue";

const copy = useDemoLocale("quantityControls");
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
    ? copy.value.waiting(proposedValue.value)
    : copy.value[statusKey.value];
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
      reject(new Error(copy.value.requestError));
    };
  });
}
onBeforeUnmount(() => decision.value?.(false));
</script>

<template>
  <div class="quantity-controls-demo">
    <h4>
      {{ copy.title }}
    </h4>
    <c-space wrap>
      <c-checkbox v-model="disableInput" edit-mode="direct">{{
        copy.buttonsOnly
      }}</c-checkbox>
      <c-checkbox v-model="disableIncrement" edit-mode="direct">{{
        copy.disableIncrease
      }}</c-checkbox>
      <c-checkbox v-model="disableDecrement" edit-mode="direct">{{
        copy.disableDecrease
      }}</c-checkbox>
      <c-checkbox v-model="incrementButton" edit-mode="direct">{{
        copy.showIncrease
      }}</c-checkbox>
      <c-checkbox v-model="decrementButton" edit-mode="direct">{{
        copy.showDecrease
      }}</c-checkbox>
      <c-checkbox v-model="press" edit-mode="direct">{{
        copy.longPress
      }}</c-checkbox>
    </c-space>
    <c-input-number
      v-model="value"
      edit-mode="direct"
      mode="button"
      :aria-label="copy.quantityInput"
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
    <p role="status">{{ copy.acceptedStep }}：{{ lastStep }}</p>
    <h4>
      {{ copy.asyncTitle }}
    </h4>
    <p>
      {{ copy.asyncHint }}
    </p>
    <c-input-number
      v-model="approved"
      edit-mode="direct"
      mode="button"
      clearable
      :aria-label="copy.asyncInput"
      :before-commit="beforeCommit"
      loading-mode="line"
      :disabled="blocked"
    />
    <c-space wrap>
      <c-button :disabled="!pending" @click="decision?.(true)">{{
        copy.approve
      }}</c-button>
      <c-button :disabled="!pending" @click="decision?.(false)">{{
        copy.reject
      }}</c-button>
      <c-button :disabled="!pending" @click="fail?.()">{{
        copy.simulateFailure
      }}</c-button>
      <c-button @click="approved = 10">{{ copy.externalValue }}</c-button>
      <c-button @click="blocked = !blocked">{{
        blocked ? copy.enable : copy.disable
      }}</c-button>
    </c-space>
    <p role="status">
      {{ status }}；{{ copy.committedValue }}：{{ approved ?? "—" }}
    </p>
  </div>
</template>
