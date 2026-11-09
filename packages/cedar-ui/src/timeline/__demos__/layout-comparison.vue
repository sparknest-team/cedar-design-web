<script setup lang="ts">
import { ref } from "vue"
import { proxyRefs as demoProxyRefs } from 'vue'

const scene1 = demoProxyRefs((() => {


const mode = ref('left')


const onChange = (_mode) => {
  mode.value = _mode
}
return { mode, onChange }
})())

const scene2 = demoProxyRefs((() => {


const mode = ref('top')


const onChange = (_mode) => {
  mode.value = _mode
}
return { mode, onChange }
})())

const scene3 = demoProxyRefs((() => {


const mode = ref('left')

const pos = ref('same')


const onLabelPositionChange = (_pos) => {
  pos.value = _pos
}


const onModeChange = (_mode) => {
  mode.value = _mode
}
return { mode, pos, onLabelPositionChange, onModeChange }
})())
</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="vertical">
    <h4><span lang="zh-CN">纵向时间轴</span><span lang="en-US">vertical</span></h4>
    <div>
        <c-row align="center" :style="{
      marginBottom: '24px'
    }">
          <c-typography-text>mode: &nbsp; &nbsp;</c-typography-text>
          <c-radio-group @change="scene1.onChange" :modelValue="scene1.mode">
            <c-radio value="left">left</c-radio>
            <c-radio value="right">right</c-radio>
            <c-radio value="alternate">alternate</c-radio>
          </c-radio-group>
        </c-row>
        <c-timeline :mode="scene1.mode" labelPosition="relative">
          <c-timeline-item label="2012-08">
            <c-row :style="{
      display: 'inline-flex',
      alignItems: 'center'
    }">
              <img
                width="40"
                :style="{
      marginRight: '16px',
      marginBottom: '12px'
    }"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png"
              />
              <div :style="{
      marginBottom: '12px'
    }">
                Toutiao
                <div :style="{
      fontSize: '12px',
      color: '#4E5969'
    }">Founded in 2012</div>
              </div>
            </c-row>
          </c-timeline-item>
          <c-timeline-item label="2017-05">
            <c-row :style="{
      display: 'inline-flex',
      alignItems: 'center'
    }">
              <img
                width="40"
                :style="{
      marginRight: '16px',
      marginBottom: '12px'
    }"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png"
              />
              <div :style="{
      marginBottom: '12px'
    }">
                Xigua Video
                <div :style="{
      fontSize: '12px',
      color: '#4E5969'
    }">Founded in 2017</div>
              </div>
            </c-row>
          </c-timeline-item>
          <c-timeline-item label="2018-07">
            <c-row :style="{
      display: 'inline-flex',
      alignItems: 'center'
    }">
              <img
                width="40"
                :style="{
      marginRight: '16px',
      marginBottom: '12px'
    }"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png"
              />
              <div :style="{
      marginBottom: '12px'
    }">
                Pipidance
                <div :style="{
      fontSize: '12px',
      color: '#4E5969'
    }">Founded in 2018</div>
              </div>
            </c-row>
          </c-timeline-item>
        </c-timeline>
      </div>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="direction">
    <h4><span lang="zh-CN">横向时间轴</span><span lang="en-US">direction</span></h4>
    <div>
        <c-row align="center" :style="{
      marginBottom: '24px'
    }">
          <c-typography-text>mode: &nbsp; &nbsp;</c-typography-text>
          <c-radio-group @change="scene2.onChange" :modelValue="scene2.mode">
            <c-radio value="top">top</c-radio>
            <c-radio value="bottom">bottom</c-radio>
            <c-radio value="alternate">alternate</c-radio>
          </c-radio-group>
        </c-row>
        <c-timeline orientation="horizontal" pending :mode="scene2.mode">
          <c-timeline-item label="2012-08">
            <c-row :style="{
      display: 'inline-flex',
      alignItems: 'center'
    }">
              <img
                width="40"
                :style="{
      marginRight: '16px',
      marginBottom: '12px'
    }"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png"
              />
              <div :style="{
      marginBottom: '12px'
    }">
                Toutiao
                <div :style="{
      fontSize: '12px',
      color: '#4E5969'
    }">Founded in 2012</div>
              </div>
            </c-row>
          </c-timeline-item>
          <c-timeline-item label="2017-05">
            <c-row :style="{
      display: 'inline-flex',
      alignItems: 'center'
    }">
              <img
                width="40"
                :style="{
      marginRight: '16px',
      marginBottom: '12px'
    }"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png"
              />
              <div :style="{
      marginBottom: '12px'
    }">
                Xigua Video
                <div :style="{
      fontSize: '12px',
      color: '#4E5969'
    }">Founded in 2017</div>
              </div>
            </c-row>
          </c-timeline-item>
          <c-timeline-item label="2018-07">
            <c-row :style="{
      display: 'inline-flex',
      alignItems: 'center'
    }">
              <img
                width="40"
                :style="{
      marginRight: '16px',
      marginBottom: '12px'
    }"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png"
              />
              <div :style="{
      marginBottom: '12px'
    }">
                Pipidance
                <div :style="{
      fontSize: '12px',
      color: '#4E5969'
    }">Founded in 2018</div>
              </div>
            </c-row>
          </c-timeline-item>
        </c-timeline>
      </div>
  </section>

  <section class="demo-comparison-case demo-comparison-case--3" data-comparison-scene="label">
    <h4><span lang="zh-CN">标签文本位置</span><span lang="en-US">label</span></h4>
    <div>
        <c-row align="center">
          <c-typography-text>labelPosition: &nbsp; &nbsp;</c-typography-text>
          <c-radio-group @change="scene3.onLabelPositionChange" :modelValue="scene3.pos">
            <c-radio value="same">same</c-radio>
            <c-radio value="relative">relative</c-radio>
          </c-radio-group>
        </c-row>
        <c-row align="center" :style="{
      margin: '20px 0px 24px'
    }">
          <c-typography-text>mode: &nbsp; &nbsp;</c-typography-text>
          <c-radio-group @change="scene3.onModeChange" :modelValue="scene3.mode">
            <c-radio value="left">left</c-radio>
            <c-radio value="right">right</c-radio>
            <c-radio value="alternate">alternate</c-radio>
          </c-radio-group>
        </c-row>
        <c-timeline :mode="scene3.mode" :labelPosition="scene3.pos">
          <c-timeline-item label="2017-03-10" dotColor="#52C419"> The first milestone </c-timeline-item>
          <c-timeline-item label="2018-05-12" dotColor="#F5222D" labelPosition="same"> The second milestone </c-timeline-item>
          <c-timeline-item label="2020-09-30" content-placement="left"> The third milestone </c-timeline-item>
        </c-timeline>
      </div>
  </section>
</div>
</template>

<style scoped lang="less">
.demo-comparison { display: grid; gap: 24px; min-width: 0; max-width: 100%; }
.demo-comparison-case { min-width: 0; max-width: 100%; }
.demo-comparison-case > h4 { margin: 0 0 12px; font-size: 14px; }
html:not([lang='en-US']) .demo-comparison-case > h4 > [lang='en-US'],
html[lang='en-US'] .demo-comparison-case > h4 > [lang='zh-CN'] { display: none; }

</style>
