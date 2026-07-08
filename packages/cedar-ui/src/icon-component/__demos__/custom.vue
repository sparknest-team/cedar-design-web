<template>
  <div class="icon-demo-container">
    <div class="icon-grid">
      <div class="icon-item">
        <c-icon-empty-default :size="32" />
        <span class="icon-name">icon-empty-default</span>
      </div>
      <div class="icon-item">
        <c-icon-error-network :size="32" />
        <span class="icon-name">icon-error-network</span>
      </div>
      <div class="icon-item">
        <c-icon-error-unknown :size="32" />
        <span class="icon-name">icon-error-unknown</span>
      </div>
      <div class="icon-item">
        <c-icon-success-submitted :size="32" />
        <span class="icon-name">icon-success-submitted</span>
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

