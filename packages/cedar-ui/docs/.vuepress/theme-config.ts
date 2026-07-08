export function themeConfig() {
  // 目标元素：<html> 标签
  const targetNode = document.documentElement // 或者使用 document.getElementById('myHtml');

  // 定义回调函数，当 data-theme 属性变化时执行
  const onThemeChange = (newTheme) => {
    console.log(`Theme changed to: ${newTheme}`)
    // 在这里执行你需要的逻辑，例如更新样式
    if (newTheme === 'dark') {
      // 设置为暗黑主题
      document.documentElement.setAttribute('cedar-theme', 'dark')
    } else {
      // 恢复亮色主题
      document.documentElement.removeAttribute('cedar-theme')
    }
  }

  // 创建一个 MutationObserver 实例，并定义回调
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        const newTheme = targetNode.getAttribute('data-theme')
        onThemeChange(newTheme)
      }
    }
  })

  // 配置观察选项：只观察属性变化，并且具体到 'data-theme'
  const config = { attributes: true, attributeFilter: ['data-theme'] }

  // 启动观察
  observer.observe(targetNode, config)

  // 示例：通过按钮切换主题
  const toggleButton = document.getElementById('toggleTheme')
  toggleButton?.addEventListener('click', () => {
    const currentTheme = targetNode.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    targetNode.setAttribute('data-theme', newTheme)
  })

  // 初始化主题
  onThemeChange(targetNode.getAttribute('data-theme'))
}
