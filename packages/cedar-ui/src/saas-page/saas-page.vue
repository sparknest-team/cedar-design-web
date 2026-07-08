<template>
  <Layout class="cedar-saas-page-layout">
    <Affix :offsetTop="offsetTop" style="background-color: #f4f7fc">
      <LayoutHeader
        class="cedar-saas-page-layout_header"
        :style="{ background: offsetTop ? '#f4f7fc' : 'transparent' }"
      >
        <slot name="header"></slot>
      </LayoutHeader>
    </Affix>

    <LayoutContent class="cedar-saas-page-layout_content">
      <slot></slot>
    </LayoutContent>
  </Layout>
</template>

<script lang="ts">
import Layout, { LayoutHeader, LayoutContent } from '../layout'
import Affix from '../affix'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SaasPage',

  components: { Layout, LayoutHeader, LayoutContent, Affix },

  props: {
    offsetTop: {
      type: Number,
      default: 64,
    },
  },

  setup() {},
})
</script>
