<template><div><h1 id="inputtag" tabindex="-1"><a class="header-anchor" href="#inputtag"><span>InputTag</span></a></h1>
<p>用来输入标签。</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h3>
<p>标签输入框的基本用法。</p>
<VmiPreviewer><VmiExample id="6fcdd180" iframeSrc="/-iframe.html#/6fcdd180"><VmiV6fcdd180></VmiV6fcdd180></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="6fcdd180" iframeSrc="/-iframe.html#/6fcdd180" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/input-tag/__demos__/basic.vue"><VmiSourceCodeItem name="basic.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-input-tag%20%3Adefault-value%3D%22%5B'test'%5D%22%20placeholder%3D%22Please%20Enter%22%20clearable%20%2F%3E%0A%3C%2Ftemplate%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-input-tag%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Edefault-value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20placeholder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3EPlease%20Enter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20clearable%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h3 id="输入框状态" tabindex="-1"><a class="header-anchor" href="#输入框状态"><span>输入框状态</span></a></h3>
<p>输入框有禁用、只读和错误三种状态。</p>
<VmiPreviewer><VmiExample id="e11e5d60" iframeSrc="/-iframe.html#/e11e5d60"><VmiVe11e5d60></VmiVe11e5d60></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="e11e5d60" iframeSrc="/-iframe.html#/e11e5d60" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/input-tag/__demos__/status.vue"><VmiSourceCodeItem name="status.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-space%20direction%3D%22column%22%20size%3D%22lg%22%3E%0A%20%20%20%20%3Cc-input-tag%20%3Adefault-value%3D%22%5B'test'%5D%22%20placeholder%3D%22Please%20Enter%22%20disabled%20%2F%3E%0A%20%20%20%20%3Cc-input-tag%20%3Adefault-value%3D%22%5B'test'%5D%22%20placeholder%3D%22Please%20Enter%22%20readonly%20%2F%3E%0A%20%20%20%20%3Cc-input-tag%20%3Adefault-value%3D%22%5B'test'%5D%22%20placeholder%3D%22Please%20Enter%22%20error%20%2F%3E%0A%20%20%3C%2Fc-space%3E%0A%3C%2Ftemplate%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20direction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ecolumn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Elg%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-input-tag%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Edefault-value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20placeholder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3EPlease%20Enter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20disabled%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-input-tag%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Edefault-value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20placeholder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3EPlease%20Enter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20readonly%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-input-tag%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Edefault-value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20placeholder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3EPlease%20Enter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20error%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h3 id="最多展示标签数量" tabindex="-1"><a class="header-anchor" href="#最多展示标签数量"><span>最多展示标签数量</span></a></h3>
<p>设置最多展示标签数量。</p>
<VmiPreviewer><VmiExample id="4933f3f6" iframeSrc="/-iframe.html#/4933f3f6"><VmiV4933f3f6></VmiV4933f3f6></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="4933f3f6" iframeSrc="/-iframe.html#/4933f3f6" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/input-tag/__demos__/max.vue"><VmiSourceCodeItem name="max.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-input-tag%0A%20%20%20%20%3Adefault-value%3D%22%5B'one'%2C%20'two'%2C%20'three'%2C%20'four'%5D%22%0A%20%20%20%20placeholder%3D%22Please%20Enter%22%0A%20%20%20%20%3Amax-tag-count%3D%223%22%0A%20%20%20%20clearable%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-input-tag%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Edefault-value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Eone%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Etwo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ethree%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Efour%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20%20%20%20placeholder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3EPlease%20Enter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Emax-tag-count%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20%20%20%20clearable%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h3 id="输入框尺寸" tabindex="-1"><a class="header-anchor" href="#输入框尺寸"><span>输入框尺寸</span></a></h3>
<p>输入框分为 <code v-pre>xs</code>、<code v-pre>sm</code>、<code v-pre>md</code>、<code v-pre>lg</code> 四种尺寸。</p>
<VmiPreviewer><VmiExample id="0bd90942" iframeSrc="/-iframe.html#/0bd90942"><VmiV0bd90942></VmiV0bd90942></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="0bd90942" iframeSrc="/-iframe.html#/0bd90942" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/input-tag/__demos__/size.vue"><VmiSourceCodeItem name="size.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-space%20direction%3D%22column%22%20size%3D%22lg%22%3E%0A%20%20%20%20%3Cc-radio-group%20type%3D%22button%22%20v-model%3D%22size%22%3E%0A%20%20%20%20%20%20%3Cc-radio%20value%3D%22xs%22%3Exs%3C%2Fc-radio%3E%0A%20%20%20%20%20%20%3Cc-radio%20value%3D%22sm%22%3Esm%3C%2Fc-radio%3E%0A%20%20%20%20%20%20%3Cc-radio%20value%3D%22md%22%3Emd%3C%2Fc-radio%3E%0A%20%20%20%20%20%20%3Cc-radio%20value%3D%22lg%22%3Elg%3C%2Fc-radio%3E%0A%20%20%20%20%3C%2Fc-radio-group%3E%0A%20%20%20%20%3Cc-input-tag%20%3Adefault-value%3D%22%5B'one'%5D%22%20placeholder%3D%22Please%20enter%20something%22%20%3Asize%3D%22size%22%20clearable%20%2F%3E%0A%20%20%3C%2Fc-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20size%20%3D%20ref('md')%0A%3C%2Fscript%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20direction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ecolumn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Elg%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio-group%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Esize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Exs%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Exs%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Esm%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Esm%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Emd%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Emd%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Elg%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Elg%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-radio-group%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-input-tag%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Edefault-value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Eone%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23CDD6F4%22%3E%5D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20placeholder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3EPlease%20enter%20something%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Esize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3Esize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20clearable%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3Bfont-style%3Aitalic%3B--shiki-dark%3A%23CBA6F7%3B--shiki-dark-font-style%3Ainherit%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3Bfont-style%3Aitalic%3B--shiki-dark%3A%23CBA6F7%3B--shiki-dark-font-style%3Ainherit%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23CBA6F7%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20size%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Emd%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2>
<h3 id="input-tag-props" tabindex="-1"><a class="header-anchor" href="#input-tag-props"><span><code v-pre>&lt;input-tag&gt;</code> Props</span></a></h3>
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
<td>model-value <strong>(v-model)</strong></td>
<td>绑定值</td>
<td><code v-pre>(string | number | TagData)[]</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>default-value</td>
<td>默认值（非受控状态）</td>
<td><code v-pre>(string | number | TagData)[]</code></td>
<td style="text-align:center"><code v-pre>[]</code></td>
</tr>
<tr>
<td>input-value <strong>(v-model)</strong></td>
<td>输入框的值</td>
<td><code v-pre>string</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>default-input-value</td>
<td>输入框的默认值（非受控状态）</td>
<td><code v-pre>string</code></td>
<td style="text-align:center"><code v-pre>''</code></td>
</tr>
<tr>
<td>placeholder</td>
<td>占位符</td>
<td><code v-pre>string</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
</tr>
<tr>
<td>error</td>
<td>是否为错误状态</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
</tr>
<tr>
<td>readonly</td>
<td>是否为只读模式</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
</tr>
<tr>
<td>clearable</td>
<td>是否允许清空</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>true</code></td>
</tr>
<tr>
<td>size</td>
<td>输入框的大小</td>
<td><code v-pre>'xs' | 'sm' | 'md' | 'lg'</code></td>
<td style="text-align:center"><code v-pre>'md'</code></td>
</tr>
<tr>
<td>variant</td>
<td>输入框的变体</td>
<td><code v-pre>'outline' | 'default'</code></td>
<td style="text-align:center"><code v-pre>'default'</code></td>
</tr>
<tr>
<td>max-tag-count</td>
<td>最多展示的标签个数，<code v-pre>0</code> 表示不限制</td>
<td><code v-pre>number</code></td>
<td style="text-align:center"><code v-pre>0</code></td>
</tr>
<tr>
<td>retain-input-value</td>
<td>是否保留输入框的内容</td>
<td><code v-pre>boolean | { create?: boolean; blur?: boolean }</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
</tr>
<tr>
<td>format-tag</td>
<td>格式化标签内容</td>
<td><code v-pre>(data: TagData) =&gt; string</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>unique-value</td>
<td>是否仅创建唯一的值</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
</tr>
<tr>
<td>field-names</td>
<td>自定义 <code v-pre>TagData</code> 中的字段</td>
<td><code v-pre>InputTagFieldNames</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>tag-nowrap</td>
<td>标签内容不换行</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h3 id="input-tag-events" tabindex="-1"><a class="header-anchor" href="#input-tag-events"><span><code v-pre>&lt;input-tag&gt;</code> Events</span></a></h3>
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
<td>change</td>
<td>值发生改变时触发</td>
<td>value: <code v-pre>(string | number | TagData)[]</code><br>ev: <code v-pre>Event</code></td>
</tr>
<tr>
<td>input-value-change</td>
<td>输入值发生改变时触发</td>
<td>inputValue: <code v-pre>string</code><br>ev: <code v-pre>Event</code></td>
</tr>
<tr>
<td>press-enter</td>
<td>按下回车键时触发</td>
<td>inputValue: <code v-pre>string</code><br>ev: <code v-pre>KeyboardEvent</code></td>
</tr>
<tr>
<td>remove</td>
<td>点击标签的删除按钮时触发</td>
<td>removed: <code v-pre>string | number</code><br>ev: <code v-pre>Event</code></td>
</tr>
<tr>
<td>clear</td>
<td>点击清除按钮时触发</td>
<td>ev: <code v-pre>MouseEvent</code></td>
</tr>
<tr>
<td>focus</td>
<td>输入框获取焦点时触发</td>
<td>ev: <code v-pre>FocusEvent</code></td>
</tr>
<tr>
<td>blur</td>
<td>输入框失去焦点时触发</td>
<td>ev: <code v-pre>FocusEvent</code></td>
</tr>
</tbody>
</table>
<h3 id="input-tag-methods" tabindex="-1"><a class="header-anchor" href="#input-tag-methods"><span><code v-pre>&lt;input-tag&gt;</code> Methods</span></a></h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>描述</th>
<th>参数</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>使输入框获取焦点</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>blur</td>
<td>使输入框失去焦点</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="input-tag-slots" tabindex="-1"><a class="header-anchor" href="#input-tag-slots"><span><code v-pre>&lt;input-tag&gt;</code> Slots</span></a></h3>
<table>
<thead>
<tr>
<th>插槽名</th>
<th style="text-align:center">描述</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>tag</td>
<td style="text-align:center">输入框标签的显示内容</td>
<td>data: <code v-pre>TagData</code></td>
</tr>
<tr>
<td>prefix</td>
<td style="text-align:center">前缀元素</td>
<td>-</td>
</tr>
<tr>
<td>suffix</td>
<td style="text-align:center">后缀元素</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="tagdata" tabindex="-1"><a class="header-anchor" href="#tagdata"><span>TagData</span></a></h3>
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
<td>value</td>
<td>标签值</td>
<td><code v-pre>string | number</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>label</td>
<td>标签内容</td>
<td><code v-pre>string</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>closable</td>
<td>是否可关闭</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
</tr>
<tr>
<td>tagProps</td>
<td>标签属性</td>
<td><code v-pre>TagProps</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
</tbody>
</table>
<h3 id="类型定义" tabindex="-1"><a class="header-anchor" href="#类型定义"><span>类型定义</span></a></h3>
<p>组件导出以下类型定义</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> InputTagInstance</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">@cedar/ui</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>




<script lang="ts" setup>
  import VmiV6fcdd180 from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/input-tag/__demos__/basic.vue'
import VmiVe11e5d60 from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/input-tag/__demos__/status.vue'
import VmiV4933f3f6 from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/input-tag/__demos__/max.vue'
import VmiV0bd90942 from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/input-tag/__demos__/size.vue'

  

</script>
