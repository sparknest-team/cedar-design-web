import comp from "/Users/mengshuai/github-ui/cedar/packages/cedar-ui/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"permalink\":\"/\",\"home\":true,\"heroText\":\"Cedar Design Web\",\"tagline\":\"Vue 3 + Arco Design\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/guide/start/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Arco Design\",\"details\":\"基于 Arco Design 进行二次封装的组件库\"},{\"title\":\"Vue\",\"details\":\"以 Vue 3 作为框架支撑\"},{\"title\":\"Vite + Vuepress\",\"details\":\"使用 Vite 作为项目的构建和打包工具，利用 Vuepress 开发组件文档\"}],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://xxx.com/pages/cedar-design-web/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Cedar Design Web\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.29,\"words\":86},\"filePathRelative\":\"../README.md\",\"excerpt\":\"<div class=\\\"language-shell line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"shell\\\" data-title=\\\"shell\\\" style=\\\"--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff\\\"><pre class=\\\"shiki shiki-themes min-light nord vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#6F42C1;--shiki-dark:#88C0D0\\\">yarn</span><span style=\\\"--shiki-light:#2B5581;--shiki-dark:#A3BE8C\\\"> add</span><span style=\\\"--shiki-light:#2B5581;--shiki-dark:#A3BE8C\\\"> @cedar/ui@1.x</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
