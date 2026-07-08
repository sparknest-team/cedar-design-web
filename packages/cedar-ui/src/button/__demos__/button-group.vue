<template>
  <div class="demo-container">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h3>基础用法</h3>
      <p>最简单的按钮组用法，按钮会自动继承按钮组的属性。</p>
      <c-space wrap>
        <c-button-group>
          <c-button>按钮一</c-button>
          <c-button>按钮二</c-button>
          <c-button>按钮三</c-button>
        </c-button-group>
      </c-space>
    </div>

    <!-- 不同尺寸 -->
    <div class="demo-section">
      <h3>不同尺寸</h3>
      <p>通过 size 属性设置按钮组尺寸，可选值：xs、sm、md、lg。</p>
      <c-space wrap>
        <c-space wrap>
          <c-button-group size="xs">
            <c-button>超小按钮</c-button>
            <c-button>超小按钮</c-button>
            <c-button>超小按钮</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group size="sm">
            <c-button>小按钮</c-button>
            <c-button>小按钮</c-button>
            <c-button>小按钮</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group size="md">
            <c-button>中等按钮</c-button>
            <c-button>中等按钮</c-button>
            <c-button>中等按钮</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group size="lg">
            <c-button>大按钮</c-button>
            <c-button>大按钮</c-button>
            <c-button>大按钮</c-button>
          </c-button-group>
        </c-space>
      </c-space>
    </div>

    <!-- 不同状态 -->
    <div class="demo-section">
      <h3>不同状态</h3>
      <p>通过 status 属性设置按钮组的主题色，可选值：default、primary、info、success、warning、danger。</p>
      <c-space wrap>
        <c-space wrap>
          <c-button-group status="default">
            <c-button>默认</c-button>
            <c-button>默认</c-button>
            <c-button>默认</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group status="primary">
            <c-button>主要</c-button>
            <c-button>主要</c-button>
            <c-button>主要</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group status="info">
            <c-button>信息</c-button>
            <c-button>信息</c-button>
            <c-button>信息</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group status="success">
            <c-button>成功</c-button>
            <c-button>成功</c-button>
            <c-button>成功</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group status="warning">
            <c-button>警告</c-button>
            <c-button>警告</c-button>
            <c-button>警告</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group status="danger">
            <c-button>危险</c-button>
            <c-button>危险</c-button>
            <c-button>危险</c-button>
          </c-button-group>
        </c-space>
      </c-space>
    </div>

    <!-- 不同变体 -->
    <div class="demo-section">
      <h3>不同变体</h3>
      <p>通过 variant 属性设置按钮组的变体样式，可选值：default、tonal、outline、text、link。</p>
      <c-space wrap>
        <c-space wrap>
          <c-button-group variant="default" status="primary">
            <c-button>默认</c-button>
            <c-button>默认</c-button>
            <c-button>默认</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group variant="tonal" status="primary">
            <c-button>Tonal</c-button>
            <c-button>Tonal</c-button>
            <c-button>Tonal</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group variant="outline" status="primary">
            <c-button>外边框</c-button>
            <c-button>外边框</c-button>
            <c-button>外边框</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group variant="text" status="primary">
            <c-button>文本</c-button>
            <c-button>文本</c-button>
            <c-button>文本</c-button>
          </c-button-group>
        </c-space>
      </c-space>
    </div>

    <!-- 垂直排列 -->
    <div class="demo-section">
      <h3>垂直排列</h3>
      <p>通过 vertical 属性设置按钮组垂直排列。</p>
      <c-space wrap>
        <c-button-group vertical>
          <c-button>按钮一</c-button>
          <c-button>按钮二</c-button>
          <c-button>按钮三</c-button>
        </c-button-group>
        <c-button-group vertical status="primary">
          <c-button>主要按钮一</c-button>
          <c-button>主要按钮二</c-button>
          <c-button>主要按钮三</c-button>
        </c-button-group>
        <c-button-group vertical variant="outline" status="primary">
          <c-button>外边框一</c-button>
          <c-button>外边框二</c-button>
          <c-button>外边框三</c-button>
        </c-button-group>
      </c-space>
    </div>

    <!-- 禁用状态 -->
    <div class="demo-section">
      <h3>禁用状态</h3>
      <p>通过 disabled 属性禁用整个按钮组，所有子按钮都会被禁用。</p>
      <c-space wrap>
        <c-button-group disabled>
          <c-button>禁用按钮一</c-button>
          <c-button>禁用按钮二</c-button>
          <c-button>禁用按钮三</c-button>
        </c-button-group>
        <c-button-group disabled status="primary">
          <c-button>禁用主要一</c-button>
          <c-button>禁用主要二</c-button>
          <c-button>禁用主要三</c-button>
        </c-button-group>
      </c-space>
    </div>

    <!-- 堆叠状态 -->
    <div class="demo-section">
      <h3>堆叠状态</h3>
      <p>通过 stacked 属性设置按钮为堆叠状态，图标和文字会垂直排列。</p>
      <c-space wrap>
        <c-button-group stacked>
          <c-button>
            <template #icon>
              <c-icon-plus />
            </template>
            添加
          </c-button>
          <c-button>
            <template #icon>
              <c-icon-edit />
            </template>
            编辑
          </c-button>
          <c-button>
            <template #icon>
              <c-icon-delete />
            </template>
            删除
          </c-button>
        </c-button-group>
        <c-button-group stacked status="primary">
          <c-button>
            <template #icon>
              <c-icon-plus />
            </template>
            添加
          </c-button>
          <c-button>
            <template #icon>
              <c-icon-edit />
            </template>
            编辑
          </c-button>
          <c-button>
            <template #icon>
              <c-icon-delete />
            </template>
            删除
          </c-button>
        </c-button-group>
      </c-space>
    </div>

    <!-- 自定义颜色 -->
    <div class="demo-section">
      <h3>自定义颜色</h3>
      <p>通过 color 和 textColor 属性自定义按钮组的背景色和文字颜色。</p>
      <c-space wrap>
        <c-space wrap>
          <c-button-group color="#ff6b6b" textColor="#fff">
            <c-button>自定义红色</c-button>
            <c-button>自定义红色</c-button>
            <c-button>自定义红色</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group color="#4ecdc4" textColor="#fff">
            <c-button>自定义青色</c-button>
            <c-button>自定义青色</c-button>
            <c-button>自定义青色</c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group variant="outline" textColor="#9b59b6">
            <c-button>自定义紫色边框</c-button>
            <c-button>自定义紫色边框</c-button>
            <c-button>自定义紫色边框</c-button>
          </c-button-group>
        </c-space>
      </c-space>
    </div>

    <!-- 带图标的按钮组 -->
    <div class="demo-section">
      <h3>带图标的按钮组</h3>
      <p>按钮组中的按钮可以包含图标，通过 icon 插槽添加。</p>
      <c-space wrap>
        <c-space wrap>
          <c-button-group status="primary">
            <c-button>
              <template #icon>
                <c-icon-plus />
              </template>
              添加
            </c-button>
            <c-button>
              <template #icon>
                <c-icon-edit />
              </template>
              编辑
            </c-button>
            <c-button>
              <template #icon>
                <c-icon-delete />
              </template>
              删除
            </c-button>
          </c-button-group>
        </c-space>
        <c-space wrap>
          <c-button-group variant="outline" status="primary">
            <c-button>
              <template #icon>
                <c-icon-search />
              </template>
              搜索
            </c-button>
            <c-button>
              <template #icon>
                <c-icon-filter />
              </template>
              筛选
            </c-button>
            <c-button>
              <template #icon>
                <c-icon-download />
              </template>
              下载
            </c-button>
          </c-button-group>
        </c-space>
      </c-space>
    </div>

    <!-- 加载状态 -->
    <div class="demo-section">
      <h3>加载状态</h3>
      <p>按钮组中的单个按钮可以设置加载状态。</p>
      <c-space wrap>
        <c-button-group status="primary">
          <c-button :loading="loading1" @click="handleLoading1">
            {{ loading1 ? '加载中' : '点击加载' }}
          </c-button>
          <c-button :loading="loading2" @click="handleLoading2">
            {{ loading2 ? '加载中' : '点击加载' }}
          </c-button>
          <c-button :loading="loading3" @click="handleLoading3">
            {{ loading3 ? '加载中' : '点击加载' }}
          </c-button>
        </c-button-group>
      </c-space>
    </div>

    <!-- 混合使用 -->
    <div class="demo-section">
      <h3>混合使用</h3>
      <p>按钮组中的按钮可以单独设置属性，会覆盖按钮组的设置。</p>
      <c-space wrap>
        <c-button-group status="primary" size="md">
          <c-button>继承属性</c-button>
          <c-button status="success">自定义状态</c-button>
          <c-button variant="outline">自定义变体</c-button>
          <c-button disabled>禁用按钮</c-button>
        </c-button-group>
      </c-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  IconPlus,
  IconEdit,
  IconDelete,
  IconSearch,
  IconFilter,
  IconDownload,
  IconArrowLeft,
  IconArrowRight,
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
} from '@cedar/ui'

// 加载状态控制
const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)

const handleLoading1 = () => {
  loading1.value = true
  setTimeout(() => {
    loading1.value = false
  }, 2000)
}

const handleLoading2 = () => {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
  }, 2000)
}

const handleLoading3 = () => {
  loading3.value = true
  setTimeout(() => {
    loading3.value = false
  }, 2000)
}
</script>

<style scoped>
.demo-container {
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.demo-section:last-child {
  border-bottom: none;
}

.demo-section h3 {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.demo-section h4 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #666;
}

.demo-section p {
  margin-bottom: 16px;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}
</style>
