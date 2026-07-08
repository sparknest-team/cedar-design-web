<template><div><h1 id="scrollbar" tabindex="-1"><a class="header-anchor" href="#scrollbar"><span>Scrollbar</span></a></h1>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h3>
<p>滚动条组件基本用法。scrollbar 的默认插槽需要唯一的子元素。</p>
<VmiPreviewer><VmiExample id="ac872e62" iframeSrc="/-iframe.html#/ac872e62"><VmiVac872e62></VmiVac872e62></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="ac872e62" iframeSrc="/-iframe.html#/ac872e62" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/scrollbar/__demos__/basic.vue"><VmiSourceCodeItem name="basic.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-scrollbar%20style%3D%22height%3A%20200px%3B%20overflow%3A%20auto%22%3E%0A%20%20%20%20%3Cdiv%20style%3D%22height%3A%202000px%3B%20width%3A%202000px%3B%20background-color%3A%20var(--color-primary-light-4)%22%3EContent%3C%2Fdiv%3E%0A%20%20%3C%2Fc-scrollbar%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%3C%2Fscript%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20style%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3Eheight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%20200%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23CBA6F7%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3E%20overflow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20auto%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20style%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3Eheight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%202000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23CBA6F7%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3E%20width%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%202000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23CBA6F7%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3E%20background-color%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3E%20var%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23EBA0AC%22%3E--color-primary-light-4%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EContent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h3 id="滚动条类型" tabindex="-1"><a class="header-anchor" href="#滚动条类型"><span>滚动条类型</span></a></h3>
<p>设置 <code v-pre>type</code> 属性改变滚动条类型，<code v-pre>track</code> 类型会显示滚动条轨道。</p>
<VmiPreviewer><VmiExample id="5c3ca6a9" iframeSrc="/-iframe.html#/5c3ca6a9"><VmiV5c3ca6a9></VmiV5c3ca6a9></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="5c3ca6a9" iframeSrc="/-iframe.html#/5c3ca6a9" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/scrollbar/__demos__/type.vue"><VmiSourceCodeItem name="type.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-scrollbar%20type%3D%22track%22%20style%3D%22height%3A%20200px%3B%20overflow%3A%20auto%22%3E%0A%20%20%20%20%3Cdiv%20style%3D%22height%3A%202000px%3B%20width%3A%202000px%3B%20background-color%3A%20var(--color-primary-light-4)%22%3EContent%3C%2Fdiv%3E%0A%20%20%3C%2Fc-scrollbar%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%3C%2Fscript%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Etrack%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20style%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3Eheight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%20200%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23CBA6F7%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3E%20overflow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20auto%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20style%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3Eheight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%202000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23CBA6F7%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3E%20width%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%202000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23CBA6F7%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%238796B0%3B--shiki-dark%3A%2389B4FA%22%3E%20background-color%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3E%20var%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23EBA0AC%22%3E--color-primary-light-4%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EContent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2>
<h3 id="scrollbar-props" tabindex="-1"><a class="header-anchor" href="#scrollbar-props"><span><code v-pre>&lt;scrollbar&gt;</code> Props</span></a></h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>描述</th>
<th>类型</th>
<th style="text-align:center">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>类型</td>
<td><code v-pre>'track' | 'embed'</code></td>
<td style="text-align:center"><code v-pre>'embed'</code></td>
</tr>
<tr>
<td>outer-class</td>
<td>外层的类名</td>
<td><code v-pre>string|object|array</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>outer-style</td>
<td>外层的样式</td>
<td><code v-pre>StyleValue</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
</tbody>
</table>
<h3 id="scrollbar-events" tabindex="-1"><a class="header-anchor" href="#scrollbar-events"><span><code v-pre>&lt;scrollbar&gt;</code> Events</span></a></h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>描述</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>scroll</td>
<td>滚动时触发</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="scrollbar-methods" tabindex="-1"><a class="header-anchor" href="#scrollbar-methods"><span><code v-pre>&lt;scrollbar&gt;</code> Methods</span></a></h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>描述</th>
<th>参数</th>
<th>返回值</th>
<th style="text-align:left">版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>scrollTo</td>
<td>滚动</td>
<td>options: <code v-pre>number | {left?: number;top?: number}</code><br>y: <code v-pre>number</code></td>
<td>-</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>scrollTop</td>
<td>纵向滚动</td>
<td>top: <code v-pre>number</code></td>
<td>-</td>
<td style="text-align:left">2.40.0</td>
</tr>
<tr>
<td>scrollLeft</td>
<td>横向滚动</td>
<td>left: <code v-pre>number</code></td>
<td>-</td>
<td style="text-align:left">2.40.0</td>
</tr>
</tbody>
</table>
<h3 id="类型定义" tabindex="-1"><a class="header-anchor" href="#类型定义"><span>类型定义</span></a></h3>
<p>组件导出以下类型定义</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> ScrollbarBoxInstance</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">@cedar/ui</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>




<script lang="ts" setup>
  import VmiVac872e62 from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/scrollbar/__demos__/basic.vue'
import VmiV5c3ca6a9 from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/scrollbar/__demos__/type.vue'

  

</script>
