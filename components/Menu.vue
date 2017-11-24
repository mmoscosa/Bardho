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
    changeLanuage: function (lang) {
      this.language = lang
      console.log(this.language)
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
