<template>
  <div>
    <h2 v-lang.contact.sidebar.social></h2>
    <a href="//www.facebook.com/mezcalbardho" class="ui facebook fluid button">
      <i class="facebook icon"></i>
      Facebook
    </a>
    <div class="ui divider"></div>
    <a href="//www.twitter.com/mezcalbardho" class="ui twitter fluid button">
      <i class="twitter icon"></i>
      Twitter
    </a>
    <div class="ui divider"></div>
    <a href="//www.instagram.com/mezcalbardho" class="ui instagram fluid button">
      <i class="instagram icon"></i>
      Instagram
    </a>
    <div class="ui divider"></div>
    <h3 v-lang.contact.sidebar.sharing></h3>
    <socialSharing :shareData="shareData"/>
</div>
</template>

<script>
import socialSharing from '~/components/utils/shareSocial'
export default {
  data () {
    return {
      shareData: {
        link: 'https://bardho.com/',
        title: 'Mezcal Bardho | Compartiendo historias',
        description: 'Mezcal Bardho | Compartiendo historias: Para personas que siempre estan buscando dar mas, arreglarselas con creatividad, siempre manteniendo un estilo muy propio, personas que nunca se dan por vencido.',
        quote: 'Muy al estilo mexicano el celebrar las victorias así como las derrotas, inequvicadamente el acompañante perfecto, aquel testigo es Mezcal Bardho.',
        tags: 'mezcal,bardho,artesanal,mexico'
      }
    }
  },
  components: {
    socialSharing
  }
}
</script>

<style lang="css">
</style>
