<template>
  <div class="icon-demo-container">
    <div class="icon-grid">
      <div class="icon-item">
        <c-icon-arrow-down :size="32" />
        <span class="icon-name">icon-arrow-down</span>
      </div>
      <div class="icon-item">
        <c-icon-arrow-fall :size="32" />
        <span class="icon-name">icon-arrow-fall</span>
      </div>
      <div class="icon-item">
        <c-icon-arrow-left :size="32" />
        <span class="icon-name">icon-arrow-left</span>
      </div>
      <div class="icon-item">
        <c-icon-arrow-right :size="32" />
        <span class="icon-name">icon-arrow-right</span>
      </div>
      <div class="icon-item">
        <c-icon-arrow-rise :size="32" />
        <span class="icon-name">icon-arrow-rise</span>
      </div>
      <div class="icon-item">
        <c-icon-arrow-up :size="32" />
        <span class="icon-name">icon-arrow-up</span>
      </div>
      <div class="icon-item">
        <c-icon-caret-down :size="32" />
        <span class="icon-name">icon-caret-down</span>
      </div>
      <div class="icon-item">
        <c-icon-caret-left :size="32" />
        <span class="icon-name">icon-caret-left</span>
      </div>
      <div class="icon-item">
        <c-icon-caret-right :size="32" />
        <span class="icon-name">icon-caret-right</span>
      </div>
      <div class="icon-item">
        <c-icon-caret-up :size="32" />
        <span class="icon-name">icon-caret-up</span>
      </div>
      <div class="icon-item">
        <c-icon-double-down :size="32" />
        <span class="icon-name">icon-double-down</span>
      </div>
      <div class="icon-item">
        <c-icon-double-left :size="32" />
        <span class="icon-name">icon-double-left</span>
      </div>
      <div class="icon-item">
        <c-icon-double-right :size="32" />
        <span class="icon-name">icon-double-right</span>
      </div>
      <div class="icon-item">
        <c-icon-double-up :size="32" />
        <span class="icon-name">icon-double-up</span>
      </div>
      <div class="icon-item">
        <c-icon-down-circle :size="32" />
        <span class="icon-name">icon-down-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-down :size="32" />
        <span class="icon-name">icon-down</span>
      </div>
      <div class="icon-item">
        <c-icon-drag-arrow :size="32" />
        <span class="icon-name">icon-drag-arrow</span>
      </div>
      <div class="icon-item">
        <c-icon-expand :size="32" />
        <span class="icon-name">icon-expand</span>
      </div>
      <div class="icon-item">
        <c-icon-left-circle :size="32" />
        <span class="icon-name">icon-left-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-left :size="32" />
        <span class="icon-name">icon-left</span>
      </div>
      <div class="icon-item">
        <c-icon-menu-fold :size="32" />
        <span class="icon-name">icon-menu-fold</span>
      </div>
      <div class="icon-item">
        <c-icon-menu-unfold :size="32" />
        <span class="icon-name">icon-menu-unfold</span>
      </div>
      <div class="icon-item">
        <c-icon-right-circle :size="32" />
        <span class="icon-name">icon-right-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-right :size="32" />
        <span class="icon-name">icon-right</span>
      </div>
      <div class="icon-item">
        <c-icon-rotate-left :size="32" />
        <span class="icon-name">icon-rotate-left</span>
      </div>
      <div class="icon-item">
        <c-icon-rotate-right :size="32" />
        <span class="icon-name">icon-rotate-right</span>
      </div>
      <div class="icon-item">
        <c-icon-shrink :size="32" />
        <span class="icon-name">icon-shrink</span>
      </div>
      <div class="icon-item">
        <c-icon-swap :size="32" />
        <span class="icon-name">icon-swap</span>
      </div>
      <div class="icon-item">
        <c-icon-to-bottom :size="32" />
        <span class="icon-name">icon-to-bottom</span>
      </div>
      <div class="icon-item">
        <c-icon-to-left :size="32" />
        <span class="icon-name">icon-to-left</span>
      </div>
      <div class="icon-item">
        <c-icon-to-right :size="32" />
        <span class="icon-name">icon-to-right</span>
      </div>
      <div class="icon-item">
        <c-icon-to-top :size="32" />
        <span class="icon-name">icon-to-top</span>
      </div>
      <div class="icon-item">
        <c-icon-up-circle :size="32" />
        <span class="icon-name">icon-up-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-up :size="32" />
        <span class="icon-name">icon-up</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.icon-demo-container {
  padding: 20px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.icon-item:hover {
  border-color: #3b82f6;
  background-color: #f9fafb;
  transform: translateY(-2px);
}

.icon-name {
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  word-break: break-all;
}
</style>
