<template>
  <c-form size="sm" :model="form" auto-label-width>
    <c-row :gutter="16">
      <c-col :span="24">
        <c-form-item field="rotate" label="rotate">
          <c-slider v-model="form.rotate" :min="-180" :max="180" />
        </c-form-item>
      </c-col>
      <c-col :span="12">
        <c-form-item label="gap">
          <c-input-group>
            <c-input-number
              v-model="form.gap[0]"
              placeholder="gap[x]"
              :min="0"
            />
            <c-input-number
              v-model="form.gap[1]"
              placeholder="gap[y]"
              :min="0"
            />
          </c-input-group>
        </c-form-item>
      </c-col>
      <c-col :span="12">
        <c-form-item label="offset">
          <c-input-group>
            <c-input-number v-model="form.offset[0]" placeholder="offsetLeft" />
            <c-input-number v-model="form.offset[1]" placeholder="offsetTop" />
          </c-input-group>
        </c-form-item>
      </c-col>
      <c-col :span="12">
        <c-form-item label="fontSize">
          <c-input-number v-model="form.font.fontSize" mode="button" />
        </c-form-item>
      </c-col>
      <c-col :span="12">
        <c-form-item label="zIndex">
          <c-input-number v-model="form.zIndex" mode="button" />
        </c-form-item>
      </c-col>
      <c-col :span="6">
        <c-form-item label="repeat">
          <c-switch v-model="form.repeat" />
        </c-form-item>
      </c-col>
      <c-col :span="6">
        <c-form-item label="staggered">
          <c-switch v-model="form.staggered" />
        </c-form-item>
      </c-col>
    </c-row>
  </c-form>
  <c-watermark content="arco.design" v-bind="form">
    <div style="width: 100%; border: 1px solid #e5e6eb; box-sizing: border-box">
      <c-typography-title :heading="5"> Design system</c-typography-title>
      <c-typography>
        <c-typography-paragraph>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process. The verb to design expresses the process of
          developing a design.
        </c-typography-paragraph>
        <c-typography-paragraph>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process. The verb to design expresses the process of
          developing a design.
        </c-typography-paragraph>
      </c-typography>
      <img
        style="position: relative; z-index: 7"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp"
      />
    </div>
  </c-watermark>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const form = reactive({
  rotate: 0,
  gap: [50, 50],
  offset: [],
  font: { fontSize: 16 },
  zIndex: 6,
  repeat: true,
  staggered: true,
});
</script>
