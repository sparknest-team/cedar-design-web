<template>
  <c-space size="lg" direction="column">
    <c-space size="lg">
      <c-menu trigger="hover">
        <c-button>Hover悬浮触发</c-button>
        <template #content>
          <c-menu-option>Option 1</c-menu-option>
          <c-menu-option>Option 2</c-menu-option>
          <c-menu-option>Option 3</c-menu-option>
        </template>
      </c-menu>

      <c-menu v-model="selected">
        <c-button>{{ selected || "请选择" }}</c-button>
        <template #content>
          <c-menu-option label="吃饭" />
          <c-menu-option label="睡觉" disabled />
          <c-menu-option label="打游戏" />
        </template>
      </c-menu>

      <c-menu @select="handleSelect">
        <c-button>菜单点击</c-button>
        <template #content>
          <c-menu-option label="新建" />
          <c-menu-option label="复制" />
          <c-menu-option label="删除" />
        </template>
      </c-menu>

      <c-menu @select="handleSelect" disabled>
        <c-button disabled>禁用</c-button>
        <template #content>
          <c-menu-option>Option 1</c-menu-option>
          <c-menu-option disabled>Option 2</c-menu-option>
          <c-menu-option>Option 3</c-menu-option>
        </template>
      </c-menu>

      <c-menu @select="handleSelect" :popup-max-height="false">
        <c-button>
          No Max Height
          <icon-down />
        </c-button>
        <template #content>
          <c-menu-option>Option 1</c-menu-option>
          <c-menu-option disabled>Option 2</c-menu-option>
          <c-menu-option>Option 3</c-menu-option>
          <c-menu-option>Option 4</c-menu-option>
          <c-menu-option>Option 5</c-menu-option>
          <c-menu-option>Option 6</c-menu-option>
          <c-menu-option>Option 7</c-menu-option>
          <c-menu-option>Option 8</c-menu-option>
          <c-menu-option>Option 9</c-menu-option>
        </template>
      </c-menu>
    </c-space>

    <c-space size="lg">
      <c-menu>
        <c-button>选项分组</c-button>
        <template #content>
          <c-menu-group title="Group 1">
            <c-menu-option>Option 1</c-menu-option>
            <c-menu-option>Option 2</c-menu-option>
            <c-menu-option>Option 3</c-menu-option>
          </c-menu-group>
          <c-menu-group title="Group 2">
            <c-menu-option>Option 4</c-menu-option>
            <c-menu-option>Option 5</c-menu-option>
            <c-menu-option>Option 6</c-menu-option>
          </c-menu-group>
        </template>
      </c-menu>

      <c-menu>
        <c-button>多级菜单</c-button>
        <template #content>
          <c-menu-option>Option 1</c-menu-option>
          <c-menu-submenu value="option-1">
            <template #default>Option 2</template>
            <template #content>
              <c-menu-option>Option 2-1</c-menu-option>
              <c-menu-submenu value="option-2-2" trigger="hover">
                <template #default>Option 2-2</template>
                <template #content>
                  <c-menu-option>Option 2-1</c-menu-option>
                  <c-menu-option>Option 2-2</c-menu-option>
                  <c-menu-option>Option 2-3</c-menu-option>
                </template>
                <template #footer>
                  <div style="padding: 6px; text-align: center">
                    <c-button>Click</c-button>
                  </div>
                </template>
              </c-menu-submenu>
              <c-menu-option>Option 2-3</c-menu-option>
            </template>
          </c-menu-submenu>
          <c-menu-option>Option 3</c-menu-option>
        </template>
      </c-menu>

      <c-menu>
        <c-button>插入图标</c-button>
        <template #content>
          <c-menu-option>
            <template #icon>
              <c-icon-location />
            </template>
            <template #default>Option 1</template>
          </c-menu-option>
          <c-menu-option>
            <template #icon>
              <c-icon-location />
            </template>
            <template #default>Option 2</template>
          </c-menu-option>
          <c-menu-option>
            <template #icon>
              <c-icon-location />
            </template>
            <template #default>Option 3</template>
          </c-menu-option>
        </template>
      </c-menu>
    </c-space>

    <c-menu trigger="contextMenu" alignPoint>
      <div
        :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '150px',
          maxWidth: '750px',
          backgroundColor: 'var(--color-fill-2)',
        }"
      >
        右击出菜单
      </div>
      <template #content>
        <c-menu-option>Option 1</c-menu-option>
        <c-menu-option>Option 2</c-menu-option>
        <c-menu-option>Option 3</c-menu-option>
      </template>
    </c-menu>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selected = ref("吃饭");

const handleSelect = (v) => {
  console.log(v);
};
</script>

<style>
.c-menu-open .c-icon-down {
  transform: rotate(180deg);
}
</style>
