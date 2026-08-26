<template>
  <Layout class="c-saas-page-layout">
    <Affix :offsetTop="offsetTop" style="background-color: #f4f7fc">
      <LayoutHeader
        class="c-saas-page-layout-header"
        :style="{ background: offsetTop ? '#f4f7fc' : 'transparent' }"
      >
        <slot name="header"></slot>
      </LayoutHeader>
    </Affix>

    <LayoutContent class="c-saas-page-layout-content">
      <slot></slot>
    </LayoutContent>
  </Layout>
</template>

<script lang="ts">
import { saasPageProps } from './props'
import { createNamespace } from '../_utils/global-config'
import Layout, { LayoutHeader, LayoutContent } from '../layout'
import Affix from '../affix'
import { defineComponent } from 'vue'

export default defineComponent({
  name: createNamespace("saas-page").name,

  components: { Layout, LayoutHeader, LayoutContent, Affix },

  props: saasPageProps,

  setup() {},
})
</script>
