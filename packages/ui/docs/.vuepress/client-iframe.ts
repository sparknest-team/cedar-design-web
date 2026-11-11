import { defineClientConfig } from '@vuepress/client'
import './configs/styles/iframe.scss'

export default defineClientConfig({
  enhance({ app }) {
    console.log('This is a iframe.')
  },
})
