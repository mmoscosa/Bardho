<template lang="html">
<section>
  <h2 v-lang.products.rapidDetails></h2>
  <div class="ui grid">
    <div class="center aligned three column row">
      <div class="column">
        <div class="statistic">
          <div class="value">
            <i class="money icon"></i>
          </div>
          <div class="label">
            <span v-lang.products.espadin.price></span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="statistic">
          <div class="value">
            <i class="thermometer three quarters icon"></i>
          </div>
          <div class="label">
            <span v-lang.products.espadin.alcohol></span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="statistic">
          <div class="value">
            <i class="bullseye icon"></i>
          </div>
          <div class="label">
            <span v-lang.products.espadin.volume></span>
          </div>
        </div>
      </div>
      <!-- <div class="column">
        <div class="statistic">
          <div class="value">
            <i class="fork icon"></i>
          </div>
          <div class="label">
            <span v-lang.products.variants.espadin.version></span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</section>
</template>
