<script setup lang="ts">
import { reactive, ref } from "vue";
const copy = {
  permissions: "成员权限",
  scope: "权限变更将应用到所有项目成员。",
  admin: "管理员",
  manage: "管理成员、修改项目设置",
  member: "成员",
  update: "查看项目、更新任务",
  withTitle: "显示标题",
  withDescription: "显示说明",
  showMarker: "显示色条",
  markerPlacement: "色条位置",
  titleMarker: "标题旁",
  sectionMarker: "整个分区",
  memberDetails: "成员信息",
  history: "发布记录",
  latest: "只看最新",
  all: "查看全部",
  exportRelease: "v1.2 · 新增项目导出",
  memberRelease: "v1.1 · 新增成员管理",
  text: {
    event: "事件类型",
    level: "事件级别",
    tags: "标签",
    remote: "远程处置SOP",
    section: "现场处置",
    onsite: "现场处置SOP",
    safety: "安全须知",
    points: "处置要点",
    skill: "技能等级",
    certificates: "作业证",
    review: "审核",
    abnormal: "多元异常"
  },
  variantLabel: "分组风格",
  optionsLabel: "展示选项",
  variants: {
    "heading-line": "标题线",
    plain: "仅标题",
    outline: "描边分区"
  },
  markerLabel: "显示标题标记",
  styleHint: "切换风格会保留已填内容。描边分区使用外框表示分组范围。",
  actionsDescription: "引用模板填充本分区；清空后，分区外的技能等级保持不变。",
  applyTemplate: "引用模板",
  clearSection: "清空",
  applied: "已引用现场处置模板。",
  cleared: "已清空现场处置，技能等级保持不变。",
  templateSop: "现场核验标准 SOP",
  templateSafety: "请先阅读现场安全说明，确认作业条件。",
  templatePoints: "按现场处置清单逐项核验，并记录处理结果。",
  lowVoltage: "低压电工证",
  entryPermit: "进仓许可",
  workAtHeight: "登高证",
  highVoltage: "高压电工证",
  levelThree: "三级"
};
const model = reactive({ sop: "", safety: "", points: "", skill: "L3" });
const feedback = ref<"applied" | "cleared" | "">("");
function applyTemplate() {
  Object.assign(model, {
    sop: copy.templateSop,
    safety: copy.templateSafety,
    points: copy.templatePoints,
  });
  feedback.value = "applied";
}
function clearSection() {
  Object.assign(model, { sop: "", safety: "", points: "" });
  feedback.value = "cleared";
}
</script>
<template>
  <div data-form-section-demo="actions">
    <c-form
      :model="model"
      layout="horizontal"
      label-col-flex="7rem"
      edit-mode="direct"
    >
      <c-section
        title="现场处置"
        description="引用模板填充本分区；清空后，分区外的技能等级保持不变。"
      >
        <template #extra>
          <c-space size="sm" wrap>
            <c-button variant="text" size="sm" @click="applyTemplate">引用模板</c-button>
            <c-button variant="text" size="sm" @click="clearSection">清空</c-button>
          </c-space>
        </template>
        <c-form-item field="sop" label="现场处置SOP"
          ><c-input v-model="model.sop"
        /></c-form-item>
        <c-form-item field="safety" label="安全须知"
          ><c-textarea v-model="model.safety" :max-length="200" show-word-limit
        /></c-form-item>
        <c-form-item field="points" label="处置要点"
          ><c-textarea v-model="model.points" :max-length="200" show-word-limit
        /></c-form-item>
      </c-section>
      <c-divider />
      <c-form-item field="skill" label="技能等级"
        ><c-input v-model="model.skill"
      /></c-form-item>
    </c-form>
    <p v-if="feedback" role="status">{{ copy[feedback] }}</p>
  </div>
</template>
