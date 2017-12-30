<template>
  <nav id="navbar">
    <div class="ui age nag">
      <span class="title" v-lang.utils.disclaimers.age></span>
      <i class="close icon"></i>
    </div>
    <div class="ui cookie nag top branded">
      <span class="title" v-lang.utils.disclaimers.cookies></span>
      <i class="close icon"></i>
    </div>


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
      $.fn.nag = require('semantic-ui-nag')
      /* UX */
      jQuery('.dropdown').dropdown({transition: 'drop'})
      jQuery('.cookie.nag').nag({
        storageMethod: 'localstorage',
        // value to store in dismissed localstorage/cookie
        key: 'accepts-cookies',
        value: 'true'
      })
      jQuery('.age.nag').nag({
        storageMethod: 'localstorage',
        // value to store in dismissed localstorage/cookie
        key: 'age-restriction',
        value: 'true'
      })
    },
    defineActive (newRoute, oldRoute) {
      this.section = this.$route.name
    },
    setLanguage: function () {
      var locale, en, fr, es, cn, cookieLang
      cookieLang = (this.$cookie.get('lang')) ? this.$cookie.get('lang') : false
      locale = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
      locale = (locale) ? locale.toLowerCase() : 'en'
      en = ['en', 'en-au', 'en-bz', 'en-ca', 'en-ie', 'en-jm', 'en-nz', 'en-ph', 'en-za', 'en-tt', 'en-gb', 'en-us', 'en-zw']
      fr = ['fr', 'fr-be', 'fr-ca', 'fr-fr', 'fr-lu', 'fr-mc', 'fr-ch']
      es = ['es', 'es-ar', 'es-bo', 'es-cl', 'es-co', 'es-cr', 'es-do', 'es-ec', 'es-sv', 'es-gt', 'es-hn', 'es-mx', 'es-ni', 'es-pa', 'es-py', 'es-pe', 'es-pr', 'es-es', 'es-ve', 'es-uy']
      cn = ['zh', 'cn', 'zh-cn', 'zh-sg', 'zh-hk', 'zh-mo', 'zh-tw']
      if (cookieLang) {
        this.language = cookieLang
      } else if (en.includes(locale)) {
        this.language = 'en'
      } else if (fr.includes(locale)) {
        this.language = 'fr'
      } else if (es.includes(locale)) {
        this.language = 'es'
      } else if (cn.includes(locale)) {
        this.language = 'cn'
      } else {
        this.language = 'en'
      }
    },
    changeLanuage: function (lang) {
      this.language = lang
      this.$cookie.set('lang', lang, { expires: '5Y' })
    }
  }
}
</script>

<style lang="less">
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

  .ui.nag.branded {
    background-color: @brandColor;
  }
  </style>
