import { createNamespace } from '../_utils/global-config'
import Layout, { LayoutHeader, LayoutContent } from '../layout'
import Affix from '../affix'
import { defineComponent } from 'vue'

export const saasPageProps = {
    offsetTop: {
      type: Number,
      default: 64,
    },
  } 
