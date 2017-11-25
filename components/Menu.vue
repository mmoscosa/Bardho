<template>
  <nav class="computer only column" id="navbar">
    <div class="ui secondary pointing menu">
      <nuxt-link to="/" class="item" :class="{'active' : section == 'index'}" v-lang.utils.menu.home>
      </nuxt-link>
      <nuxt-link to="/products/espadin" class="ui item" :class="{'active' : section == 'products' || section == 'products-espadin'}" v-lang.utils.menu.products></nuxt-link>
      <nuxt-link to="/stories" class="ui item" :class="{'active' : section == 'stories' || section == 'stories-id'}" v-lang.utils.menu.stories></nuxt-link>
      <div class="right menu">
        <nuxt-link to="/contact" class="ui item" :class="{'active' : section == 'contact'}" v-lang.utils.menu.contact></nuxt-link>
        <div class="ui item">
          <i class="mx flag" @click="changeLanuage('es')"></i>
        </div>
        <div class="ui item" >
          <i class="gb flag" @click="changeLanuage('en')"></i>
        </div>
        <div class="ui item" >
          <i class="fr flag" @click="changeLanuage('fr')"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      section: ''
    }
  },
  mounted () {
    this.defineActive()
    this.setLanguage()
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      this.defineActive(newRoute, oldRoute)
    }
  },
  route: {
    canReuse: true
  },
  methods: {
    defineActive (newRoute, oldRoute) {
      this.section = this.$route.name
    },
    setLanguage: function () {
      var locale = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
      // var en = ['en', 'en-US', 'en-EG', 'en-AU', 'en-GB', 'en-CA', 'en-NZ', 'en-IE', 'en-ZA', 'en-JM']
      var fr = ['fr', 'fr-BE', 'fr-CA', 'fr-CH', 'fr-LU']
      var es = ['es', 'es-AR', 'es-GT', 'es-CR', 'es-PA', 'es-DO', 'es-MX', 'es-VE', 'es-CO', 'es-PE', 'es-EC', 'es-CL', 'es-UY', 'es-PY', 'es-BO', 'es-SV', 'es-HN', 'es-NI', 'es-PR']
      if (this.language === 'none') {
        if (locale in fr) {
          this.language = 'fr'
        } else if (locale in es) {
          this.language = 'es'
        } else {
          this.language = 'en'
        }
      }
    },
    changeLanuage: function (lang) {
      this.language = lang
    }
  }
}
</script>

<style lang="less" scoped>
@brandColor: #f57450;
#navbar{
  margin-bottom: 30px;
  small{
    padding-left: 5px;
    font-size: 7pt;
  }
  i{
    cursor: pointer !important;
  }
}
.ui.secondary.pointing.menu .active.item {
    background-color: transparent;
    box-shadow: none;
    border-color: @brandColor;
    font-weight: 700;
    color: rgba(0,0,0,.95);
}
</style>
