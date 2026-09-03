<template>
  <div class="icon-demo-container">
    <div class="icon-grid">
      <div class="icon-item">
        <c-icon-check-circle-fill :size="32" />
        <span class="icon-name">icon-check-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-close-circle-fill :size="32" />
        <span class="icon-name">icon-close-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-exclamation-circle-fill :size="32" />
        <span class="icon-name">icon-exclamation-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-exclamation-polygon-fill :size="32" />
        <span class="icon-name">icon-exclamation-polygon-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-info-circle-fill :size="32" />
        <span class="icon-name">icon-info-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-minus-circle-fill :size="32" />
        <span class="icon-name">icon-minus-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-plus-circle-fill :size="32" />
        <span class="icon-name">icon-plus-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-question-circle-fill :size="32" />
        <span class="icon-name">icon-question-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-check-circle :size="32" />
        <span class="icon-name">icon-check-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-check-square :size="32" />
        <span class="icon-name">icon-check-square</span>
      </div>
      <div class="icon-item">
        <c-icon-check :size="32" />
        <span class="icon-name">icon-check</span>
      </div>
      <div class="icon-item">
        <c-icon-clock-circle :size="32" />
        <span class="icon-name">icon-clock-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-close-circle :size="32" />
        <span class="icon-name">icon-close-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-close :size="32" />
        <span class="icon-name">icon-close</span>
      </div>
      <div class="icon-item">
        <c-icon-exclamation-circle :size="32" />
        <span class="icon-name">icon-exclamation-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-exclamation :size="32" />
        <span class="icon-name">icon-exclamation</span>
      </div>
      <div class="icon-item">
        <c-icon-info-circle :size="32" />
        <span class="icon-name">icon-info-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-info :size="32" />
        <span class="icon-name">icon-info</span>
      </div>
      <div class="icon-item">
        <c-icon-minus-circle :size="32" />
        <span class="icon-name">icon-minus-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-minus :size="32" />
        <span class="icon-name">icon-minus</span>
      </div>
      <div class="icon-item">
        <c-icon-plus-circle :size="32" />
        <span class="icon-name">icon-plus-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-plus :size="32" />
        <span class="icon-name">icon-plus</span>
      </div>
      <div class="icon-item">
        <c-icon-question-circle :size="32" />
        <span class="icon-name">icon-question-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-question :size="32" />
        <span class="icon-name">icon-question</span>
      </div>
      <div class="icon-item">
        <c-icon-stop :size="32" />
        <span class="icon-name">icon-stop</span>
      </div>
    </div>
  </div>
</template>

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
