<template>
  <div class="overview">
    <section class="block">
      <div class="label c-text-3">Color text</div>
      <div class="row c-flex c-items-center">
        <span class="c-text-1 c-mr-16">c-text-1</span>
        <span class="c-text-2 c-mr-16">c-text-2</span>
        <span class="c-text-3 c-mr-16">c-text-3</span>
        <span class="c-text-4">c-text-4</span>
      </div>
    </section>

    <section class="block c-mt-24">
      <div class="label c-text-3">Background</div>
      <div class="row c-flex c-items-center">
        <div class="swatch c-bg-0 border-box c-p-8 c-mr-8">c-bg-0</div>
        <div class="swatch c-bg-1 c-p-8 c-mr-8">c-bg-1</div>
        <div class="swatch c-bg-2 c-p-8">c-bg-2</div>
      </div>
    </section>

    <section class="block c-mt-24">
      <div class="label c-text-3">Spacing</div>
      <div class="spacing-stage c-fill-2 c-p-16">
        <div class="box c-fill-2 c-mt-16 c-px-8">
          <div class="inner c-bg-0">c-mt-16 c-px-8</div>
        </div>
        <div class="box c-fill-3 c-mx-16 c-py-8">
          <div class="inner c-bg-0">c-mx-16 c-py-8</div>
        </div>
        <div class="box c-fill-4 c-p-24">
          <div class="inner c-bg-0">c-p-24</div>
        </div>
      </div>
    </section>

    <section class="block c-mt-24">
      <div class="label c-text-3">Flex</div>
      <div class="c-flex c-justify-between c-items-center c-fill-2 c-p-16">
        <div class="chip c-fill-1 c-p-8">start</div>
        <div class="chip c-fill-2 c-p-8">between</div>
        <div class="chip c-fill-3 c-p-8">end</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.overview {
  font-size: 13px;
}

.label {
  margin-bottom: 8px;
}

.swatch {
  min-width: 72px;
  text-align: center;
  border: 1px solid var(--c-color-border-2);
}

.border-box {
  border: 1px solid var(--c-color-border-2);
}

.spacing-stage {
  display: c-flex;
  c-flex-wrap: wrap;
  gap: 8px;
}

.box {
  display: c-inline-block;
}

.inner {
  min-width: 88px;
  text-align: center;
  line-height: 32px;
}

.chip {
  min-width: 64px;
  text-align: center;
}
</style>
