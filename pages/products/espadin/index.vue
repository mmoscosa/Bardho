<template>
  <div class="ui row">
    <div class="ui twelve wide column">
      <EspadinMain :info="fbEspadin"/>
    </div>
    <div class="ui four wide column" id="specs">
      <EspadinSide :info="fbEspadin"/>
    </div>
  </div>
</template>

<script>
// Espadin
import EspadinMain from '~/components/products/espadin/Main.vue'
import EspadinSide from '~/components/products/espadin/Side.vue'
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyCvVhMwsqx4t9I3z3_FqAE2HqR-7UlyaoA',
  authDomain: 'mezcal-bardho.firebaseapp.com',
  databaseURL: 'https://mezcal-bardho.firebaseio.com',
  projectId: 'mezcal-bardho',
  storageBucket: 'mezcal-bardho.appspot.com',
  messagingSenderId: '119896880348'
}
var firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
var db = firebaseApp.database()
export default {
  data () {
    return {
      fbEspadin: ''
    }
  },
  components: {
    EspadinMain,
    EspadinSide
  },
  firebase: {
    products: {
      source: db.ref('products'),
      // optionally bind as an object
      asObject: true,
      // this is called once the data has been retrieved from firebase
      readyCallback: function () {
        this.fbEspadin = (this.products.espadin.es) ? this.products.espadin.es : {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
