<template>
  <c-list class="list-demo-action-layout" :bordered="false" :data="dataSource" :pagination-props="paginationProps">
    <template #item="{ item }">
      <c-list-item class="list-demo-item" action-layout="vertical">
        <template #actions>
          <span><c-icon-heart />83</span>
          <span><c-icon-star />{{ item.index }}</span>
          <span><c-icon-message />Reply</span>
        </template>
        <template #extra>
          <div class="image-area">
            <img alt="arco-design" :src="item.imageSrc" />
          </div>
        </template>
        <c-list-item-meta :title="item.title" :description="item.description">
          <template #avatar>
            <c-avatar shape="square">
              <img alt="avatar" :src="item.avatar" />
            </c-avatar>
          </template>
        </c-list-item-meta>
      </c-list-item>
    </template>
  </c-list>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

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
const dataSource = new Array(15).fill(null).map((_, index) => {
  return {
    index: index,
    avatar: avatarSrc[index % avatarSrc.length],
    title: names[index % names.length],
    description:
      'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China. ByteDance has products such as TikTok, Toutiao, volcano video and Douyin (the Chinese version of TikTok).',
    imageSrc: imageSrc[index % imageSrc.length],
  }
})
const paginationProps = reactive({
  defaultPageSize: 3,
  total: dataSource.length,
})
</script>
