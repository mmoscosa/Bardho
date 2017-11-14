<template>
  <section class="ui grid">
    <div class="ui row">
      <div class="sixteen wide column">
        <h2 v-lang.products.master></h2>
        <div>
          <img class="ui small centered circular image" src="~/assets/master.gif">
          <h3>{{info.master.name}}</h3>
          <p>{{info.master.bio}}</p>
        </div>
        <div class="ui divider"></div>
      </div>
      <quickDetails :info="info"/>
      <div class="sixteen wide column">
        <div class="ui divider"></div>
        <h2 v-lang.products.reviews></h2>
        <div v-for="review in info.reviews">
          <img class="ui tiny left floated circular image" src="~/assets/paa.jpg">
          <strong>{{review.name}}</strong><br>
          <small>{{review.position}}</small>
          <p><i class="quote left icon"></i> <span>{{review.comment}}</span></p>
        </div>
        <div class="ui divider"></div>
        <!-- <disqus shortname="bardho"></disqus> -->
      </div>
    </div>
  </section>
</template>

<script>
import quickDetails from '~/components/products/espadin/QuickDetails'
import disqus from '~/components/utils/Disqus'
export default {
  components: {
    disqus,
    quickDetails
  },
  props: ['info']
}
</script>

<style lang="less">
</style>
