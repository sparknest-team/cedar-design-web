<template>
  <c-space size="lg" direction="column">
    <c-space size="lg">
      <c-dropdown trigger="hover">
        <c-button>Hover悬浮触发</c-button>
        <template #content>
          <c-doption>Option 1</c-doption>
          <c-doption>Option 2</c-doption>
          <c-doption>Option 3</c-doption>
        </template>
      </c-dropdown>

      <c-dropdown @select="handleSelect">
        <c-button>点击触发</c-button>
        <template #content>
          <c-doption>Option 1</c-doption>
          <c-doption disabled>Option 2</c-doption>
          <c-doption :value="{ value: 'Option3' }">Option 3</c-doption>
        </template>
      </c-dropdown>

      <c-dropdown @select="handleSelect" disabled>
        <c-button disabled>禁用</c-button>
        <template #content>
          <c-doption>Option 1</c-doption>
          <c-doption disabled>Option 2</c-doption>
          <c-doption>Option 3</c-doption>
        </template>
      </c-dropdown>

      <c-dropdown @select="handleSelect" :popup-max-height="false">
        <c-button>
          No Max Height
          <icon-down />
        </c-button>
        <template #content>
          <c-doption>Option 1</c-doption>
          <c-doption disabled>Option 2</c-doption>
          <c-doption>Option 3</c-doption>
          <c-doption>Option 4</c-doption>
          <c-doption>Option 5</c-doption>
          <c-doption>Option 6</c-doption>
          <c-doption>Option 7</c-doption>
          <c-doption>Option 8</c-doption>
          <c-doption>Option 9</c-doption>
        </template>
      </c-dropdown>
    </c-space>

    <c-space size="lg">
      <c-dropdown>
        <c-button>选项分组</c-button>
        <template #content>
          <c-dgroup title="Group 1">
            <c-doption>Option 1</c-doption>
            <c-doption>Option 2</c-doption>
            <c-doption>Option 3</c-doption>
          </c-dgroup>
          <c-dgroup title="Group 2">
            <c-doption>Option 4</c-doption>
            <c-doption>Option 5</c-doption>
            <c-doption>Option 6</c-doption>
          </c-dgroup>
        </template>
      </c-dropdown>

      <c-dropdown>
        <c-button>多级菜单</c-button>
        <template #content>
          <c-doption>Option 1</c-doption>
          <c-dsubmenu value="option-1">
            <template #default>Option 2</template>
            <template #content>
              <c-doption>Option 2-1</c-doption>
              <c-dsubmenu value="option-2-2" trigger="hover">
                <template #default>Option 2-2</template>
                <template #content>
                  <c-doption>Option 2-1</c-doption>
                  <c-doption>Option 2-2</c-doption>
                  <c-doption>Option 2-3</c-doption>
                </template>
                <template #footer>
                  <div style="padding: 6px; text-align: center">
                    <c-button>Click</c-button>
                  </div>
                </template>
              </c-dsubmenu>
              <c-doption>Option 2-3</c-doption>
            </template>
          </c-dsubmenu>
          <c-doption>Option 3</c-doption>
        </template>
      </c-dropdown>

      <c-dropdown>
        <c-button>插入图标</c-button>
        <template #content>
          <c-doption>
            <template #icon>
              <c-icon-location />
            </template>
            <template #default>Option 1</template>
          </c-doption>
          <c-doption>
            <template #icon>
              <c-icon-location />
            </template>
            <template #default>Option 2</template>
          </c-doption>
          <c-doption>
            <template #icon>
              <c-icon-location />
            </template>
            <template #default>Option 3</template>
          </c-doption>
        </template>
      </c-dropdown>
    </c-space>

    <c-dropdown trigger="contextMenu" alignPoint>
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
        <c-doption>Option 1</c-doption>
        <c-doption>Option 2</c-doption>
        <c-doption>Option 3</c-doption>
      </template>
    </c-dropdown>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const handleSelect = (v) => {
  console.log(v)
}
</script>

<style>
.c-dropdown-open .c-icon-down {
  transform: rotate(180deg);
}
</style>
