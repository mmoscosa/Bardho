<template lang="html">
  <section>
    <div class="ui row">
      <h1 v-lang.products.espadin.name></h1>
      <div>
        <img class="ui medium left floated rounded image" src="//mmoscosa.com/2k3o7if">
        <h2  v-lang.products.espadin.description.title></h2>
        <p  v-lang.products.espadin.description.longDescription></p>
        <div class="ui divider"></div>
        <div class="ui grid" id="photos">
          <div class="ui row">
            <div class="sixteen wide column photos">
              <photos/>
            </div>
          </div>
        </div>
        <div class="ui stacked segment">
          <p class="promo"  v-lang.products.espadin.promo></p>
        </div>
        <div class="ui divider"></div>
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
#photos {
  margin: 20px auto 50px auto;
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
