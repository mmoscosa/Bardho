<template>
  <nav class="computer only column" id="navbar">
    <div class="ui secondary pointing menu">
      <nuxt-link to="/" class="item" :class="{'active' : section == 'index'}" v-lang.utils.menu.home>
      </nuxt-link>
      <nuxt-link to="/products/espadin" class="custom mobile hidden ui item" :class="{'active' : section == 'products' || section == 'products-espadin'}" v-lang.utils.menu.products></nuxt-link>
      <nuxt-link to="/stories" class="custom mobile hidden ui item" :class="{'active' : section == 'stories' || section == 'stories-id'}" v-lang.utils.menu.stories></nuxt-link>
      <div class="right menu">
        <div class="custom mobile only ui item">
          <div class="ui selection dropdown">
            <input type="hidden" name="gender">
            <i class="dropdown icon"></i>
            <div class="default text" v-lang.utils.menu.dropdown.select></div>
            <div class="menu">
              <nuxt-link to="/products/espadin" class="ui item" :class="{'active' : section == 'products' || section == 'products-espadin'}" v-lang.utils.menu.products></nuxt-link>
              <nuxt-link to="/stories" class="item" :class="{'active' : section == 'stories' || section == 'stories-id'}" v-lang.utils.menu.stories></nuxt-link>
              <nuxt-link to="/contact" class="item" :class="{'active' : section == 'contact'}" v-lang.utils.menu.contact></nuxt-link>
              <div class="header">
                <i class="world icon"></i>
                <span v-lang.utils.menu.dropdown.header></span>
              </div>
              <div class="item" @click="changeLanuage('es')">
                <i class="mx flag"></i> Español
              </div>
              <div class="item" @click="changeLanuage('en')">
                <i class="gb flag"></i> English
              </div>
              <div class="item" @click="changeLanuage('fr')">
                <i class="fr flag"></i> Français
              </div>
              <div class="item" @click="changeLanuage('cn')">
                <i class="cn flag"></i> 中文
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/contact" class="custom mobile hidden ui item" :class="{'active' : section == 'contact'}" v-lang.utils.menu.contact></nuxt-link>
        <div class="custom mobile hidden ui item" @click="changeLanuage('es')">
          <i class="mx flag"></i>
        </div>
        <div class="custom mobile hidden ui item" @click="changeLanuage('en')">
          <i class="gb flag"></i>
        </div>
        <div class="custom mobile hidden ui item" @click="changeLanuage('fr')">
          <i class="fr flag"></i>
        </div>
        <div class="custom mobile hidden ui item" @click="changeLanuage('cn')">
          <i class="cn flag"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import jQuery from 'jquery'
const $ = jQuery

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
    this.semantize()
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
    semantize () {
      window.jQuery = jQuery
      $.fn.transition = require('semantic-ui-transition')
      $.fn.dropdown = require('semantic-ui-dropdown')
      /* UX */
      jQuery('.dropdown').dropdown({transition: 'drop'})
    },
    defineActive (newRoute, oldRoute) {
      this.section = this.$route.name
    },
    setLanguage: function () {
      var locale = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
      var fr = ['fr', 'fr-BE', 'fr-CA', 'fr-CH', 'fr-LU']
      var es = ['es', 'es-AR', 'es-GT', 'es-CR', 'es-PA', 'es-DO', 'es-MX', 'es-VE', 'es-CO', 'es-PE', 'es-EC', 'es-CL', 'es-UY', 'es-PY', 'es-BO', 'es-SV', 'es-HN', 'es-NI', 'es-PR']
      var cn = ['cn', 'zh-CN', 'zh-SG', 'zh-CN', 'zh-HK', 'zh-MO']
      if (locale in fr) {
        this.language = 'fr'
      } else if (locale in es) {
        this.language = 'es'
      } else if (locale in cn) {
        this.language = 'cn'
      } else {
        this.language = 'en'
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
