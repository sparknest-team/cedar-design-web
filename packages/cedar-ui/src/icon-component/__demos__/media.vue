<template>
  <div class="icon-demo-container">
    <div class="icon-grid">
      <div class="icon-item">
        <c-icon-mute-fill :size="32" />
        <span class="icon-name">icon-mute-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-pause-circle-fill :size="32" />
        <span class="icon-name">icon-pause-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-play-arrow-fill :size="32" />
        <span class="icon-name">icon-play-arrow-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-play-circle-fill :size="32" />
        <span class="icon-name">icon-play-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-skip-next-fill :size="32" />
        <span class="icon-name">icon-skip-next-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-skip-previous-fill :size="32" />
        <span class="icon-name">icon-skip-previous-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-sound-fill :size="32" />
        <span class="icon-name">icon-sound-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-backward :size="32" />
        <span class="icon-name">icon-backward</span>
      </div>
      <div class="icon-item">
        <c-icon-forward :size="32" />
        <span class="icon-name">icon-forward</span>
      </div>
      <div class="icon-item">
        <c-icon-fullscreen-exit :size="32" />
        <span class="icon-name">icon-fullscreen-exit</span>
      </div>
      <div class="icon-item">
        <c-icon-fullscreen :size="32" />
        <span class="icon-name">icon-fullscreen</span>
      </div>
      <div class="icon-item">
        <c-icon-live-broadcast :size="32" />
        <span class="icon-name">icon-live-broadcast</span>
      </div>
      <div class="icon-item">
        <c-icon-music :size="32" />
        <span class="icon-name">icon-music</span>
      </div>
      <div class="icon-item">
        <c-icon-mute :size="32" />
        <span class="icon-name">icon-mute</span>
      </div>
      <div class="icon-item">
        <c-icon-pause-circle :size="32" />
        <span class="icon-name">icon-pause-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-pause :size="32" />
        <span class="icon-name">icon-pause</span>
      </div>
      <div class="icon-item">
        <c-icon-play-arrow :size="32" />
        <span class="icon-name">icon-play-arrow</span>
      </div>
      <div class="icon-item">
        <c-icon-play-circle :size="32" />
        <span class="icon-name">icon-play-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-record-stop :size="32" />
        <span class="icon-name">icon-record-stop</span>
      </div>
      <div class="icon-item">
        <c-icon-record :size="32" />
        <span class="icon-name">icon-record</span>
      </div>
      <div class="icon-item">
        <c-icon-skip-next :size="32" />
        <span class="icon-name">icon-skip-next</span>
      </div>
      <div class="icon-item">
        <c-icon-skip-previous :size="32" />
        <span class="icon-name">icon-skip-previous</span>
      </div>
      <div class="icon-item">
        <c-icon-sound :size="32" />
        <span class="icon-name">icon-sound</span>
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
