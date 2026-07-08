import comp from "/Users/mengshuai/github-ui/cedar/packages/cedar-ui/docs/.vuepress/.temp/pages/components/search/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/search/\",\"title\":\"Search\",\"lang\":\"zh-CN\",\"frontmatter\":{\"permalink\":\"/components/search/\",\"gitInclude\":[],\"description\":\"Search 搜索组件（用于列表页等场景） 案例 基础用法 带下拉字段选择 API Search Props Search Events SearchField SearchResult 类型定义 组件导出以下类型定义\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://xxx.com/pages/cedar-design-web/components/search/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Cedar Design Web\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Search\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Search 搜索组件（用于列表页等场景） 案例 基础用法 带下拉字段选择 API Search Props Search Events SearchField SearchResult 类型定义 组件导出以下类型定义\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Search\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"shuai.meng, jiaming.wu, qinglin.wang\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"案例\",\"slug\":\"案例\",\"link\":\"#案例\",\"children\":[]},{\"level\":3,\"title\":\"API\",\"slug\":\"api\",\"link\":\"#api\",\"children\":[]}],\"readingTime\":{\"minutes\":1.05,\"words\":314},\"filePathRelative\":\"../src/search/README.md\",\"autoDesc\":true,\"excerpt\":\"\\n<p>搜索组件（用于列表页等场景）</p>\\n<h3>案例</h3>\\n<h4>基础用法</h4>\\n<br>\\n<br>\\n<h4>带下拉字段选择</h4>\\n<br>\\n<p><br><br></p>\\n<h3>API</h3>\\n<h4>Search Props</h4>\\n<table>\\n<thead>\\n<tr>\\n<th>属性</th>\\n<th>说明</th>\\n<th>类型</th>\\n<th>默认值</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>defaultField</td>\\n<td>搜索字段的key</td>\\n<td>string</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>model <strong>(v-model)</strong></td>\\n<td>表单数据对象，组件内部触发change事件后，会自动修改model相关属性的值。</td>\\n<td>object</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>searchText</td>\\n<td>搜索字段的value，支持v-model:searchText (老的名字是searchText还兼容)</td>\\n<td>string</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>searchField</td>\\n<td>搜索字段的key</td>\\n<td>string</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>fields</td>\\n<td>搜索字段可选项（默认选中第一个）</td>\\n<td>Array&lt;<a href=\\\"#searchfield\\\">SearchField</a>&gt;</td>\\n<td>[]</td>\\n</tr>\\n<tr>\\n<td>placeholder</td>\\n<td>搜索框占位文案（优先级低于 SearchField 内的占位文案）</td>\\n<td>string</td>\\n<td>'请输入'</td>\\n</tr>\\n<tr>\\n<td>selectStyle</td>\\n<td>传入fields后生效，对search组件中的select增加style属性</td>\\n<td>object</td>\\n<td>-</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
