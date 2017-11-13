<template lang="html">
  <section>
    <h2>¡Felicidades!</h2>
    <p>Ya estas registrado en nuestra base, estas muy cerca de ganar tu primera botella de Bardho</p>
    <div class="ui tablet fluid stackable steps">
      <div class="completed step">
        <i class="id card outline icon"></i>
        <div class="content">
          <div class="title">Registrarse</div>
          <div class="description">Registrarse en la lista para participar</div>
        </div>
      </div>
      <div class="active step">
        <i class="share alternate icon"></i>
        <div class="content">
          <div class="title link" @click="linkToShare(userCode)">Compartir</div>
          <div class="description">
            Invita a tus <a class="link" @click="linkToShare(userCode)">amistades</a>
            <br>
            Tu codigo: {{userCode}}
          </div>
        </div>
      </div>
      <div class="disabled step">
        <i class="trophy icon"></i>
        <div class="content">
          <div class="title">¡Gana!</div>
          <div class="description">Disfruta la historia de Bardho</div>
        </div>
      </div>
    </div>
    <div class="ui divider"></div>
    <p>Te invitamos a que compartas en las diferentes redes sociales tu link personalisado para que más personas se registren con tu codigo, dandote asi mayor oportunidad de ganar; no esperes más, son solo un par de clicks.</p>
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
        title: 'Estoy participando por una botella de Mezcal Bardho, utiliza el código: ' + this.userCode 'Para participar.',
        description: 'Te invito a participar en una de las primeras 10 botellas de Mezcal Bardho!',
        quote: 'Estoy participando por una botella de Mezcal Bardho, utiliza el código: ' + this.userCode 'Para participar.',
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
