<template>
  <div class="demo">
    <div class="card body">
      <div class="title">c-bg-body + c-text-md</div>
      <div class="row">
        <span class="primary">c-text-primary</span>
        <span class="success">c-text-success</span>
        <span class="danger">c-text-danger</span>
      </div>
      <div class="banner">
        <div class="banner-inner">
          c-bg-primary · Uno / TW <code>c-text-lg</code>
          <div class="sub">
            叠加：sm:c-bg-info → md:c-bg-warning → lg:c-bg-danger →
            xl:c-bg-success
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo {
  font-size: var(--c-font-size-md);
}

.card {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--c-color-border-2);
}

.body {
  background: var(--c-color-body);
  color: var(--c-color-text-1);
}

.title {
  margin-bottom: 12px;
  font-weight: 600;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}

.primary {
  color: var(--c-color-primary);
}

.success {
  color: var(--c-color-success);
}

.danger {
  color: var(--c-color-danger);
}

.banner {
  padding: 16px;
  border-radius: 4px;
  background: var(--c-color-primary);
  color: #fff;
  font-size: var(--c-font-size-lg);

  @media (min-width: 768px) {
    background: var(--c-color-info);
  }

  @media (min-width: 992px) {
    background: var(--c-color-warning);
  }

  @media (min-width: 1200px) {
    background: var(--c-color-danger);
  }

  @media (min-width: 1920px) {
    background: var(--c-color-success);
  }
}

.sub {
  margin-top: 6px;
  font-size: var(--c-font-size-sm);
  opacity: 0.9;
}

code {
  font-size: 12px;
  opacity: 0.95;
}
</style>
