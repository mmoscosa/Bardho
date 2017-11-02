<template>
  <nav class="computer only column" id="navbar">
    <div class="ui secondary pointing menu">
      <nuxt-link to="/" class="item" :class="{'active' : section == 'index'}">
        Bard<span class="h">h</span>o <small>v0.1</small>
      </nuxt-link>
      <nuxt-link to="/products" class="ui item" :class="{'active' : section == 'products' || section == 'products-espadin'}" v-lang.index.menu.products></nuxt-link>
      <nuxt-link to="/stories" class="ui item" :class="{'active' : section == 'stories' || section == 'stories-id'}" v-lang.index.menu.stories></nuxt-link>
      <div class="right menu">
        <nuxt-link to="/contact" class="ui item" :class="{'active' : section == 'contact'}" v-lang.index.menu.contact></nuxt-link>
        <div class="ui item" @click="$language = 'es'">
          <i class="mx flag"></i>
        </div>
        <div class="ui item" @click="$language = 'en'">
          <i class="gb flag"></i>
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
    this.setUSserType()
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      this.setUSserType(newRoute, oldRoute)
    }
  },
  route: {
    canReuse: true
  },
  methods: {
    setUSserType (newRoute, oldRoute) {
      this.section = this.$route.name
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
