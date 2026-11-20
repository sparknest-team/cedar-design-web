<script setup lang="ts">
const rows = [
  ['2025 Q4', '26.25', '+64.2%', '26.5%', '-0.03'],
  ['2026 Q1', '18.12', '-31.0%', '24.6%', '0.82'],
  ['2026 Q2', '16.77', '-7.4%', '25.1%', '-0.12'],
]
const columns = [
  { title: '单季', dataIndex: 'quarter', width: 120 },
  { title: '营收(亿)', dataIndex: 'revenue', width: 100 },
  { title: '环比', dataIndex: 'growth', width: 100 },
  { title: '毛利率', dataIndex: 'margin', width: 100 },
  { title: '净利(亿)', dataIndex: 'profit', width: 100 },
]
const data = rows.map(([quarter, revenue, growth, margin, profit]) => ({
  key: quarter, quarter, revenue, growth, margin, profit,
}))
</script>

<template>
  <c-card title="三季报前瞻" :heading-level="2" class="nested-card-demo" :elevation="false">
    <template #title-action><span class="report-date">2026-08</span></template>
    <c-tabs default-value="performance" :item-style="{ padding: '16px 0 0' }" tab-list-aria-label="分析维度">
      <c-tab-pane name="industry" title="产业链">
        <c-section title="产业链观察" size="sm" :heading-level="3">
          <c-space direction="column" size="lg" align="stretch">
            <c-section title="上游 · 原材料" size="sm" :heading-level="4" variant="plain" show-marker>
              <p>关注铜、钢材与塑料采购成本变化。</p>
            </c-section>
            <c-section title="下游 · 终端渠道" size="sm" :heading-level="4" variant="plain" show-marker>
              <p>关注渠道库存、促销节奏与新品销售表现。</p>
            </c-section>
          </c-space>
        </c-section>
      </c-tab-pane>
      <c-tab-pane name="performance" title="业绩">
        <c-space direction="column" size="lg" align="stretch">
          <c-section title="单季还原（累计相减）" size="sm" :heading-level="3">
            <c-table :columns="columns" :data="data" :pagination="false" />
            <p class="report-note">示例数据 · 单位：亿元</p>
          </c-section>
          <c-section title="经营摘要" size="sm" :heading-level="3">
            <p>本季营收 16.77 亿元，毛利率 25.1%。</p>
          </c-section>
        </c-space>
      </c-tab-pane>
      <c-tab-pane name="capital" title="筹码·资金">
        <c-section title="资金观察" size="sm" :heading-level="3">本期机构持仓数据尚未披露。</c-section>
      </c-tab-pane>
      <c-tab-pane name="technical" title="技术">
        <c-section title="技术观察" size="sm" :heading-level="3">暂无技术分析数据。</c-section>
      </c-tab-pane>
    </c-tabs>
  </c-card>
</template>

<style scoped>
.nested-card-demo { inline-size: 100%; min-inline-size: 0; }
.report-date { white-space: nowrap; font-size: 12px; }
.report-note { margin-block-start: 8px; }
p { margin: 0; }
</style>
