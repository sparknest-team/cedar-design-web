<template>
  <div :style="{ position: 'relative', width: '440px', height: '280px' }">
    <c-button v-tooltip:tl="'This is a Tooltip'" :style="{ position: 'absolute', top: '0', left: '70px' }" class="button"
      >TL
    </c-button>
    <c-button
      v-tooltip:top="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '0', left: '180px' }"
      class="button"
      >TOP
    </c-button>
    <c-button v-tooltip:tr="'This is a Tooltip'" :style="{ position: 'absolute', top: '0', left: '290px' }" class="button"
      >TR
    </c-button>
    <c-button
      v-tooltip:bl="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '240px', left: '70px' }"
      class="button"
      >BL
    </c-button>
    <c-button
      v-tooltip:bottom="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '240px', left: '180px' }"
      class="button"
      >BOTTOM
    </c-button>
    <c-button
      v-tooltip:br="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '240px', left: '290px' }"
      class="button"
      >BR
    </c-button>
    <c-button
      v-tooltip:lt="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '60px', left: '10px' }"
      class="button"
      >LT
    </c-button>
    <c-button
      v-tooltip:left="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '120px', left: '10px' }"
      class="button"
      >LEFT
    </c-button>
    <c-button
      v-tooltip:lb="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '180px', left: '10px' }"
      class="button"
      >LB
    </c-button>
    <c-button
      v-tooltip:rt="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '60px', left: '350px' }"
      class="button"
      >RT
    </c-button>
    <c-button
      v-tooltip:right="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '120px', left: '350px' }"
      class="button"
      >RIGHT
    </c-button>
    <c-button
      v-tooltip:rb="'This is a Tooltip'"
      :style="{ position: 'absolute', top: '180px', left: '350px' }"
      class="button"
      >RB
    </c-button>
  </div>
</template>
<script lang="ts" setup>
</script>

<style scoped>
.button {
  width: 100px;
}
</style>
