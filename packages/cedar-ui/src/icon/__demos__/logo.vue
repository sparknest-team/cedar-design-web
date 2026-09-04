<template>
  <div class="icon-demo-container">
    <div class="icon-grid">
      <div class="icon-item">
        <c-icon-bytedance-color :size="32" />
        <span class="icon-name">icon-bytedance-color</span>
      </div>
      <div class="icon-item">
        <c-icon-lark-color :size="32" />
        <span class="icon-name">icon-lark-color</span>
      </div>
      <div class="icon-item">
        <c-icon-tiktok-color :size="32" />
        <span class="icon-name">icon-tiktok-color</span>
      </div>
      <div class="icon-item">
        <c-icon-xigua-color :size="32" />
        <span class="icon-name">icon-xigua-color</span>
      </div>
      <div class="icon-item">
        <c-icon-facebook-circle-fill :size="32" />
        <span class="icon-name">icon-facebook-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-facebook-square-fill :size="32" />
        <span class="icon-name">icon-facebook-square-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-google-circle-fill :size="32" />
        <span class="icon-name">icon-google-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-qq-circle-fill :size="32" />
        <span class="icon-name">icon-qq-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-twitter-circle-fill :size="32" />
        <span class="icon-name">icon-twitter-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-weibo-circle-fill :size="32" />
        <span class="icon-name">icon-weibo-circle-fill</span>
      </div>
      <div class="icon-item">
        <c-icon-alipay-circle :size="32" />
        <span class="icon-name">icon-alipay-circle</span>
      </div>
      <div class="icon-item">
        <c-icon-code-sandbox :size="32" />
        <span class="icon-name">icon-code-sandbox</span>
      </div>
      <div class="icon-item">
        <c-icon-codepen :size="32" />
        <span class="icon-name">icon-codepen</span>
      </div>
      <div class="icon-item">
        <c-icon-facebook :size="32" />
        <span class="icon-name">icon-facebook</span>
      </div>
      <div class="icon-item">
        <c-icon-github :size="32" />
        <span class="icon-name">icon-github</span>
      </div>
      <div class="icon-item">
        <c-icon-gitlab :size="32" />
        <span class="icon-name">icon-gitlab</span>
      </div>
      <div class="icon-item">
        <c-icon-google :size="32" />
        <span class="icon-name">icon-google</span>
      </div>
      <div class="icon-item">
        <c-icon-qq-zone :size="32" />
        <span class="icon-name">icon-qq-zone</span>
      </div>
      <div class="icon-item">
        <c-icon-qq :size="32" />
        <span class="icon-name">icon-qq</span>
      </div>
      <div class="icon-item">
        <c-icon-twitter :size="32" />
        <span class="icon-name">icon-twitter</span>
      </div>
      <div class="icon-item">
        <c-icon-wechat :size="32" />
        <span class="icon-name">icon-wechat</span>
      </div>
      <div class="icon-item">
        <c-icon-wechat-pay :size="32" />
        <span class="icon-name">icon-wechat-pay</span>
      </div>
      <div class="icon-item">
        <c-icon-weibo :size="32" />
        <span class="icon-name">icon-weibo</span>
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
