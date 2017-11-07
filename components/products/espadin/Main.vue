<template lang="html">
  <section>
    <div class="ui row">
      <h1 v-lang.products.variants.espadin.name></h1>
      <div>
        <img class="ui medium left floated rounded image" src="~/assets/espadin.png">
        <h2 v-lang.products.description>Descripcion</h2>
        <p v-lang.products.variants.espadin.description></p>
        <div class="ui divider"></div>
        <h2 v-lang.products.rapidDetails></h2>
        <div class="ui four statistics">
          <div class="statistic">
            <div class="value">
              <i class="money icon"></i>
            </div>
            <div class="label">
              <span v-lang.products.variants.espadin.price></span>
            </div>
          </div>
          <div class="statistic">
            <div class="value">
              <i class="thermometer three quarters icon"></i>
            </div>
            <div class="label">
              <span v-lang.products.variants.espadin.alcohol></span>
            </div>
          </div>
          <div class="statistic">
            <div class="value">
              <i class="bullseye icon"></i>
            </div>
            <div class="label">
              <span v-lang.products.variants.espadin.volume></span>
            </div>
          </div>
          <div class="statistic">
            <div class="value">
              <i class="fork icon"></i>
            </div>
            <div class="label">
              <span v-lang.products.variants.espadin.version></span>
            </div>
          </div>
        </div>
        <div class="photos">
          <photos/>
        </div>
        <div class="ui stacked segment">
          <p class="promo" v-lang.mailchimpInvite></p>
        </div>
        <MailList/>
      </div>
    </div>
    <div class="ui row">
      <div class="ui divider"></div>
      <h2 v-lang.stories.title></h2>
      <Stories/>
      <br>
      <section class="ui centered grid">
        <a href="https://medium.com/@mezcalbardho" class="ui tiny branded-accent button">Powered by <i class="medium icon"></i></a>
      </section>
    </div>
  </section>
</template>

<script>
import Stories from '~/components/products/espadin/Stories'
import MailList from '~/components/utils/MailList'
import Photos from '~/components/products/espadin/Photos'
export default {
  components: {
    Stories,
    MailList,
    Photos
  }
}
</script>

<style lang="less">
.ui.statistics {
    font-size: 80%;
}
.photos{
  display: inline-block;
}
.promo{
    font-size: 16pt;
    strong{
      font-size: 22pt;
    }
}
</style>
