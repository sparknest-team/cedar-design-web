<template>
  <c-comment author="Socrates" content="Comment body content." datetime="1 hour">
    <template #actions>
      <span class="action" key="heart" @click="onLikeChange">
        <span v-if="like">
          <c-icon-heart-fill :style="{ color: '#f53f3f' }" />
        </span>
        <span v-else>
          <c-icon-heart />
        </span>
        {{ 83 + (like ? 1 : 0) }}
      </span>
      <span class="action" key="star" @click="onStarChange">
        <span v-if="star">
          <c-icon-star-fill style="{ color: '#ffb400' }" />
        </span>
        <span v-else>
          <c-icon-star />
        </span>
        {{ 3 + (star ? 1 : 0) }}
      </span>
      <span class="action" key="reply"> <c-icon-message /> Reply </span>
    </template>
    <template #avatar>
      <c-avatar>
        <img
          alt="avatar"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        />
      </c-avatar>
    </template>
  </c-comment>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const like = ref(false)
const star = ref(false)
const onLikeChange = () => {
  like.value = !like.value
}
const onStarChange = () => {
  star.value = !star.value
}
</script>

<style scoped>
.action {
  display: inline-block;
  padding: 0 4px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
}

.action:hover {
  background: var(--color-fill-3);
}
</style>
