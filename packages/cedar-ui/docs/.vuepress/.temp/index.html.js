import comp from "/Users/mengshuai/github-ui/cedar/packages/cedar-ui/docs/.vuepress/.temp/index.html.vue"
const data = JSON.parse("{\"path\":\"/../\",\"title\":\"..\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"..\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://xxx.com/pages/cedar-design-web/../\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Cedar Design Web\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"..\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"..\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
