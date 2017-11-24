<template lang="html">
  <section>
    <h2 v-lang.utils.thanksMailingList.title></h2>
    <p v-lang.utils.thanksMailingList.blurb></p>
    <div class="ui tablet fluid stackable steps">
      <div class="completed step">
        <i class="id card outline icon"></i>
        <div class="content">
          <div class="title" v-lang.utils.thanksMailingList.steps.one.title></div>
          <div class="description" v-lang.utils.thanksMailingList.steps.one.description></div>
        </div>
      </div>
      <div class="active step">
        <i class="share alternate icon"></i>
        <div class="content">
          <div class="title link" @click="linkToShare(userCode)" v-lang.utils.thanksMailingList.steps.two.title></div>
          <div class="description">
            <a class="link" @click="linkToShare(userCode)" v-lang.utils.thanksMailingList.steps.two.description></a>
            <br>
            <span v-lang.utils.thanksMailingList.steps.two.code></span> {{userCode}}
          </div>
        </div>
      </div>
      <div class="disabled step">
        <i class="trophy icon"></i>
        <div class="content">
          <div class="title" v-lang.utils.thanksMailingList.steps.three.title></div>
          <div class="description" v-lang.utils.thanksMailingList.steps.three.description></div>
        </div>
      </div>
    </div>
    <div class="ui divider"></div>
    <p></p>
    <socialSharing :shareData="shareData"/>
  </section>
</template>

<script>
import socialSharing from '~/components/utils/shareSocial'
export default {
  data () {
    return {
      shareData: {
        link: 'https://bardho.com/products/espadin/' + this.userCode,
        title: 'Estoy participando por una botella de Mezcal Bardho, utiliza el código: ' + this.userCode + 'Para participar.',
        description: 'Te invito a participar en una de las primeras 10 botellas de Mezcal Bardho!',
        quote: 'Estoy participando por una botella de Mezcal Bardho, utiliza el código: ' + this.userCode + 'Para participar.',
        tags: 'mezcal,bardho,artesanal,mexico'
      }
    }
  },
  components: {
    socialSharing
  },
  props: ['userCode'],
  mounted () {
    this.setShareUrl()
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      this.setShareUrl(newRoute, oldRoute)
    }
  },
  route: {
    canReuse: true
  },
  methods: {
    linkToShare: function (code) {
      window.location = '//bardho.com/products/espadin?code=' + code
    },
    setShareUrl (newRoute, oldRoute) {
      this.shareData.link = 'http://bardho.com' + this.$route.fullPath + '/?code=' + this.userCode
    }
  }
}
</script>

<style lang="less">
.link{
  cursor: pointer !important;
}
</style>
