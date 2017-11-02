<template>
  <section class="ui grid">
    <div class="ui row">
      <div class="sixteen wide column">
        <h2 v-lang.products.master></h2>
        <div>
          <img class="ui small centered circular image" src="~/assets/master.gif">
          <h3 v-lang.products.variants.espadin.master.name></h3>
          <p v-lang.products.variants.espadin.master.bio></p>
        </div>
        <div class="ui divider"></div>
      </div>
      <div class="sixteen wide column">
        <h2 v-lang.products.reviews></h2>
        <div>
          <img class="ui tiny left floated circular image" src="~/assets/paa.jpg">
          <strong v-lang.products.variants.espadin.reviews.one.name></strong><br>
          <small v-lang.products.variants.espadin.reviews.one.position></small>
          <p><i class="quote left icon"></i> <span v-lang.products.variants.espadin.reviews.one.comment></span></p>
        </div>
        <div class="ui divider"></div>
        <disqus shortname="bardho"></disqus>
      </div>
    </div>
  </section>
</template>

<script>
import disqus from '~/components/utils/Disqus'
export default {
  components: {
    disqus
  }
}
</script>

<style lang="less">
</style>
