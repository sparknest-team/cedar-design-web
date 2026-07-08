<template>
  <div>
    <c-row align="center" :style="{ marginBottom: '24px' }">
      <c-typography-text>mode: &nbsp; &nbsp;</c-typography-text>
      <c-radio-group @change="onChange" :modelValue="mode">
        <c-radio value="top">top</c-radio>
        <c-radio value="bottom">bottom</c-radio>
        <c-radio value="alternate">alternate</c-radio>
      </c-radio-group>
    </c-row>
    <c-timeline direction="horizontal" pending :mode="mode">
      <c-timeline-item label="2012-08">
        <c-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png"
          />
          <div :style="{ marginBottom: '12px' }">
            Toutiao
            <div :style="{ fontSize: '12px', color: '#4E5969' }">Founded in 2012</div>
          </div>
        </c-row>
      </c-timeline-item>
      <c-timeline-item label="2017-05">
        <c-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png"
          />
          <div :style="{ marginBottom: '12px' }">
            Xigua Video
            <div :style="{ fontSize: '12px', color: '#4E5969' }">Founded in 2017</div>
          </div>
        </c-row>
      </c-timeline-item>
      <c-timeline-item label="2018-07">
        <c-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png"
          />
          <div :style="{ marginBottom: '12px' }">
            Pipidance
            <div :style="{ fontSize: '12px', color: '#4E5969' }">Founded in 2018</div>
          </div>
        </c-row>
      </c-timeline-item>
    </c-timeline>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mode = ref('top')

const onChange = (_mode) => {
  mode.value = _mode
}
</script>
