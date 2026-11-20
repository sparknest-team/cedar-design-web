<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="effect-fade"
    >
      <h4>effect fade</h4>
      <c-carousel class="carousel" effect="fade">
        <c-carousel-item>
          <img class="carousel-item" :src="'/cat.jpg'" alt="" />
        </c-carousel-item>
        <c-carousel-item>
          <img class="carousel-item" :src="'/cat2.jpg'" alt="" />
        </c-carousel-item>
        <c-carousel-item>
          <img class="carousel-item" :src="'/cat3.jpg'" alt="" />
        </c-carousel-item>
      </c-carousel>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="effect-card"
    >
      <h4>effect card</h4>
      <c-carousel class="carousel" effect="card">
        <c-carousel-item>
          <img class="carousel-item" :src="'/cat.jpg'" alt="" />
        </c-carousel-item>
        <c-carousel-item>
          <img class="carousel-item" :src="'/cat2.jpg'" alt="" />
        </c-carousel-item>
        <c-carousel-item>
          <img class="carousel-item" :src="'/cat3.jpg'" alt="" />
        </c-carousel-item>
      </c-carousel>
    </section>
  </div>
</template>

<style scoped lang="less">
.demo-comparison {
  display: grid;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case {
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case > h4 {
  margin: 0 0 12px;
  font-size: 14px;
}

.demo-comparison-case--1 {
  .carousel {
    height: 160px;
  }

  .carousel-example {
    height: 160px;
  }

  .carousel-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .carousel-custom-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4a90d9;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }

  .carousel-custom-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
  }

  .carousel-custom-indicator {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 12px;
    border-radius: 50%;
  }

  .carousel-custom--active {
    background: #4a90d9;
  }

  .space {
    height: 20px;
  }
}
.demo-comparison-case--2 {
  .carousel {
    height: 160px;
  }

  .carousel-example {
    height: 160px;
  }

  .carousel-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .carousel-custom-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4a90d9;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }

  .carousel-custom-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
  }

  .carousel-custom-indicator {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 12px;
    border-radius: 50%;
  }

  .carousel-custom--active {
    background: #4a90d9;
  }

  .space {
    height: 20px;
  }
}
</style>
