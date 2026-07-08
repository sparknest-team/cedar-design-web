import comp from "/Users/mengshuai/github-ui/cedar/packages/cedar-ui/docs/.vuepress/.temp/pages/practices/index.html.vue"
const data = JSON.parse("{\"path\":\"/practices/\",\"title\":\"Practices\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Practices\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://xxx.com/pages/cedar-design-web/practices/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Cedar Design Web\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Practices\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Practices\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
