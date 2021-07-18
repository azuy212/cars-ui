<template>
  <div class="pt-16 pb-16 bg-forest-night">
    <div class="px-4 pb-10 text-center">
      <div class="flex justify-center">
        <NuxtLogo />
      </div>
      <h1
        class="
          mt-4
          text-h4
          font-weight-bold
          white--text
          text-sm-h2
          text-lg-h2
        "
      >
        Prime Traders
      </h1>
      <p class="max-w-xl mx-auto mt-5 text-sm-h6 text-rainy-grey">
        Description of this site goes here
      </p>
    </div>
  </div>
</template>

<style scoped>
.bg-forest-night {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 60, 60, var(--tw-bg-opacity));
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.max-w-xl {
  max-width: 36rem;
}
.text-rainy-grey {
  --tw-text-opacity: 1;
  color: rgba(209, 226, 226, var(--tw-text-opacity));
}
</style>