<template>
  <c-list :bordered="false" :data="dataSource">
    <template #item="{ item }">
      <c-list-item>
        <template #prefix>
          <c-avatar shape="square">
            <img alt="avatar" :src="item.avatar" />
          </c-avatar>
        </template>
        <template #suffix>
          <img class="list-demo-cover" alt="cover" :src="item.imageSrc" />
        </template>
        <div class="list-item-title">{{ item.title }}</div>
        <div class="list-item-description">{{ item.description }}</div>
      </c-list-item>
    </template>
  </c-list>
</template>

<script lang="ts" setup>
const names = ['Socrates', 'Balzac', 'Plato']
const avatarSrc = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp',
]
const imageSrc = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/29c1f9d7d17c503c5d7bf4e538cb7c4f.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/04d7bc31dd67dcdf380bc3f6aa07599f.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1f61854a849a076318ed527c8fca1bbf.png~tplv-uwbnlip3yd-webp.webp',
]
const dataSource = names.map((title, index) => ({
  avatar: avatarSrc[index],
  title,
  description:
    'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China. ByteDance has products such as TikTok, Toutiao, volcano video and Douyin (the Chinese version of TikTok).',
  imageSrc: imageSrc[index],
}))
</script>

<style scoped>
.list-item-title {
  font-weight: var(--c-font-weight-500);
}

.list-item-description {
  margin-top: 4px;
  color: var(--c-color-text-2);
}

.list-demo-cover {
  display: block;
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--c-border-radius-md);
}
</style>
