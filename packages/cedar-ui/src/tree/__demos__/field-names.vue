<template>
  <c-tree
    :default-selected-values="['0-0-2-1-0-0']"
    :fieldNames="{
      value: 'value',
      label: 'label',
      children: 'items',
      icon: 'customIcon',
    }"
    :data="treeData" />
</template>

<script lang="ts" setup>
import { IconDriveFile, IconStar } from '@cedar-design/icons-vue'
import { h } from 'vue'

const treeData = [
  {
    label: 'Trunk 0-0',
    value: '0-0',
    items: [
      {
        label: 'Branch 0-0-2',
        value: '0-0-2',
        selectable: false,
        customIcon: () => h(IconDriveFile),
        items: [
          {
            label: 'Leaf',
            value: '0-0-2-1',
            items: [
              {
                label: 'Leaf 0-0-2',
                value: '0-0-2-1-0',
                items: [
                  {
                    label: 'Leaf',
                    customIcon: () => h(IconStar),
                    value: '0-0-2-1-0-0',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Trunk 0-1',
    value: '0-1',
    items: [
      {
        label: 'Branch 0-1-1',
        value: '0-1-1',
        items: [
          {
            label: 'Leaf',
            value: '0-1-1-0',
          },
        ],
      },
    ],
  },
]
</script>
