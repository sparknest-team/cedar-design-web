<template>
  <c-radio-group default-value="1">
    <c-radio value="1">
      <template #radio="{ checked }">
        <c-tag :checked="checked" checkable>This is a tag radio 1</c-tag>
      </template>
    </c-radio>
    <c-radio value="2">
      <template #radio="{ checked }">
        <c-tag :checked="checked" checkable>This is a tag radio 2</c-tag>
      </template>
    </c-radio>
    <c-radio value="3">
      <template #radio="{ checked }">
        <c-tag :checked="checked" checkable>This is a tag radio 3</c-tag>
      </template>
    </c-radio>
  </c-radio-group>

  <div :style="{ marginTop: '20px' }">
    <c-radio-group>
      <template v-for="item in 2" :key="item">
        <c-radio :value="item">
          <template #radio="{ checked }">
            <c-space align="start" class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
              <div class="custom-radio-card-mask">
                <div class="custom-radio-card-mask-dot" />
              </div>
              <div>
                <div class="custom-radio-card-title">radio Card {{ item }}</div>
                <div>this is a text</div>
              </div>
            </c-space>
          </template>
        </c-radio>
      </template>
    </c-radio-group>
  </div>
</template>

<script lang="ts">
</script>
<style scoped>
.custom-radio-card {
  padding: 10px 16px;
  border: 1px solid var(--color-border-2);
  border-radius: 4px;
  width: 250px;
  box-sizing: border-box;
}

.custom-radio-card-mask {
  height: 14px;
  width: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid var(--color-border-2);
  box-sizing: border-box;
}

.custom-radio-card-mask-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.custom-radio-card-title {
  color: var(--color-text-1);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.custom-radio-card:hover,
.custom-radio-card-checked,
.custom-radio-card:hover .custom-radio-card-mask,
.custom-radio-card-checked .custom-radio-card-mask {
  border-color: rgb(var(--primary-6));
}

.custom-radio-card-checked {
  background-color: var(--color-primary-light-1);
}

.custom-radio-card:hover .custom-radio-card-title,
.custom-radio-card-checked .custom-radio-card-title {
  color: rgb(var(--primary-6));
}

.custom-radio-card-checked .custom-radio-card-mask-dot {
  background-color: rgb(var(--primary-6));
}
</style>
