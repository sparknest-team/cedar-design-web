<template>
  <section class="divider-flow-demo">
    <h4>Minimum explicit width</h4>
    <div class="flow-sample">
      <c-divider
        data-min-line
        :thickness="1"
        :spacing="0"
        description="Content stays in normal flow"
      />
      <p>Following content</p>
    </div>
    <h4>Multiline content</h4>
    <div class="flow-sample">
      <c-divider
        data-multiline
        :thickness="4"
        :spacing="0"
        description="A wrapping section title reserves its full height"
      />
      <p>Following content</p>
    </div>
    <h4>Custom content</h4>
    <div class="flow-sample">
      <c-divider data-custom-content :spacing="0"
        ><span class="flow-content"
          >First line<br />Second line</span
        ></c-divider
      >
      <p>Following content</p>
    </div>
    <p>hairline takes priority and halves the theme width.</p>
  </section>
</template>
<style scoped>
.flow-sample {
  max-width: 280px;
}
.flow-sample p {
  margin: 0;
}
.flow-content {
  padding: 12px 0;
}
</style>
