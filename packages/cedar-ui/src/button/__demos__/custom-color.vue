<template>
  <div style="display: flex; flex-wrap: wrap; gap: 12px">
    <c-button color="#6750a4" text-color="white" :elevation="6">Custom filled</c-button>
    <c-button color="linear-gradient(to bottom right, #6750a4, #d0bcff)" text-color="white">Gradient</c-button>
    <c-button color="#6750a4" variant="text">Custom text</c-button>
    <c-button color="#6750a4" variant="outline">Custom outline</c-button>
    <c-button color="#6750a4" variant="tonal">Custom tonal</c-button>
    <c-button :ripple="false" :elevation="false">No ripple or shadow</c-button>
  </div>
</template>
