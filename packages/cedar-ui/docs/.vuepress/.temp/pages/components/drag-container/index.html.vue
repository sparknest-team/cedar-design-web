<template><div><h1 id="dragcontainer" tabindex="-1"><a class="header-anchor" href="#dragcontainer"><span>DragContainer</span></a></h1>
<p>组件描述。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h2>
<p>基础用法，通过modelValue绑定列表数据模型。</p>
<VmiPreviewer><VmiExample id="727e25cf" iframeSrc="/-iframe.html#/727e25cf"><VmiV727e25cf></VmiV727e25cf></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="727e25cf" iframeSrc="/-iframe.html#/727e25cf" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/drag-container/__demos__/basic.vue"><VmiSourceCodeItem name="basic.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-drag-container%20v-model%3D%22list%22%20%3Adrag-options%3D%22dragOptions%22%20%40change%3D%22handleListChange%22%3E%0A%20%20%20%20%3Cdiv%20v-for%3D%22item%20in%20list%22%20%3Akey%3D%22item%22%20class%3D%22drag-item%22%3E%0A%20%20%20%20%20%20Item_%20%7B%7B%20item%20%7D%7D%20%3Cc-link%20%40click%3D%22removeHandler(item)%22%3Eremove%3C%2Fc-link%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fc-drag-container%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20dragOptions%20%3D%20ref(%7B%0A%20%20animation%3A%20150%2C%0A%20%20draggable%3A%20'.drag-item'%2C%0A%20%20ghostClass%3A%20'blue-class'%2C%0A%7D)%0Afunction%20removeHandler(item%3A%20number)%20%7B%0A%20%20list.value%20%3D%20list.value.filter((i)%20%3D%3E%20i%20!%3D%3D%20item)%0A%7D%0Aconst%20list%20%3D%20ref(%5B1%2C%202%2C%203%5D)%0A%0Aconst%20handleListChange%20%3D%20(newList)%20%3D%3E%20%7B%0A%20%20console.log(newList)%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%20scope%20lang%3D%22scss%22%3E%0A.drag-item%20%7B%0A%20%20padding%3A%200.75rem%201.25rem%3B%0A%20%20margin-bottom%3A%20-1px%3B%0A%20%20background-color%3A%20%23fff%3B%0A%20%20border%3A%201px%20solid%20rgba(0%2C%200%2C%200%2C%200.125)%3B%0A%7D%0A%0A.blue-class%20%7B%0A%20%20background-color%3A%20%23c8ebfb%3B%0A%7D%0A%3C%2Fstyle%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-drag-container%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Elist%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Edrag-options%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EdragOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Echange%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EhandleListChange%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3Bfont-style%3Aitalic%3B--shiki-dark%3A%23CBA6F7%3B--shiki-dark-font-style%3Ainherit%22%3E%20v-for%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CBA6F7%22%3E%20in%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20list%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Ekey%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Edrag-item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20%20%20%20%20Item_%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%7B%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20item%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%7D%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-link%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3EremoveHandler%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Eremove%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-link%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-drag-container%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3Bfont-style%3Aitalic%3B--shiki-dark%3A%23CBA6F7%3B--shiki-dark-font-style%3Ainherit%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3Bfont-style%3Aitalic%3B--shiki-dark%3A%23CBA6F7%3B--shiki-dark-font-style%3Ainherit%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23CBA6F7%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20dragOptions%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20animation%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%20150%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20draggable%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3E.drag-item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20ghostClass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Eblue-class%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23CBA6F7%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3E%20removeHandler%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3Bfont-style%3Aitalic%3B--shiki-dark%3A%23EBA0AC%3B--shiki-dark-font-style%3Aitalic%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E2931D%3B--shiki-dark%3A%23CBA6F7%22%3E%20number%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20list%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20list%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3Efilter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3Bfont-style%3Aitalic%3B--shiki-dark%3A%23EBA0AC%3B--shiki-dark-font-style%3Aitalic%22%3Ei%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%2394E2D5%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20i%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20!%3D%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23CBA6F7%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20list%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E(%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%202%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E%203%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%5D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23CBA6F7%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3E%20handleListChange%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3Bfont-style%3Aitalic%3B--shiki-dark%3A%23EBA0AC%3B--shiki-dark-font-style%3Aitalic%22%3EnewList%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%2394E2D5%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20console%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EnewList%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20scope%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Escss%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E.drag-item%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20padding%3A%200.75rem%201.25rem%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20margin-bottom%3A%20-1px%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20background-color%3A%20%23fff%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20border%3A%201px%20solid%20rgba(0%2C%200%2C%200%2C%200.125)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E.blue-class%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20background-color%3A%20%23c8ebfb%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h2 id="组件配置" tabindex="-1"><a class="header-anchor" href="#组件配置"><span>组件配置</span></a></h2>
<h3 id="dragcontainer-props" tabindex="-1"><a class="header-anchor" href="#dragcontainer-props"><span>DragContainer Props</span></a></h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>modelValue</td>
<td>托管的拖拽列表</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>dragOption</td>
<td>DragOptions</td>
<td>------</td>
<td>------</td>
</tr>
</tbody>
</table>
<h3 id="dragcontainer-events" tabindex="-1"><a class="header-anchor" href="#dragcontainer-events"><span>DragContainer Events</span></a></h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>拖拽完成回调</td>
<td><code v-pre>(list: Array) =&gt; void</code></td>
</tr>
</tbody>
</table>
<h3 id="dragcontainer-slots" tabindex="-1"><a class="header-anchor" href="#dragcontainer-slots"><span>DragContainer Slots</span></a></h3>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义默认内容</td>
</tr>
</tbody>
</table>
<h2 id="类型定义" tabindex="-1"><a class="header-anchor" href="#类型定义"><span>类型定义</span></a></h2>
<h3 id="dragoption-拖拽配置" tabindex="-1"><a class="header-anchor" href="#dragoption-拖拽配置"><span>DragOption 拖拽配置</span></a></h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>draggable</td>
<td>允许拖拽元素的CSS选择器</td>
<td>String</td>
<td>-------</td>
</tr>
<tr>
<td>sort</td>
<td>是否可以拖拽排序</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>handle</td>
<td>拖拽手柄CSS选择器</td>
<td>String</td>
<td>------</td>
</tr>
<tr>
<td>animation</td>
<td>拖拽动画时间</td>
<td>Number</td>
<td>------</td>
</tr>
<tr>
<td>filter</td>
<td>不需要进行拖动的元素</td>
<td>String</td>
<td>------</td>
</tr>
<tr>
<td>ghostClass</td>
<td>Drop Placeholder元素的CSS类名</td>
<td>String</td>
<td>------</td>
</tr>
<tr>
<td>dragClass</td>
<td>正在拖拽中的元素类名</td>
<td>String</td>
<td>------</td>
</tr>
<tr>
<td>swapThreshold</td>
<td>交换区阈值</td>
<td>Number</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>组件导出以下类型定义</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> DragContainerProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">@cedar/ui</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>




<script lang="ts" setup>
  import VmiV727e25cf from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/drag-container/__demos__/basic.vue'

  

</script>
