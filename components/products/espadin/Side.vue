<template>
  <section class="ui grid">
    <div class="ui row">
      <div class="sixteen wide column">
        <h2 v-lang.products.espadin.master.title></h2>
        <div>
          <img class="ui small centered circular image" src=" https://firebasestorage.googleapis.com/v0/b/mezcal-bardho.appspot.com/o/master.gif?alt=media&token=137a4787-8688-4aa6-9b2a-4752a346f059">
          <h3 v-lang.products.espadin.master.name></h3>
          <p v-lang.products.espadin.master.bio></p>
        </div>
        <div class="ui divider"></div>
      </div>
      <quickDetails/>
      <div class="sixteen wide column">
        <div class="ui divider"></div>
        <h2 v-lang.products.espadin.reviews.title=""></h2>

          <!-- Top -->
          <img class="ui tiny left floated circular image" src="https://firebasestorage.googleapis.com/v0/b/mezcal-bardho.appspot.com/o/reviewers%2Fpaa.jpg?alt=media&token=8b75fbb4-e1a0-45f5-abd9-8efe0ea6997e">
          <strong v-lang.products.espadin.reviews.top.name></strong><br>
          <small v-lang.products.espadin.reviews.top.position></small>
          <p><i class="quote left icon"></i> <span v-lang.products.espadin.reviews.top.comment></span></p>

        <div class="ui divider"></div>
        <disqus shortname="bardho"></disqus>
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
  }
}
</script>
