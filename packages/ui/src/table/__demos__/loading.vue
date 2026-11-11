<template>
  <c-space direction="column" style="width: 100%">
    <c-space
      ><c-switch v-model="loading" edit-mode="direct" /><span
        >手动控制两种表格的加载状态</span
      ></c-space
    >
    <c-table
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="false"
    />
    <c-table :loading="loading" :pagination="false">
      <thead>
        <tr>
          <th>原生插槽</th>
          <th>保留编辑内容</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>切换加载不会重建行</td>
          <td><c-input v-model="draft" edit-mode="direct" aria-label="表格草稿" /></td>
        </tr>
      </tbody>
    </c-table>
    <small>loading 仅由业务状态控制。输入草稿后切换加载，内容继续保留。</small>
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const loading = ref(false);
const draft = ref("可编辑草稿");
const columns = [{ title: "数据模式", dataIndex: "name" }];
const data = [{ key: "row", name: "与原生插槽使用相同的 loading 合同" }];
</script>
