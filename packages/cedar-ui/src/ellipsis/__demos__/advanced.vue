<template>
  <div class="demo-container">
    <h4>表格中的省略</h4>
    <table class="demo-table">
      <thead>
        <tr>
          <th>标题</th>
          <th>描述</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>项目名称</td>
          <td>
            <c-ellipsis style="width: 150px">
              这是一个很长的项目描述，包含了项目的详细信息、目标、范围等内容，需要在表格中显示省略效果。
            </c-ellipsis>
          </td>
          <td>进行中</td>
        </tr>
        <tr>
          <td>任务标题</td>
          <td>
            <c-ellipsis style="width: 150px" :line-clamp="2">
              这是一个很长的任务描述，包含了任务的具体要求、完成标准、注意事项等信息，需要在表格中显示省略效果。
            </c-ellipsis>
          </td>
          <td>已完成</td>
        </tr>
      </tbody>
    </table>

    <h4>卡片中的省略</h4>
    <div class="card-container">
      <div class="demo-card">
        <h5>卡片标题</h5>
        <c-ellipsis :line-clamp="3">
          这是卡片中的一段长文本内容，用于演示在卡片组件中使用省略组件的效果。文本内容可能会很长，需要控制显示行数。
        </c-ellipsis>
        <div class="card-footer">
          <c-ellipsis style="width: 120px"> 这是一个很长的标签文本 </c-ellipsis>
        </div>
      </div>
    </div>

    <h4>动态内容省略</h4>
    <div class="dynamic-container">
      <c-ellipsis style="width: 250px" :line-clamp="2">
        {{ dynamicText }}
      </c-ellipsis>
      <c-button @click="toggleText" class="demo-button">
        {{ isLongText ? "显示短文本" : "显示长文本" }}
      </c-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isLongText = ref(true);
const dynamicText = ref(
  "这是一段很长的文本内容，用于演示动态内容的省略效果。当文本内容发生变化时，省略组件会自动适应新的内容长度。",
);

const toggleText = () => {
  isLongText.value = !isLongText.value;
  if (isLongText.value) {
    dynamicText.value =
      "这是一段很长的文本内容，用于演示动态内容的省略效果。当文本内容发生变化时，省略组件会自动适应新的内容长度。";
  } else {
    dynamicText.value = "这是短文本。";
  }
};
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.demo-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #d9d9d9;
}

.demo-table th,
.demo-table td {
  padding: 12px;
  border: 1px solid #d9d9d9;
  text-align: left;
}

.demo-table th {
  background-color: #fafafa;
  font-weight: 500;
}

.card-container {
  display: flex;
  gap: 16px;
}

.demo-card {
  width: 200px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 16px;
  background: #fff;
}

.demo-card h5 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #333;
}

.card-footer {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
}

.dynamic-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.demo-button {
  padding: 6px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 12px;
}

.demo-button:hover {
  border-color: #40a9ff;
  color: #40a9ff;
}
</style>
